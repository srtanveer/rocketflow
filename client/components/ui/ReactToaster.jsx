"use client"

import dynamic from 'next/dynamic'
import 'react-toastify/dist/ReactToastify.css'

// Dynamically import the ToastContainer client-side to avoid SSR/module shape issues
const ToastContainer = dynamic(() => import('react-toastify').then((mod) => {
  // pick the best candidate and return as default export shape expected by next/dynamic
  const candidate = mod.ToastContainer || (mod.default && mod.default.ToastContainer) || mod.default || mod
  // if candidate is missing or invalid, provide a harmless fallback component
  const safe = (candidate && (typeof candidate === 'function' || candidate?.render)) ? candidate : (() => null)
  return { default: safe }
}), { ssr: false })

export default function ReactToaster() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  )
}
