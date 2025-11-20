"use client"

import React from 'react'
import { toast } from 'react-toastify'

export default function confirmWithToast(message) {
  return new Promise((resolve) => {
    let toastId = null
    const Content = () => (
      <div className="p-2">
        <div className="mb-2 text-sm">{message}</div>
        <div className="flex gap-2">
          <button onClick={() => { toast.dismiss(toastId); resolve(true) }} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
          <button onClick={() => { toast.dismiss(toastId); resolve(false) }} className="px-3 py-1 bg-gray-100 rounded">Cancel</button>
        </div>
      </div>
    )
    toastId = toast(<Content />, { closeOnClick: false, autoClose: false })
  })
}
