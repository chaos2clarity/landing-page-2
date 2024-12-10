import { useState } from 'react'
import { BarChart, Calculator, ChevronDown } from 'lucide-react'

const sampleAssets = {
  math: [
    {
      id: 'math-1',
      name: 'Runge-Kutta Method',
      content: `k₁ = h·f(x, y)
k₂ = h·f(x + h/2, y + k₁/2)
k₃ = h·f(x + h/2, y + k₂/2)
k₄ = h·f(x + h, y + k₃)
y(x + h) = y(x) + (k₁ + 2k₂ + 2k₃ + k₄)/6`
    },
    {
      id: 'math-2',
      name: "Ohm's Law",
      content: 'V = IR'
    }
  ],
  visualizations: [
    {
      id: 'viz-1',
      name: 'Graph 1',
      type: 'line-chart',
      data: {
        labels: ['Jan', 'Feb', 'Mar'],
        values: [30, 50, 20]
      }
    },
    {
      id: 'viz-2',
      name: 'Graph 2',
      type: 'bar-chart',
      data: {
        labels: ['A', 'B', 'C'],
        values: [40, 60, 30]
      }
    }
  ]
};

export default function RightSidebar() {
  const [selectedFormat, setSelectedFormat] = useState<'ieee' | 'apa'>('ieee');
  const [expandedSection, setExpandedSection] = useState<'math' | 'viz' | null>(null);

  const handleDragStart = (e: React.DragEvent, asset: any) => {
    e.dataTransfer.setData('application/json', JSON.stringify(asset));
  };

  const toggleSection = (section: 'math' | 'viz') => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="w-64 bg-[#1C1C1E] border-l border-[#3C3C3E] flex flex-col">
      {/* Auto Format Section */}
      <div className="p-3 border-b border-[#3C3C3E]">
        <h2 className="text-sm font-medium text-white mb-2">Auto Format</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setSelectedFormat('ieee')}
            className={`flex-1 py-1 px-3 rounded text-xs ${
              selectedFormat === 'ieee'
                ? 'bg-[#0A84FF] text-white'
                : 'bg-[#2C2C2E] text-gray-400 hover:bg-[#3C3C3E]'
            } transition-colors`}
          >
            IEEE Format
          </button>
          <button
            onClick={() => setSelectedFormat('apa')}
            className={`flex-1 py-1 px-3 rounded text-xs ${
              selectedFormat === 'apa'
                ? 'bg-[#0A84FF] text-white'
                : 'bg-[#2C2C2E] text-gray-400 hover:bg-[#3C3C3E]'
            } transition-colors`}
          >
            APA Format
          </button>
        </div>
      </div>

      {/* Assets Section */}
      <div className="flex-1 p-3 overflow-auto">
        <h2 className="text-sm font-medium text-white mb-2">Assets</h2>
        
        {/* Math Section */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection('math')}
            className="w-full flex items-center justify-between text-sm text-gray-300 hover:text-white mb-2"
          >
            <div className="flex items-center">
              <Calculator className="h-4 w-4 mr-2" />
              <span>Math Equations</span>
            </div>
            <ChevronDown className={`h-4 w-4 transform transition-transform ${
              expandedSection === 'math' ? 'rotate-180' : ''
            }`} />
          </button>
          
          {expandedSection === 'math' && (
            <div className="space-y-2">
              {sampleAssets.math.map(asset => (
                <div
                  key={asset.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, asset)}
                  className="bg-[#2C2C2E] p-2 rounded cursor-move hover:bg-[#3C3C3E] transition-colors"
                >
                  <p className="text-sm text-gray-300 mb-1">{asset.name}</p>
                  <pre className="text-xs text-gray-400 font-mono overflow-x-auto">
                    {asset.content}
                  </pre>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Visualizations Section */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection('viz')}
            className="w-full flex items-center justify-between text-sm text-gray-300 hover:text-white mb-2"
          >
            <div className="flex items-center">
              <BarChart className="h-4 w-4 mr-2" />
              <span>Visualizations</span>
            </div>
            <ChevronDown className={`h-4 w-4 transform transition-transform ${
              expandedSection === 'viz' ? 'rotate-180' : ''
            }`} />
          </button>
          
          {expandedSection === 'viz' && (
            <div className="space-y-2">
              {sampleAssets.visualizations.map(asset => (
                <div
                  key={asset.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, asset)}
                  className="bg-[#2C2C2E] p-2 rounded cursor-move hover:bg-[#3C3C3E] transition-colors group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm text-gray-300">{asset.name}</p>
                    <span className="text-xs text-gray-500 group-hover:text-gray-400">Drag to add</span>
                  </div>
                  <div className="h-20 bg-[#3C3C3E] rounded flex items-center justify-center">
                    <BarChart className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 