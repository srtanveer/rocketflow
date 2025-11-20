const { pool } = require('../db')

async function getPricing(req, res) {
  try {
    const [rows] = await pool.query(
      `SELECT p.id AS package_id, p.name AS package_name, p.slug, p.monthly_price, p.yearly_price, p.is_popular,
              pf.feature_id, pf.feature_price, pf.included,
              f.name AS feature_name, f.description AS feature_description
       FROM \`Package\` p
       LEFT JOIN \`PackageFeature\` pf ON pf.package_id = p.id
       LEFT JOIN \`Feature\` f ON f.id = pf.feature_id
       ORDER BY p.monthly_price ASC`
    )

    const packagesMap = new Map()

    for (const r of rows) {
      const pkgId = r.package_id
      if (!packagesMap.has(pkgId)) {
        const monthly = r.monthly_price != null ? parseFloat(r.monthly_price) : 0
        let yearly = r.yearly_price != null ? parseFloat(r.yearly_price) : null
        // If no explicit yearly price, compute 12 months with 15% discount
        if (yearly === null) {
          yearly = Math.round(monthly * 12 * 0.85 * 100) / 100
        }

        packagesMap.set(pkgId, {
          id: pkgId,
          name: r.package_name,
          slug: r.slug,
          monthly_price: monthly,
          yearly_price: yearly,
          is_popular: !!r.is_popular,
          features: []
        })
      }

      if (r.feature_id) {
        const pkg = packagesMap.get(pkgId)
        pkg.features.push({
          id: r.feature_id,
          name: r.feature_name,
          description: r.feature_description,
          included: !!r.included,
          feature_price: r.feature_price != null ? parseFloat(r.feature_price) : null
        })
      }
    }

    const packages = Array.from(packagesMap.values())
    res.json({ packages })
  } catch (err) {
    console.error('Error fetching pricing:', err)
    res.status(500).json({ error: 'Failed to fetch pricing' })
  }
}

module.exports = { getPricing }
