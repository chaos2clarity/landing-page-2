'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const demoContent = [
  {
    id: 1,
    title: "Math",
    image: "/images/demo/cms-demo.jpg", // Replace with your image paths
    description: "Type math equations with intuition"
  },
  {
    id: 2,
    title: "Diagrams",
    image: "/images/demo/ecommerce-demo.jpg",
    description: "Fast and easy diagram creation"
  },
  {
    id: 3,
    title: "Code",
    image: "/images/demo/app-builder-demo.jpg",
    description: "An executable code editor"
  },
  {
    id: 4,
    title: "Format",
    image: "/images/demo/dam-demo.jpg",
    description: "Format your text with flexibility."
  }
]

export default function DemoSection() {
  const [activeId, setActiveId] = useState(1)

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Left side - Interactive text */}
          <div className="w-full md:w-1/2 space-y-8">
            {demoContent.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer group"
                onMouseEnter={() => setActiveId(item.id)}
              >
                <h3 className={`text-6xl font-medium transition-colors duration-300 ${
                  activeId === item.id ? 'text-[#A19FE7]' : 'text-gray-400'
                }`}>
                  {item.title}
                </h3>
                <p className={`mt-2 text-xl transition-colors duration-300 ${
                  activeId === item.id ? 'text-gray-900' : 'text-gray-00'
                }`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right side - Image display */}
          <div className="w-full md:w-1/2 h-[600px] relative bg-gray-100 rounded-xl overflow-hidden">
            <AnimatePresence mode='wait'>
              {demoContent.map((item) => (
                activeId === item.id && (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
} 