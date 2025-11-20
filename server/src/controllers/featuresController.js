const { pool, generateId } = require('../db')

exports.list = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Feature ORDER BY createdAt DESC')
    res.json(rows)
  } catch (err) {
    console.error('List features error:', err)
    res.status(500).json({ error: 'Failed to fetch features' })
  }
}

exports.get = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Feature WHERE id = ?', [req.params.id])
    const f = rows[0]
    if (!f) return res.status(404).json({ error: 'Feature not found' })
    res.json(f)
  } catch (err) {
    console.error('Get feature error:', err)
    res.status(500).json({ error: 'Failed to fetch feature' })
  }
}

exports.create = async (req, res) => {
  try {
    const { name, description, default_price } = req.body || {}
    if (!name) return res.status(400).json({ error: 'Name is required' })
    const id = generateId()
    const now = new Date()
    await pool.query('INSERT INTO Feature (id, name, description, default_price, createdAt) VALUES (?, ?, ?, ?, ?)', [id, name, description || null, default_price ?? null, now])
    const [rows] = await pool.query('SELECT * FROM Feature WHERE id = ?', [id])
    res.status(201).json(rows[0])
  } catch (err) {
    console.error('Create feature error:', err)
    res.status(500).json({ error: 'Failed to create feature' })
  }
}

exports.update = async (req, res) => {
  try {
    const { name, description, default_price } = req.body || {}
    const updates = []
    const vals = []
    if (name !== undefined) { updates.push('name = ?'); vals.push(name) }
    if (description !== undefined) { updates.push('description = ?'); vals.push(description) }
    if (default_price !== undefined) { updates.push('default_price = ?'); vals.push(default_price) }
    if (updates.length === 0) return res.status(400).json({ error: 'No fields to update' })
    vals.push(req.params.id)
    const [result] = await pool.query(`UPDATE Feature SET ${updates.join(', ')} WHERE id = ?`, vals)
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Feature not found' })
    const [rows] = await pool.query('SELECT * FROM Feature WHERE id = ?', [req.params.id])
    res.json(rows[0])
  } catch (err) {
    console.error('Update feature error:', err)
    res.status(500).json({ error: 'Failed to update feature' })
  }
}

exports.remove = async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM Feature WHERE id = ?', [req.params.id])
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Feature not found' })
    res.json({ ok: true })
  } catch (err) {
    console.error('Delete feature error:', err)
    res.status(500).json({ error: 'Failed to delete feature' })
  }
}
