'use client'

import * as React from "react"
import { Search, Calculator, Code, FlaskRoundIcon as Flask, GitBranch, BarChart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
          <div className="rounded-md bg-zinc-50 dark:bg-zinc-800/50 p-2 text-center">
            ∫<sub>a</sub><sup>b</sup> f(x) dx
          </div>
          <div className="rounded-md bg-zinc-50 dark:bg-zinc-800/50 p-2 text-center">
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
          SN2 Reaction Mechanism
        </div>
        <div className="rounded-md bg-zinc-50 dark:bg-zinc-800/50 p-3 text-center space-y-2">
          <div className="flex items-center justify-center space-x-3 font-mono text-sm">
            <span>CH₃Br</span>
            <span className="text-blue-500">+</span>
            <span>OH⁻</span>
            <span className="text-blue-500">→</span>
            <span>CH₃OH</span>
            <span className="text-blue-500">+</span>
            <span>Br⁻</span>
          </div>
          <div className="flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
            <span>Nucleophilic Substitution</span>
          </div>
          <div className="flex items-center justify-center mt-2">
            <div className="relative w-48 h-12 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-xs text-blue-600 dark:text-blue-400"
                >
                  ⚡ Energy: -42.5 kJ/mol
                </motion.div>
              </div>
            </div>
          </div>
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
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="bg-purple-500/90 text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap">
              Climate Change
            </div>
          </motion.div>

          {/* Connected Nodes */}
          <motion.div 
            className="absolute left-[15%] top-[20%] -translate-x-1/2"
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="bg-blue-400/80 text-white text-[10px] px-2 py-1 rounded-full whitespace-nowrap">
              Ocean Acidification
            </div>
            {/* Connection Line */}
            <motion.div 
              className="absolute top-1/2 right-0 h-px bg-blue-200/50 dark:bg-blue-500/30"
              style={{ width: '60px', transform: 'rotate(45deg) translateY(-50%)' }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <motion.div 
            className="absolute right-[15%] top-[20%] translate-x-1/2"
            animate={{ y: [-3, 1, -3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <div className="bg-green-500/80 text-white text-[10px] px-2 py-1 rounded-full whitespace-nowrap">
              Forest Conservation
            </div>
            {/* Connection Line */}
            <motion.div 
              className="absolute top-1/2 left-0 h-px bg-green-200/50 dark:bg-green-500/30"
              style={{ width: '60px', transform: 'rotate(-45deg) translateY(-50%)' }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <motion.div 
            className="absolute left-[20%] bottom-[20%] -translate-x-1/2"
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 2.8, repeat: Infinity }}
          >
            <div className="bg-orange-400/80 text-white text-[10px] px-2 py-1 rounded-full whitespace-nowrap">
              Global Temperature
            </div>
            {/* Connection Line */}
            <motion.div 
              className="absolute bottom-1/2 right-0 h-px bg-orange-200/50 dark:bg-orange-500/30"
              style={{ width: '70px', transform: 'rotate(-45deg) translateY(50%)' }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <motion.div 
            className="absolute right-[20%] bottom-[20%] translate-x-1/2"
            animate={{ y: [-1, 3, -1] }}
            transition={{ duration: 2.3, repeat: Infinity }}
          >
            <div className="bg-red-400/80 text-white text-[10px] px-2 py-1 rounded-full whitespace-nowrap">
              Carbon Emissions
            </div>
            {/* Connection Line */}
            <motion.div 
              className="absolute bottom-1/2 left-0 h-px bg-red-200/50 dark:bg-red-500/30"
              style={{ width: '70px', transform: 'rotate(45deg) translateY(50%)' }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
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

          {/* Line Plot */}
          <div className="rounded-md bg-zinc-50 dark:bg-zinc-800/50 p-3 relative h-24">
            <div className="text-[10px] text-gray-500 dark:text-gray-400 mb-1">Line Plot</div>
            <div className="relative h-16">
              <motion.div
                className="absolute inset-x-2 top-1/2 h-px bg-purple-400"
                animate={{
                  d: ["M0,20 Q50,0 100,20", "M0,10 Q50,30 100,10", "M0,20 Q50,0 100,20"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute w-2 h-2 rounded-full bg-purple-400"
                animate={{
                  x: ["0%", "100%", "0%"],
                  y: ["50%", "30%", "50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
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

          {/* Pie Chart */}
          <div className="rounded-md bg-zinc-50 dark:bg-zinc-800/50 p-3 relative h-24">
            <div className="text-[10px] text-gray-500 dark:text-gray-400 mb-1">Pie Chart</div>
            <div className="relative h-16 flex items-center justify-center">
              <motion.div
                className="w-12 h-12 rounded-full border-4 border-transparent"
                style={{
                  background: "conic-gradient(from 0deg, #f87171 0%, #60a5fa 50%, #4ade80 100%)",
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
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