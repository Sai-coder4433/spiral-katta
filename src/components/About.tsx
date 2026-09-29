import React, { useState } from 'react';
import { CAFE_INFO } from '../constants';
import cozyCornerImg from '../assets/images/cafe_cozy_corner_1790667094764.jpg';
import { Coffee, Users, Clock } from 'lucide-react';

export const About: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F3EDE4]/60 border-y border-[#E8DFD5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Accent */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8DFD5] shadow-sm bg-[#FAF7F2] aspect-[3/4] max-w-md mx-auto">
              <img
                src={cozyCornerImg}
                alt="Cozy, light-filled corner seating at Spiral Katta"
                referrerPolicy="no-referrer"
                loading="lazy"
                onLoad={() => setImgLoaded(true)}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#FAF7F2]/90 backdrop-blur-md rounded-xl border border-[#E8DFD5] text-xs text-[#5C4C42]">
                <div className="font-semibold text-[#2D1F17] mb-0.5">Ambethan Chowk, Chakan</div>
                <div>Your comfortable everyday hangout</div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Message */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-[#786C64]">
              <span>ABOUT SPIRAL KATTA</span>
            </div>

            {/* Main Heading */}
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2D1F17] mb-6 text-balance leading-[1.15]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              A PLACE TO PAUSE.<br />
              <span className="font-normal italic" style={{ fontFamily: 'var(--font-serif)' }}>
                A PLACE TO CONNECT.
              </span>
            </h2>

            {/* Exact Copy from brief */}
            <p className="text-lg sm:text-xl text-[#5C4C42] leading-relaxed mb-8 font-normal">
              Spiral Katta is a casual café at Ambethan Chowk, Chakan — a comfortable spot for quick bites, conversations and relaxed everyday moments.
            </p>

            {/* Subtle Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E8DFD5]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C85A32] shrink-0">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#2D1F17]">Fresh Bites</div>
                  <div className="text-xs text-[#786C64] mt-0.5">Simple, satisfying refreshments</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C85A32] shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#2D1F17]">Neighborhood Katta</div>
                  <div className="text-xs text-[#786C64] mt-0.5">Space for friends & conversations</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C85A32] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#2D1F17]">Open Daily</div>
                  <div className="text-xs text-[#786C64] mt-0.5">10:00 AM — 10:30 PM</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
