import React from 'react';
import { LocationSection } from '../components/LocationSection';
import { MapPin, Phone, Clock } from 'lucide-react';

export const ContactPage = ({ onOpenReservation }) => {
  return (
    <div className="pt-28 pb-16">
      {/* Page Header */}
      <div className="bg-[#f5f5f2] py-12 border-b border-zinc-200/80 mb-6">
        <div className="site-container text-center max-w-3xl mx-auto px-4">
          <span className="chip-pill chip-pill-dark mb-3">
            <MapPin size={12} className="text-red-500" /> Area H, New Owerri
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-zinc-900 tracking-tight leading-none mb-3">
            LOCATION & HOURS
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base font-medium">
            Open everyday 7:00 AM – 12:00 AM. Visit us at Area H, New Owerri, Imo State, Nigeria or call direct: 08104128681.
          </p>
        </div>
      </div>

      <LocationSection onOpenReservation={onOpenReservation} />
    </div>
  );
};
