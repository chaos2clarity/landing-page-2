'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Filter, Grid, LayoutGrid, List, Menu, MonitorDot, Moon, Plus, Settings, Share2, Table, X, ImagePlus, Link, Type, Sun } from 'lucide-react'
import { cn } from "@/lib/utils"
import Image from "next/image"
import Script from 'next/script'
import { useTheme } from '@/components/theme-provider'
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SlashCommandMenu } from './slash-command-menu'

type NoteContent = {
  title: string;
  content: string;
  image?: {
    src: string;
    alt: string;
  };
  math?: string;
  tags?: string[];
  additionalContent?: string;
}

const noteContents: NoteContent[] = [
  {
    title: "W.S.B. Paterson",
    content: "W.S.B. Paterson was a pioneering glaciologist who wrote \"The Physics of Glaciers,\" a fundamental text in glaciology. His work established many of the core principles of glacier dynamics and mass balance studies that continue to influence modern glaciological research and climate change studies."
  },
  {
    title: "What is Mass Balance?",
    content: "Glacier mass balance is the difference between accumulation (snow, freezing rain) and ablation (melting, sublimation, calving). It's a crucial indicator of glacier health and climate change impact, measured through direct field observations, remote sensing, and modeling approaches.",
    image: {
      src: "/images/massbalance.png",
      alt: "Mass balance diagram"
    }
  },
  {
    title: "Remote Sensing in Mass Balance Studies",
    content: "Modern approaches to glacier monitoring using satellite imagery and digital elevation models to assess volume changes and mass balance at regional to global scales.",
    image: {
      src: "/images/remotesensing.jpg",
      alt: "Glacier visualization"
    },
    tags: ["remote sensing", "mass balance"]
  },
  {
    title: "Energy Balance",
    content: "The surface energy balance determines melt rates and is given by:",
    math: "\\[Q_M = Q_N + Q_H + Q_L + Q_R + Q_G\\]",
    additionalContent: "Where QM is energy available for melt, QN is net radiation, QH is sensible heat flux"
  },
  {
    title: "Ice Flow Modeling",
    content: "Glen's Flow Law describes ice deformation:",
    math: "\\[\\dot{\\epsilon} = A\\tau^n\\]",
    additionalContent: "Where ̇ is strain rate, τ is shear stress, n is typically 3, and A is a temperature-dependent flow parameter."
  },
  {
    title: "Mass Balance",
    content: "What we have here is called the temperature-index model, it takes into account the temperature and the solar radiation to calculate the melt, allowing us to relate to the energy balance model as well.",
    math: "\\[M=\\left\\{\\begin{array}{c}TF\\cdot T+SRF(1-\\alpha)G\\cdot Icf: T \\cup G>0 \\\\ 0: T \\leq 1 \\cap G=0\\end{array}\\right.\\]"
  }
]

export default function Component() {
  const { theme: globalTheme } = useTheme()
  const [localTheme, setLocalTheme] = useState<'light' | 'dark'>('dark')
  const [isNodeView, setIsNodeView] = useState(false)
  const [showSortDropdown, setShowSortDropdown] = useState(false)
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false)
  const [showShareDropdown, setShowShareDropdown] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'stack' | 'table'>('grid')
  const [selectedNote, setSelectedNote] = useState<number | null>(null)
  const [slashMenuOpen, setSlashMenuOpen] = useState(false)
  const [slashMenuPosition, setSlashMenuPosition] = useState({ x: 0, y: 0 })
  const contentEditableRef = useRef<HTMLDivElement>(null)

  const MOVEMENT_DAMPING = 1
  const MOVEMENT_SPEED = 0.000005
  const MAX_MOVEMENT = 100
  const SCALE_SENSITIVITY = 0.0005

  const MIN_SCALE = 0.5
  const MAX_SCALE = 2.0
  const DRAG_BOUNDARY = 300

  const nodes = [
    { id: 'paterson', title: 'W.S.B. Paterson', connections: ['mass-balance', 'energy-balance'] },
    { id: 'mass-balance', title: 'What is Mass Balance?', connections: ['remote-sensing', 'energy-balance'] },
    { id: 'remote-sensing', title: 'Remote Sensing', connections: ['mass-balance'] },
    { id: 'energy-balance', title: 'Energy Balance', connections: ['mass-balance', 'ice-flow'] },
    { id: 'ice-flow', title: 'Ice Flow Modeling', connections: ['energy-balance', 'mass-calc'] },
    { id: 'mass-calc', title: 'Mass Balance', connections: ['mass-balance', 'ice-flow'] }
  ]

  const handleContentEdit = (e: React.FormEvent<HTMLElement>) => {
    console.log('Content edited:', (e.target as HTMLElement).textContent);
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === '/') {
      const selection = window.getSelection()
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0)
        const rect = range.getBoundingClientRect()
        setSlashMenuPosition({
          x: rect.left + window.scrollX,
          y: rect.bottom + window.scrollY
        })
        setSlashMenuOpen(true)
      }
    }
  }

  const handleSlashCommand = (command: string) => {
    switch (command) {
      case 'heading1':
        document.execCommand('formatBlock', false, 'h1')
        break
      case 'math':
        // Insert math block
        const mathBlock = document.createElement('div')
        mathBlock.className = 'my-4 text-center text-lg'
        mathBlock.textContent = '\\['
        if (window.MathJax) window.MathJax.typeset()
        break
      case 'bulletList':
        document.execCommand('insertUnorderedList', false)
        break
      // Add more commands as needed
    }
  }

  const toggleLocalTheme = () => {
    setLocalTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`min-h-screen ${localTheme === 'dark' ? 'bg-zinc-950 text-zinc-50' : 'bg-white text-zinc-900'}`}
      style={{
        transition: 'background-color 0.2s, color 0.2s'
      }}
    >
      {/* Top Navigation */}
      <header className={`border-b ${localTheme === 'dark' ? 'border-zinc-800' : 'border-pink-100'} transition-colors duration-200`}>
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className={`text-zinc-400 hover:${localTheme === 'dark' ? 'text-zinc-50' : 'text-zinc-900'}`}>
              <Menu className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className={`text-zinc-400 hover:${localTheme === 'dark' ? 'text-zinc-50' : 'text-zinc-900'}`}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className={`text-zinc-400 hover:${localTheme === 'dark' ? 'text-zinc-50' : 'text-zinc-900'}`}>
              <ArrowRight className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-1 text-sm text-zinc-400">
              <span>📓</span>
              <span>Notebook</span>
              <span>/</span>
              <span>🏷️</span>
              <span>Tags</span>
              <span>/</span>
              <span>Glaciology</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`text-zinc-400 hover:${localTheme === 'dark' ? 'text-zinc-50' : 'text-zinc-900'}`}
                onClick={() => setShowShareDropdown(!showShareDropdown)}
              >
                <Share2 className="h-5 w-5" />
              </Button>
              {showShareDropdown && (
                <div className={`absolute right-0 mt-2 w-48 rounded-md ${
                  localTheme === 'dark' ? 'bg-zinc-800' : 'bg-white border border-gray-200'
                } shadow-lg z-50`}>
                  <div className="py-1">
                    <button
                      className={`block w-full px-4 py-2 text-sm ${
                        localTheme === 'dark' 
                          ? 'text-zinc-300 hover:bg-zinc-700' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={handleShare}
                    >
                      Copy Link
                    </button>
                  </div>
                </div>
              )}
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className={`text-zinc-400 hover:${localTheme === 'dark' ? 'text-zinc-50' : 'text-zinc-900'}`}
              onClick={toggleFullscreen}
            >
              <MonitorDot className="h-5 w-5" />
            </Button>
            <div className="relative">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`text-zinc-400 hover:${localTheme === 'dark' ? 'text-zinc-50' : 'text-zinc-900'}`}
                onClick={() => setShowSettingsDropdown(!showSettingsDropdown)}
              >
                <Settings className="h-5 w-5" />
              </Button>
              {showSettingsDropdown && (
                <div className={`absolute right-0 mt-2 w-48 rounded-md ${
                  localTheme === 'dark' ? 'bg-zinc-800' : 'bg-white border border-gray-200'
                } shadow-lg z-50`}>
                  <div className="py-1">
                    <button className={`block w-full px-4 py-2 text-sm ${
                      localTheme === 'dark' 
                        ? 'text-zinc-300 hover:bg-zinc-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}>
                      Preferences
                    </button>
                    <button className={`block w-full px-4 py-2 text-sm ${
                      localTheme === 'dark' 
                        ? 'text-zinc-300 hover:bg-zinc-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}>
                      Keyboard Shortcuts
                    </button>
                  </div>
                </div>
              )}
            </div>
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
                  className={`text-zinc-400 hover:${localTheme === 'dark' ? 'text-zinc-50' : 'text-zinc-900'}`}
                  onClick={toggleLocalTheme}
                  title={`Switch to ${localTheme === 'dark' ? 'light' : 'dark'} theme`}
                >
                  {localTheme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={`flex-1 overflow-auto p-4 ${
        localTheme === 'dark' ? 'bg-zinc-950' : 'bg-white'
      } transition-colors duration-200`}>
        {/* Title Section */}
        <div className={`mb-4 rounded-lg p-4 ${
          localTheme === 'dark' 
            ? 'bg-gradient-to-t from-green-800/20 to-green-900/20'
            : 'bg-pink-50'
        }`}>
          <h1 className={`text-2xl font-semibold ${
            localTheme === 'dark' 
              ? 'text-zinc-50'
              : 'text-zinc-900'
          }`}>Glaciology & Mass Balance Modeling</h1>
          <div className="mt-2 flex space-x-4">
            <Button variant="ghost" size="sm" className="text-zinc-400">
              <Plus className="mr-2 h-4 w-4" />
              Add icon
            </Button>
            <Button variant="ghost" size="sm" className="text-zinc-400">
              <Plus className="mr-2 h-4 w-4" />
              Add description
            </Button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="mb-4 flex items-center justify-end space-x-2">
          <Button variant="ghost" size="sm" className="text-zinc-400">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <div className="relative">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-zinc-400"
              onClick={() => setShowSortDropdown(!showSortDropdown)}
            >
              Sort
            </Button>
            {showSortDropdown && (
              <div className="absolute right-0 mt-2 w-48 rounded-md bg-zinc-800 shadow-lg z-50">
                <div className="py-1">
                  <button
                    className="block w-full px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-700"
                    onClick={() => {
                      setIsNodeView(false)
                      setShowSortDropdown(false)
                    }}
                  >
                    Sort by Blocks
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-700"
                    onClick={() => {
                      setIsNodeView(true)
                      setShowSortDropdown(false)
                    }}
                  >
                    Sort by Nodes
                  </button>
                </div>
              </div>
            )}
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className={`text-zinc-400 ${viewMode === 'list' && 'bg-zinc-800'}`}
            onClick={() => setViewMode('list')}
          >
            <List className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className={`text-zinc-400 ${viewMode === 'grid' && 'bg-zinc-800'}`}
            onClick={() => setViewMode('grid')}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className={`text-zinc-400 ${viewMode === 'stack' && 'bg-zinc-800'}`}
            onClick={() => setViewMode('stack')}
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`text-zinc-400 ${viewMode === 'table' && 'bg-zinc-800'}`}
            onClick={() => setViewMode('table')}
          >
            <Table className="h-4 w-4" />
          </Button>
        </div>

        {/* Content Grid/Node View */}
        <AnimatePresence mode="wait">
          {!isNodeView ? (
            <motion.div 
              layout
              className={cn(
                'w-full',
                viewMode === 'grid' && 'grid gap-4 md:grid-cols-2 lg:grid-cols-3',
                viewMode === 'list' && 'flex flex-col space-y-4',
                viewMode === 'stack' && 'grid gap-2 max-w-2xl mx-auto',
                viewMode === 'table' && 'grid grid-cols-2 gap-2 max-w-5xl mx-2 my-2 grid-auto-rows-fr'
              )}
            >
              <motion.div layout>
                <Card 
                  onClick={() => setSelectedNote(0)}
                  role="button"
                  tabIndex={0}
                  className={`${
                    localTheme === 'dark' 
                      ? 'border-zinc-800 bg-zinc-900/50' 
                      : 'border-gray-100 bg-white shadow-lg shadow-gray-200/50 hover:shadow-gray-200/70 transition-shadow'
                  } cursor-pointer hover:scale-[1.02] transition-transform`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-500">⭐</span>
                      <h3
                        className={`font-medium outline-none rounded px-1 ${
                          localTheme === 'dark' 
                            ? 'text-zinc-50 focus:bg-zinc-800' 
                            : 'text-gray-800 focus:bg-gray-100'
                        }`}
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => handleContentEdit(e)}
                      >
                        W.S.B. Paterson
                      </h3>
                    </div>
                    <p
                      className={`mt-2 text-sm outline-none rounded p-1 ${
                        localTheme === 'dark'
                          ? 'text-zinc-400 focus:bg-zinc-800'
                          : 'text-gray-600 focus:bg-gray-100'
                      }`}
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => handleContentEdit(e)}
                    >
                      W.S.B. Paterson was a pioneering glaciologist who wrote "The Physics of Glaciers," a fundamental text in glaciology. His work established many of the core principles of glacier dynamics and mass balance studies that continue to influence modern glaciological research and climate change studies.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div layout>
                <Card 
                  onClick={() => setSelectedNote(1)}
                  role="button"
                  tabIndex={0}
                  className={`${
                    localTheme === 'dark' 
                      ? 'border-zinc-800 bg-zinc-900/50' 
                      : 'border-gray-100 bg-white shadow-lg shadow-gray-200/50 hover:shadow-gray-200/70 transition-shadow'
                  } cursor-pointer hover:scale-[1.02] transition-transform`}
                >
                  <CardContent className="p-4">
                    <h3
                      className={`font-medium outline-none rounded px-1 ${
                        localTheme === 'dark' 
                          ? 'text-zinc-50 focus:bg-zinc-800' 
                          : 'text-gray-800 focus:bg-gray-100'
                      }`}
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => handleContentEdit(e)}
                    >
                      What is Mass Balance?
                    </h3>
                    <p
                      className={`mt-2 text-sm outline-none rounded p-1 ${
                        localTheme === 'dark'
                          ? 'text-zinc-400 focus:bg-zinc-800'
                          : 'text-gray-600 focus:bg-gray-100'
                      }`}
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => handleContentEdit(e)}
                    >
                      Glacier mass balance is the difference between accumulation (snow, freezing rain) and ablation (melting, sublimation, calving). It's a crucial indicator of glacier health and climate change impact, measured through direct field observations, remote sensing, and modeling approaches.
                    </p>
                    <Image
                      src="/images/massbalance.png"
                      alt="Mass balance diagram"
                      width={300}
                      height={200}
                      className="mt-4 rounded-lg"
                    />
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div layout>
                <Card 
                  onClick={() => setSelectedNote(2)}
                  role="button"
                  tabIndex={0}
                  className={`${
                    localTheme === 'dark' 
                      ? 'border-zinc-800 bg-zinc-900/50' 
                      : 'border-gray-100 bg-white shadow-lg shadow-gray-200/50 hover:shadow-gray-200/70 transition-shadow'
                  } cursor-pointer hover:scale-[1.02] transition-transform`}
                >
                  <CardContent className="p-4">
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <Image
                        src="/images/remotesensing.jpg"
                        alt="Glacier visualization"
                        width={400}
                        height={200}
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4">
                      <h3
                        className={`font-medium outline-none rounded px-1 ${
                          localTheme === 'dark' 
                            ? 'text-zinc-50 focus:bg-zinc-800' 
                            : 'text-gray-800 focus:bg-gray-100'
                        }`}
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => handleContentEdit(e)}
                      >
                        Remote Sensing in Mass Balance Studies
                      </h3>
                      <p
                        className={`mt-2 text-sm outline-none rounded p-1 ${
                          localTheme === 'dark'
                            ? 'text-zinc-400 focus:bg-zinc-800'
                            : 'text-gray-600 focus:bg-gray-100'
                        }`}
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => handleContentEdit(e)}
                      >
                        Modern approaches to glacier monitoring using satellite imagery and digital elevation models to assess volume changes and mass balance at regional to global scales.
                      </p>
                      <div className="mt-2 flex space-x-2">
                        <span
                          className={`rounded-full px-2 py-1 text-xs ${
                            localTheme === 'dark'
                              ? 'bg-zinc-800 text-zinc-400'
                              : 'bg-pink-100 text-zinc-600'
                          }`}
                          contentEditable
                          suppressContentEditableWarning
                          onBlur={(e) => handleContentEdit(e)}
                        >
                          remote sensing
                        </span>
                        <span
                          className={`rounded-full px-2 py-1 text-xs ${
                            localTheme === 'dark'
                              ? 'bg-zinc-800 text-zinc-400'
                              : 'bg-pink-100 text-zinc-600'
                          }`}
                          contentEditable
                          suppressContentEditableWarning
                          onBlur={(e) => handleContentEdit(e)}
                        >
                          mass balance
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div layout>
                <Card 
                  onClick={() => setSelectedNote(3)}
                  role="button"
                  tabIndex={0}
                  className={`${
                    localTheme === 'dark' 
                      ? 'border-zinc-800 bg-zinc-900/50' 
                      : 'border-gray-100 bg-white shadow-lg shadow-gray-200/50 hover:shadow-gray-200/70 transition-shadow'
                  } cursor-pointer hover:scale-[1.02] transition-transform`}
                >
                  <CardContent className="p-4">
                    <h3
                      className={`mb-2 font-medium outline-none rounded px-1 ${
                        localTheme === 'dark' 
                          ? 'text-zinc-50 focus:bg-zinc-800' 
                          : 'text-gray-800 focus:bg-gray-100'
                      }`}
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => handleContentEdit(e)}
                    >
                      Energy Balance
                    </h3>
                    <p
                      className={`text-sm outline-none rounded p-1 ${
                        localTheme === 'dark'
                          ? 'text-zinc-400 focus:bg-zinc-800'
                          : 'text-gray-600 focus:bg-gray-100'
                      }`}
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => handleContentEdit(e)}
                    >
                      The surface energy balance determines melt rates and is given by:
                    </p>
                    <div
                      className="my-4 text-center text-md"
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => {
                        handleContentEdit(e);
                        if (window.MathJax) window.MathJax.typeset();
                      }}
                    >
                      {"\\[Q_M = Q_N + Q_H + Q_L + Q_R + Q_G\\]"}
                    </div>
                    <p
                      className="text-sm text-zinc-400 outline-none focus:bg-zinc-800 rounded p-1"
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => handleContentEdit(e)}
                    >
                      Where QM is energy available for melt, QN is net radiation, QH is sensible heat flux.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div layout>
                <Card 
                  onClick={() => setSelectedNote(4)}
                  role="button"
                  tabIndex={0}
                  className={`${
                    localTheme === 'dark' 
                      ? 'border-zinc-800 bg-zinc-900/50' 
                      : 'border-gray-100 bg-white shadow-lg shadow-gray-200/50 hover:shadow-gray-200/70 transition-shadow'
                  } cursor-pointer hover:scale-[1.02] transition-transform`}
                >
                  <CardContent className="p-4">
                    <h3
                      className={`mb-2 font-medium outline-none rounded px-1 ${
                        localTheme === 'dark' 
                          ? 'text-zinc-50 focus:bg-zinc-800' 
                          : 'text-gray-800 focus:bg-gray-100'
                      }`}
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => handleContentEdit(e)}
                    >
                      Ice Flow Modeling
                    </h3>
                    <p
                      className={`text-sm outline-none rounded p-1 ${
                        localTheme === 'dark'
                          ? 'text-zinc-400 focus:bg-zinc-800'
                          : 'text-gray-600 focus:bg-gray-100'
                      }`}
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => handleContentEdit(e)}
                    >
                      Glen's Flow Law describes ice deformation:
                    </p>
                    <div
                      className="my-4 text-center text-lg"
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => {
                        handleContentEdit(e);
                        if (window.MathJax) window.MathJax.typeset();
                      }}
                    >
                      {"\\[\\dot{\\epsilon} = A\\tau^n\\]"}
                    </div>
                    <p
                      className="text-sm text-zinc-400 outline-none focus:bg-zinc-800 rounded p-1"
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => handleContentEdit(e)}
                    >
                      Where ε̇ is strain rate, τ is shear stress, n is typically 3, and A is a temperature-dependent flow parameter.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div layout>
                <Card 
                  onClick={() => setSelectedNote(5)}
                  role="button"
                  tabIndex={0}
                  className={`${
                    localTheme === 'dark' 
                      ? 'border-zinc-800 bg-zinc-900/50' 
                      : 'border-gray-100 bg-white shadow-lg shadow-gray-200/50 hover:shadow-gray-200/70 transition-shadow'
                  } cursor-pointer hover:scale-[1.02] transition-transform`}
                >
                  <CardContent className="p-4">
                    <h3
                      className={`mb-2 font-medium outline-none rounded px-1 ${
                        localTheme === 'dark' 
                          ? 'text-zinc-50 focus:bg-zinc-800' 
                          : 'text-gray-800 focus:bg-gray-100'
                      }`}
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => handleContentEdit(e)}
                    >
                      Mass Balance
                    </h3>
                    <p
                      className={`text-sm outline-none rounded p-1 ${
                        localTheme === 'dark'
                          ? 'text-zinc-400 focus:bg-zinc-800'
                          : 'text-gray-600 focus:bg-gray-100'
                      }`}
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => handleContentEdit(e)}
                    >
                      What we have here is called the temperature-index model, it takes into account the temperature and the solar radiation to calculate the melt, allowing us to relate to the energy balance model as well.
                    </p>
                    <div
                      className="my-4 text-center text-xs"
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => {
                        handleContentEdit(e);
                        if (window.MathJax) window.MathJax.typeset();
                      }}
                    >
                      {"\\[M=\\left\\{\\begin{array}{c}TF\\cdot T+SRF(1-\\alpha)G\\cdot Icf: T \\cup G>0 \\\\ 0: T \\leq 1 \\cap G=0\\end{array}\\right.\\]"}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              drag
              dragMomentum={false}
              dragElastic={0.1}
              dragConstraints={{
                left: -DRAG_BOUNDARY,
                right: DRAG_BOUNDARY,
                top: -DRAG_BOUNDARY,
                bottom: DRAG_BOUNDARY
              }}
              style={{ scale }}
              initial={{ x: window.innerWidth / 2 - 400, y: window.innerHeight / 4 }}
              animate={{ x: position.x, y: position.y }}
              onDrag={(_, info) => {
                const newX = Math.min(Math.max(info.point.x, -DRAG_BOUNDARY), DRAG_BOUNDARY)
                const newY = Math.min(Math.max(info.point.y, -DRAG_BOUNDARY), DRAG_BOUNDARY)
                setPosition({ x: newX, y: newY })
              }}
              whileHover={{ cursor: 'grab' }}
              whileTap={{ cursor: 'grabbing' }}
              className="relative h-[600px] w-full"
            >
              <div className="absolute inset-0" 
                onWheel={(e) => {
                  e.preventDefault()
                  const scaleFactor = 0.001
                  const newScale = scale - e.deltaY * scaleFactor
                  setScale(Math.min(Math.max(MIN_SCALE, newScale), MAX_SCALE))
                }}
              >
                {nodes.map((node, index) => (
                  <motion.div
                    key={node.id}
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      x: Math.cos(index * (Math.PI * 2) / nodes.length) * 200 + window.innerWidth / 4,
                      y: Math.sin(index * (Math.PI * 2) / nodes.length) * 200 + 300,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className={`rounded-full p-4 ${
                      localTheme === 'dark' 
                        ? 'bg-emerald-500/20' 
                        : 'bg-pink-50'
                    }`}>
                      <h3 className={`text-sm ${
                        localTheme === 'dark' 
                          ? 'text-emerald-200' 
                          : 'text-zinc-900'
                      }`}>{node.title}</h3>
                    </div>
                    {node.connections.map(connectionId => {
                      const targetNode = nodes.find(n => n.id === connectionId)
                      if (!targetNode) return null
                      const targetIndex = nodes.findIndex(n => n.id === connectionId)
                      return (
                        <svg
                          key={`${node.id}-${connectionId}`}
                          className="absolute left-1/2 top-1/2 -z-10"
                          style={{
                            width: '400px',
                            height: '400px',
                            strokeDasharray: '5,5',
                          }}
                        >
                          <line
                            x1="0"
                            y1="0"
                            x2={Math.cos(targetIndex * (Math.PI * 2) / nodes.length) * 200 - 
                                Math.cos(index * (Math.PI * 2) / nodes.length) * 200}
                            y2={Math.sin(targetIndex * (Math.PI * 2) / nodes.length) * 200 - 
                                Math.sin(index * (Math.PI * 2) / nodes.length) * 200}
                            stroke={localTheme === 'dark' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(244, 114, 182, 0.2)'}
                            strokeWidth="2"
                          />
                        </svg>
                      )
                    })}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <Script
          id="MathJax-script"
          strategy="afterInteractive"
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"
        />
      </main>

      {/* Modal Popup */}
      {selectedNote !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className={`relative w-full max-w-2xl h-[80vh] rounded-xl p-6 ${
              localTheme === 'dark' 
                ? 'bg-zinc-900/95 border border-zinc-800 backdrop-blur-sm' 
                : 'bg-white/95 border border-gray-200 backdrop-blur-sm'
            }`}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedNote(null)}
              className={`absolute top-6 right-6 p-2 rounded-full transition-colors ${
                localTheme === 'dark' 
                  ? 'hover:bg-zinc-800' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Modal content with existing note content */}
            <div className="space-y-6 h-full overflow-y-auto px-2">
              <h2
                className={`text-2xl font-medium outline-none rounded px-1 mb-8 ${
                  localTheme === 'dark' 
                    ? 'text-zinc-50 focus:bg-zinc-800' 
                    : 'text-gray-800 focus:bg-gray-100'
                }`}
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleContentEdit(e)}
              >
                {noteContents[selectedNote]?.title || ''}
              </h2>
              
              {/* Image if exists */}
              {noteContents[selectedNote]?.image && (
                <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
                  <Image
                    src={noteContents[selectedNote].image.src}
                    alt={noteContents[selectedNote].image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              
              <div
                className="text-lg outline-none rounded p-2"
                contentEditable
                suppressContentEditableWarning
                ref={contentEditableRef}
                onKeyDown={handleKeyDown}
                onBlur={(e) => handleContentEdit(e)}
              >
                {noteContents[selectedNote]?.content || ''}
              </div>
              
              {/* Math content if exists */}
              {noteContents[selectedNote]?.math && (
                <div
                  className="my-6 text-center text-lg"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => {
                    handleContentEdit(e);
                    if (window.MathJax) window.MathJax.typeset();
                  }}
                >
                  {noteContents[selectedNote].math}
                </div>
              )}
              
              {/* Additional content if exists */}
              {noteContents[selectedNote].additionalContent && (
                <div
                  className="my-6 text-center text-lg"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => {
                    handleContentEdit(e);
                    if (window.MathJax) window.MathJax.typeset();
                  }}
                >
                  {noteContents[selectedNote].additionalContent}
                </div>
              )}
              
              {/* Tags if exist */}
              {noteContents[selectedNote].tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {noteContents[selectedNote].tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`rounded-full px-3 py-1 text-sm ${
                        localTheme === 'dark'
                          ? 'bg-zinc-800 text-zinc-400'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              {/* Editing toolbar */}
              <div className="flex gap-3 mt-8 pt-4 border-t border-zinc-800">
                <Button variant="ghost" size="sm">
                  <ImagePlus className="w-4 h-4 mr-2" />
                  Add Image
                </Button>
                <Button variant="ghost" size="sm">
                  <Link className="w-4 h-4 mr-2" />
                  Add Link
                </Button>
                <Button variant="ghost" size="sm">
                  <Type className="w-4 h-4 mr-2" />
                  Add Math
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <SlashCommandMenu
        isOpen={slashMenuOpen}
        onClose={() => setSlashMenuOpen(false)}
        onSelect={handleSlashCommand}
        position={slashMenuPosition}
      />
    </div>
  )
}