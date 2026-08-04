import React, { useState } from 'react';
import { Sparkles, ShieldCheck, ArrowRight, Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';

export const SUBMARINE_IMAGES = [
  { url: '/images/submarine/sub5.jpg', caption: 'Submarine Room Lounge & African Mask Artwork' },
  { url: '/images/submarine/sub3.jpg', caption: 'Deep Blue Ambient Lighting & Velvet Lounge Sofas' },
  { url: '/images/submarine/sub2.jpg', caption: 'Private Smart TV Lounge & Custom Cabinet' },
  { url: '/images/submarine/sub4.jpg', caption: 'Intimate Seating & Accent Tables' },
  { url: '/images/submarine/sub1.jpg', caption: 'Sculpture & Custom Wood Table Details' }
];

export const ROOMS_DATA = [
  {
    id: 'indoor-lounge',
    title: 'INDOOR LOUNGE',
    tag: 'Main Lounge & Bar',
    capacity: 'Up to 60 Guests',
    image: '/images/hero-interior.jpg',
    description: 'Our vibrant main dining space featuring signature neon-strip ceiling illumination, warm exposed brickwork, luxury seating, and front-row view of our master mixologists.',
    features: ['Neon Strip Lighting', 'Full Bar Access', 'Plush Seating', 'Live Ambient Music'],
    colSpan: 'lg:col-span-7',
  },
  {
    id: 'outdoor-space',
    title: 'OUTDOOR SPACE',
    tag: 'Open-Air Courtyard',
    capacity: 'Up to 40 Guests',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    description: 'Refreshing open-air garden terrace with starlit night dining, tropical greenery, and fresh evening breezes in New Owerri.',
    features: ['Starlit Canopy', 'Fresh Night Air', 'Garden Ambiance', 'Cocktail Lounge'],
    colSpan: 'lg:col-span-5',
  },
  {
    id: 'submarine-room',
    title: 'SUBMARINE ROOM',
    tag: 'Immersive VIP Suite',
    capacity: 'Private 8–14 Guests',
    image: '/images/submarine/sub5.jpg',
    gallery: SUBMARINE_IMAGES,
    description: 'An exclusive deep-blue ambient themed private lounge room in Old English Bar featuring dark velvet sofas, smart entertainment, African art accents, and VIP privacy.',
    features: ['Deep Blue Ambiance', 'Smart TV & Lounge', 'African Mask Art', 'Dedicated Butler'],
    colSpan: 'lg:col-span-12', // Highlighted full row for the authentic gallery!
    isGalleryAvailable: true,
  },
  {
    id: 'cave-room',
    title: 'CAVE ROOM',
    tag: 'Rustic Stone Vault',
    description: 'Warm stone-carved acoustic vault featuring secluded booth seating, moody lighting, and timeless architectural charm.',
    capacity: 'Private 6–10 Guests',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80',
    features: ['Stone Vault Walls', 'Moody Accent Lights', 'Secluded Booths', 'Acoustic Comfort'],
    colSpan: 'lg:col-span-6',
  },
  {
    id: 'bunker-room',
    title: 'BUNKER ROOM',
    tag: 'Ultra-Private Enclave',
    capacity: 'Private 10–18 Guests',
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80',
    description: 'Exclusive high-security private lounge vault with dark metallic accents, custom lounge chairs, dedicated butler service, and private sound control.',
    features: ['Dark Metal Aesthetics', 'Private Sound Control', 'Dedicated Butler', 'Discreet Entrance'],
    colSpan: 'lg:col-span-6',
  },
];

export const RoomsGallerySection = ({ onReserveRoom }) => {
  const [activeSubImageIdx, setActiveSubImageIdx] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <section id="rooms" className="py-24 sm:py-32 bg-[#f5f5f2]">
      <div className="site-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-2">
          <span className="chip-pill chip-pill-red mb-4">
            <Sparkles size={12} /> Exclusive Rooms & Enclaves
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-zinc-900 tracking-tight leading-none mb-4">
            OUR ROOMS & SPACES
          </h2>
          <p className="text-zinc-600 text-xs sm:text-base font-medium leading-relaxed">
            Explore Old English Bar & Grills' 5 unique dining atmospheres — featuring authentic interior photos of our Submarine Room & Indoor Lounge.
          </p>
        </div>

        {/* Bento Grid Rooms Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {ROOMS_DATA.map((room) => {
            const isSubmarine = room.id === 'submarine-room';

            return (
              <div
                key={room.id}
                className={`${room.colSpan} bento-card p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 ${
                  isSubmarine ? 'border-2 border-red-600/30 bg-white shadow-xl' : 'hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Image Frame */}
                  <div className="relative aspect-[16/9] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-900 mb-6 group/img">
                    <img
                      src={isSubmarine ? SUBMARINE_IMAGES[activeSubImageIdx].url : room.image}
                      alt={room.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out opacity-95"
                      loading="lazy"
                      onClick={() => isSubmarine && setFullscreenImage(SUBMARINE_IMAGES[activeSubImageIdx])}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    {/* Floating Tags */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="chip-pill chip-pill-red shadow-md">
                        {room.tag}
                      </span>
                      <span className="chip-pill chip-pill-dark shadow-md text-[10px]">
                        {room.capacity}
                      </span>
                    </div>

                    {/* Captions / Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white z-10 flex items-end justify-between">
                      <div>
                        <h3 className="font-display text-xl sm:text-3xl font-extrabold tracking-tight">
                          {room.title}
                        </h3>
                        {isSubmarine && (
                          <p className="text-xs text-red-300 font-medium mt-0.5">
                            {SUBMARINE_IMAGES[activeSubImageIdx].caption}
                          </p>
                        )}
                      </div>

                      {isSubmarine && (
                        <button
                          onClick={() => setFullscreenImage(SUBMARINE_IMAGES[activeSubImageIdx])}
                          className="bg-black/60 hover:bg-red-600 text-white p-2 rounded-full backdrop-blur-md transition-colors"
                          title="View Fullscreen Photo"
                        >
                          <Camera size={16} />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Submarine Room Multi-Photo Selector Thumbnails */}
                  {isSubmarine && (
                    <div className="mb-6 bg-zinc-50 p-3 rounded-2xl border border-zinc-200/80">
                      <div className="flex items-center justify-between mb-2 px-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                          <Camera size={13} className="text-red-600" /> Submarine Room Photo Gallery (5 Authentic Views)
                        </span>
                        <span className="text-[10px] font-bold text-red-600">
                          {activeSubImageIdx + 1} of {SUBMARINE_IMAGES.length}
                        </span>
                      </div>

                      <div className="grid grid-cols-5 gap-2">
                        {SUBMARINE_IMAGES.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveSubImageIdx(idx)}
                            className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                              activeSubImageIdx === idx
                                ? 'border-red-600 shadow-md scale-105'
                                : 'border-transparent opacity-60 hover:opacity-100'
                            }`}
                          >
                            <img src={img.url} alt={`Submarine View ${idx + 1}`} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Info & Description */}
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4 font-medium">
                    {room.description}
                  </p>

                  {/* Features Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {room.features.map((feat, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200/60"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Reserve Room Button */}
                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 flex items-center gap-1">
                    <ShieldCheck size={13} /> Verified Bar Space
                  </span>

                  <button
                    onClick={() => onReserveRoom(room.id)}
                    className="bg-zinc-900 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 shadow-sm"
                  >
                    <span>Reserve {room.title}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setFullscreenImage(null)}
        >
          <div className="relative max-w-4xl w-full text-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-red-500 font-bold flex items-center gap-1 text-sm bg-white/10 px-3 py-1 rounded-full"
            >
              Close <X size={18} />
            </button>
            <img
              src={fullscreenImage.url}
              alt={fullscreenImage.caption}
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-zinc-800"
            />
            <p className="text-white text-sm font-semibold mt-4">{fullscreenImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};
