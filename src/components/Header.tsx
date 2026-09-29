import React, { useState, useEffect } from 'react';
import { CAFE_INFO, NAV_LINKS } from '../constants';
import { Navigation, Menu, X, Phone, MapPin, Clock } from 'lucide-react';

interface HeaderProps {
  onNavClick?: (href: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (onNavClick) {
      onNavClick(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD5] py-3.5 shadow-xs'
            : 'bg-[#FAF7F2]/80 backdrop-blur-xs border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark (Single text element) */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="text-xl sm:text-2xl font-bold tracking-tight text-[#2D1F17] hover:text-[#C85A32] transition-colors whitespace-nowrap"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {CAFE_INFO.name}
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5C4C42]">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="relative py-1 hover:text-[#2D1F17] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#C85A32] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action (Desktop) */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={CAFE_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-[#C85A32] hover:bg-[#B8502B] rounded-lg transition-all shadow-xs hover:shadow-sm active:scale-[0.98] whitespace-nowrap"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                className="p-2 -mr-2 text-[#2D1F17] hover:text-[#C85A32] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] rounded-lg transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-black/40 backdrop-blur-xs transition-opacity">
          <div className="fixed inset-x-0 top-0 pt-20 pb-6 px-6 bg-[#FAF7F2] border-b border-[#E8DFD5] shadow-lg animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col gap-4 text-base font-medium text-[#2D1F17]">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="py-2 px-3 rounded-lg hover:bg-[#F3EDE4] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-5 border-t border-[#E8DFD5] flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs text-[#786C64]">
                <Clock className="w-4 h-4 text-[#C85A32] shrink-0" />
                <span>{CAFE_INFO.hours.time} • Daily</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#786C64]">
                <MapPin className="w-4 h-4 text-[#C85A32] shrink-0" />
                <span className="truncate">Ambethan Chowk, Chakan</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#786C64]">
                <Phone className="w-4 h-4 text-[#C85A32] shrink-0" />
                <a href={`tel:${CAFE_INFO.phoneRaw}`} className="hover:underline text-[#2D1F17] font-medium">
                  {CAFE_INFO.phone}
                </a>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-2">
                <a
                  href={`tel:${CAFE_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold uppercase text-[#2D1F17] bg-[#F3EDE4] hover:bg-[#EBE2D7] rounded-lg transition-colors border border-[#E8DFD5]"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us</span>
                </a>
                <a
                  href={CAFE_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold uppercase text-white bg-[#C85A32] hover:bg-[#B8502B] rounded-lg transition-colors shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
