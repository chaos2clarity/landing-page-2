// 'use client'

// import React, { useState } from 'react'
// import NextImage from 'next/image'
// import { 
//   Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, 
//   Superscript, Subscript, Quote, List, ListOrdered, Table, Image,
//   FileSymlink, Download, Share2, Moon, Sun
// } from 'lucide-react'
// import { Button } from './ui/button'

// const AcademicEditor = () => {
//   const [activeTab, setActiveTab] = useState('write')
//   const [isDarkMode, setIsDarkMode] = useState(true)
//   const [content, setContent] = useState('Start writing your academic paper...')
//   const [isBold, setIsBold] = useState(false)
//   const [isItalic, setIsItalic] = useState(false)

//   const papers = [
//     '/images/paper1.jpg',
//     '/images/paper2.jpg',
//     '/images/paper3.jpg'
//   ]

//   const handleFormat = (type: string) => {
//     switch(type) {
//       case 'bold':
//         setIsBold(!isBold)
//         break
//       case 'italic':
//         setIsItalic(!isItalic)
//         break
//     }
//   }

//   return (
//     <div className="min-h-screen p-4 bg-white">
//       <div className={`w-full max-w-6xl mx-auto ${
//         isDarkMode ? 'bg-zinc-900' : 'bg-gray-100'
//       } rounded-2xl shadow-xl overflow-hidden`}>
//         {/* Window Controls */}
//         <div className="flex items-center justify-between p-4">
//           <div className="flex gap-2">
//             <div className="w-3 h-3 rounded-full bg-red-500"></div>
//             <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//             <div className="w-3 h-3 rounded-full bg-green-500"></div>
//           </div>
//           <div className="flex gap-4">
//             <Button variant="ghost" size="icon" className={`${isDarkMode ? 'text-zinc-400 hover:text-zinc-50' : 'text-gray-600 hover:text-gray-900'}`}>
//               <FileSymlink className="w-4 h-4" />
//             </Button>
//             <Button variant="ghost" size="icon" className={`${isDarkMode ? 'text-zinc-400 hover:text-zinc-50' : 'text-gray-600 hover:text-gray-900'}`}>
//               <Download className="w-4 h-4" />
//             </Button>
//             <Button variant="ghost" size="icon" className={`${isDarkMode ? 'text-zinc-400 hover:text-zinc-50' : 'text-gray-600 hover:text-gray-900'}`}>
//               <Share2 className="w-4 h-4" />
//             </Button>
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsDarkMode(!isDarkMode)}
//               className={`${isDarkMode ? 'text-zinc-400 hover:text-zinc-50' : 'text-gray-600 hover:text-gray-900'}`}
//             >
//               {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
//             </Button>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="flex gap-1 px-4">
//           {['Write', 'Preview', 'References', 'Statistics'].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab.toLowerCase())}
//               className={`px-4 py-2 text-sm ${
//                 activeTab === tab.toLowerCase()
//                   ? isDarkMode 
//                     ? 'bg-zinc-800 text-zinc-50' 
//                     : 'bg-gray-200 text-gray-900'
//                   : isDarkMode
//                     ? 'text-zinc-400 hover:text-zinc-200'
//                     : 'text-gray-600 hover:text-gray-900'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Editor Area */}
//         <div className="flex">
//           {/* Main Content */}
//           <div className="flex-1">
//             <div className={`${
//               isDarkMode ? 'bg-zinc-800' : 'bg-gray-50'
//             } min-h-[500px] mx-4 my-4 shadow-lg p-8 rounded-lg border ${
//               isDarkMode ? 'border-zinc-700' : 'border-gray-200'
//             }`}>
//               <textarea
//                 value={content}
//                 onChange={(e) => setContent(e.target.value)}
//                 className={`w-full h-full min-h-[484px] bg-transparent outline-none resize-none ${
//                   isDarkMode ? 'text-zinc-200 placeholder-zinc-500' : 'text-gray-900 placeholder-gray-500'
//                 }`}
//                 placeholder="Start writing your academic paper..."
//               />
//             </div>
//           </div>

//           {/* Right Sidebar with Images */}
//           <div className={`w-64 ${
//             isDarkMode ? 'bg-zinc-800 border-zinc-700' : 'bg-gray-100 border-gray-200'
//           } p-4 border-l flex flex-col`}>
//             {/* Document Outline */}
//             <h3 className={`${
//               isDarkMode ? 'text-zinc-200' : 'text-gray-900'
//             } font-medium mb-4`}>Document Outline</h3>
//             <div className="space-y-2 text-sm mb-6 group">
//               {['Abstract', 'Introduction', 'Methodology', 'Results', 'Discussion', 'Conclusion', 'References'].map((item) => (
//                 <div 
//                   key={item} 
//                   className={`cursor-pointer transition-all duration-200 px-2 py-1 rounded-md
//                     ${isDarkMode 
//                       ? 'text-zinc-400/70 hover:text-zinc-200 hover:bg-zinc-700/50' 
//                       : 'text-gray-600/70 hover:text-gray-900 hover:bg-gray-200/50'
//                     }
//                     hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]
//                     group-hover:[&:not(:hover)]:opacity-50
//                   `}
//                 >
//                   {item}
//                 </div>
//               ))}
//             </div>

//             {/* Images Section */}
//             <h3 className={`${
//               isDarkMode ? 'text-zinc-200' : 'text-gray-900'
//             } font-medium mb-4`}>Papers</h3>
//             <div className="flex-1 overflow-y-auto space-y-4 pr-2">
//               {papers.map((paper, index) => (
//                 <div 
//                   key={index}
//                   className={`relative rounded-lg overflow-hidden border ${
//                     isDarkMode ? 'border-zinc-700' : 'border-gray-200'
//                   } hover:border-blue-500 transition-colors cursor-pointer`}
//                 >
//                   <NextImage
//                     src={paper}
//                     alt={`Paper ${index + 1}`}
//                     width={220}
//                     height={220}
//                     className="object-cover w-full h-48"
//                     onError={(e) => {
//                       console.error(`Failed to load image: ${paper}`);
//                       // Optionally set a fallback image
//                       // e.currentTarget.src = '/fallback-image.jpg';
//                     }}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AcademicEditor 