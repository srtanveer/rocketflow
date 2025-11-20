'use client'

import NextImage from 'next/image'
import { useState } from 'react'

export default function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  fill = false, 
  width, 
  height, 
  loading = 'lazy',
  priority = false,
  quality = 75,
  ...props 
}) {
  const [imageError, setImageError] = useState(false)

  // Fallback to regular img if Next.js Image fails
  if (imageError) {
    return (
      <img 
        src={src} 
        alt={alt} 
        className={className}
        loading={loading}
        {...props}
        onError={() => setImageError(true)}
        style={fill ? { 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        } : { width, height }}
      />
    )
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      className={className}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      loading={loading}
      priority={priority}
      quality={quality}
      onError={() => setImageError(true)}
      {...props}
    />
  )
}