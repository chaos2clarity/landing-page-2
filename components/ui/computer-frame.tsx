import React from 'react'

interface ComputerFrameProps {
  children: React.ReactNode
}

export function ComputerFrame({ children }: ComputerFrameProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="relative rounded-2xl bg-zinc-900 shadow-2xl">
        {/* Frame header with dots */}
        <div className="flex items-center gap-2 rounded-t-2xl border-b border-zinc-700/50 bg-zinc-800/50 p-3">
          <div className="h-3 w-3 rounded-full bg-red-500/90"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500/90"></div>
          <div className="h-3 w-3 rounded-full bg-green-500/90"></div>
        </div>
        {/* Content */}
        <div className="overflow-hidden rounded-b-2xl">
          {children}
        </div>
      </div>
    </div>
  )
} 