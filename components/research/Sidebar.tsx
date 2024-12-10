import { Search, ChevronDown, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Sidebar() {
  const [expandedSections, setExpandedSections] = useState({
    electrical: true,
    microbiology: true
  });

  const toggleSection = (section: 'electrical' | 'microbiology') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="w-64 bg-[#1C1C1E] border-r border-[#3C3C3E] flex flex-col">
      {/* Header with logo */}
      <div className="flex items-center p-3 border-b border-[#3C3C3E]">
        <div className="w-6 h-6 bg-[#0A84FF] rounded mr-2 flex items-center justify-center">
          <span className="text-white text-xs">C</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-white font-medium">clarity</span>
          <span className="text-xs text-gray-400">academic paper</span>
        </div>
      </div>

      {/* Search bar */}
      <div className="p-3">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-full bg-[#2C2C2E] rounded-md pl-9 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#0A84FF]"
          />
        </div>
      </div>

      {/* Recent documents */}
      <div className="p-3">
        <h2 className="text-sm font-medium text-white mb-2">Recents</h2>
        <div className="grid grid-cols-2 gap-2">
          {[
            { title: 'Carbon Aware EV Charging', date: 'Today' },
            { title: 'Circuit Design Report', date: 'Yesterday' },
            { title: 'Chip Layout Paper', date: 'Last week' }
          ].map((doc) => (
            <div 
              key={doc.title} 
              className="group bg-[#2C2C2E] rounded-lg p-2 cursor-pointer hover:bg-[#3C3C3E] transition-colors"
            >
              <div className="w-full h-16 bg-[#3C3C3E] group-hover:bg-[#4C4C4E] rounded mb-2 flex items-center justify-center">
                <span className="text-[10px] text-gray-400">{doc.date}</span>
              </div>
              <p className="text-xs text-gray-300 truncate">{doc.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Notes tree */}
      <div className="flex-1 p-3">
        <h2 className="text-sm font-medium text-white mb-2">My Notes</h2>
        <div className="space-y-1">
          <div>
            <button
              onClick={() => toggleSection('electrical')}
              className="w-full flex items-center text-sm text-gray-300 hover:text-white py-1"
            >
              {expandedSections.electrical ? (
                <ChevronDown className="h-4 w-4 mr-1" />
              ) : (
                <ChevronRight className="h-4 w-4 mr-1" />
              )}
              <span>Electrical Engineering</span>
            </button>
            {expandedSections.electrical && (
              <div className="ml-5 space-y-1 mt-1">
                <a href="#" className="block text-sm text-gray-400 hover:text-white py-1">Differential Equations</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-white py-1">Laplace Transforms</a>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => toggleSection('microbiology')}
              className="w-full flex items-center text-sm text-gray-300 hover:text-white py-1"
            >
              {expandedSections.microbiology ? (
                <ChevronDown className="h-4 w-4 mr-1" />
              ) : (
                <ChevronRight className="h-4 w-4 mr-1" />
              )}
              <span>Microbiology Research</span>
            </button>
            {expandedSections.microbiology && (
              <div className="ml-5 space-y-1 mt-1">
                <a href="#" className="block text-sm text-gray-400 hover:text-white py-1">Pseudomonas Aeruginosa Intro</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-white py-1">Secretion Mechanisms of Pseu</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 