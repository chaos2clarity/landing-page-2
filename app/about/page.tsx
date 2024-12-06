'use client'

import TeamSection from '@/components/team-section'
import Footer from '@/components/ui/footer'
import { useTheme } from '@/components/theme-provider'

export default function AboutPage() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-zinc-900' : 'bg-gray-50'
    }`}>
      <main>
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
} 