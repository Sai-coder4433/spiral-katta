import React, { useState } from 'react';
import { CAFE_INFO } from '../constants';
import { getCafeOpenStatus } from '../utils/hours';
import { Navigation, Phone, Clock, MapPin } from 'lucide-react';
import heroImage from '../assets/images/hero_cafe_ambience_1790667059521.jpg';

export const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const status = getCafeOpenStatus();

  return (
    <section id="home" className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Layout */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          {/* Small Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-[#786C64]">
            <span>CAFE</span>
            <span aria-hidden="true" className="text-[#C85A32]">·</span>
            <span>CHAKAN</span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#2D1F17] text-balance mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {CAFE_INFO.name}
          </h1>

          {/* Supporting Headline */}
          <p
            className="text-xl sm:text-2xl md:text-3xl font-medium text-[#4A3B32] mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {CAFE_INFO.headline}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#66584F] leading-relaxed max-w-xl mx-auto mb-8 font-normal">
            {CAFE_INFO.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center mb-10">
            <a
              href={CAFE_INFO.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide uppercase text-white bg-[#C85A32] hover:bg-[#B8502B] active:scale-[0.98] rounded-xl transition-all shadow-sm hover:shadow-md whitespace-nowrap"
            >
              <Navigation className="w-4 h-4" />
              <span>GET DIRECTIONS</span>
            </a>

            <a
              href={`tel:${CAFE_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide uppercase text-[#2D1F17] bg-[#F3EDE4] hover:bg-[#EAE2D7] active:scale-[0.98] border border-[#E8DFD5] rounded-xl transition-all whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#786C64]" />
              <span>CALL US</span>
            </a>
          </div>

          {/* Information Row */}
          <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#786C64] pb-8 sm:pb-12 border-b border-[#E8DFD5] w-full max-w-lg">
            <div className="flex items-center gap-2 font-medium text-[#2D1F17]">
              <span className="relative flex h-2 w-2">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    status.isOpen ? 'bg-emerald-400' : 'bg-amber-400'
                  }`}
                />
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${
                    status.isOpen ? 'bg-emerald-600' : 'bg-amber-600'
                  }`}
                />
              </span>
              <span className="tracking-wide uppercase text-xs font-semibold">OPEN DAILY</span>
            </div>

            <span aria-hidden="true" className="hidden sm:inline text-[#D8CCC0]">|</span>

            <div className="flex items-center gap-1.5 tabular-nums text-[#5C4C42]">
              <Clock className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>{CAFE_INFO.hours.display}</span>
            </div>

            <span aria-hidden="true" className="hidden sm:inline text-[#D8CCC0]">|</span>

            <div className="flex items-center gap-1.5 text-[#5C4C42]">
              <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Ambethan Chowk</span>
            </div>
          </div>
        </div>

        {/* Large Cinematic Hero Image */}
        <div className="mt-8 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8DFD5] shadow-md bg-[#F3EDE4]">
          <div className="aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.35/1] w-full relative">
            <img
              src={heroImage}
              alt="Warm, inviting interior of Spiral Katta cafe in Chakan"
              referrerPolicy="no-referrer"
              loading="eager"
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover transition-all duration-700 ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            />
            {/* Subtle warm gradient scrim at bottom edge for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Subtle caption badge inside image */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FAF7F2]/90 backdrop-blur-md text-[#2D1F17] text-xs font-medium border border-[#E8DFD5]/80 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
              <span>A Warm Katta in Chakan</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
