'use client'

import { useState } from 'react'

export default function HeroVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="mt-16 relative">
      <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
        <div className="aspect-video relative">
          {!isPlaying ? (
            <div 
              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-gradient-to-br from-blue-600 to-purple-700"
              onClick={() => setIsPlaying(true)}
            >
              <div className="text-center text-white">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">See Clarity in Action</h3>
                <p className="text-white/80">Watch how easy it is to write math and science notes</p>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                </div>
                <p className="text-white/80">Demo video would play here</p>
                <button 
                  onClick={() => setIsPlaying(false)}
                  className="mt-4 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  Close Demo
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
