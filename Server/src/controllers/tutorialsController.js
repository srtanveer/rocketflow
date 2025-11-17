const { pool, generateId } = require('../db')
let sanitizeHtml
try { sanitizeHtml = require('sanitize-html') } catch (e) { sanitizeHtml = null }

function safeSanitize(dirty) {
  if (!dirty) return ''
  if (sanitizeHtml) {
    return sanitizeHtml(dirty, {
      allowedTags: [ 'h1','h2','h3','h4','h5','h6','blockquote','p','a','ul','ol','nl','li','b','i','strong','em','pre','code','br','hr' ],
      allowedAttributes: { a: [ 'href', 'target', 'rel' ] },
      allowedSchemesByTag: { a: [ 'http','https','mailto' ] }
    })
  }
  return dirty.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '')
}

function normalizeSteps(s) {
  if (!s) return []
  if (Array.isArray(s)) return s
  if (typeof s === 'string') {
    try { const p = JSON.parse(s); return Array.isArray(p) ? p : [p] } catch (e) { return s.split('\n').map(l=>l.trim()).filter(Boolean) }
  }
  return []
}

function normalizeTags(t) {
  if (!t) return []
  if (Array.isArray(t)) return t
  if (typeof t === 'string') {
    try {
      const parsed = JSON.parse(t)
      return Array.isArray(parsed) ? parsed : parsed ? [parsed] : []
    } catch (e) {
      return t.split(',').map(s => s.trim()).filter(Boolean)
    }
  }
  return []
}

exports.list = async (req, res) => {
  try {
    const [items] = await pool.query('SELECT * FROM Tutorial ORDER BY date DESC')
    
    // Parse JSON fields
    const parsed = items.map(item => ({
      ...item,
      tags: typeof item.tags === 'string' ? JSON.parse(item.tags) : item.tags,
      steps: typeof item.steps === 'string' ? JSON.parse(item.steps) : item.steps
    }))
    
    res.json(parsed)
  } catch (err) {
    console.error('List tutorials error:', err)
    return res.status(500).json({ error: 'Failed to fetch tutorials' })
  }
}

exports.get = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Tutorial WHERE slug = ?', [req.params.slug])
    const item = rows[0]
    
    if (!item) return res.status(404).json({ error: 'Tutorial not found' })
    
    // Parse JSON fields
    item.tags = typeof item.tags === 'string' ? JSON.parse(item.tags) : item.tags
    item.steps = typeof item.steps === 'string' ? JSON.parse(item.steps) : item.steps
    
    res.json(item)
  } catch (err) {
    console.error('Get tutorial error:', err)
    return res.status(500).json({ error: 'Failed to fetch tutorial' })
  }
}

exports.create = async (req, res) => {
  try {
    const body = req.body || {}
    const title = (body.title || '').toString().trim()
    let slug = (body.slug || '').toString().trim()
    const excerpt = (body.excerpt || '').toString()
    let content = body.content || ''
    const author = (body.author || 'Admin').toString()
    const tags = body.tags
    const videoUrl = body.videoUrl || null
    const steps = normalizeSteps(body.steps)

    if (!title) return res.status(400).json({ error: 'Title is required' })
    if (!slug) {
      slug = title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-') || `tutorial-${Date.now()}`
    }
    if (content) content = safeSanitize(content)

    const id = generateId()
    const date = new Date()
    const normalizedTags = JSON.stringify(normalizeTags(tags))
    const normalizedSteps = JSON.stringify(steps)

    await pool.query(
      'INSERT INTO Tutorial (id, slug, title, excerpt, content, date, author, tags, videoUrl, steps) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [id, slug, title, excerpt || '', content || '', date, author, normalizedTags, videoUrl, normalizedSteps]
    )
    
    const [rows] = await pool.query('SELECT * FROM Tutorial WHERE id = ?', [id])
    const item = rows[0]
    item.tags = typeof item.tags === 'string' ? JSON.parse(item.tags) : item.tags
    item.steps = typeof item.steps === 'string' ? JSON.parse(item.steps) : item.steps
    
    return res.status(201).json(item)
  } catch (err) {
    console.error('Create tutorial error', err && err.message ? err.message : err)
    if (err && err.code === 'ER_DUP_ENTRY') return res.status(409).json({ error: 'Slug already exists' })
    return res.status(500).json({ error: err && err.message ? err.message : 'Create failed' })
  }
}

exports.update = async (req, res) => {
  try {
    const body = req.body || {}
    if (body.content) body.content = safeSanitize(body.content)

    const updateFields = []
    const updateValues = []

    if (body.title !== undefined) {
      updateFields.push('title = ?')
      updateValues.push(body.title)
    }
    if (body.slug !== undefined) {
      updateFields.push('slug = ?')
      updateValues.push(body.slug)
    }
    if (body.excerpt !== undefined) {
      updateFields.push('excerpt = ?')
      updateValues.push(body.excerpt)
    }
    if (body.content !== undefined) {
      updateFields.push('content = ?')
      updateValues.push(body.content)
    }
    if (body.author !== undefined) {
      updateFields.push('author = ?')
      updateValues.push(body.author)
    }
    if (body.tags !== undefined) {
      updateFields.push('tags = ?')
      updateValues.push(JSON.stringify(normalizeTags(body.tags)))
    }
    if (body.videoUrl !== undefined) {
      updateFields.push('videoUrl = ?')
      updateValues.push(body.videoUrl)
    }
    if (body.steps !== undefined) {
      updateFields.push('steps = ?')
      updateValues.push(JSON.stringify(normalizeSteps(body.steps)))
    }

    if (updateFields.length === 0) {
      return res.status(400).json({ error: 'No fields to update' })
    }

    updateValues.push(req.params.slug)

    const result = await pool.query(
      `UPDATE Tutorial SET ${updateFields.join(', ')} WHERE slug = ?`,
      updateValues
    )

    if (result[0].affectedRows === 0) {
      return res.status(404).json({ error: 'Tutorial not found' })
    }

    const [rows] = await pool.query('SELECT * FROM Tutorial WHERE slug = ?', [body.slug || req.params.slug])
    const item = rows[0]
    item.tags = typeof item.tags === 'string' ? JSON.parse(item.tags) : item.tags
    item.steps = typeof item.steps === 'string' ? JSON.parse(item.steps) : item.steps
    
    res.json(item)
  } catch (err) {
    console.error('Update tutorial error', err)
    if (err && err.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'Slug already exists' })
    }
    return res.status(500).json({ error: err && err.message ? err.message : 'Update failed' })
  }
}

exports.remove = async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM Tutorial WHERE slug = ?', [req.params.slug])
    
    if (result[0].affectedRows === 0) {
      return res.status(404).json({ error: 'Tutorial not found' })
    }
    
    res.json({ ok: true })
  } catch (err) {
    console.error('Delete tutorial error:', err)
    return res.status(500).json({ error: 'Failed to delete tutorial' })
  }
}
