'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Hero from "@/components/hero-home";
import GraphTheoryEditable from "@/components/graph-theory-editable";
import { ComputerFrame } from "@/components/ui/computer-frame";
import DemoSection from '@/components/demo-section';
import { Button } from '@/components/ui/button';

function ScrollToFeatures() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('scrollToFeatures')) {
      const featuresSection = document.getElementById('features');
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchParams]);

  return null;
}

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Suspense fallback={null}>
        <ScrollToFeatures />
      </Suspense>
      <Hero />
      <section className="relative">
        <div className="py-12 md:py-20">
          <ComputerFrame>
            <GraphTheoryEditable />
          </ComputerFrame>
          <div className="flex justify-center mt-8">
            <Button 
              className="bg-gradient-to-t from-[#A19FE7] to-[#A19FE0] text-white hover:opacity-90"
              onClick={() => router.push('/join-waitlist')}
            >
              Create Your Own Notes
            </Button>
          </div>
        </div>
        <div id="features">
          <DemoSection />
        </div>
      </section>
    </>
  );
}
