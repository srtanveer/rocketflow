const { pool, generateId } = require('../db')

// List packages (with optional include features)
exports.list = async (req, res) => {
  try {
    const [packages] = await pool.query('SELECT * FROM Package ORDER BY createdAt DESC')
    res.json(packages)
  } catch (err) {
    console.error('List packages error:', err)
    res.status(500).json({ error: 'Failed to fetch packages' })
  }
}

exports.get = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Package WHERE id = ? OR slug = ?', [req.params.id, req.params.id])
    const pkg = rows[0]
    if (!pkg) return res.status(404).json({ error: 'Package not found' })
    res.json(pkg)
  } catch (err) {
    console.error('Get package error:', err)
    res.status(500).json({ error: 'Failed to fetch package' })
  }
}

exports.create = async (req, res) => {
  try {
    const { slug, name, description, monthly_price, yearly_price, is_popular } = req.body || {}
    if (!name || !slug) return res.status(400).json({ error: 'Name and slug are required' })
    const id = generateId()
    const now = new Date()
    await pool.query('INSERT INTO Package (id, slug, name, description, monthly_price, yearly_price, is_popular, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [id, slug, name, description || null, monthly_price ?? null, yearly_price ?? null, is_popular ? 1 : 0, now])
    const [rows] = await pool.query('SELECT * FROM Package WHERE id = ?', [id])
    res.status(201).json(rows[0])
  } catch (err) {
    console.error('Create package error:', err)
    if (err && err.code === 'ER_DUP_ENTRY') return res.status(409).json({ error: 'Slug already exists' })
    res.status(500).json({ error: 'Failed to create package' })
  }
}

exports.update = async (req, res) => {
  try {
    const body = req.body || {}
    const fields = []
    const vals = []
    const allowed = ['slug','name','description','monthly_price','yearly_price','is_popular']
    allowed.forEach(k => {
      if (body[k] !== undefined) {
        fields.push(`${k} = ?`)
        vals.push(k === 'is_popular' ? (body[k] ? 1 : 0) : body[k])
      }
    })
    if (fields.length === 0) return res.status(400).json({ error: 'No fields to update' })
    vals.push(req.params.id)
    const [result] = await pool.query(`UPDATE Package SET ${fields.join(', ')} WHERE id = ? OR slug = ?`, vals.concat([req.params.id]))
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Package not found' })
    const [rows] = await pool.query('SELECT * FROM Package WHERE id = ? OR slug = ?', [req.params.id, req.params.id])
    res.json(rows[0])
  } catch (err) {
    console.error('Update package error:', err)
    res.status(500).json({ error: 'Failed to update package' })
  }
}

exports.remove = async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM Package WHERE id = ? OR slug = ?', [req.params.id, req.params.id])
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Package not found' })
    res.json({ ok: true })
  } catch (err) {
    console.error('Delete package error:', err)
    res.status(500).json({ error: 'Failed to delete package' })
  }
}

// List features linked to a package
exports.listFeatures = async (req, res) => {
  try {
    const pkgId = req.params.id
    const [rows] = await pool.query(
      `SELECT pf.id as pf_id, f.id as feature_id, f.name, f.description, pf.included, pf.feature_price, pf.position
       FROM PackageFeature pf
       JOIN Feature f ON f.id = pf.feature_id
       WHERE pf.package_id = ?
       ORDER BY pf.position ASC`,
      [pkgId]
    )
    res.json(rows)
  } catch (err) {
    console.error('List package features error:', err)
    res.status(500).json({ error: 'Failed to fetch package features' })
  }
}

// Upsert a package-feature link (create or update)
exports.upsertFeature = async (req, res) => {
  try {
    const pkgId = req.params.id
    const { feature_id, included = 1, feature_price = null, position = 0 } = req.body || {}
    if (!feature_id) return res.status(400).json({ error: 'feature_id is required' })

    // try update first
    const [update] = await pool.query(
      'UPDATE PackageFeature SET included = ?, feature_price = ?, position = ? WHERE package_id = ? AND feature_id = ?',
      [included ? 1 : 0, feature_price, position, pkgId, feature_id]
    )

    if (update.affectedRows === 0) {
      const id = generateId()
      const now = new Date()
      await pool.query(
        'INSERT INTO PackageFeature (id, package_id, feature_id, included, feature_price, position, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [id, pkgId, feature_id, included ? 1 : 0, feature_price, position, now]
      )
    }

    const [rows] = await pool.query(
      'SELECT * FROM PackageFeature WHERE package_id = ? AND feature_id = ?', [pkgId, feature_id]
    )
    res.json(rows[0])
  } catch (err) {
    console.error('Upsert package feature error:', err)
    res.status(500).json({ error: 'Failed to upsert package feature' })
  }
}

// Remove a feature link from a package
exports.removeFeature = async (req, res) => {
  try {
    const pkgId = req.params.id
    const featureId = req.params.featureId
    const [result] = await pool.query('DELETE FROM PackageFeature WHERE package_id = ? AND feature_id = ?', [pkgId, featureId])
    if (result.affectedRows === 0) return res.status(404).json({ error: 'PackageFeature not found' })
    res.json({ ok: true })
  } catch (err) {
    console.error('Delete package feature error:', err)
    res.status(500).json({ error: 'Failed to delete package feature' })
  }
}

// Get package with linked features (for editing)
exports.getWithFeatures = async (req, res) => {
  try {
    const id = req.params.id
    const [pkgs] = await pool.query('SELECT * FROM Package WHERE id = ? OR slug = ?', [id, id])
    const pkg = pkgs[0]
    if (!pkg) return res.status(404).json({ error: 'Package not found' })

    const [linked] = await pool.query(
      `SELECT pf.id as pf_id, f.id as feature_id, f.name, f.description, pf.included, pf.feature_price, pf.position
       FROM PackageFeature pf
       JOIN Feature f ON f.id = pf.feature_id
       WHERE pf.package_id = ?
       ORDER BY pf.position ASC`,
      [pkg.id]
    )

    pkg.features = linked
    res.json(pkg)
  } catch (err) {
    console.error('Get package with features error:', err)
    res.status(500).json({ error: 'Failed to fetch package' })
  }
}
