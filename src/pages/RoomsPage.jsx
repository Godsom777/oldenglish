import React from 'react';
import { RoomsGallerySection } from '../components/RoomsGallerySection';
import { Sparkles, MapPin } from 'lucide-react';

export const RoomsPage = ({ onOpenReservation }) => {
  return (
    <div className="pt-28 pb-16">
      {/* Page Header */}
      <div className="bg-[#f5f5f2] py-12 border-b border-zinc-200/80 mb-6">
        <div className="site-container text-center max-w-3xl mx-auto px-4">
          <span className="chip-pill chip-pill-red mb-3">
            <Sparkles size={12} /> Unique Atmospheres
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-zinc-900 tracking-tight leading-none mb-3">
            ROOMS & SPACES GALLERY
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base font-medium">
            5 distinct dining environments: Indoor Lounge, Outdoor Space, Submarine Room, Cave Room, and Bunker Room. Reserve your preferred space in Area H, New Owerri.
          </p>
        </div>
      </div>

      <RoomsGallerySection
        onReserveRoom={(zoneId) => onOpenReservation(null, zoneId)}
      />
    </div>
  );
};
