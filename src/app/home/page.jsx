"use client";

import Hero from "../components/Hero";
import About from "../components/About";
import ServicesSection from "../components/Service";
import PracticeAreas from "../components/PracticeAreasSection";
import LogoSlider from "../components/LogoSwiper";

export default function Home() {
  return (
    <section className="relative bg-[#2f66b3] text-white overflow-hidden">
      <Hero />
      <About />
      <ServicesSection />
      <PracticeAreas/>
      <LogoSlider/>
    </section>
  );
}
