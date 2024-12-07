'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from '@/components/theme-toggle'
import { useTheme } from '@/contexts/ThemeContext'
import Logo from "@/public/purelogo.svg"
import LogoDark from "@/public/images/purelogoblue.png"
import { usePathname, useRouter } from 'next/navigation'

export function Header() {
  const { theme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()

  const handleFeaturesClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    if (pathname === '/') {
      // If on main page, just scroll to features
      const featuresSection = document.getElementById('features')
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // If on another page, navigate to main page and then scroll
      router.push('/?scrollToFeatures=true')
    }
  }

  return (
    <header className="fixed w-full z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm">
      <div className="max-w-8xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          <Link href="/" className="flex items-center">
            <Image 
              src={theme === 'dark' ? LogoDark : Logo}
              alt="Clarity Logo" 
              width={35} 
              height={35}
              priority
            />
          </Link>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <a 
                href="#features" 
                onClick={handleFeaturesClick}
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white cursor-pointer"
              >
                Features
              </a>
              <Link 
                href="/about" 
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
              >
                About
              </Link>
            </nav>
            
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
} 