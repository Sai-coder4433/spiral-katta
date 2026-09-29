import React from 'react';
import { CAFE_INFO } from '../constants';
import { Navigation, Phone } from 'lucide-react';

export const MobileStickyCta: React.FC = () => {
  return (
    <aside aria-label="Mobile quick actions" className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E8DFD5] px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${CAFE_INFO.phoneRaw}`}
          aria-label="Call Spiral Katta"
          className="flex items-center justify-center w-12 h-11 rounded-xl bg-[#F3EDE4] border border-[#E8DFD5] text-[#2D1F17] hover:bg-[#EAE2D7] active:scale-95 transition-all shrink-0"
        >
          <Phone className="w-4 h-4 text-[#786C64]" />
        </a>

        <a
          href={CAFE_INFO.mapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 h-11 px-4 text-xs font-bold tracking-wider uppercase text-white bg-[#C85A32] hover:bg-[#B8502B] active:scale-[0.98] rounded-xl shadow-xs transition-all"
        >
          <Navigation className="w-4 h-4" />
          <span>GET DIRECTIONS</span>
        </a>
      </div>
    </aside>
  );
};
