'use client'

import * as React from "react"
import { Search, Calculator, Code, FlaskRoundIcon as Flask, GitBranch, BarChart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command"

const PreviewWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="fixed inset-0 pointer-events-none">
    <div className="relative w-full h-full">
      {children}
    </div>
  </div>
)

const MathPreview = () => (
  <PreviewWrapper>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute right-[20px] top-[50%] bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 w-80 z-[60] pointer-events-auto"
    >
      <div className="space-y-3">
        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
          Quick Math Preview
        </div>
        <div className="space-y-2">
          <div className="rounded-md bg-zinc-50 dark:bg-zinc-800/50 p-2 text-center text-gray-900 dark:text-gray-100">
            ∫<sub>a</sub><sup>b</sup> f(x) dx
          </div>
          <div className="rounded-md bg-zinc-50 dark:bg-zinc-800/50 p-2 text-center text-gray-900 dark:text-gray-100">
            E = mc<sup>2</sup>
          </div>
        </div>
      </div>
    </motion.div>
  </PreviewWrapper>
)

const CodePreview = () => (
  <PreviewWrapper>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute right-[20px] top-[50%] bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 w-80 z-[60] pointer-events-auto"
    >
      <div className="space-y-3">
        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
          Box Plot Example
        </div>
        <div className="rounded-md bg-zinc-950 p-3 font-mono text-[11px] overflow-x-auto">
          <pre className="space-y-1">
            <code><span className="text-purple-400">import</span> <span className="text-blue-400">numpy</span> <span className="text-purple-400">as</span> <span className="text-blue-400">np</span></code>
            <code><span className="text-purple-400">import</span> <span className="text-blue-400">seaborn</span> <span className="text-purple-400">as</span> <span className="text-blue-400">sns</span></code>
            <br />
            <code><span className="text-emerald-400"># Generate sample data</span></code>
            <code>data = <span className="text-blue-400">np</span>.random.normal(<span className="text-orange-400">0</span>, <span className="text-orange-400">1</span>, <span className="text-orange-400">100</span>)</code>
            <br />
            <code><span className="text-emerald-400"># Create boxplot</span></code>
            <code><span className="text-blue-400">sns</span>.boxplot(data=data)</code>
            <code><span className="text-blue-400">plt</span>.title(<span className="text-yellow-300">'Distribution'</span>)</code>
          </pre>
        </div>
      </div>
    </motion.div>
  </PreviewWrapper>
)

const ChemistryPreview = () => (
  <PreviewWrapper>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute right-[20px] top-[50%] bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 w-80 z-[60] pointer-events-auto"
    >
      <div className="space-y-3">
        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
          Reaction Mechanism
        </div>
        <div className="bg-white rounded-lg p-3 relative h-[120px] shadow-sm">
          <Image
            src="/chemistryreactiondrawing.png"
            alt="Chemistry Reaction Mechanism"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </motion.div>
  </PreviewWrapper>
)

const NodeGraphPreview = () => (
  <PreviewWrapper>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute right-[20px] top-[50%] bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 w-80 z-[60] pointer-events-auto"
    >
      <div className="space-y-3">
        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
          Knowledge Graph
        </div>
        <div className="rounded-md bg-zinc-50 dark:bg-zinc-800/50 p-3 h-[140px] relative">
          {/* Central Node */}
          <motion.div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#A19FE7] rounded-full"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Connected Nodes */}
          <motion.div className="absolute left-[20%] top-[20%]">
            <motion.div 
              className="w-4 h-4 bg-[#A19FE7] bg-opacity-80 rounded-full"
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          <motion.div className="absolute right-[20%] top-[20%]">
            <motion.div 
              className="w-4 h-4 bg-[#A19FE7] bg-opacity-80 rounded-full"
              animate={{ y: [-3, 1, -3] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </motion.div>

          <motion.div className="absolute left-[20%] bottom-[20%]">
            <motion.div 
              className="w-4 h-4 bg-[#A19FE7] bg-opacity-80 rounded-full"
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 2.8, repeat: Infinity }}
            />
          </motion.div>

          <motion.div className="absolute right-[20%] bottom-[20%]">
            <motion.div 
              className="w-4 h-4 bg-[#A19FE7] bg-opacity-80 rounded-full"
              animate={{ y: [-1, 3, -1] }}
              transition={{ duration: 2.3, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  </PreviewWrapper>
)

const PlotsPreview = () => (
  <PreviewWrapper>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute right-[20px] top-[50%] bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 w-80 z-[60] pointer-events-auto"
    >
      <div className="space-y-3">
        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
          Scientific Visualizations
        </div>
        <div className="grid grid-cols-2 gap-2">
          {/* Scatter Plot */}
          <div className="rounded-md bg-zinc-50 dark:bg-zinc-800/50 p-3 relative h-24">
            <div className="text-[10px] text-gray-500 dark:text-gray-400 mb-1">Scatter Plot</div>
            <div className="relative h-16">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-blue-400"
                  style={{
                    left: `${15 + Math.random() * 70}%`,
                    top: `${15 + Math.random() * 70}%`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Bar Chart */}
          <div className="rounded-md bg-zinc-50 dark:bg-zinc-800/50 p-3 relative h-24">
            <div className="text-[10px] text-gray-500 dark:text-gray-400 mb-1">Bar Chart</div>
            <div className="relative h-16 flex items-end justify-around">
              {[0.6, 0.9, 0.4, 0.7].map((height, i) => (
                <motion.div
                  key={i}
                  className="w-3 bg-green-400 rounded-t"
                  initial={{ height: 0 }}
                  animate={{ height: `${height * 100}%` }}
                  transition={{
                    duration: 1,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </PreviewWrapper>
)

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)
  const [hoveredCommand, setHoveredCommand] = React.useState<string | null>(null)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <div className="relative w-full bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800">
      <button
        onClick={() => setOpen(true)}
        className="flex h-14 w-full items-center gap-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 px-6 text-base text-gray-700 dark:text-gray-300 shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <Search className="h-4 w-4" />
        <span>Search for Command Prompts...</span>
      </button>
      
      {open && (
        <div className="mt-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-lg overflow-visible">
          <Command className="rounded-lg">
            <CommandInput placeholder="Search for Command Prompts..." className="border-none focus:ring-0" />
            <CommandList className="overflow-visible">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup className="overflow-visible">
                <div className="relative">
                  <CommandItem 
                    onMouseEnter={() => setHoveredCommand('math')}
                    onMouseLeave={() => setHoveredCommand(null)}
                    className="flex items-center py-4 px-6 space-x-4 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-700/50 transition-colors"
                  >
                    <Calculator className="h-6 w-6 text-blue-400" />
                    <div className="flex flex-col">
                      <span className="text-base font-medium dark:text-gray-300">/Math</span>
                      <span className="text-xs text-gray-400">
                        No-Code Math Equations Editor
                      </span>
                    </div>
                    <AnimatePresence>
                      {hoveredCommand === 'math' && <MathPreview />}
                    </AnimatePresence>
                  </CommandItem>
                </div>
                <div className="relative">
                  <CommandItem 
                    onMouseEnter={() => setHoveredCommand('code')}
                    onMouseLeave={() => setHoveredCommand(null)}
                    className="flex items-center py-4 px-6 space-x-4 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-700/50 transition-colors"
                  >
                    <Code className="h-6 w-6 text-green-400" />
                    <div className="flex flex-col">
                      <span className="text-base font-medium dark:text-gray-300">/Code</span>
                      <span className="text-xs text-gray-400">
                        Executable code blocks
                      </span>
                    </div>
                    <AnimatePresence>
                      {hoveredCommand === 'code' && <CodePreview />}
                    </AnimatePresence>
                  </CommandItem>
                </div>
                <div className="relative">
                  <CommandItem 
                    onMouseEnter={() => setHoveredCommand('chemistry')}
                    onMouseLeave={() => setHoveredCommand(null)}
                    className="flex items-center py-4 px-6 space-x-4 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-700/50 transition-colors"
                  >
                    <Flask className="h-6 w-6 text-purple-400" />
                    <div className="flex flex-col">
                      <span className="text-base font-medium dark:text-gray-300">/Chemistry</span>
                      <span className="text-xs text-gray-400">
                        Draw & Generate Reaction Mechanisms
                      </span>
                    </div>
                    <AnimatePresence>
                      {hoveredCommand === 'chemistry' && <ChemistryPreview />}
                    </AnimatePresence>
                  </CommandItem>
                </div>
                <div className="relative">
                  <CommandItem 
                    onMouseEnter={() => setHoveredCommand('nodegraph')}
                    onMouseLeave={() => setHoveredCommand(null)}
                    className="flex items-center py-4 px-6 space-x-4 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-700/50 transition-colors"
                  >
                    <GitBranch className="h-6 w-6 text-yellow-400" />
                    <div className="flex flex-col">
                      <span className="text-base font-medium dark:text-gray-300">/NodeGraph</span>
                      <span className="text-xs text-gray-400">
                        Interactive Node Diagrams
                      </span>
                    </div>
                    <AnimatePresence>
                      {hoveredCommand === 'nodegraph' && <NodeGraphPreview />}
                    </AnimatePresence>
                  </CommandItem>
                </div>
                <div className="relative">
                  <CommandItem 
                    onMouseEnter={() => setHoveredCommand('plots')}
                    onMouseLeave={() => setHoveredCommand(null)}
                    className="flex items-center py-4 px-6 space-x-4 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-700/50 transition-colors"
                  >
                    <BarChart className="h-6 w-6 text-red-400" />
                    <div className="flex flex-col">
                      <span className="text-base font-medium dark:text-gray-300">/Plots</span>
                      <span className="text-xs text-gray-400">
                        Generate Plots with Data
                      </span>
                    </div>
                    <AnimatePresence>
                      {hoveredCommand === 'plots' && <PlotsPreview />}
                    </AnimatePresence>
                  </CommandItem>
                </div>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      )}
    </div>
  )
} 