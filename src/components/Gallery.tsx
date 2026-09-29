import React, { useState } from 'react';
import heroImg from '../assets/images/hero_cafe_ambience_1790667059521.jpg';
import coffeeImg from '../assets/images/cafe_coffee_cup_1790667079697.jpg';
import cornerImg from '../assets/images/cafe_cozy_corner_1790667094764.jpg';
import bitesImg from '../assets/images/cafe_quick_bites_1790667108843.jpg';
import eveningImg from '../assets/images/cafe_evening_glow_1790667123635.jpg';
import friendsImg from '../assets/images/cafe_katta_moments_1790667142175.jpg';
import { X, ZoomIn } from 'lucide-react';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  aspectClass: string;
  colSpanClass: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'ambience',
    src: heroImg,
    alt: 'Spiral Katta cafe interior and seating space',
    aspectClass: 'aspect-[16/10]',
    colSpanClass: 'sm:col-span-2 lg:col-span-2'
  },
  {
    id: 'katta-moments',
    src: friendsImg,
    alt: 'Friends enjoying conversations and hot drinks at Spiral Katta',
    aspectClass: 'aspect-[3/4]',
    colSpanClass: 'sm:col-span-1 lg:col-span-1'
  },
  {
    id: 'coffee',
    src: coffeeImg,
    alt: 'Freshly poured artisan coffee at Spiral Katta',
    aspectClass: 'aspect-[4/3]',
    colSpanClass: 'sm:col-span-1 lg:col-span-1'
  },
  {
    id: 'bites',
    src: bitesImg,
    alt: 'Satisfying cafe quick bites and refreshments',
    aspectClass: 'aspect-[4/3]',
    colSpanClass: 'sm:col-span-1 lg:col-span-1'
  },
  {
    id: 'cozy-corner',
    src: cornerImg,
    alt: 'Cozy seating corner with natural light',
    aspectClass: 'aspect-[3/4]',
    colSpanClass: 'sm:col-span-1 lg:col-span-1'
  },
  {
    id: 'evening-glow',
    src: eveningImg,
    alt: 'Warm evening atmosphere at Spiral Katta',
    aspectClass: 'aspect-[16/9]',
    colSpanClass: 'sm:col-span-2 lg:col-span-2'
  }
];

export const Gallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#F3EDE4]/50 border-t border-[#E8DFD5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-[#786C64]">
            <span>GALLERY</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2D1F17]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            A LITTLE LOOK INSIDE
          </h2>
        </div>

        {/* Editorial-style Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {GALLERY_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActivePhoto(item)}
              aria-label={`View photo: ${item.alt}`}
              className={`group relative overflow-hidden rounded-2xl bg-[#EFE8DF] border border-[#E8DFD5] text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] shadow-2xs hover:shadow-md transition-all duration-300 ${item.colSpanClass}`}
            >
              <div className={`w-full ${item.aspectClass} relative overflow-hidden`}>
                <img
                  src={item.src}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#FAF7F2]/90 backdrop-blur-xs flex items-center justify-center text-[#2D1F17] shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5 text-[#C85A32]" />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActivePhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image Preview"
        >
          <div
            className="relative max-w-4xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              aria-label="Close image preview"
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white rounded-full bg-black/40 hover:bg-black/60 transition-colors focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={activePhoto.src}
              alt={activePhoto.alt}
              referrerPolicy="no-referrer"
              className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
};
