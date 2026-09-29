import React from 'react';
import { CAFE_INFO } from '../constants';
import { Navigation, Phone, Clock, MapPin } from 'lucide-react';
import ctaBgImg from '../assets/images/cafe_evening_glow_1790667123635.jpg';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-[#2D1F17] text-[#FAF7F2] p-8 sm:p-12 md:p-16 lg:p-20 shadow-xl border border-[#4A3B32]">
          {/* Background image with deep warm coffee scrim */}
          <div className="absolute inset-0 z-0">
            <img
              src={ctaBgImg}
              alt="Spiral Katta evening ambiance"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-25 filter blur-2xs"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#221711] via-[#2A1C14]/95 to-[#221711]/90" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold tracking-widest uppercase text-[#D8CCC0]">
              <span>AMBETHAN CHOWK • CHAKAN</span>
            </div>

            {/* Main Heading */}
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              SEE YOU AT<br />
              <span className="text-[#E8A588]">SPIRAL KATTA.</span>
            </h2>

            {/* Subheading */}
            <p
              className="text-lg sm:text-xl md:text-2xl text-[#E8DFD5] mb-8 font-light"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Good food. Easy conversations. Everyday moments.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
              <a
                href={CAFE_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold tracking-wide uppercase text-white bg-[#C85A32] hover:bg-[#B8502B] active:scale-[0.98] rounded-xl transition-all shadow-md whitespace-nowrap"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={`tel:${CAFE_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold tracking-wide uppercase text-white bg-white/10 hover:bg-white/15 active:scale-[0.98] border border-white/20 rounded-xl transition-all backdrop-blur-xs whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#E8A588]" />
                <span>CALL SPIRAL KATTA</span>
              </a>
            </div>

            {/* Quick footer markers */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#BFB0A3] pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#E8A588]" />
                <span>10:00 AM — 10:30 PM • Open Daily</span>
              </div>
              <span aria-hidden="true" className="text-white/20">·</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E8A588]" />
                <span>Ambethan Chowk, Chakan</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
