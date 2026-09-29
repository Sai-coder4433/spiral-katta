import React from 'react';
import { CAFE_INFO, NAV_LINKS } from '../constants';
import { MapPin, Phone, Clock, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#FAF7F2] border-t border-[#E8DFD5] pt-16 pb-24 md:pb-16 text-[#5C4C42]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E8DFD5]">
          
          {/* Brand & Location Info */}
          <div className="md:col-span-6 space-y-4">
            <h3
              className="text-2xl font-bold tracking-tight text-[#2D1F17]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {CAFE_INFO.name}
            </h3>

            <div className="space-y-2 text-sm text-[#66584F] leading-relaxed max-w-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
                <span>{CAFE_INFO.address.display}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C85A32] shrink-0" />
                <span>10:00 AM – 10:30 PM • Daily</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C85A32] shrink-0" />
                <a
                  href={`tel:${CAFE_INFO.phoneRaw}`}
                  className="font-medium text-[#2D1F17] hover:text-[#C85A32] transition-colors"
                >
                  {CAFE_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#786C64] mb-4">
              Quick Navigation
            </div>
            <nav className="flex flex-col space-y-2.5 text-sm font-medium">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-[#5C4C42] hover:text-[#2D1F17] transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Back to top & Directions Shortcut */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#5C4C42] hover:text-[#2D1F17] bg-[#F3EDE4] hover:bg-[#EAE2D7] rounded-lg transition-colors border border-[#E8DFD5]"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>

            <div className="mt-6 md:mt-0 text-xs text-[#8A7C72]">
              Chakan, Maharashtra
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A7C72] gap-4">
          <div>
            © {new Date().getFullYear()} {CAFE_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Ambethan Chowk</span>
            <span aria-hidden="true">·</span>
            <span>Chakan</span>
            <span aria-hidden="true">·</span>
            <span>Maharashtra 410501</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
