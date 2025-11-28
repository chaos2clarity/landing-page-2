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
    <div className="fixed top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 z-50">
      <div className="flex items-center justify-between bg-zinc-900/20 backdrop-blur-xl rounded-full px-4 py-2 sm:bg-transparent sm:backdrop-blur-none sm:rounded-none sm:px-0 sm:py-0">
        {/* Logo Section */}
        <Link 
          href="/" 
          className="hover:text-foreground flex items-center gap-1 
          text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-white"
        >
          <Image
            src={theme === 'dark' ? LogoDark : Logo}
            alt="Clarity Logo"
            width={24}
            height={16}
            priority
            className="object-contain sm:w-8 sm:h-5"
          />
          <span className="hidden sm:inline">&#123;clarity&#125;</span>
          <span className="sm:hidden">&#123;clarity&#125;</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center text-xs sm:text-sm font-medium gap-2 sm:gap-4 lg:gap-8">
          {/* Hide Pricing, Guide, and Blogs on mobile - only show on sm and larger screens */}
          <Link 
            href="/pricing"
            className="hidden sm:block text-zinc-300 hover:text-white transition-colors duration-200 px-2 py-1 rounded touch-manipulation"
          >
            Pricing
          </Link>
          
          <Link 
            href="/guide"
            className="hidden sm:block text-zinc-300 hover:text-white transition-colors duration-200 px-2 py-1 rounded touch-manipulation"
          >
            Guide
          </Link>
          
          <Link 
            href="/blogs"
            className="hidden sm:block text-zinc-300 hover:text-white transition-colors duration-200 px-2 py-1 rounded touch-manipulation"
          >
            Blogs
          </Link>
          
          <div className="flex items-center gap-1 sm:gap-1.5">
            <Link 
              href="/join-waitlist"
              className="bg-violet-500 px-4 sm:px-3 rounded-full 
              text-xs sm:text-sm py-0 sm:py-1 transition-colors hover:bg-purple-300 text-white font-medium
              min-h-[44px] flex items-center justify-center touch-manipulation w-auto sm:w-auto"
            >
              <span className="hidden sm:inline">Join Waitlist</span>
              <span className="sm:hidden">Join Waitlist</span>
            </Link>
            
            <Link 
              href="https://app.claritynotes.co"
              className="bg-zinc-700 border border-zinc-600 px-4 sm:px-3 rounded-full 
              text-xs sm:text-sm py-0 sm:py-1 transition-colors hover:bg-zinc-600 hover:border-zinc-500 text-white font-medium
              min-h-[44px] flex items-center justify-center touch-manipulation w-auto sm:w-auto
              shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]"
            >
              <span className="hidden sm:inline">Try Beta</span>
              <span className="sm:hidden">Try Beta</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 