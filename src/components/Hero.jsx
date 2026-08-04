import React from 'react';
import { Clock, MapPin, Sparkles, ShieldCheck, Award } from 'lucide-react';
import { getLiveBusinessStatus } from '../utils/hoursUtil';

export const Hero = ({ onOpenReservation }) => {
  const status = getLiveBusinessStatus();

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 md:pb-28 bg-[#f5f5f2] overflow-hidden">
      <div className="site-container">
        {/* Giant Impact Headline */}
        <div className="text-center max-w-4xl mx-auto mb-10 px-2 sm:px-4 flex flex-col items-center">
          {/* Official Brand Crest Logo */}
          <div className="mb-6">
            <img
              src="/images/logo.png"
              alt="Old English Bar & Grills Crest Logo"
              className="h-20 sm:h-28 md:h-32 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-zinc-700 text-xs font-bold uppercase tracking-widest border border-zinc-200/80 mb-6 shadow-sm">
            <Sparkles size={13} className="text-red-600 shrink-0" />
            <span>Chef-Led Culinary Excellence · Owerri Imo State</span>
          </div>

          {/* Main Hero Headline (ALL RED) */}
          <h1 className="font-display text-[clamp(2.2rem,8vw,7.5rem)] font-extrabold text-red-600 leading-[0.92] tracking-tight mb-4">
            OLD ENGLISH.
          </h1>

          {/* Slogan */}
          <p className="font-serif italic text-xl sm:text-3xl text-zinc-800 font-normal mb-6">
            "See where good taste takes you"
          </p>

          {/* Subtitle */}
          <p className="text-zinc-600 text-xs sm:text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-8 px-2">
            Founded by acclaimed Executive Chef Uzochukwu Elui, Old English Bar & Grills brings world-class culinary discipline, pristine kitchen hygiene, and authentic grilling to Owerri Imo State.
          </p>

          {/* Action Pills */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-md mx-auto sm:max-w-none">
            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-red-600/25 text-center"
            >
              Book a Table
            </button>
            <a
              href="https://app.sharptable.com.ng/old-english/area-h/menu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white hover:bg-zinc-100 text-zinc-900 text-xs sm:text-sm font-bold uppercase tracking-widest px-8 py-3.5 rounded-full border border-zinc-200 transition-all duration-300 shadow-sm text-center"
            >
              Explore Today's Menu
            </a>
          </div>
        </div>

        {/* Hero Showcase Bento & Widgets Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mt-8 sm:mt-10">
          {/* Main Hero Image Bento with Floating Chips */}
          <div className="lg:col-span-8 bento-card relative min-h-[300px] sm:min-h-[440px] group overflow-hidden">
            <img
              src="/images/hero-interior.jpg"
              alt="Old English Bar & Grills Interior"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Floating Tags */}
            <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex flex-wrap gap-2 z-10">
              <span className="chip-pill chip-pill-red shadow-lg text-[10px] sm:text-xs">
                <Award size={12} /> Executive Chef Uzochukwu Elui
              </span>
              <span className="chip-pill chip-pill-dark shadow-lg text-[10px] sm:text-xs hidden sm:inline-flex">
                <ShieldCheck size={12} className="text-emerald-400" /> 100% Hygienic Kitchen
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 text-white z-10">
              <div className="pr-2">
                <span className="text-[10px] sm:text-[11px] uppercase font-bold text-red-400 tracking-widest block mb-0.5">
                  Master Culinary Practice
                </span>
                <h3 className="font-serif text-lg sm:text-3xl font-bold leading-tight">
                  Hardwood Flames & Pristine Craft
                </h3>
              </div>
              <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/25 text-[11px] sm:text-xs font-semibold shrink-0">
                <MapPin size={12} className="text-red-400" />
                <span>Area H, New Owerri, Imo State</span>
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
                <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">Breakfast, Lunch, Dinner & Late-night Grills</p>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-zinc-700">
                <span>Direct Line:</span>
                <a href="tel:08104128681" className="text-red-600 hover:underline font-bold">08104128681</a>
              </div>
            </div>

            {/* Chef Special Highlights Bento Widget */}
            <div className="bento-card-dark p-6 sm:p-8 flex flex-col justify-between flex-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-6 relative z-10">
                <span className="px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest">
                  CHEF'S SIGNATURE
                </span>
                <Award size={18} className="text-red-500" />
              </div>

              <div className="relative z-10 mb-4">
                <h4 className="font-serif text-2xl font-bold text-white mb-2 leading-tight">
                  Executive Mix Grill Platter
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Prime beef ribeye, flame-roasted chicken, and jumbo prawns marinated in authentic Hausa Yaji rub.
                </p>
              </div>

              <button
                onClick={onOpenReservation}
                className="w-full bg-white text-zinc-900 text-xs font-bold uppercase tracking-wider py-3 rounded-full hover:bg-zinc-100 transition-colors relative z-10"
              >
                Reserve Table
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
