'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Heading1, ListOrdered, Calculator, Text, Image as ImageIcon } from 'lucide-react'

interface SlashCommandProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (command: string) => void
  position: { x: number; y: number }
}

const commands = [
  {
    id: 'heading',
    name: 'Heading 1',
    icon: Heading1,
    description: 'Large section heading',
    command: 'heading1'
  },
  {
    id: 'math',
    name: 'Math Equation',
    icon: Calculator,
    description: 'Insert mathematical equation',
    command: 'math'
  },
  {
    id: 'bullet-list',
    name: 'Bullet List',
    icon: ListOrdered,
    description: 'Create a bullet list',
    command: 'bulletList'
  },
  {
    id: 'text',
    name: 'Text',
    icon: Text,
    description: 'Just start writing with plain text',
    command: 'text'
  },
  {
    id: 'image',
    name: 'Image',
    icon: ImageIcon,
    description: 'Upload or embed an image',
    command: 'image'
  }
]

export function SlashCommandMenu({ isOpen, onClose, onSelect, position }: SlashCommandProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [search, setSearch] = useState('')
  const menuRef = useRef<HTMLDivElement>(null)

  const filteredCommands = commands.filter(command => 
    command.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(i => (i + 1) % filteredCommands.length)
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(i => (i - 1 + filteredCommands.length) % filteredCommands.length)
        break
      case 'Enter':
        e.preventDefault()
        if (filteredCommands[selectedIndex]) {
          onSelect(filteredCommands[selectedIndex].command)
          onClose()
        }
        break
      case 'Escape':
        e.preventDefault()
        onClose()
        break
    }
  }, [isOpen, filteredCommands, selectedIndex, onSelect, onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  if (!isOpen) return null

  return (
    <motion.div
      ref={menuRef}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y
      }}
      className="fixed z-[9999] w-72 rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-zinc-900"
    >
      <div className="p-2">
        {filteredCommands.map((command, index) => {
          const Icon = command.icon
          return (
            <button
              key={command.id}
              onClick={() => {
                onSelect(command.command)
                onClose()
              }}
              className={`flex w-full items-center space-x-3 rounded-md px-2 py-1 text-left text-sm hover:bg-gray-100 dark:hover:bg-zinc-800 ${
                index === selectedIndex ? 'bg-gray-100 dark:bg-zinc-800' : ''
              }`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 dark:border-gray-700">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">{command.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {command.description}
                </p>
              </div>
              {index === selectedIndex && (
                <div className="ml-auto">
                  <Check className="h-4 w-4" />
                </div>
              )}
            </button>
          )
        })}
      </div>
    </motion.div>
  )
} 