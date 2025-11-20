'use client'

import React from 'react';

const ShinyText = ({ 
  children, 
  className = "", 
  duration = 3000,
  disabled = false 
}) => {
  if (disabled) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span
      className={`relative inline-block ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {children}
      <span
        className="absolute inset-0 -top-2 -bottom-2 opacity-60"
        style={{
          background: `linear-gradient(
            110deg,
            transparent 40%,
            rgba(255, 255, 255, 0.8) 50%,
            transparent 60%
          )`,
          transform: 'translateX(-100%)',
          animation: `shine ${duration}ms ease-in-out infinite`,
        }}
      />
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </span>
  );
};

export default ShinyText;