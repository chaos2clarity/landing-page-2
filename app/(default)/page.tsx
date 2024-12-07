'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Hero from "@/components/hero-home";
import GraphTheoryEditable from "@/components/graph-theory-editable";
import { ComputerFrame } from "@/components/ui/computer-frame";
import DemoSection from '@/components/demo-section';

export default function Home() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if we should scroll to features
    if (searchParams.get('scrollToFeatures')) {
      const featuresSection = document.getElementById('features');
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchParams]);

  return (
    <>
      <Hero />
      <section className="relative">
        <div className="py-12 md:py-20">
          <ComputerFrame>
            <GraphTheoryEditable />
          </ComputerFrame>
        </div>
        <div id="features">
          <DemoSection />
        </div>
      </section>
    </>
  );
}
