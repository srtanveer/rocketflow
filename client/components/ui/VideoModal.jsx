'use client'

import { useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function VideoModal({ isOpen, onClose, videoUrl, title = 'Video' }) {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent background scroll
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Build YouTube URL with all parameters for full control
  const buildVideoUrl = () => {
    const baseUrl = videoUrl;
    const params = new URLSearchParams();
    
    // Autoplay: 1 (video starts playing)
    params.set('autoplay', '1');
    // Controls: 1 (show player controls)
    params.set('controls', '1');
    // Modestbranding: 1 (hide YouTube logo)
    params.set('modestbranding', '1');
    // Rel: 0 (don't show related videos)
    params.set('rel', '0');
    // Fs: 1 (allow fullscreen)
    params.set('fs', '1');
    // Playsinline: 1 (for mobile)
    params.set('playsinline', '1');
    // Mute: 1 (start muted for autoplay)
    params.set('mute', '1');
    
    const separator = baseUrl.includes('?') ? '&' : '?';
    return `${baseUrl}${separator}${params.toString()}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose} // clicking backdrop closes
    >
      {/* Floating Popup Container (1px brand-blue stroke) */}
      <div
        className="relative w-full max-w-4xl bg-black/10 rounded-2xl shadow-2xl overflow-hidden group"
        style={{ border: '1px solid #93C5FD' }}
        onClick={(e) => e.stopPropagation()} // prevent clicks inside popup from closing
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full hover:bg-white/10 transition-all duration-200"
          aria-label="Close video"
        >
          <XMarkIcon className="w-6 h-6 text-white" />
        </button>

        {/* Video Container with 16:9 aspect ratio */}
        <div className="relative w-full pt-[56.25%] bg-black overflow-hidden">
          {/* subtle desaturation / blue-grade layer (simulates LUT) */}
          <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'rgba(30,64,175,0.04)', mixBlendMode: 'color' }} />

          {/* YouTube Iframe with full controls (fill container to avoid cropping) */}
          <iframe
            className="absolute inset-0 w-full h-full z-10"
            src={buildVideoUrl()}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
            loading="lazy"
            style={{
              // keep color-grade effect but don't overscale/shift the iframe
              filter: 'grayscale(12%) saturate(85%) contrast(95%) brightness(97%)'
            }}
          />

          {/* Top glassmorphism overlay for UI text */}
          <div className="absolute left-4 right-4 top-4 z-20 rounded-xl px-4 py-2 flex items-center justify-between"
            style={{
              backdropFilter: 'blur(8px) saturate(120%)',
              background: 'linear-gradient(180deg, rgba(30,64,175,0.12), rgba(255,255,255,0.02))',
              border: '1px solid rgba(147,197,253,0.16)'
            }}
          >
            <div className="text-sm font-semibold" style={{ color: '#E0F2FE' }}>{title}</div>
            <div className="text-xs" style={{ color: '#E0F2FE', opacity: 0.9 }}>Demo</div>
          </div>

          {/* bottom overlay removed to ensure native player controls are fully accessible */}

          {/* Rule-of-thirds guides (subtle, for composition; pointer-events-none) */}
          <svg className="absolute inset-0 w-full h-full z-5 pointer-events-none" aria-hidden>
            <g stroke="#0F172A" strokeOpacity="0.06" strokeWidth="1">
              <line x1="33.333%" y1="0" x2="33.333%" y2="100%" />
              <line x1="66.666%" y1="0" x2="66.666%" y2="100%" />
              <line x1="0" y1="33.333%" x2="100%" y2="33.333%" />
              <line x1="0" y1="66.666%" x2="100%" y2="66.666%" />
            </g>
          </svg>

        </div>

        {/* (instruction text intentionally removed - controls are provided by the player) */}
      </div>

      {/* (backdrop click is handled on the parent wrapper) */}
    </div>
  );
}
