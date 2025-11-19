'use client'

import { useEffect, useState, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function VideoModal({ isOpen, onClose, videoUrl, title = 'Video' }) {
  const [overlayLifted, setOverlayLifted] = useState(false);
  const [isPausedOverlay, setIsPausedOverlay] = useState(false);
  const playerRef = useRef(null);
  const playerContainerId = useRef(`yt-player-${Math.random().toString(36).slice(2,9)}`);

  // Helper: extract YouTube video ID from URL
  const extractYouTubeID = (url) => {
    try {
      const u = new URL(url);
      if (u.hostname === 'youtu.be') return u.pathname.slice(1);
      if (u.searchParams.has('v')) return u.searchParams.get('v');
      const m = url.match(/[?&]v=([^&]+)/);
      return m ? m[1] : null;
    } catch (e) {
      const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
      return m ? m[1] : null;
    }
  };

  // Load YouTube IFrame API once and return a promise that resolves when ready
  const loadYouTubeAPI = () => new Promise((resolve) => {
    if (window.YT && window.YT.Player) return resolve(window.YT);
    const existing = document.getElementById('youtube-iframe-api');
    if (existing) {
      const check = () => {
        if (window.YT && window.YT.Player) return resolve(window.YT);
        setTimeout(check, 50);
      };
      return check();
    }
    const tag = document.createElement('script');
    tag.id = 'youtube-iframe-api';
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    window.onYouTubeIframeAPIReady = () => resolve(window.YT);
  });
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

  // reset overlay lift when modal opens
  useEffect(() => {
    if (isOpen) setOverlayLifted(false);
  }, [isOpen]);

  // Initialize YouTube player when modal opens (and clean up on close)
  useEffect(() => {
    let mounted = true;
    if (!isOpen) return;
    const videoId = extractYouTubeID(videoUrl);
    if (!videoId) return; // fallback: iframe will be shown

    loadYouTubeAPI().then((YT) => {
      if (!mounted) return;
      // create player
      playerRef.current = new YT.Player(playerContainerId.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 1,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          mute: 1,
          enablejsapi: 1,
          loop: 1,
          playlist: videoId,
          iv_load_policy: 3
        },
        events: {
          onReady: (e) => {
            try { e.target.playVideo(); } catch (err) {}
            // lift the UI header once player loaded
            setOverlayLifted(true);
          },
          onStateChange: (e) => {
            const states = window.YT && window.YT.PlayerState;
            if (!states) return;
            // show our pause overlay for any non-playing state to hide YouTube suggestions
            if (e.data === states.PLAYING) setIsPausedOverlay(false);
            else setIsPausedOverlay(true);
          }
        }
      });
    }).catch(() => {});

    return () => {
      mounted = false;
      if (playerRef.current && playerRef.current.destroy) {
        try { playerRef.current.destroy(); } catch (e) {}
        playerRef.current = null;
      }
      setIsPausedOverlay(false);
    };
  }, [isOpen, videoUrl]);

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

          {/* YouTube Player container (we initialize YT.Player here). Falls back to iframe if ID extraction fails. */}
          <div id={playerContainerId.current} className="absolute inset-0 w-full h-full z-10" />
          {/* Fallback iframe if extract fails (rare) */}
          {!extractYouTubeID(videoUrl) && (
            <iframe
              className="absolute inset-0 w-full h-full z-10"
              src={buildVideoUrl()}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              loading="lazy"
              onLoad={() => setOverlayLifted(true)}
              style={{ filter: 'grayscale(12%) saturate(85%) contrast(95%) brightness(97%)' }}
            />
          )}

          {/* Pause overlay: covers the player when paused to hide YouTube suggestions; clicking resumes */}
          {isPausedOverlay && (
            <div className="absolute inset-0 z-30 flex items-center justify-center" style={{ background: 'rgba(2,6,23,0.18)' }}>
              <button
                onClick={() => { try { playerRef.current && playerRef.current.playVideo(); } catch (e) {} }}
                className="bg-white/10 hover:bg-white/20 text-white rounded-full p-4"
                aria-label="Resume video"
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E0F2FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3v18l15-9L5 3z" /></svg>
              </button>
            </div>
          )}

          {/* Top glassmorphism overlay for UI text */}
          <div
            className="absolute left-4 right-4 top-4 z-20 rounded-xl px-4 py-2 flex items-center justify-between"
            style={{
              backdropFilter: 'blur(8px) saturate(120%)',
              background: 'linear-gradient(180deg, rgba(30,64,175,0.12), rgba(255,255,255,0.02))',
              border: '1px solid rgba(147,197,253,0.16)',
              transform: overlayLifted ? 'translateY(-140%)' : 'translateY(0)',
              transition: 'transform 420ms cubic-bezier(.2,.9,.2,1)'
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
