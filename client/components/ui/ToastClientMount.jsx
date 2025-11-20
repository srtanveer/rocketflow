"use client"

import React, { useEffect, useRef } from 'react'

export default function ToastClientMount(props) {
  const containerRef = useRef(null)
  const rootRef = useRef(null)

  useEffect(() => {
    let mounted = true
    
    // Dynamically import both the module and CSS
    Promise.all([
      import('react-toastify'),
      import('react-toastify/dist/ReactToastify.css')
    ]).then(([mod]) => {
      if (!mounted) return
      const Candidate = mod.ToastContainer || (mod.default && mod.default.ToastContainer) || mod.default || null
      if (!Candidate) return
      if (containerRef.current) {
        try {
          const { createRoot } = require('react-dom/client')
          rootRef.current = createRoot(containerRef.current)
          rootRef.current.render(React.createElement(Candidate, {
            position: 'bottom-right',
            autoClose: 4000,
            hideProgressBar: false,
            newestOnTop: false,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: true,
            ...props
          }))
        } catch (e) {
          // ignore
        }
      }
    }).catch(() => {})

    return () => {
      mounted = false
      try { rootRef.current && rootRef.current.unmount() } catch (e) {}
    }
  }, [])

  return <div ref={containerRef} />
}
