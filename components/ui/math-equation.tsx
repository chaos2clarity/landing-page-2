'use client'

import { useEffect, useRef, useState } from 'react'

interface MathEquationProps {
  initialLatex: string
  className?: string
}

export function MathEquation({ initialLatex, className }: MathEquationProps) {
  const [isEditing, setIsEditing] = useState(false)
  const mathFieldRef = useRef<any>(null)
  const staticMathRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.MathQuill) {
      const MQ = window.MathQuill.getInterface(2)
      
      // Initialize static math field
      staticMathRef.current = MQ.StaticMath(containerRef.current!)
      staticMathRef.current.latex(initialLatex)
      
      // Initialize math field for editing
      mathFieldRef.current = MQ.MathField(containerRef.current!, {
        handlers: {
          edit: () => {
            // Handle edit if needed
          },
          enter: () => {
            setIsEditing(false)
          }
        }
      })
      mathFieldRef.current.latex(initialLatex)
    }
  }, [initialLatex])

  const handleDoubleClick = () => {
    setIsEditing(true)
  }

  const handleBlur = () => {
    setIsEditing(false)
  }

  return (
    <div
      ref={containerRef}
      className={`math-equation ${className}`}
      onDoubleClick={handleDoubleClick}
      onBlur={handleBlur}
    />
  )
} 