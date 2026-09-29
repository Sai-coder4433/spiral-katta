import React from 'react';
import { UtensilsCrossed, Sparkles, Coffee, MapPin } from 'lucide-react';

const HIGHLIGHT_ITEMS = [
  {
    title: "GOOD FOOD",
    description: "Simple, satisfying café moments.",
    icon: UtensilsCrossed,
    number: "01"
  },
  {
    title: "GOOD VIBES",
    description: "A relaxed space to spend time with your people.",
    icon: Sparkles,
    number: "02"
  },
  {
    title: "EVERYDAY KATTA",
    description: "Your casual stop in Chakan.",
    icon: Coffee,
    number: "03"
  },
  {
    title: "EASY TO FIND",
    description: "Located at Ambethan Chowk.",
    icon: MapPin,
    number: "04"
  }
];

export const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-[#786C64]">
            <span>THE EXPERIENCE</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2D1F17]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            WHY SPIRAL KATTA?
          </h2>
        </div>

        {/* 4 Minimal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHT_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#F6F0E7] border border-[#E8DFD5] hover:border-[#D6C5B5] hover:bg-[#F3EDE4] transition-all duration-300 shadow-2xs hover:shadow-xs"
              >
                <div>
                  {/* Top Row: Icon & Editorial Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C85A32] group-hover:scale-105 transition-transform duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-[#A09388] tracking-widest tabular-nums">
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-bold tracking-tight text-[#2D1F17] mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#66584F] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle indicator bar on bottom */}
                <div className="mt-6 pt-4 border-t border-[#E8DFD5]/60 flex items-center justify-between text-xs text-[#8A7C72]">
                  <span>Spiral Katta</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]/40 group-hover:bg-[#C85A32] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
