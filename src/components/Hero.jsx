import React from 'react';
import { Flame, Clock, MapPin, Sparkles, Award } from 'lucide-react';
import { getLiveBusinessStatus } from '../utils/hoursUtil';

export const Hero = ({ onOpenReservation }) => {
  const status = getLiveBusinessStatus();

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 md:pb-28 bg-[#f5f5f2] overflow-hidden">
      <div className="site-container">
        {/* Giant Impact Headline */}
        <div className="text-center max-w-4xl mx-auto mb-10 px-2 sm:px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-zinc-700 text-xs font-bold uppercase tracking-widest border border-zinc-200/80 mb-6 shadow-sm">
            <Sparkles size={13} className="text-red-600 shrink-0" />
            <span>African Charcoal Lounge · New Owerri</span>
          </div>

          <h1 className="font-display text-[clamp(2.4rem,8.5vw,7.5rem)] font-extrabold text-zinc-900 leading-[0.95] tracking-tight mb-6">
            CHARCOAL & <span className="text-red-600">FIRE.</span>
          </h1>

          <p className="text-zinc-600 text-sm sm:text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-8 px-2">
            Authentic Yaji-spiced Suya, whole charcoal-grilled tilapia, rich pepper soups, and craft cocktails in a sleek lounge.
          </p>

          {/* Action Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenReservation}
              className="bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-7 sm:px-9 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-red-600/25"
            >
              Book a Table
            </button>
            <a
              href="#menu"
              className="bg-white hover:bg-zinc-100 text-zinc-900 text-xs sm:text-sm font-bold uppercase tracking-widest px-7 sm:px-9 py-3.5 rounded-full border border-zinc-200 transition-all duration-300 shadow-sm"
            >
              Explore Menu
            </a>
          </div>
        </div>

        {/* Hero Showcase Bento & Widgets Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mt-10">
          {/* Main Hero Image Bento with Floating Chips */}
          <div className="lg:col-span-8 bento-card relative min-h-[340px] sm:min-h-[440px] group">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80"
              alt="Old English Flame Grill"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

            {/* Floating Tags */}
            <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2 z-10">
              <span className="chip-pill chip-pill-red shadow-lg">
                <Flame size={12} /> Hardwood Charcoal
              </span>
              <span className="chip-pill chip-pill-dark shadow-lg">
                100% Halal
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white z-10">
              <div className="pr-4">
                <span className="text-[11px] uppercase font-bold text-red-400 tracking-widest block mb-1">
                  Signature Atmosphere
                </span>
                <h3 className="font-serif text-xl sm:text-3xl font-bold leading-tight">
                  Open Flames & Craft Mixology
                </h3>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/25 text-xs font-semibold shrink-0">
                <MapPin size={13} className="text-red-400" />
                <span>Area H, New Owerri</span>
              </div>
            </div>
          </div>

          {/* Right Sidebar Bento Widgets */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Hours & Live Status Bento Widget */}
            <div className="bento-card p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                  <Clock size={20} />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  status.isOpen ? 'bg-emerald-100 text-emerald-800' : 'bg-zinc-100 text-zinc-600'
                }`}>
                  {status.isOpen ? 'Open Now' : 'Closed'}
                </span>
              </div>

              <div className="mb-4">
                <span className="text-[11px] uppercase font-bold text-zinc-400 tracking-wider block mb-1">Operating Hours</span>
                <h4 className="font-serif text-2xl font-bold text-zinc-900 leading-tight">Everyday 7am – 12am</h4>
                <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">Breakfast, Lunch, Dinner & Late-night Suya</p>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-zinc-700">
                <span>Call Line:</span>
                <a href="tel:08104128681" className="text-red-600 hover:underline">08104128681</a>
              </div>
            </div>

            {/* Quick Special Highlights Bento Widget */}
            <div className="bento-card-dark p-6 sm:p-8 flex flex-col justify-between flex-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-6 relative z-10">
                <span className="px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest">
                  SPECIAL OFFER
                </span>
                <Award size={18} className="text-red-500" />
              </div>

              <div className="relative z-10 mb-4">
                <h4 className="font-serif text-2xl font-bold text-white mb-2 leading-tight">
                  Dry-Aged Ribeye Suya
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Infused with authentic Hausa Yaji rub & bone marrow flame butter.
                </p>
              </div>

              <button
                onClick={onOpenReservation}
                className="w-full bg-white text-zinc-900 text-xs font-bold uppercase tracking-wider py-3 rounded-full hover:bg-zinc-100 transition-colors relative z-10"
              >
                Order / Reserve Table
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
