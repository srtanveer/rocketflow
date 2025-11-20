'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { login, signup, isAuthenticated } from './api'

export default function AdminApp() {
  const router = useRouter()
  const [mode, setMode] = useState('login') // 'login' or 'signup'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isAuthenticated()) {
      router.push('/dashboard')
    }
  }, [router])

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      let data
      if (mode === 'login') {
        data = await login(email, password)
      } else {
        data = await signup(email, password, name)
      }
      localStorage.setItem('rf_token', data.token)
      setStatus('Success! Redirecting...')
      router.push('/dashboard')
    } catch (err) {
      setStatus(err.message || `${mode === 'login' ? 'Login' : 'Signup'} failed`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Admin {mode === 'login' ? 'Login' : 'Signup'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'signup' && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-3 rounded font-semibold hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Processing...' : (mode === 'login' ? 'Login' : 'Signup')}
        </button>
      </form>

      <div className="mt-4 text-center">
        <button
          onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
          className="text-blue-500 hover:underline"
        >
          {mode === 'login' ? 'Need an account? Signup' : 'Already have an account? Login'}
        </button>
      </div>

      {status && (
        <div className={`mt-4 text-center text-sm ${status.includes('Success') ? 'text-green-600' : 'text-red-600'}`}>
          {status}
        </div>
      )}
    </div>
  )
}
