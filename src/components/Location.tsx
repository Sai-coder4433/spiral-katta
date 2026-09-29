import React, { useState } from 'react';
import { CAFE_INFO } from '../constants';
import { getCafeOpenStatus } from '../utils/hours';
import { MapPin, Phone, Clock, Navigation, Copy, Check, ExternalLink } from 'lucide-react';

export const Location: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const status = getCafeOpenStatus();

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(CAFE_INFO.address.full);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section id="location" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-[#786C64]">
          <span>LOCATION & HOURS</span>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Business Details */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#F6F0E7] border border-[#E8DFD5] shadow-xs">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2D1F17] mb-8"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                VISIT SPIRAL KATTA
              </h2>

              <div className="space-y-6">
                {/* Address block */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C85A32] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#786C64] mb-1">
                      Address
                    </div>
                    <div className="text-base font-medium text-[#2D1F17] leading-relaxed">
                      Ambethan Chowk,<br />
                      Chakan - Ambethan Road,<br />
                      Chakan, Maharashtra 410501
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 mt-2 text-xs font-medium text-[#8A7C72] hover:text-[#C85A32] transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-semibold">Address Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Hours block */}
                <div className="flex items-start gap-4 pt-6 border-t border-[#E8DFD5]">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C85A32] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#786C64] mb-1 flex items-center gap-2">
                      <span>Open Daily</span>
                      <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                        status.isOpen ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-200 text-stone-700'
                      }`}>
                        {status.statusText}
                      </span>
                    </div>
                    <div className="text-base font-medium text-[#2D1F17] tabular-nums">
                      10:00 AM – 10:30 PM
                    </div>
                    <div className="text-xs text-[#786C64] mt-0.5">
                      Monday through Sunday
                    </div>
                  </div>
                </div>

                {/* Phone block */}
                <div className="flex items-start gap-4 pt-6 border-t border-[#E8DFD5]">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C85A32] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#786C64] mb-1">
                      Phone
                    </div>
                    <div>
                      <a
                        href={`tel:${CAFE_INFO.phoneRaw}`}
                        className="text-base font-semibold text-[#2D1F17] hover:text-[#C85A32] transition-colors tabular-nums"
                      >
                        {CAFE_INFO.phone}
                      </a>
                    </div>
                    <div className="text-xs text-[#786C64] mt-0.5">
                      Tap to call directly
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-8 mt-8 border-t border-[#E8DFD5] flex flex-col sm:flex-row gap-3">
              <a
                href={CAFE_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide uppercase text-white bg-[#C85A32] hover:bg-[#B8502B] active:scale-[0.98] rounded-xl transition-all shadow-xs"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={`tel:${CAFE_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold tracking-wide uppercase text-[#2D1F17] bg-[#FAF7F2] hover:bg-[#F0E8DC] active:scale-[0.98] border border-[#E8DFD5] rounded-xl transition-all"
              >
                <Phone className="w-4 h-4 text-[#786C64]" />
                <span className="hidden sm:inline">Call</span>
              </a>
            </div>
          </div>

          {/* Right Column: Large Interactive Google Maps Card */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl overflow-hidden border border-[#E8DFD5] shadow-xs bg-[#FAF7F2]">
            
            {/* Top Map Card Header Bar */}
            <div className="px-6 py-4 bg-[#FAF7F2] border-b border-[#E8DFD5] flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#C85A32]" />
                <div>
                  <div className="text-sm font-bold text-[#2D1F17]">Spiral Katta</div>
                  <div className="text-xs text-[#786C64]">Ambethan Chowk, Chakan</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={CAFE_INFO.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#5C4C42] hover:text-[#2D1F17] bg-[#F3EDE4] hover:bg-[#EAE2D7] rounded-lg transition-colors border border-[#E8DFD5]"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#786C64]" />
                </a>
              </div>
            </div>

            {/* Embedded Interactive Map View */}
            <div className="relative flex-1 min-h-[360px] sm:min-h-[440px] w-full bg-[#EAE3D9]">
              <iframe
                title="Spiral Katta Google Maps Location"
                src={CAFE_INFO.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '360px' }}
                loading="lazy"
                allowFullScreen={false}
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Quick Action Overlay at Bottom of Map */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 max-w-sm p-3.5 bg-[#FAF7F2]/95 backdrop-blur-md rounded-2xl border border-[#E8DFD5] shadow-md flex items-center justify-between gap-3">
                <div className="text-xs">
                  <div className="font-semibold text-[#2D1F17]">Ready to visit?</div>
                  <div className="text-[#786C64] truncate">Get live navigation on your phone</div>
                </div>
                <a
                  href={CAFE_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#C85A32] hover:bg-[#B8502B] rounded-lg transition-all shrink-0 shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Navigate</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
