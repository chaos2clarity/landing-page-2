'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '@/components/research/Sidebar';
import MainContent from '@/components/research/MainContent';
import RightSidebar from '@/components/research/RightSidebar';

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              The Future of Scientific Note-Taking
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Transform your research workflow with our powerful note-taking platform designed specifically for scientists and researchers.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/join-waitlist"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join Waitlist
              </a>
              <a href="#demo" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300">
                Try Demo <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div id="demo" className="py-24 sm:py-32 bg-gray-50 dark:bg-zinc-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Interactive Demo</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Experience Clarity in Action
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Take a look at our powerful research interface. This is how your scientific notes could look.
            </p>
          </div>

          <motion.div 
            className="rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-[800px] flex bg-gray-900 text-white">
              <Sidebar />
              <MainContent />
              <RightSidebar />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Powerful Features for Scientific Research
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <motion.div 
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    name: 'Interactive Math & Equations',
    description: 'Write and edit mathematical equations with real-time rendering and LaTeX support.',
  },
  {
    name: 'Smart Citations',
    description: 'Automatically format citations and create bibliographies in your preferred style.',
  },
  {
    name: 'Version Control',
    description: 'Track changes, compare versions, and collaborate with team members seamlessly.',
  },
  {
    name: 'Data Integration',
    description: 'Import and visualize data directly from popular scientific tools and formats.',
  },
  {
    name: 'AI-Powered Insights',
    description: 'Get intelligent suggestions and automate routine tasks with our AI assistant.',
  },
  {
    name: 'Cross-Platform Sync',
    description: 'Access your notes from anywhere, with real-time synchronization across all devices.',
  },
]; 