export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import GraphTheoryEditable from "@/components/graph-theory-editable";
import { ComputerFrame } from "@/components/ui/computer-frame";
import BusinessCategories from "@/components/business-categories";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import DemoSection from '@/components/demo-section'


export default function Home() {
  return (
    <>
      <Hero />
      <section className="relative">
        <div className="py-12 md:py-20">
       
          <ComputerFrame>
            <GraphTheoryEditable />
          </ComputerFrame>
        </div>
        <DemoSection />
      </section>
      <BusinessCategories />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
