import Link from 'next/link'
import Image from 'next/image'

export default function NavigationBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logos/roundedlogo-gray-no-text.png" 
              alt="Clarity Logo" 
              width={32} 
              height={32} 
            />
            <span className="text-xl font-semibold text-gray-900">Clarity</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link 
              href="/join-waitlist" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
