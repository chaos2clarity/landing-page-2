'use client'

import Link from "next/link";   
import Image from "next/image";
import { useTheme } from '@/contexts/ThemeContext';
import ClarityLogoPurple from "@/public/images/claritylogopurple.png";
import ClarityLogoBlue from "@/public/images/claritylogoblue.png";
import KaTeXRenderer from '@/components/KaTeXRenderer';
import OptimizedVideo from '@/components/optimized-video';
import { Badge } from "lucide-react";

export default function LandingPage() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-zinc-900">
      <div className="mx-4 sm:mx-6 px-4 sm:px-0">
        <div className="relative mx-auto flex justify-center max-w-5xl">
          <div className="w-full">
            {/* Hero Section */}
            <div className="relative z-10 pt-20 sm:pt-28">
              {/* Hero Section Rounded Button for Latest News/Versions/Updates */}
              <div className="text-left">
                <button 
                  onClick={() => void 0}
                  className="mb-3 inline-flex items-center gap-2 rounded-full 
                  bg-zinc-800 p-1 px-3 sm:px-4 pr-2 sm:pr-2 border-1 border-white/80
                  text-xs sm:text-sm text-zinc-300 hover:bg-zinc-700 hover:border-white/50 
                  transition-colors duration-200 cursor-pointer min-h-[44px] touch-manipulation"
                >
                  <Badge className="w-3 h-3 border-violet-500 flex-shrink-0" />
                  <span className="text-left px-4 py-1 leading-tight">Building...</span>
                </button>
              </div>
              
              {/* Hero Section Slogan */}
              <div className="text-left">
                <h1 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl 
                  leading-tight sm:leading-13 font-semibold tracking-tighter text-white">
                  Write math and science content
                </h1>
                <h2 className="mt-2 sm:mt-1 text-lg sm:text-xl lg:text-2xl font-medium tracking-tight text-zinc-300">
                  with a simpler, smoother and addictive experience.
                </h2>
                
                {/* Video Section */}
                <div className="mt-8 sm:mt-12 lg:mt-16 max-w-3xl">
                  <p className="text-sm sm:text-base text-zinc-400 mb-3">Product demo as of october</p>
                  <OptimizedVideo
                    src="/videos/try.mp4"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    preload="none"
                    className="w-full"
                  />
                </div>
                
                {/* Mission Section */}
                <div className="mt-12 sm:mt-16 lg:mt-24 max-w-3xl">
                  <div className="space-y-4 sm:space-y-6 text-zinc-300 leading-relaxed">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6 sm:mb-8">
                      Mission
                    </h3>
                    <p className="text-sm sm:text-base">
                      Take a look at this equation:
                      <KaTeXRenderer expression="\frac{\partial^2 \tilde{E}_x}{\partial z^2} + \omega^2 \mu \epsilon \tilde{E}_x = 0" />, 
                      It is {" "} <br/>
                      <code className="bg-zinc-800 text-zinc-200 px-1 py-0.5 rounded font-mono text-xs sm:text-sm border border-zinc-700 break-all">
                        {`$$\\frac{\\partial^2 \\tilde{E}_x}{\\partial z^2} + \\omega^2 \\mu \\epsilon \\tilde{E}_x = 0$$`}
                      </code> in latex, and <code className="bg-zinc-800 text-zinc-200 px-1 py-0.5 rounded font-mono text-xs sm:text-sm border border-zinc-700 break-all">
                        {`$(partial^2 tilde(E)_x)/(partial z^2) + omega^2 mu epsilon.alt tilde(E)_x = 0$`}
                      </code> in typst. 
                    </p>
                    <p className="text-sm sm:text-base font-medium text-zinc-400 leading-relaxed">
                      Writing math and science shouldn't require learning a 1980s language. 
                      But that's exactly what LaTeX forces on millions of students, researchers, and professionals every day.
                    </p>
                    <p className="text-sm sm:text-base font-medium text-zinc-400 leading-relaxed">
                      Most editors like Notion, Overleaf...etc. all have the same fundamental flaw: they're built on top of LaTeX syntax. 
                      They've added prettier interfaces, but the cognitive load remains. You still need to remember syntax like {" "}
                      <code className="bg-zinc-800 text-zinc-200 px-1 py-0.5 rounded font-mono text-xs sm:text-sm border border-zinc-700">\frac&#123;&#125;&#123;&#125;</code>, <code className="bg-zinc-800 text-zinc-200 px-1 py-0.5 rounded font-mono text-xs sm:text-sm border border-zinc-700">\int_&#123;&#125;^&#123;&#125;</code>,  
                      {" "}<code className="bg-zinc-800 text-zinc-200 px-1 py-0.5 rounded font-mono text-xs sm:text-sm border border-zinc-700">\sum_&#123;&#125;^&#123;&#125;</code>, and hundreds of other commands just to express something you already understand.
                    </p>
                    <p className="text-sm sm:text-base font-medium text-zinc-400 leading-relaxed">
                    The solution isn't building a better LaTeX editor. We've had 40 years of those. 
                    We need to rebuild the whole stack, an intuitive collaborative math editor so simple a 5th grader can use it, where people can work on mathematics without special training.
                    </p>
                    <p className="text-sm sm:text-base font-medium text-zinc-400 leading-relaxed">
                      {`{clarity}`} is a complete reimagining of how mathematical notation should work in the digital age. 
                      Not a better LaTeX editor. Not a syntax wrapper. A ground-up rebuild of the math editing stack.
                    </p>
                    
                  </div>
                </div>

                {/* Core Innovation Section */}
                <div className="mt-8 sm:mt-10 max-w-3xl mb-20">
                  <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                    The Core Innovation
                  </h4>
                  <p className="mb-4 sm:mb-6 text-sm sm:text-base font-medium text-zinc-400 leading-relaxed">
                    We're restructuring mathematical syntax at the fundamental level:
                  </p>
                  <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base font-medium text-zinc-400">
                      <li className="flex pl-2 items-start">
                        <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                        <span className="leading-relaxed">Natural language input system, No syntax memorization.</span>
                      </li>
                      <li className="flex pl-2 items-start">
                        <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                        <span className="leading-relaxed">Custom rendering engine: Built specifically for real-time, collaborative editing without LaTeX's legacy constraints</span>
                      </li>
                      <li className="flex pl-2 items-start">
                        <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                        <span className="leading-relaxed">Zero learning curve: If you can type in English, you can write complex mathematical expressions immediately</span>
                      </li>
                      <li className="flex pl-2 items-start mb-10">
                        <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                        <span className="leading-relaxed">The editor is then used to build a notebook to truly serve the people in STEM, called claritynotes.</span>
                      </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
  );
}