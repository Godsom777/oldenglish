import React from 'react';
import { Calendar, ChevronDown, UtensilsCrossed, Flame, Sparkles, ShieldCheck, Phone, MapPin } from 'lucide-react';
import { getLiveBusinessStatus } from '../utils/hoursUtil';

export const Hero = ({ onOpenReservation }) => {
  const status = getLiveBusinessStatus();

  return (
    <section className="relative min-h-[92vh] pt-32 pb-24 flex items-center justify-center bg-white overflow-hidden">
      {/* Subtle Warm Gradient Accent Blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-amber-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8 animate-fade-in">
          <div className="badge badge-red text-xs px-3.5 py-1.5">
            <Flame size={14} className="fill-red-600/30 text-red-600" />
            <span>African Charcoal Bar & Grill</span>
          </div>

          <div className={`badge ${status.isOpen ? 'badge-open' : 'badge-closed'} text-xs px-3.5 py-1.5`}>
            <span className="pulse-dot"></span>
            <span>{status.statusText} • Everyday 7am – 12am</span>
          </div>

          <div className="badge text-xs px-3.5 py-1.5 bg-zinc-100 border-zinc-200 text-zinc-700 font-semibold flex items-center gap-1">
            <MapPin size={13} className="text-red-600" />
            <span>Area H, New Owerri</span>
          </div>
        </div>

        {/* Hero Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.08] mb-8">
          FIRE, CHARCOAL & <br className="hidden sm:inline" />
          <span className="italic font-normal text-red-600">REFINED</span> AFRICAN FLAVOR
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-600 text-base sm:text-lg md:text-xl font-normal max-w-2xl mx-auto mb-12 leading-relaxed">
          Experience authentic Yaji-spiced Suya, whole charcoal-grilled tilapia, rich pepper soups, and craft cocktails in a sleek, spacious white lounge.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button
            onClick={onOpenReservation}
            className="btn-primary w-full sm:w-auto text-base px-9 py-4 shadow-lg shadow-red-600/20"
          >
            <Calendar size={18} />
            <span>Reserve a Table</span>
          </button>

          <a
            href="tel:08104128681"
            className="btn-secondary w-full sm:w-auto text-base px-8 py-4"
          >
            <Phone size={18} className="text-red-600" />
            <span>Call 08104128681</span>
          </a>

          <a
            href="#menu"
            className="btn-secondary w-full sm:w-auto text-base px-8 py-4"
          >
            <UtensilsCrossed size={18} className="text-zinc-600" />
            <span>Explore Menu</span>
          </a>
        </div>

        {/* Open Grid Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-zinc-100 text-left">
          <div className="p-6 rounded-2xl bg-zinc-50/80 border border-zinc-200/80 hover:border-red-200 transition-colors flex items-start gap-4 shadow-sm">
            <div className="p-3 rounded-xl bg-red-100 text-red-600 shrink-0">
              <Flame size={22} />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-zinc-900">Hardwood Charcoal</h3>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed">Slow-flamed over open coals with authentic Yaji rub.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50/80 border border-zinc-200/80 hover:border-red-200 transition-colors flex items-start gap-4 shadow-sm">
            <div className="p-3 rounded-xl bg-red-100 text-red-600 shrink-0">
              <Sparkles size={22} />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-zinc-900">Craft Mixology</h3>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed">Signature Chapmans, Zobo Spritz & Smoked Cocktails.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50/80 border border-zinc-200/80 hover:border-red-200 transition-colors flex items-start gap-4 shadow-sm">
            <div className="p-3 rounded-xl bg-red-100 text-red-600 shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-zinc-900">Fresh Daily Grill</h3>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed">100% Halal prime cuts & fresh local croaker and tilapia.</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex justify-center">
          <a href="#menu" className="text-zinc-400 hover:text-zinc-700 transition-colors animate-bounce p-2">
            <ChevronDown size={26} />
          </a>
        </div>
      </div>
    </section>
  );
};
