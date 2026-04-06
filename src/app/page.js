"use client";

import { useState, useEffect, useRef } from "react";
import { NavHeader } from "./components/NavHeader";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import ProductSection from "./components/ProductSection";
import Image from "next/image";
import ProcessSection from "./components/ProcessSection";
import AboutSection from "./components/AboutSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import LogoSlider from "./components/LogoSlider";
import { useAnimate } from "framer-motion";
import EmployeesSection from "./components/EmployeesSection";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const generateHero = async () => {};

    generateHero();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id) => {
    const target = document.getElementById(id);
    if (target) {
      // Lấy vị trí của phần tử so với top của trang
      const targetPosition = target.offsetTop;

      // Animate giá trị scroll của window
      animate(window.scrollY, targetPosition, {
        type: "spring",
        stiffness: 100,
        damping: 20,
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-industrial-blue selection:bg-primary selection:text-white">
      {/* Navigation */}
      <NavHeader
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        scrolled={scrolled}
        handleScroll={handleScroll}
      />

      {/* Hero Section */}
      <section
        className="relative h-screen overflow-hidden bg-industrial-blue"
        id="hero"
      >
        <HeroSection />
      </section>

      {/* Stats Section */}
      <section
        className="py-20 bg-white border-b border-gray-100"
        id="nav_header_1"
      >
        <StatsSection />
      </section>

      {/* Services Section */}
      <section id="nav_header_2" className="py-24 bg-gray-50">
        <ServicesSection />
      </section>

      <LogoSlider />


      {/* Product Gallery Section */}
      <section id="nav_header_3" className="py-24 bg-white">
        <ProductSection />
      </section>

      {/* Process Section */}
      <section
        id="nav_header_4"
        className="py-24 bg-industrial-blue text-white overflow-hidden"
      >
        <ProcessSection />
      </section>

      {/* About Section */}
      <section id="nav_header_5" className="py-24 overflow-hidden">
        <AboutSection />
      </section>
      <section id="nav_header_6">
        <EmployeesSection />
      </section>
      {/* CTA Section */}
      <section
        id="nav_header_6_highlight"
        className="py-24 bg-industrial-blue relative overflow-hidden"
      >
        <CtaSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
