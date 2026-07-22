import React from 'react';
import { getLiveBusinessStatus } from '../utils/hoursUtil';

export const Hero = ({ onOpenReservation }) => {
  const status = getLiveBusinessStatus();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white overflow-hidden">
      <div className="container">
        {/* Top Text Content */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold uppercase tracking-widest mb-6">
            <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500' : 'bg-zinc-400'}`} />
            <span>{status.isOpen ? 'Open Everyday 7am – 12am' : 'Opens 7:00 AM'} · Area H, New Owerri</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-zinc-900 leading-[1.08] tracking-tight mb-6">
            Fire, charcoal & <br className="hidden sm:inline" />
            <span className="italic font-light text-red-600">refined</span> African flavour.
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-500 text-base sm:text-xl font-normal max-w-xl mx-auto leading-relaxed mb-8">
            Authentic Yaji-spiced Suya, whole charcoal-grilled tilapia, rich pepper soups, and craft cocktails in New Owerri.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              onClick={onOpenReservation}
              className="bg-zinc-900 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-8 py-3.5 rounded-full hover:bg-red-600 transition-colors duration-300 shadow-md"
            >
              Reserve a Table
            </button>
            <a
              href="#menu"
              className="border border-zinc-200 text-zinc-800 text-xs sm:text-sm font-semibold uppercase tracking-wider px-8 py-3.5 rounded-full hover:border-zinc-900 transition-colors duration-300"
            >
              Explore Menu
            </a>
          </div>
        </div>

        {/* Spacious Featured Showcase Image */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/9] bg-zinc-100">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2000&q=80"
              alt="Old English Grill & Lounge Atmosphere"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-xs sm:text-sm font-medium tracking-wide">
              <span>Area H, New Owerri</span>
              <span>Open Everyday 7am – 12am</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
