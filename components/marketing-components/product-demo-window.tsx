'use client'

import Image from 'next/image'

export default function ProductDemoWindow() {
  return (
    <div className="mt-12 relative">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
        {/* Browser-like header */}
        <div className="flex items-center justify-between bg-gray-50 px-4 py-3 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-white rounded px-3 py-1 text-sm text-gray-500">
              Clarity - Math & Science Notes
            </div>
          </div>
        </div>
        
        {/* Demo content */}
        <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Mathematical Equation Editor
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 mb-2">Write equations naturally:</p>
                  <div className="text-lg font-mono">
                    E = mc²
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 mb-2">Complex formulas:</p>
                  <div className="text-lg font-mono">
                    ∫₀^∞ e^(-x²) dx = √π/2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
