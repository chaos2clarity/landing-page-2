'use client'

import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

export function Header() {
  return (
    <header className="fixed w-full z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm">
      <div className="max-w-8xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          <Link href="/" className="text-xl font-semibold text-gray-900 dark:text-white">
            {"{clarity}"}
          </Link>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <Link 
                href="#features" 
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
              >
                Features
              </Link>
              <Link 
                href="#pricing" 
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
              >
                Pricing
              </Link>
              <Link 
                href="/about" 
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
              >
                About
              </Link>
            </nav>
            
            <ThemeToggle />
            
            <div className="flex items-center gap-2">
              <Link 
                href="/signin"
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white px-4 py-2"
              >
                Sign in
              </Link>
              <Link 
                href="/signup"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium 
                  bg-primary hover:bg-primary/90 h-10 px-4 py-2
                  text-gray-900 dark:text-white
                  ring-offset-background transition-colors 
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                  disabled:pointer-events-none disabled:opacity-50"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 