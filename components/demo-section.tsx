'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Frame35 from "@/public/frame35.png"
import Frame36 from "@/public/images/frame36.png"
import Storage from "@/public/storagedemo.svg"
import MathDemo from "@/public/mathgood.svg"
import { useTheme } from '@/contexts/ThemeContext'
import Frame39 from "@/public/frame39.png"
import Frame40 from "@/public/Frame40.svg"

const CommandMenu = dynamic(() => import('./ui/command-menu').then(mod => mod.CommandMenu), { ssr: false })

const demoContent = [
  {
    id: 1,
    title: "Commands",
    component: CommandMenu,
    description: "A command palette for all your needs",
    isComponent: true
  },
  {
    id: 2,
    title: "Format",
    image: Frame35,
    description: "Modularized content and intuitive formatting. IEEE, APA, MLA? Within seconds.",
    preserveSize: true
  },
  {
    id: 3,
    title: "Math",
    image: MathDemo,
    description: "Type math equations with intuition and 10x speed",
    preserveSize: true,
    scale: 0.5
  },
  {
    id: 4,
    title: "Storage",
    image: Storage,
    description: "Store files & notes intuitively",
    preserveSize: true
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

  // Preload all images
  useEffect(() => {
    demoContent.forEach(item => {
      if (typeof item.image === 'string') {
        const img = new window.Image()
        img.src = item.image
      }
    })
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
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: activeId === item.id ? 1 : 0,
                    y: activeId === item.id ? 0 : 20 
                  }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                  style={{ 
                    display: activeId === item.id ? 'flex' : 'none',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  className={`absolute inset-0 ${
                    !item.isComponent && typeof item.image === 'string'
                      ? 'bg-gray-100 dark:bg-zinc-800 rounded-xl overflow-hidden' 
                      : ''
                  }`}
                >
                  {item.isComponent ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-full max-w-2xl">
                        <item.component />
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.title}
                      priority
                      quality={100}
                      {...(item.preserveSize
                        ? {
                            width: Frame35.width,
                            height: Frame35.height,
                            className: "object-contain"
                          }
                        : {
                            fill: true,
                            className: "object-cover"
                          }
                      )}
                    />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
} 