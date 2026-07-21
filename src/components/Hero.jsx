import React from 'react';
import { Calendar, ChevronDown, UtensilsCrossed, Flame, Sparkles, ShieldCheck } from 'lucide-react';
import { getLiveBusinessStatus } from '../utils/hoursUtil';

export const Hero = ({ onOpenReservation }) => {
  const status = getLiveBusinessStatus();

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Dark Ambient Background Layer */}
      <div className="absolute inset-0 bg-[#0b0b0d]">
        {/* Subtle Ambient Glow Blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-red-900/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-amber-900/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Hero Background Image with Heavy Dark Vignette */}
        <div
          className="absolute inset-0 opacity-25 mix-blend-luminosity bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d]/90 via-[#0b0b0d]/70 to-[#0b0b0d]" />
      </div>

      <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 animate-fade-in">
          <div className="badge badge-red text-xs">
            <Flame size={13} className="fill-red-500/40 text-red-500" />
            <span>African Charcoal Bar & Grill</span>
          </div>

          <div className={`badge ${status.isOpen ? 'badge-open' : 'badge-closed'} text-xs`}>
            <span className="pulse-dot"></span>
            <span>{status.statusText} • {status.hoursText}</span>
          </div>
        </div>

        {/* Hero Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
          FIRE, CHARCOAL & <br className="hidden sm:inline" />
          <span className="italic font-normal text-red-500">REFINED</span> AFRICAN FLAVOR
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-300 text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience prime cuts, authentic Yaji-spiced Suya, fresh charcoal-grilled whole seafood, and craft cocktails in a sleek, minimal lounge.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onOpenReservation}
            className="btn-primary w-full sm:w-auto text-base px-8 py-3.5 shadow-lg shadow-red-900/30"
          >
            <Calendar size={18} />
            <span>Reserve a Table</span>
          </button>

          <a
            href="#menu"
            className="btn-secondary w-full sm:w-auto text-base px-8 py-3.5"
          >
            <UtensilsCrossed size={18} className="text-zinc-400" />
            <span>View Food & Drink Menu</span>
          </a>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-zinc-800/80 text-left">
          <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/60 backdrop-blur-sm flex items-start gap-3">
            <div className="p-2 rounded-lg bg-red-950/40 text-red-400 shrink-0">
              <Flame size={20} />
            </div>
            <div>
              <h3 className="font-serif text-base font-semibold text-white">Hardwood Charcoal</h3>
              <p className="text-xs text-zinc-400 mt-0.5">Slow-flamed over open coals with authentic Yaji rub.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/60 backdrop-blur-sm flex items-start gap-3">
            <div className="p-2 rounded-lg bg-red-950/40 text-red-400 shrink-0">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="font-serif text-base font-semibold text-white">Craft Mixology</h3>
              <p className="text-xs text-zinc-400 mt-0.5">Signature Chapmans, Zobo Spritz & Smoked Cocktails.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/60 backdrop-blur-sm flex items-start gap-3">
            <div className="p-2 rounded-lg bg-red-950/40 text-red-400 shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 className="font-serif text-base font-semibold text-white">Prime Ingredients</h3>
              <p className="text-xs text-zinc-400 mt-0.5">100% Halal certified prime cuts & fresh daily seafood.</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a href="#menu" className="text-zinc-500 hover:text-zinc-300 transition-colors animate-bounce p-2">
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
