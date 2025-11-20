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
    try { const j = await res.json(); errText = j.error || j.message || errText } catch (e) {}
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
    try { const j = await res.json(); errText = j.error || j.message || errText } catch (e) {}
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
    try { const j = await res.json(); errText = j.error || j.message || errText } catch(e) {}
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
    try { const j = await res.json(); errText = j.error || j.message || errText } catch(e) {}
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
    try { const j = await res.json(); errText = j.error || j.message || errText } catch(e) {}
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
    try { const j = await res.json(); errText = j.error || j.message || errText } catch(e) {}
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
    try { const j = await res.json(); errText = j.error || j.message || errText } catch(e) {}
    throw new Error(errText)
  }
  return res.json()
}

export async function createTutorial(tutorial) {
  const res = await fetch(`${API}/tutorials`, { method: 'POST', headers: getAuthHeaders(), body: JSON.stringify(tutorial) })
  if (!res.ok) {
    let errText = 'Create tutorial failed'
    try { const j = await res.json(); errText = j.error || j.message || errText } catch(e) {}
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
    try { const j = await res.json(); errText = j.error || j.message || errText } catch(e) {}
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
    try { const j = await res.json(); errText = j.error || j.message || errText } catch(e) {}
    toast.error(errText)
    throw new Error(errText)
  }
  toast.success('Tutorial deleted')
  return res.json()
}

// Packages API
export async function fetchPackages() {
  const res = await fetch(`${API}/admin/packages`, { headers: getAuthHeaders() })
  if (!res.ok) throw new Error('Fetch packages failed')
  return res.json()
}

export async function createPackage(pkg) {
  const res = await fetch(`${API}/admin/packages`, { method: 'POST', headers: getAuthHeaders(), body: JSON.stringify(pkg) })
  if (!res.ok) {
    let errText = 'Create package failed'
    try { const j = await res.json(); errText = j.error || j.message || errText } catch(e) {}
    toast.error(errText)
    throw new Error(errText)
  }
  toast.success('Package created')
  return res.json()
}

export async function deletePackage(id) {
  const res = await fetch(`${API}/admin/packages/${encodeURIComponent(id)}`, { method: 'DELETE', headers: getAuthHeaders() })
  if (!res.ok) {
    let errText = 'Delete package failed'
    try { const j = await res.json(); errText = j.error || j.message || errText } catch(e) {}
    toast.error(errText)
    throw new Error(errText)
  }
  toast.success('Package deleted')
  return res.json()
}

export async function fetchPackage(id) {
  const res = await fetch(`${API}/admin/packages/${encodeURIComponent(id)}/details`, { headers: getAuthHeaders() })
  if (!res.ok) throw new Error('Fetch package failed')
  return res.json()
}

export async function updatePackage(id, body) {
  const res = await fetch(`${API}/admin/packages/${encodeURIComponent(id)}`, { method: 'PUT', headers: getAuthHeaders(), body: JSON.stringify(body) })
  if (!res.ok) {
    let errText = 'Update package failed'
    try { const j = await res.json(); errText = j.error || j.message || errText } catch(e) {}
    toast.error(errText)
    throw new Error(errText)
  }
  toast.success('Package updated')
  return res.json()
}

export async function fetchPackageFeatures(packageId) {
  const res = await fetch(`${API}/admin/packages/${encodeURIComponent(packageId)}/features`, { headers: getAuthHeaders() })
  if (!res.ok) throw new Error('Fetch package features failed')
  return res.json()
}

export async function upsertPackageFeature(packageId, link) {
  const res = await fetch(`${API}/admin/packages/${encodeURIComponent(packageId)}/features`, { method: 'POST', headers: getAuthHeaders(), body: JSON.stringify(link) })
  if (!res.ok) {
    let errText = 'Upsert package feature failed'
    try { const j = await res.json(); errText = j.error || j.message || errText } catch(e) {}
    toast.error(errText)
    throw new Error(errText)
  }
  return res.json()
}

export async function deletePackageFeature(packageId, featureId) {
  const res = await fetch(`${API}/admin/packages/${encodeURIComponent(packageId)}/features/${encodeURIComponent(featureId)}`, { method: 'DELETE', headers: getAuthHeaders() })
  if (!res.ok) {
    let errText = 'Delete package feature failed'
    try { const j = await res.json(); errText = j.error || j.message || errText } catch(e) {}
    toast.error(errText)
    throw new Error(errText)
  }
  return res.json()
}

// Features API
export async function fetchFeatures() {
  const res = await fetch(`${API}/admin/features`, { headers: getAuthHeaders() })
  if (!res.ok) throw new Error('Fetch features failed')
  return res.json()
}

export async function createFeature(f) {
  const res = await fetch(`${API}/admin/features`, { method: 'POST', headers: getAuthHeaders(), body: JSON.stringify(f) })
  if (!res.ok) {
    let errText = 'Create feature failed'
    try { const j = await res.json(); errText = j.error || j.message || errText } catch(e) {}
    toast.error(errText)
    throw new Error(errText)
  }
  toast.success('Feature created')
  return res.json()
}

export async function deleteFeature(id) {
  const res = await fetch(`${API}/admin/features/${encodeURIComponent(id)}`, { method: 'DELETE', headers: getAuthHeaders() })
  if (!res.ok) {
    let errText = 'Delete feature failed'
    try { const j = await res.json(); errText = j.error || j.message || errText } catch(e) {}
    toast.error(errText)
    throw new Error(errText)
  }
  toast.success('Feature deleted')
  return res.json()
}
