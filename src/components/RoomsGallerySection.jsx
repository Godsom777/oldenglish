import React from 'react';
import { Sparkles, Calendar, ShieldCheck, ArrowRight, Eye } from 'lucide-react';

export const ROOMS_DATA = [
  {
    id: 'indoor-lounge',
    title: 'INDOOR LOUNGE',
    tag: 'Main Lounge & Bar',
    capacity: 'Up to 60 Guests',
    image: '/images/hero-interior.jpg',
    description: 'Our vibrant main dining space featuring signature neon-strip ceiling illumination, warm exposed brickwork, luxury seating, and front-row view of our master mixologists.',
    features: ['Neon Strip Lighting', 'Full Bar Access', 'Plush Seating', 'Live Ambient Music'],
    featured: true,
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
    featured: false,
    colSpan: 'lg:col-span-5',
  },
  {
    id: 'submarine-room',
    title: 'SUBMARINE ROOM',
    tag: 'Immersive VIP Suite',
    capacity: 'Private 8–14 Guests',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    description: 'An exclusive deep-blue ambient themed private dining room designed for high-profile gatherings, corporate VIP dinners, and intimate celebrations.',
    features: ['Deep Blue Ambiance', 'VIP Sound Isolation', 'Custom Tasting Menu', 'Dedicated Butler'],
    featured: false,
    colSpan: 'lg:col-span-4',
  },
  {
    id: 'cave-room',
    title: 'CAVE ROOM',
    tag: 'Rustic Stone Vault',
    description: 'Warm stone-carved acoustic vault featuring secluded booth seating, moody lighting, and timeless architectural charm.',
    capacity: 'Private 6–10 Guests',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80',
    features: ['Stone Vault Walls', 'Moody Accent Lights', 'Secluded Booths', 'Acoustic Comfort'],
    featured: false,
    colSpan: 'lg:col-span-4',
  },
  {
    id: 'bunker-room',
    title: 'BUNKER ROOM',
    tag: 'Ultra-Private Enclave',
    capacity: 'Private 10–18 Guests',
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80',
    description: 'Exclusive high-security private lounge vault with dark metallic accents, custom lounge chairs, dedicated butler service, and private sound control.',
    features: ['Dark Metal Aesthetics', 'Private Sound Control', 'Dedicated Butler', 'Discreet Entrance'],
    featured: false,
    colSpan: 'lg:col-span-4',
  },
];

export const RoomsGallerySection = ({ onReserveRoom }) => {
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
            Explore Old English Bar & Grills' 5 unique dining atmospheres — from vibrant lounges to ultra-private acoustic vaults.
          </p>
        </div>

        {/* Bento Grid Rooms Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {ROOMS_DATA.map((room) => (
            <div
              key={room.id}
              className={`${room.colSpan} bento-card p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1`}
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-900 mb-6">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Floating Tags */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="chip-pill chip-pill-red shadow-md">
                      {room.tag}
                    </span>
                    <span className="chip-pill chip-pill-dark shadow-md text-[10px]">
                      {room.capacity}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight">
                      {room.title}
                    </h3>
                  </div>
                </div>

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
                  <ShieldCheck size={13} /> Verified Space
                </span>

                <button
                  onClick={() => onReserveRoom(room.id)}
                  className="bg-zinc-900 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 shadow-sm"
                >
                  <span>Reserve Room</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
