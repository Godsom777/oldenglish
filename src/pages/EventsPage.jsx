import React from 'react';
import { EventsSection } from '../components/EventsSection';
import { Calendar } from 'lucide-react';

export const EventsPage = ({ onOpenReservation }) => {
  return (
    <div className="pt-28 pb-16">
      {/* Page Header */}
      <div className="bg-[#f5f5f2] py-12 border-b border-zinc-200/80 mb-6">
        <div className="site-container text-center max-w-3xl mx-auto px-4">
          <span className="chip-pill chip-pill-red mb-3">
            <Calendar size={12} /> Celebrations & Catering
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-zinc-900 tracking-tight leading-none mb-3">
            PRIVATE EVENTS & CELEBRATIONS
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base font-medium">
            Host intimate dinners, birthday parties, corporate celebrations, or full lounge takeovers in New Owerri with tailored tasting menus and cocktail pairings.
          </p>
        </div>
      </div>

      <EventsSection onOpenReservation={onOpenReservation} />
    </div>
  );
};
