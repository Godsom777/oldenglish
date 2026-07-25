import React from 'react';
import { Wine, GlassWater, Sparkles, Citrus } from 'lucide-react';

export const BarPage = ({ onOpenReservation }) => {
  return (
    <div className="pt-28 pb-16">
      {/* Page Header */}
      <div className="bg-[#f5f5f2] py-12 border-b border-zinc-200/80 mb-12">
        <div className="site-container text-center max-w-3xl mx-auto px-4">
          <span className="chip-pill chip-pill-red mb-3">
            <Wine size={12} /> Craft Mixology & Lounge
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-zinc-900 tracking-tight leading-none mb-3">
            OUR BAR & DRINK VARIETY
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base font-medium">
            Handcrafted luxury cocktails, cold draughts, fine wines, and signature mixology prepared by our master bartenders in Area H, New Owerri.
          </p>
        </div>
      </div>

      <div className="site-container">
        {/* Main Bar Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Story Content Left */}
          <div className="lg:col-span-7 bento-card p-6 sm:p-10 md:p-12 flex flex-col justify-between">
            <div>
              <span className="chip-pill chip-pill-red mb-6 inline-flex">
                <GlassWater size={12} /> Signature Mixology Lounge
              </span>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight mb-6">
                CRAFT BEVERAGE EXPERIENCE.
              </h2>

              <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
                <p>
                  At <strong className="text-zinc-900">Old English Bar & Grills</strong>, our bar is a vibrant sanctuary designed to complement our rich culinary heritage. Every cocktail, mocktail, and pour is crafted with artisanal precision, fresh natural ingredients, and premium spirits.
                </p>
                <p>
                  From our signature luxury creation <strong className="text-red-600">Art De Vivre Pink</strong> to our iconic <strong className="text-zinc-900">Old English Signature Chapman</strong>, our master mixologists infuse passion into every glass—balancing crisp botanical notes, citrus garnishes, and perfectly chilled finishes.
                </p>
                <p className="font-serif italic text-zinc-900 text-lg font-semibold border-l-2 border-red-600 pl-4 py-1">
                  "Whether enjoying a quiet evening drink or celebrating with friends, discover where great taste in mixology takes you."
                </p>
              </div>
            </div>

            {/* Metric Bento Widgets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-zinc-100">
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100/80">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-900 block">Artisanal</span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">House Mixology</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100/80">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-red-600 block">Premium</span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Spirits & Wines</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100/80">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-900 block">Ice-Cold</span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Draught & Mocktails</span>
              </div>
            </div>
          </div>

          {/* Barman Image Right */}
          <div className="lg:col-span-5 bento-card relative min-h-[400px] sm:min-h-[500px]">
            <img
              src="/images/barman.jpg"
              alt="Old English Master Mixologist Crafting Cocktail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

            <div className="absolute top-4 left-4 z-10">
              <span className="chip-pill chip-pill-dark shadow-md">
                <Sparkles size={12} className="text-red-500" /> Master Mixologist Craft
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <span className="text-[11px] uppercase font-bold text-red-400 tracking-widest block mb-1">
                Artisanal Beverage Experience
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                "Handcrafted cocktails mixed with precision and passion."
              </h4>
              <p className="text-xs text-zinc-300 mt-1.5 font-medium">— Old English Mixology Lounge</p>
            </div>
          </div>
        </div>

        {/* Featured Cocktails Showcase */}
        <div className="bg-[#f5f5f2] rounded-3xl p-8 sm:p-12 border border-zinc-200/80 mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-serif text-3xl font-bold text-zinc-900 mb-2">Signature Drink Highlights</h3>
            <p className="text-zinc-600 text-xs sm:text-sm">Two of our most celebrated house mixology creations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bento-card p-6 flex flex-col justify-between">
              <div>
                <span className="bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-max block mb-3">
                  SIGNATURE COCKTAIL
                </span>
                <h4 className="font-serif text-2xl font-bold text-zinc-900 mb-2">Art De Vivre Pink</h4>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Signature Old English luxury cocktail crafted with botanical pink spirit, fresh pomegranate juice, lime, rose water, and crushed ice.
                </p>
              </div>
              <button
                onClick={onOpenReservation}
                className="w-full bg-zinc-900 text-white text-xs font-bold uppercase tracking-wider py-2.5 rounded-full hover:bg-red-600 transition-colors"
              >
                Reserve Bar Table
              </button>
            </div>

            <div className="bento-card p-6 flex flex-col justify-between">
              <div>
                <span className="bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-max block mb-3">
                  HOUSE CLASSIC
                </span>
                <h4 className="font-serif text-2xl font-bold text-zinc-900 mb-2">Old English Signature Chapman</h4>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4">
                  The iconic club drink elevated with citrus juices, cucumber ribbons, Angostura bitters, and fresh mint over crushed ice.
                </p>
              </div>
              <button
                onClick={onOpenReservation}
                className="w-full bg-zinc-900 text-white text-xs font-bold uppercase tracking-wider py-2.5 rounded-full hover:bg-red-600 transition-colors"
              >
                Reserve Bar Table
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
