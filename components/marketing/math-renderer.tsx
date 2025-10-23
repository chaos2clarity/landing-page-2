'use client'

import { useEffect, useRef } from 'react'

interface MathRendererProps {
  content: string
  className?: string
}

export default function MathRenderer({ content, className = '' }: MathRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This would integrate with KaTeX or MathJax for rendering
    // For now, we'll just display the content as-is
    if (containerRef.current) {
      containerRef.current.innerHTML = content
    }
  }, [content])

  return (
    <div 
      ref={containerRef}
      className={`math-content ${className}`}
      style={{
        fontFamily: 'KaTeX_Main, "Times New Roman", serif',
        lineHeight: '1.6'
      }}
    />
  )
}
