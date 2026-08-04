import React, { useState } from 'react';
import { Sparkles, ShieldCheck, ArrowRight, Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';

export const SUBMARINE_IMAGES = [
  { url: '/images/submarine/sub5.jpg', caption: 'Submarine Room Lounge & African Mask Artwork' },
  { url: '/images/submarine/sub3.jpg', caption: 'Deep Blue Ambient Lighting & Velvet Lounge Sofas' },
  { url: '/images/submarine/sub2.jpg', caption: 'Private Smart TV Lounge & Custom Cabinet' },
  { url: '/images/submarine/sub4.jpg', caption: 'Intimate Seating & Accent Tables' },
  { url: '/images/submarine/sub1.jpg', caption: 'Sculpture & Custom Wood Table Details' }
];

export const CAVE_IMAGES = [
  { url: '/images/cave/cave1.jpg', caption: 'Cave Room Private Smart TV & Custom Display Shelves' },
  { url: '/images/cave/cave2.jpg', caption: 'Neon Blue Wall Strip Illumination & Seating' },
  { url: '/images/cave/cave3.jpg', caption: 'Plush Velvet Lounge Sofas & Acoustic Wall' }
];

export const OUTDOOR_IMAGES = [
  { url: '/images/outdoor/outdoor1.jpg', caption: 'Open-Air Canopy Terrace with String Lights & White Tables' },
  { url: '/images/outdoor/outdoor2.jpg', caption: 'Rustic Hand-Carved Tree Branch Seating & Turf Area' }
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
    image: '/images/outdoor/outdoor1.jpg',
    gallery: OUTDOOR_IMAGES,
    description: 'Refreshing open-air garden terrace under illuminated canopy lighting, featuring rustic hand-crafted wood furniture, lush greenery, and fresh night breezes.',
    features: ['Starlit Canopy', 'Rustic Wood Furniture', 'Fresh Night Air', 'Garden Ambiance'],
    colSpan: 'lg:col-span-5',
    isGalleryAvailable: true,
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
    colSpan: 'lg:col-span-12', // Highlighted full row for authentic gallery!
    isGalleryAvailable: true,
  },
  {
    id: 'cave-room',
    title: 'CAVE ROOM',
    tag: 'Rustic Stone Vault',
    capacity: 'Private 6–12 Guests',
    image: '/images/cave/cave1.jpg',
    gallery: CAVE_IMAGES,
    description: 'Intimate neon-blue ambient stone vault featuring private smart TV entertainment, plush velvet lounge sofas, custom artifact shelving, and acoustic privacy.',
    features: ['Blue Neon Vault', 'Smart TV Entertainment', 'Plush Velvet Sofas', 'Acoustic Comfort'],
    colSpan: 'lg:col-span-6',
    isGalleryAvailable: true,
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
  const [activeImageIndices, setActiveImageIndices] = useState({});
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const getActiveIdx = (roomId) => activeImageIndices[roomId] || 0;
  const setActiveIdx = (roomId, idx) => setActiveImageIndices(prev => ({ ...prev, [roomId]: idx }));

  return (
    <section id="rooms" className="py-20 sm:py-32 bg-[#f5f5f2]">
      <div className="site-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4">
          <span className="chip-pill chip-pill-red mb-3 inline-flex items-center gap-1.5">
            <Sparkles size={12} /> Exclusive Rooms & Enclaves
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-zinc-900 tracking-tight leading-none mb-4">
            OUR ROOMS & SPACES
          </h2>
          <p className="text-zinc-600 text-xs sm:text-base font-medium leading-relaxed">
            Explore Old English Bar & Grills' 5 unique dining atmospheres — featuring authentic photos of our Submarine Room, Cave Room, Outdoor Space, and Indoor Lounge.
          </p>
        </div>

        {/* Bento Grid Rooms Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {ROOMS_DATA.map((room) => {
            const hasGallery = Array.isArray(room.gallery) && room.gallery.length > 0;
            const activeIdx = getActiveIdx(room.id);
            const currentImgObj = hasGallery ? room.gallery[activeIdx] : { url: room.image, caption: room.title };

            return (
              <div
                key={room.id}
                className={`${room.colSpan} bento-card p-4 sm:p-8 flex flex-col justify-between group transition-all duration-300 ${
                  hasGallery ? 'border-2 border-red-600/30 bg-white shadow-xl hover:-translate-y-1' : 'hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Clean Photo Frame (No heavy text overlays covering the picture on mobile) */}
                  <div 
                    className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-900 mb-5 group/img cursor-pointer shadow-md"
                    onClick={() => setFullscreenImage(currentImgObj)}
                  >
                    <img
                      src={currentImgObj.url}
                      alt={room.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out opacity-95"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none sm:bg-gradient-to-t sm:from-black/70 sm:via-transparent sm:to-transparent" />

                    {/* Top Tag Pill */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="chip-pill chip-pill-red shadow-md text-[10px] sm:text-xs">
                        {room.tag}
                      </span>
                    </div>

                    {/* Top Right Camera Zoom Button */}
                    <div className="absolute top-3 right-3 z-10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setFullscreenImage(currentImgObj);
                        }}
                        className="bg-black/60 hover:bg-red-600 text-white p-2 rounded-full backdrop-blur-md transition-colors shadow-md"
                        title="View Fullscreen Photo"
                      >
                        <Camera size={15} />
                      </button>
                    </div>

                    {/* Capacity Badge */}
                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="chip-pill chip-pill-dark shadow-md text-[10px]">
                        {room.capacity}
                      </span>
                    </div>
                  </div>

                  {/* Room Title & Active Photo Caption (Positioned cleanly below image frame) */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                        {room.title}
                      </h3>
                    </div>

                    {hasGallery && currentImgObj.caption && (
                      <p className="text-xs text-red-600 font-semibold flex items-center gap-1.5 mt-0.5">
                        <Sparkles size={12} className="shrink-0" />
                        <span>{currentImgObj.caption}</span>
                      </p>
                    )}
                  </div>

                  {/* Multi-Photo Selector Thumbnails */}
                  {hasGallery && (
                    <div className="mb-5 bg-zinc-50 p-3 rounded-2xl border border-zinc-200/80">
                      <div className="flex items-center justify-between mb-2 px-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                          <Camera size={13} className="text-red-600 shrink-0" /> Photo Gallery ({room.gallery.length} Views)
                        </span>
                        <span className="text-[10px] font-bold text-red-600">
                          {activeIdx + 1} of {room.gallery.length}
                        </span>
                      </div>

                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        {room.gallery.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveIdx(room.id, idx)}
                            className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                              activeIdx === idx
                                ? 'border-red-600 shadow-md scale-105'
                                : 'border-transparent opacity-60 hover:opacity-100'
                            }`}
                          >
                            <img src={img.url} alt={`${room.title} View ${idx + 1}`} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Description */}
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

                {/* Card Footer Reserve Action */}
                <div className="pt-4 border-t border-zinc-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 flex items-center gap-1">
                    <ShieldCheck size={13} className="shrink-0" /> Verified Bar Space
                  </span>

                  <button
                    onClick={() => onReserveRoom(room.id)}
                    className="w-full sm:w-auto bg-zinc-900 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 sm:py-2.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
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
            {fullscreenImage.caption && (
              <p className="text-white text-sm font-semibold mt-4">{fullscreenImage.caption}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

