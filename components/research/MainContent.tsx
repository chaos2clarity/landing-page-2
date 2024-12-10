import { Bold, Italic, Underline, Heading1, Heading2, Heading3, Link as LinkIcon, Image, Code } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'

export default function MainContent() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [dropIndicatorPosition, setDropIndicatorPosition] = useState({ x: 0, y: 0 });

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(true);

    // Update drop indicator position
    const contentRect = contentRef.current?.getBoundingClientRect();
    if (contentRect) {
      const x = e.clientX - contentRect.left;
      const y = e.clientY - contentRect.top;
      setDropIndicatorPosition({ x, y });
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (!contentRef.current?.contains(relatedTarget)) {
      setIsDraggingOver(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(false);

    try {
      const data = JSON.parse(e.dataTransfer.getData('application/json'));
      
      // Create the appropriate element based on the asset type
      let element: HTMLElement;
      
      if (data.content) { // Math equation
        element = document.createElement('div');
        element.className = 'math-block bg-gray-50 p-4 my-4 rounded-lg font-mono transform scale-95 opacity-0 transition-all duration-200';
        element.innerHTML = `
          <div class="text-sm font-medium mb-2">${data.name}</div>
          <pre class="text-sm">${data.content}</pre>
        `;
        
        // Animate in after insertion
        setTimeout(() => {
          element.style.transform = 'scale(1)';
          element.style.opacity = '1';
        }, 0);
      } else if (data.type) { // Visualization
        element = document.createElement('div');
        element.className = 'viz-block bg-gray-50 p-4 my-4 rounded-lg transform scale-95 opacity-0 transition-all duration-200';
        element.innerHTML = `
          <div class="text-sm font-medium mb-2">${data.name}</div>
          <div class="bg-white h-40 rounded flex items-center justify-center">
            <span class="text-gray-400">Visualization Placeholder</span>
          </div>
        `;
        
        // Animate in after insertion
        setTimeout(() => {
          element.style.transform = 'scale(1)';
          element.style.opacity = '1';
        }, 0);
      } else {
        return;
      }

      // Insert at cursor position or at drop position
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        range.insertNode(element);
      } else if (contentRef.current) {
        // Create a range at the drop position
        const range = document.caretRangeFromPoint(e.clientX, e.clientY);
        if (range) {
          range.insertNode(element);
        } else {
          contentRef.current.appendChild(element);
        }
      }
    } catch (error) {
      console.error('Error handling drop:', error);
    }
  };

  useEffect(() => {
    const applyIEEEStyles = () => {
      if (contentRef.current) {
        // Add IEEE specific styles
        contentRef.current.style.fontFamily = 'Times New Roman, serif';
        contentRef.current.style.fontSize = '12pt';
        contentRef.current.style.lineHeight = '1.5';
        
        // Style headings
        const headings = contentRef.current.querySelectorAll('h1, h2');
        headings.forEach(heading => {
          heading.classList.add('ieee-heading');
        });

        // Style figures
        const figures = contentRef.current.querySelectorAll('.figure');
        figures.forEach(figure => {
          figure.classList.add('ieee-figure');
        });
      }
    };

    // Listen for format changes
    const handleFormat = (e: CustomEvent) => {
      if (e.detail.style === 'ieee') {
        applyIEEEStyles();
      }
    };

    document.addEventListener('formatText', handleFormat as EventListener);
    return () => {
      document.removeEventListener('formatText', handleFormat as EventListener);
    };
  }, []);

  return (
    <div className="flex-1 flex flex-col bg-[#1C1C1E]">
      {/* Top Menu Bar - macOS style */}
      <div className="bg-[#2C2C2E] border-b border-[#3C3C3E] h-8 flex items-center px-4">
        <div className="flex space-x-6 text-sm text-gray-300">
          <button className="hover:text-white">File</button>
          <button className="text-white">Home</button>
          <button className="hover:text-white">References Manager</button>
          <button className="hover:text-white">View</button>
          <button className="hover:text-white">Export</button>
          <button className="hover:text-white">Help</button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-[#2C2C2E] border-b border-[#3C3C3E] p-2 flex items-center space-x-2">
        <div className="flex space-x-1 bg-[#3C3C3E] rounded-lg p-1">
          <button className="p-1.5 rounded hover:bg-[#4C4C4E] text-gray-300 hover:text-white">
            <Bold className="h-4 w-4" />
          </button>
          <button className="p-1.5 rounded hover:bg-[#4C4C4E] text-gray-300 hover:text-white">
            <Italic className="h-4 w-4" />
          </button>
          <button className="p-1.5 rounded hover:bg-[#4C4C4E] text-gray-300 hover:text-white">
            <Underline className="h-4 w-4" />
          </button>
        </div>

        <div className="h-4 w-px bg-[#3C3C3E]" />

        <div className="flex space-x-1 bg-[#3C3C3E] rounded-lg p-1">
          <button className="p-1.5 rounded hover:bg-[#4C4C4E] text-gray-300 hover:text-white">
            <Heading1 className="h-4 w-4" />
          </button>
          <button className="p-1.5 rounded hover:bg-[#4C4C4E] text-gray-300 hover:text-white">
            <Heading2 className="h-4 w-4" />
          </button>
          <button className="p-1.5 rounded hover:bg-[#4C4C4E] text-gray-300 hover:text-white">
            <Heading3 className="h-4 w-4" />
          </button>
        </div>

        <div className="h-4 w-px bg-[#3C3C3E]" />

        <div className="flex space-x-1 bg-[#3C3C3E] rounded-lg p-1">
          <button className="p-1.5 rounded hover:bg-[#4C4C4E] text-gray-300 hover:text-white">
            <LinkIcon className="h-4 w-4" />
          </button>
          <button className="p-1.5 rounded hover:bg-[#4C4C4E] text-gray-300 hover:text-white">
            <Image className="h-4 w-4" />
          </button>
          <button className="p-1.5 rounded hover:bg-[#4C4C4E] text-gray-300 hover:text-white">
            <Code className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div 
        className="flex-1 overflow-auto p-8 bg-white m-4 rounded-lg shadow-lg relative"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div 
          ref={contentRef}
          className="prose prose-lg max-w-none text-black min-h-full"
          contentEditable
          suppressContentEditableWarning
          style={{
            fontFamily: 'Times New Roman, serif',
            fontSize: '12pt',
            lineHeight: 1.5,
            color: '#000000'
          }}
        >
          <h1 className="text-2xl font-bold mb-4 text-black">Carbon Aware EV Charging</h1>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="bg-gray-100 h-40 rounded-lg mb-2 flex items-center justify-center">
                <span className="text-gray-400">Drop your image here</span>
              </div>
              <p className="text-sm text-gray-600">Fig. 1: Daily carbon intensity of grid resources</p>
            </div>
            <div>
              <div className="bg-gray-100 h-40 rounded-lg mb-2 flex items-center justify-center">
                <span className="text-gray-400">Drop your image here</span>
              </div>
              <p className="text-sm text-gray-600">Fig. 2: Power Supply Mix Stacked Area</p>
            </div>
          </div>
          <p className="mb-4">
            Carbon intensity depends on the power grid's operational plan and carbon intensity of each power resource. In this paper, we specifically examined the carbon intensity for the California grid with data provided by CAISO (California Independent System Operator). To evaluate carbon intensity, we consider the mix of the grid resources as well as the hourly trend of the grid. Figure 2 describes the status of the two data sets.
          </p>
          <h2 className="text-xl font-semibold mb-2">B. Charging Station Operation Model</h2>
          <p className="mb-4">
            As mentioned in Section II, our charging framework takes into account of the user constraints as well as the infrastructure constraints. These constraints are discussed below. We use the discrete time model, where the time step is indexed in t ∈ T . For each charging station k ∈ K and electric vehicle i ∈ V , we denote the charging demand information is {'{d_arrival,i,k,t,d_departure,i,k,t,E_target,i,k}'}, where d_arrival,i,k is the arrival time, d_departure,i,k is the departure time of EV i at station k, E_target,i is the desired state-of-charge SOC of EV i upon its departure, and E_current,i,k,arrival is the state when the EV arrives at the station. The energy that needs to be charged is E_demand,i,k = E_target,i − E_current,i,k,arrival.
          </p>
          <div className="bg-gray-100 h-40 rounded-lg mb-2 flex items-center justify-center">
            <span className="text-gray-400">Drop your image here</span>
          </div>
          <p className="text-sm text-gray-600">Fig. 3: Seasonal Carbon Intensity Curve in 2021</p>
        </div>

        {/* Drop zone indicator */}
        {isDraggingOver && (
          <div 
            className="drop-indicator"
            style={{
              transform: `translate(${dropIndicatorPosition.x}px, ${dropIndicatorPosition.y}px)`
            }}
          />
        )}
      </div>

      <style>
        {`
          .ieee-content {
            counter-reset: section;
            color: #000000;
          }
          .ieee-heading {
            font-weight: bold;
            margin-top: 1.5em;
            margin-bottom: 0.5em;
            color: #000000;
          }
          .ieee-heading::before {
            counter-increment: section;
            content: counter(section) ". ";
          }
          .ieee-figure {
            text-align: center;
            margin: 1.5em 0;
          }
          .math-block, .viz-block {
            position: relative;
            transition: transform 0.2s ease, opacity 0.2s ease;
          }
          .math-block:hover::before, .viz-block:hover::before {
            content: '⋮';
            position: absolute;
            right: 8px;
            top: 8px;
            cursor: move;
            color: #666;
          }
          .drop-indicator {
            position: absolute;
            width: 16px;
            height: 16px;
            background: #0A84FF;
            border-radius: 50%;
            transform-origin: center;
            pointer-events: none;
            margin-left: -8px;
            margin-top: -8px;
            opacity: 0.6;
            animation: pulse 1.5s infinite;
          }
          @keyframes pulse {
            0% {
              transform: translate(var(--x), var(--y)) scale(1);
              box-shadow: 0 0 0 0 rgba(10, 132, 255, 0.4);
            }
            70% {
              transform: translate(var(--x), var(--y)) scale(1.2);
              box-shadow: 0 0 0 10px rgba(10, 132, 255, 0);
            }
            100% {
              transform: translate(var(--x), var(--y)) scale(1);
              box-shadow: 0 0 0 0 rgba(10, 132, 255, 0);
            }
          }
          [contenteditable="true"] {
            outline: none;
          }
          [contenteditable="true"]:focus {
            outline: 2px solid rgba(10, 132, 255, 0.2);
            border-radius: 4px;
          }
        `}
      </style>
    </div>
  )
} 