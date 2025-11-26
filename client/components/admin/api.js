import { toast } from 'react-toastify'

const API = process.env.NEXT_PUBLIC_ADMIN_API || 'http://localhost:4000'

export async function login(email, password) {
  const res = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  if (!res.ok) {
    let errText = 'Login failed'
    try { const j = await res.json(); errText = j.error || j.message || errText } catch (e) { }
    throw new Error(errText)
  }
  return res.json()
}

export async function signup(email, password, name) {
  const res = await fetch(`${API}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, name })
  })
  if (!res.ok) {
    let errText = 'Signup failed'
    try { const j = await res.json(); errText = j.error || j.message || errText } catch (e) { }
    throw new Error(errText)
  }
  return res.json()
}

export function isAuthenticated() {
  return !!localStorage.getItem('rf_token')
}

export function logout() {
  localStorage.removeItem('rf_token')
}

function getAuthHeaders() {
  const token = localStorage.getItem('rf_token')
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
  }
}

export async function fetchPosts() {
  const res = await fetch(`${API}/posts`, {
    headers: getAuthHeaders()
  })
  if (!res.ok) throw new Error('Fetch posts failed')
  return res.json()
}

export async function createPost(post) {
  const res = await fetch(`${API}/posts`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(post)
  })
  if (!res.ok) {
    let errText = 'Create post failed'
    try { const j = await res.json(); errText = j.error || j.message || errText } catch (e) { }
    toast.error(errText)
    throw new Error(errText)
  }
  toast.success('Post created')
  return res.json()
}

export async function deletePost(slug) {
  const res = await fetch(`${API}/posts/${encodeURIComponent(slug)}`, {
    method: 'DELETE',
    headers: getAuthHeaders()
  })
  if (!res.ok) {
    let errText = 'Delete failed'
    try { const j = await res.json(); errText = j.error || j.message || errText } catch (e) { }
    toast.error(errText)
    throw new Error(errText)
  }
  toast.success('Post deleted')
  return res.json()
}

export async function fetchPost(slug) {
  const res = await fetch(`${API}/posts/${encodeURIComponent(slug)}`, {
    headers: getAuthHeaders()
  })
  if (!res.ok) {
    let errText = 'Fetch post failed'
    try { const j = await res.json(); errText = j.error || j.message || errText } catch (e) { }
    throw new Error(errText)
  }
  return res.json()
}

export async function updatePost(slug, post) {
  const res = await fetch(`${API}/posts/${encodeURIComponent(slug)}`, {
    method: 'PUT',
    headers: getAuthHeaders(),
    body: JSON.stringify(post)
  })
  if (!res.ok) {
    let errText = 'Update post failed'
    try { const j = await res.json(); errText = j.error || j.message || errText } catch (e) { }
    toast.error(errText)
    throw new Error(errText)
  }
  toast.success('Post updated')
  return res.json()
}

// Tutorials API
export async function fetchTutorials() {
  const res = await fetch(`${API}/tutorials`, { headers: getAuthHeaders() })
  if (!res.ok) throw new Error('Fetch tutorials failed')
  return res.json()
}

export async function fetchTutorial(slug) {
  const res = await fetch(`${API}/tutorials/${encodeURIComponent(slug)}`, { headers: getAuthHeaders() })
  if (!res.ok) {
    let errText = 'Fetch tutorial failed'
    try { const j = await res.json(); errText = j.error || j.message || errText } catch (e) { }
    throw new Error(errText)
  }
  return res.json()
}

export async function createTutorial(tutorial) {
  const res = await fetch(`${API}/tutorials`, { method: 'POST', headers: getAuthHeaders(), body: JSON.stringify(tutorial) })
  if (!res.ok) {
    let errText = 'Create tutorial failed'
    try { const j = await res.json(); errText = j.error || j.message || errText } catch (e) { }
    toast.error(errText)
    throw new Error(errText)
  }
  toast.success('Tutorial created')
  return res.json()
}

export async function updateTutorial(slug, tutorial) {
  const res = await fetch(`${API}/tutorials/${encodeURIComponent(slug)}`, { method: 'PUT', headers: getAuthHeaders(), body: JSON.stringify(tutorial) })
  if (!res.ok) {
    let errText = 'Update tutorial failed'
    try { const j = await res.json(); errText = j.error || j.message || errText } catch (e) { }
    toast.error(errText)
    throw new Error(errText)
  }
  toast.success('Tutorial updated')
  return res.json()
}

export async function deleteTutorial(slug) {
  const res = await fetch(`${API}/tutorials/${encodeURIComponent(slug)}`, { method: 'DELETE', headers: getAuthHeaders() })
  if (!res.ok) {
    let errText = 'Delete tutorial failed'
    try { const j = await res.json(); errText = j.error || j.message || errText } catch (e) { }
    toast.error(errText)
    throw new Error(errText)
  }
  toast.success('Tutorial deleted')
  return res.json()
}
