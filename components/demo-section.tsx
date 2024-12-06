'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Frame35 from "@/public/frame35.png"
import Frame36 from "@/public/images/frame36.png"
import { useTheme } from '@/contexts/ThemeContext'

const demoContent = [
  {
    id: 1,
    title: "Commands",
    image: "/images/demo/cms-demo.jpg",
    description: "A command palette for all your needs"
  },
  {
    id: 2,
    title: "Format",
    image: Frame35,
    description: "Modularized content and intuitive formatting. IEEE, APA, MLA? Within seconds.",
    scale: 1
  },
  {
    id: 3,
    title: "Math",
    image: "/images/demo/app-builder-demo.jpg",
    description: "Type math equations with intuition and 10x speed"
  },
  {
    id: 4,
    title: "Storage",
    image: "/images/demo/dam-demo.jpg",
    description: "Store files & notes intuitively"
  }
]

export default function DemoSection() {
  const { theme } = useTheme()
  const [activeId, setActiveId] = useState(1)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 25}px, ${e.clientY - 25}px)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="py-24 bg-white dark:bg-zinc-900 relative overflow-hidden">
      <div 
        ref={cursorRef}
        className="pointer-events-none fixed w-[50px] h-[50px] rounded-full bg-[#38C9C3] opacity-30 blur-[40px] transition-transform duration-100 ease-out z-10"
      />
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
          
          {/* Left side - Interactive text */}
          <div className="w-full md:w-1/4 space-y-8">
            {demoContent.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer group"
                onMouseEnter={() => setActiveId(item.id)}
              >
                <h3 className={`text-[min(5vw,4rem)] leading-tight font-medium transition-colors duration-300 ${
                  activeId === item.id ? 'text-[#A19FE7]' : 'text-gray-400 dark:text-gray-500'
                }`}>
                  {item.title}
                </h3>
                <p className={`mt-2 text-[min(2vw,1.25rem)] transition-colors duration-300 max-w-[30ch] ${
                  activeId === item.id 
                    ? 'text-gray-900 dark:text-gray-100' 
                    : 'text-gray-400 dark:text-gray-500'
                }`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right side - Image display */}
          <div className="w-full md:w-2/3 h-[600px] relative">
            <AnimatePresence mode='wait'>
              {demoContent.map((item) => (
                activeId === item.id && (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                    className={`absolute inset-0 flex items-center justify-center ${
                      typeof item.image === 'string' 
                        ? 'bg-gray-100 dark:bg-zinc-800 rounded-xl overflow-hidden' 
                        : ''
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      {...(typeof item.image === 'string'
                        ? {
                            fill: true,
                            className: "object-cover"
                          }
                        : {
                            width: Frame35.width * (item.scale || 1),
                            height: Frame35.height * (item.scale || 1),
                            className: "object-contain transform -translate-y-8 drop-shadow-[0_0_30px_rgba(56,201,195,0.15)]"
                          }
                      )}
                    />
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
} 