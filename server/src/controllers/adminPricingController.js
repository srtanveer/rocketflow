const { pool } = require('../db')
const { v4: uuidv4 } = require('uuid')

// Get all pricing plans with features (for admin management)
async function getAllPricingPlans(req, res) {
    try {
        const [rows] = await pool.query(
            `SELECT p.id AS plan_id, p.name AS plan_name, p.slug, p.description, p.icon, p.color,
              p.monthly_price, p.yearly_price, p.is_popular, p.is_custom, p.display_order, p.createdAt,
              ppf.id AS ppf_id, ppf.feature_id, ppf.included, ppf.position,
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
                plansMap.set(planId, {
                    id: planId,
                    name: r.plan_name,
                    slug: r.slug,
                    description: r.description,
                    icon: r.icon,
                    color: r.color,
                    monthly_price: r.monthly_price != null ? parseFloat(r.monthly_price) : null,
                    yearly_price: r.yearly_price != null ? parseFloat(r.yearly_price) : null,
                    is_popular: !!r.is_popular,
                    is_custom: !!r.is_custom,
                    display_order: r.display_order,
                    createdAt: r.createdAt,
                    features: []
                })
            }

            if (r.feature_id) {
                const plan = plansMap.get(planId)
                plan.features.push({
                    ppf_id: r.ppf_id,
                    feature_id: r.feature_id,
                    name: r.feature_name,
                    description: r.feature_description,
                    icon: r.feature_icon,
                    included: !!r.included,
                    position: r.position
                })
            }
        }

        const plans = Array.from(plansMap.values())
        res.json({ plans })
    } catch (err) {
        console.error('Error fetching pricing plans:', err)
        res.status(500).json({ error: 'Failed to fetch pricing plans' })
    }
}

// Create a new pricing plan
async function createPricingPlan(req, res) {
    const { name, slug, description, icon, color, monthly_price, yearly_price, is_popular, is_custom, features } = req.body

    if (!name || !slug) {
        return res.status(400).json({ error: 'Name and slug are required' })
    }

    const connection = await pool.getConnection()
    try {
        await connection.beginTransaction()

        const planId = uuidv4()

        // Get max display_order
        const [maxOrder] = await connection.query('SELECT MAX(display_order) as max_order FROM pricingplan')
        const displayOrder = (maxOrder[0].max_order || 0) + 1

        // Insert pricing plan
        await connection.query(
            `INSERT INTO pricingplan (id, name, slug, description, icon, color, monthly_price, yearly_price, is_popular, is_custom, display_order)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                planId,
                name,
                slug,
                description || null,
                icon || null,
                color || 'blue',
                monthly_price || null,
                yearly_price || null,
                is_popular ? 1 : 0,
                is_custom ? 1 : 0,
                displayOrder
            ]
        )

        // Insert features if provided
        if (features && Array.isArray(features)) {
            for (let i = 0; i < features.length; i++) {
                const feature = features[i]
                const ppfId = uuidv4()

                await connection.query(
                    `INSERT INTO pricingplanfeature (id, plan_id, feature_id, included, position)
           VALUES (?, ?, ?, ?, ?)`,
                    [
                        ppfId,
                        planId,
                        feature.feature_id,
                        feature.included ? 1 : 0,
                        i
                    ]
                )
            }
        }

        await connection.commit()
        res.status(201).json({ message: 'Pricing plan created successfully', id: planId })
    } catch (err) {
        await connection.rollback()
        console.error('Error creating pricing plan:', err)

        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ error: 'A pricing plan with this slug already exists' })
        }

        res.status(500).json({ error: 'Failed to create pricing plan' })
    } finally {
        connection.release()
    }
}

// Update a pricing plan
async function updatePricingPlan(req, res) {
    const { id } = req.params
    const { name, slug, description, icon, color, monthly_price, yearly_price, is_popular, is_custom, features } = req.body

    if (!name || !slug) {
        return res.status(400).json({ error: 'Name and slug are required' })
    }

    const connection = await pool.getConnection()
    try {
        await connection.beginTransaction()

        // Update pricing plan
        const [result] = await connection.query(
            `UPDATE pricingplan
       SET name = ?, slug = ?, description = ?, icon = ?, color = ?, monthly_price = ?, yearly_price = ?, is_popular = ?, is_custom = ?
       WHERE id = ?`,
            [
                name,
                slug,
                description || null,
                icon || null,
                color || 'blue',
                monthly_price || null,
                yearly_price || null,
                is_popular ? 1 : 0,
                is_custom ? 1 : 0,
                id
            ]
        )

        if (result.affectedRows === 0) {
            await connection.rollback()
            return res.status(404).json({ error: 'Pricing plan not found' })
        }

        // Delete existing features
        await connection.query(`DELETE FROM pricingplanfeature WHERE plan_id = ?`, [id])

        // Insert new features if provided
        if (features && Array.isArray(features)) {
            for (let i = 0; i < features.length; i++) {
                const feature = features[i]
                const ppfId = uuidv4()

                await connection.query(
                    `INSERT INTO pricingplanfeature (id, plan_id, feature_id, included, position)
           VALUES (?, ?, ?, ?, ?)`,
                    [
                        ppfId,
                        id,
                        feature.feature_id,
                        feature.included ? 1 : 0,
                        i
                    ]
                )
            }
        }

        await connection.commit()
        res.json({ message: 'Pricing plan updated successfully' })
    } catch (err) {
        await connection.rollback()
        console.error('Error updating pricing plan:', err)

        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ error: 'A pricing plan with this slug already exists' })
        }

        res.status(500).json({ error: 'Failed to update pricing plan' })
    } finally {
        connection.release()
    }
}

// Delete a pricing plan
async function deletePricingPlan(req, res) {
    const { id } = req.params

    try {
        const [result] = await pool.query(`DELETE FROM pricingplan WHERE id = ?`, [id])

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Pricing plan not found' })
        }

        res.json({ message: 'Pricing plan deleted successfully' })
    } catch (err) {
        console.error('Error deleting pricing plan:', err)
        res.status(500).json({ error: 'Failed to delete pricing plan' })
    }
}

// Get all available features
async function getAllFeatures(req, res) {
    try {
        const [rows] = await pool.query(
            `SELECT id, name, description, icon, createdAt
       FROM pricingfeature
       ORDER BY name ASC`
        )

        const features = rows.map(r => ({
            id: r.id,
            name: r.name,
            description: r.description,
            icon: r.icon,
            createdAt: r.createdAt
        }))

        res.json({ features })
    } catch (err) {
        console.error('Error fetching features:', err)
        res.status(500).json({ error: 'Failed to fetch features' })
    }
}

// Create a new pricing feature
async function createPricingFeature(req, res) {
    const { name, description, icon } = req.body

    if (!name) {
        return res.status(400).json({ error: 'Feature name is required' })
    }

    try {
        const featureId = uuidv4()

        await pool.query(
            `INSERT INTO pricingfeature (id, name, description, icon)
       VALUES (?, ?, ?, ?)`,
            [featureId, name, description || null, icon || null]
        )

        res.status(201).json({
            message: 'Feature created successfully',
            id: featureId,
            feature: { id: featureId, name, description, icon }
        })
    } catch (err) {
        console.error('Error creating feature:', err)

        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ error: 'A feature with this name already exists' })
        }

        res.status(500).json({ error: 'Failed to create feature' })
    }
}

// Update a pricing feature
async function updatePricingFeature(req, res) {
    const { id } = req.params
    const { name, description, icon } = req.body

    if (!name) {
        return res.status(400).json({ error: 'Feature name is required' })
    }

    try {
        const [result] = await pool.query(
            `UPDATE pricingfeature
       SET name = ?, description = ?, icon = ?
       WHERE id = ?`,
            [name, description || null, icon || null, id]
        )

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Feature not found' })
        }

        res.json({ message: 'Feature updated successfully' })
    } catch (err) {
        console.error('Error updating feature:', err)

        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ error: 'A feature with this name already exists' })
        }

        res.status(500).json({ error: 'Failed to update feature' })
    }
}

// Delete a pricing feature
async function deletePricingFeature(req, res) {
    const { id } = req.params

    try {
        // First, remove all plan-feature associations
        await pool.query(`DELETE FROM pricingplanfeature WHERE feature_id = ?`, [id])

        // Then delete the feature itself
        const [result] = await pool.query(`DELETE FROM pricingfeature WHERE id = ?`, [id])

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Feature not found' })
        }

        res.json({ message: 'Feature deleted successfully' })
    } catch (err) {
        console.error('Error deleting feature:', err)
        res.status(500).json({ error: 'Failed to delete feature' })
    }
}

module.exports = {
    getAllPricingPlans,
    createPricingPlan,
    updatePricingPlan,
    deletePricingPlan,
    getAllFeatures,
    createPricingFeature,
    updatePricingFeature,
    deletePricingFeature
}
