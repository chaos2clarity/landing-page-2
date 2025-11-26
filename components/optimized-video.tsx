'use client'

import { useEffect, useRef, useState } from 'react'

interface OptimizedVideoProps {
  src: string
  poster?: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  playsInline?: boolean
  preload?: 'none' | 'metadata' | 'auto'
  onLoadStart?: () => void
  onCanPlay?: () => void
  onError?: () => void
}

export default function OptimizedVideo({
  src,
  poster,
  className = '',
  autoPlay = false,
  muted = true,
  loop = false,
  playsInline = true,
  preload = 'none', // Changed from 'auto' to 'none' for better performance
  onLoadStart,
  onCanPlay,
  onError,
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)

  // Intersection Observer for lazy loading
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            // Only start loading when user is close to the video (within 200px)
            if (entry.intersectionRatio > 0.1) {
              setShouldLoad(true)
            }
          }
        })
      },
      {
        rootMargin: '200px', // Start loading 200px before video enters viewport
        threshold: [0, 0.1, 0.5],
      }
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
    }
  }, [])

  // Load video when shouldLoad becomes true
  useEffect(() => {
    if (shouldLoad && videoRef.current && !videoRef.current.src) {
      setIsLoading(true)
      onLoadStart?.()
      
      // Set video source
      const video = videoRef.current
      video.src = src
      video.load()
    }
  }, [shouldLoad, src, onLoadStart])

  const handleCanPlay = () => {
    setIsLoading(false)
    onCanPlay?.()
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    onError?.()
  }

  const handlePlay = () => {
    // Ensure video plays when user interacts
    if (videoRef.current && !shouldLoad) {
      setShouldLoad(true)
    }
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 rounded-lg z-10">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-zinc-700 border-t-violet-500 rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-sm text-zinc-400">Loading video...</p>
          </div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 rounded-lg z-10">
          <div className="text-center text-zinc-400">
            <p className="text-sm">Failed to load video</p>
            <button
              onClick={() => {
                setHasError(false)
                setShouldLoad(true)
              }}
              className="mt-2 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors text-sm"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {/* Video element */}
      <video
        ref={videoRef}
        className="w-full rounded-lg shadow-lg"
        poster={poster}
        autoPlay={autoPlay && shouldLoad}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        preload={preload}
        onCanPlay={handleCanPlay}
        onError={handleError}
        onPlay={handlePlay}
        style={{ minHeight: '300px', backgroundColor: '#18181b' }}
      >
        Your browser does not support the video tag.
      </video>

      {/* Play button overlay when video hasn't loaded yet */}
      {!shouldLoad && !isLoading && !hasError && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-zinc-900/80 rounded-lg cursor-pointer z-10 hover:bg-zinc-900/70 transition-colors"
          onClick={handlePlay}
        >
          <div className="text-center text-white">
            <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-sm text-zinc-300">Click to load video</p>
          </div>
        </div>
      )}
    </div>
  )
}

