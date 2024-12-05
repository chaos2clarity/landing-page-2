'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, 
  Superscript, Subscript, Quote, List, ListOrdered, Table, Image,
  FileSymlink, Download, Share2
} from 'lucide-react'

const AcademicEditor = () => {
  const [activeTab, setActiveTab] = useState('write')
  
  return (
    <div className="min-h-screen bg-gray-900 p-4">
      {/* Window Controls */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex gap-4">
          <button className="text-gray-400 hover:text-gray-200">
            <FileSymlink className="w-4 h-4" />
          </button>
          <button className="text-gray-400 hover:text-gray-200">
            <Download className="w-4 h-4" />
          </button>
          <button className="text-gray-400 hover:text-gray-200">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Main Editor Container */}
      <div className="bg-gray-800 rounded-lg shadow-xl">
        {/* Tabs */}
        <div className="flex gap-1 px-4 pt-2">
          {['Write', 'Preview', 'References', 'Statistics'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`px-4 py-2 rounded-t-lg text-sm ${
                activeTab === tab.toLowerCase()
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Toolbar */}
        <div className="bg-gray-700 p-3 flex items-center gap-4 border-b border-gray-600">
          {/* Text Controls */}
          <div className="flex items-center gap-2">
            <select className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-sm">
              <option>Times New Roman</option>
              <option>Arial</option>
              <option>Latex Default</option>
            </select>
            <select className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-sm w-16">
              <option>12</option>
              <option>14</option>
              <option>16</option>
            </select>
          </div>
          
          {/* Format Controls */}
          <div className="flex gap-1">
            <button className="p-1.5 hover:bg-gray-600 rounded">
              <Bold className="w-4 h-4 text-gray-300" />
            </button>
            <button className="p-1.5 hover:bg-gray-600 rounded">
              <Italic className="w-4 h-4 text-gray-300" />
            </button>
            <button className="p-1.5 hover:bg-gray-600 rounded">
              <Underline className="w-4 h-4 text-gray-300" />
            </button>
          </div>

          {/* Academic Controls */}
          <div className="flex gap-1">
            <button className="p-1.5 hover:bg-gray-600 rounded">
              <Superscript className="w-4 h-4 text-gray-300" />
            </button>
            <button className="p-1.5 hover:bg-gray-600 rounded">
              <Subscript className="w-4 h-4 text-gray-300" />
            </button>
            <button className="p-1.5 hover:bg-gray-600 rounded">
              <Quote className="w-4 h-4 text-gray-300" />
            </button>
          </div>
          
          {/* Structure Controls */}
          <div className="flex gap-1">
            <button className="p-1.5 hover:bg-gray-600 rounded">
              <List className="w-4 h-4 text-gray-300" />
            </button>
            <button className="p-1.5 hover:bg-gray-600 rounded">
              <ListOrdered className="w-4 h-4 text-gray-300" />
            </button>
            <button className="p-1.5 hover:bg-gray-600 rounded">
              <Table className="w-4 h-4 text-gray-300" />
            </button>
            <button className="p-1.5 hover:bg-gray-600 rounded">
              <Image className="w-4 h-4 text-gray-300" />
            </button>
          </div>

          {/* Alignment */}
          <div className="flex gap-1">
            <button className="p-1.5 hover:bg-gray-600 rounded">
              <AlignLeft className="w-4 h-4 text-gray-300" />
            </button>
            <button className="p-1.5 hover:bg-gray-600 rounded">
              <AlignCenter className="w-4 h-4 text-gray-300" />
            </button>
            <button className="p-1.5 hover:bg-gray-600 rounded">
              <AlignRight className="w-4 h-4 text-gray-300" />
            </button>
          </div>
        </div>
        
        {/* Editor Area */}
        <div className="flex">
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white min-h-[600px] mx-4 my-4 shadow-lg p-8">
              <div contentEditable className="outline-none min-h-[584px]">
                Start writing your academic paper...
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-64 bg-gray-750 p-4 border-l border-gray-700">
            <h3 className="text-gray-300 font-medium mb-4">Document Outline</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="cursor-pointer hover:text-gray-200">Abstract</div>
              <div className="cursor-pointer hover:text-gray-200">Introduction</div>
              <div className="cursor-pointer hover:text-gray-200">Methodology</div>
              <div className="cursor-pointer hover:text-gray-200">Results</div>
              <div className="cursor-pointer hover:text-gray-200">Discussion</div>
              <div className="cursor-pointer hover:text-gray-200">Conclusion</div>
              <div className="cursor-pointer hover:text-gray-200">References</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AcademicEditor 