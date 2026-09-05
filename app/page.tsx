// app/page.tsx
import { Hero } from "@/components/home/hero";
import { Intro } from "@/components/home/intro";
import { ServicesGrid } from "@/components/home/services-grid";
import { PortfolioShowcase } from "@/components/home/portfolio-showcase";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { WhyUs } from "@/components/home/why-us";
import { Footer } from "@/components/layout/footer";

export default function Page() {
  return (
    <div className="w-full bg-[#07090E]">
      <Hero />
      <Intro />
      <ServicesGrid />
      <PortfolioShowcase />
      <ProcessTimeline />
      <WhyUs />
      <Footer />
    </div>
  );
}