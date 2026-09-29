/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Highlights } from './components/Highlights';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileStickyCta } from './components/MobileStickyCta';

export default function App() {
  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 76;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D1F17] flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Header onNavClick={handleNavClick} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Highlights Section */}
        <Highlights />

        {/* Visual Gallery Section */}
        <Gallery />

        {/* Location & Directions Section */}
        <Location />

        {/* Final Call to Action */}
        <FinalCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Bottom CTA for Mobile */}
      <MobileStickyCta />
    </div>
  );
}
