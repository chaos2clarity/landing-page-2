'use client'

import * as React from "react"
import { Search, Calculator, Code, FlaskRoundIcon as Flask, GitBranch, BarChart } from 'lucide-react'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command"

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)

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
    <div className="w-full bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800">
      <button
        onClick={() => setOpen(true)}
        className="flex h-14 w-full items-center gap-3 rounded-lg bg-gray-100 dark:bg-gray-800 px-6 text-base text-gray-700 dark:text-gray-300 shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <Search className="h-4 w-4" />
        <span>Search for Command Prompts...</span>
      </button>
      
      {open && (
        <div className="mt-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg">
          <Command className="rounded-lg">
            <CommandInput placeholder="Search for Command Prompts..." className="border-none focus:ring-0" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                <CommandItem className="flex items-center py-4 space-x-4">
                  <Calculator className="h-6 w-6 text-blue-400" />
                  <div className="flex flex-col">
                    <span className="text-base font-medium">/Math</span>
                    <span className="text-xs text-gray-400">
                      No code rendered math equations
                    </span>
                  </div>
                </CommandItem>
                <CommandItem className="flex items-center py-4 space-x-4">
                  <Code className="h-6 w-6 text-green-400" />
                  <div className="flex flex-col">
                    <span className="text-base font-medium">/Code</span>
                    <span className="text-xs text-gray-400">
                      Executable code blocks
                    </span>
                  </div>
                </CommandItem>
                <CommandItem className="flex items-center py-4 space-x-4">
                  <Flask className="h-6 w-6 text-purple-400" />
                  <div className="flex flex-col">
                    <span className="text-base font-medium">/Chemistry</span>
                    <span className="text-xs text-gray-400">
                      Draw & Generate Reaction Mechanisms
                    </span>
                  </div>
                </CommandItem>
                <CommandItem className="flex items-center py-4 space-x-4">
                  <GitBranch className="h-6 w-6 text-yellow-400" />
                  <div className="flex flex-col">
                    <span className="text-base font-medium">/FSMGraph</span>
                    <span className="text-xs text-gray-400">
                      Finite State Machine Visualizer
                    </span>
                  </div>
                </CommandItem>
                <CommandItem className="flex items-center py-4 space-x-4">
                  <BarChart className="h-6 w-6 text-red-400" />
                  <div className="flex flex-col">
                    <span className="text-base font-medium">/Plots</span>
                    <span className="text-xs text-gray-400">
                      Generate Plots with Data
                    </span>
                  </div>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      )}
    </div>
  )
} 