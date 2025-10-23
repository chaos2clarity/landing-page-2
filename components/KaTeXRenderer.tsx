'use client';

import { useEffect, useRef, useState } from 'react';

interface KaTeXRendererProps {
  expression: string;
  displayMode?: boolean;
  className?: string;
}

export default function KaTeXRenderer({ 
  expression, 
  displayMode = false, 
  className = "inline text-sm sm:text-lg text-white mx-1" 
}: KaTeXRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && containerRef.current && !isRendered) {
      const renderKaTeX = async () => {
        try {
          // Wait for KaTeX to be available
          let attempts = 0;
          const maxAttempts = 50;
          
          const checkAndRender = () => {
            if ((window as any).katex) {
              console.log('KaTeX found, rendering expression:', expression);
              try {
                (window as any).katex.render(expression, containerRef.current, {
                  throwOnError: false,
                  displayMode: displayMode,
                  strict: false,
                  errorColor: '#cc0000'
                });
                console.log('KaTeX rendered successfully');
                setIsRendered(true);
              } catch (error: any) {
                console.error('KaTeX rendering error:', error);
                if (containerRef.current) {
                  containerRef.current.innerHTML = `<span style="color: #cc0000;">Error: ${error.message}</span>`;
                }
              }
            } else if (attempts < maxAttempts) {
              attempts++;
              setTimeout(checkAndRender, 100);
            } else {
              console.error('KaTeX not loaded after maximum attempts');
              if (containerRef.current) {
                containerRef.current.innerHTML = '<span style="color: #cc0000;">KaTeX not loaded</span>';
              }
            }
          };
          
          checkAndRender();
        } catch (error) {
          console.error('Error in KaTeX renderer:', error);
        }
      };

      renderKaTeX();
    }
  }, [expression, displayMode, isClient, isRendered]);

  // Don't render anything on server side to avoid hydration mismatch
  if (!isClient) {
    return (
      <span className={className}>
        Loading equation...
      </span>
    );
  }

  return (
    <span 
      ref={containerRef}
      className={className}
    >
      Loading equation...
    </span>
  );
}
