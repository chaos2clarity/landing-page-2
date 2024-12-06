'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Share2, Settings, Moon, Sun } from 'lucide-react'
import { cn } from "@/lib/utils"
import Image from "next/image"
import Script from 'next/script'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Component() {
  // Local theme state only for this component
  const [localTheme, setLocalTheme] = useState<'light' | 'dark'>('dark')
  
  const toggleLocalTheme = () => {
    setLocalTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  // Apply theme-specific styles to child elements
  const getThemeStyles = () => ({
    backgroundColor: localTheme === 'dark' ? '#09090b' : '#ffffff',
    color: localTheme === 'dark' ? '#fafafa' : '#09090b',
    borderColor: localTheme === 'dark' ? '#27272a' : '#e4e4e7',
    transition: 'background-color 0.2s, color 0.2s, border-color 0.2s'
  })

  return (
    <div 
      className={cn(
        "h-[600px] w-[1200px] relative rounded-lg overflow-hidden border transition-colors duration-200",
        localTheme === 'dark' 
          ? "bg-zinc-950 text-zinc-50 border-zinc-800" 
          : "bg-white text-zinc-900 border-zinc-200"
      )}
      style={{
        ...getThemeStyles(),
        maxWidth: '90vw', // Responsive width
        maxHeight: '80vh'  // Responsive height
      }}
    >
      {/* Top Navigation */}
      <div className="absolute top-2 right-2 flex items-center gap-2 z-10">
        <Button 
          variant="ghost" 
          size="icon" 
          className={cn(
            "h-8 w-8 transition-colors duration-200",
            localTheme === 'dark' 
              ? "text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800" 
              : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
          )}
        >
          <Share2 className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className={cn(
            "h-8 w-8 transition-colors duration-200",
            localTheme === 'dark' 
              ? "text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800" 
              : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
          )}
        >
          <Settings className="h-4 w-4" />
        </Button>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={localTheme}
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 180 }}
            transition={{ duration: 0.2 }}
          >
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleLocalTheme}
              className={cn(
                "h-8 w-8 transition-colors duration-200",
                localTheme === 'dark' 
                  ? "text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800" 
                  : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
              )}
              title={`Switch to ${localTheme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {localTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content */}
      <main className={cn(
        "p-4 transition-colors duration-200",
        localTheme === 'dark' ? "text-zinc-50" : "text-zinc-900"
      )}>
        {/* Rest of your content ... */}
      </main>
    </div>
  )
}

