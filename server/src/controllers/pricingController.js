const { pool } = require('../db')

async function getPricing(req, res) {
  try {
    const [rows] = await pool.query(
      `SELECT p.id AS plan_id, p.name AS plan_name, p.slug, p.description, p.icon, p.color,
              p.monthly_price, p.yearly_price, p.is_popular, p.is_custom,
              ppf.feature_id, ppf.included,
              f.name AS feature_name, f.description AS feature_description, f.icon AS feature_icon
       FROM pricingplan p
       LEFT JOIN pricingplanfeature ppf ON ppf.plan_id = p.id
       LEFT JOIN pricingfeature f ON f.id = ppf.feature_id
       ORDER BY p.display_order ASC, ppf.position ASC`
    )

    const plansMap = new Map()

    for (const r of rows) {
      const planId = r.plan_id
      if (!plansMap.has(planId)) {
        const monthly = r.monthly_price != null ? parseFloat(r.monthly_price) : 0
        let yearly = r.yearly_price != null ? parseFloat(r.yearly_price) : null
        // If no explicit yearly price, compute 12 months with 15% discount
        if (yearly === null && monthly > 0) {
          yearly = Math.round(monthly * 12 * 0.85 * 100) / 100
        }

        plansMap.set(planId, {
          id: planId,
          name: r.plan_name,
          slug: r.slug,
          description: r.description,
          icon: r.icon,
          color: r.color,
          monthly_price: monthly,
          yearly_price: yearly,
          is_popular: !!r.is_popular,
          is_custom: !!r.is_custom,
          features: []
        })
      }

      if (r.feature_id) {
        const plan = plansMap.get(planId)
        plan.features.push({
          id: r.feature_id,
          name: r.feature_name,
          description: r.feature_description,
          icon: r.feature_icon,
          included: !!r.included
        })
      }
    }

    const plans = Array.from(plansMap.values())
    res.json({ packages: plans })
  } catch (err) {
    console.error('Error fetching pricing:', err)
    res.status(500).json({ error: 'Failed to fetch pricing' })
  }
}

module.exports = { getPricing }
