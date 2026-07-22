import React from 'react';
import { Flame, ShieldCheck, Thermometer, Sparkles, UtensilsCrossed, Award } from 'lucide-react';

export const StorySection = () => {
  const CULINARY_PILLARS = [
    {
      icon: <Thermometer size={22} className="text-red-600" />,
      title: 'Precision Temperature Control',
      desc: 'Prime ribeye cuts aged in climate-controlled chambers (+1°C to +3°C) to ensure pristine safety and peak marbling flavor.',
    },
    {
      icon: <ShieldCheck size={22} className="text-emerald-600" />,
      title: 'Double-Sanitized Kitchen Protocols',
      desc: 'Food-grade stainless steel prep stations, double-sterilized cookware, and strict staff hygiene routines implemented every 2 hours.',
    },
    {
      icon: <Sparkles size={22} className="text-amber-600" />,
      title: 'Fresh Daily Sourcing (Zero Frozen)',
      desc: 'Whole tilapia, croaker, goat meat, and organic local herbs delivered fresh every morning from verified local farms in Imo State.',
    },
    {
      icon: <Flame size={22} className="text-red-600" />,
      title: 'Artisanal Hardwood Grilling',
      desc: 'Flames stoked using pure hardwood coals at 450°C—searing in rich juices without synthetic lighters or artificial smoke.',
    },
    {
      icon: <UtensilsCrossed size={22} className="text-indigo-600" />,
      title: 'In-House Hausa Yaji Crafting',
      desc: 'Kuli-kuli, ginger, and wild spices toasted, ground, and hand-blended daily by Executive Chef Uzochukwu Elui with zero artificial MSG.',
    },
  ];

  return (
    <section id="story" className="py-24 sm:py-32 bg-white">
      <div className="site-container">
        {/* Main Chef Story Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Bento Image */}
          <div className="lg:col-span-5 bento-card relative min-h-[380px] sm:min-h-[460px]">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80"
              alt="Executive Chef Uzochukwu Elui & Kitchen Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

            <div className="absolute top-4 left-4 z-10">
              <span className="chip-pill chip-pill-red shadow-md">
                <Award size={12} /> Recognized Master Chef
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <span className="text-[11px] uppercase font-bold text-red-400 tracking-widest block mb-1">
                Founding Vision
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                "Great taste starts with uncompromised hygiene and master culinary craft."
              </h4>
              <p className="text-xs text-zinc-300 mt-1.5 font-medium">— Executive Chef Uzochukwu Elui</p>
            </div>
          </div>

          {/* Right Bento Story Content */}
          <div className="lg:col-span-7 bento-card p-6 sm:p-10 md:p-12 flex flex-col justify-between">
            <div>
              <span className="chip-pill chip-pill-dark mb-6">
                Culinary Heritage & Story
              </span>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight mb-6">
                THE STORY BEHIND GOOD TASTE.
              </h2>

              <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Founded by acclaimed Executive Chef Uzochukwu Elui, <strong className="text-zinc-900">Old English Bar & Grills</strong> brings world-class culinary discipline, pristine kitchen hygiene, and authentic grilling to Owerri Imo State.
                </p>
                <p>
                  We believe that true flavor cannot exist without immaculate hygiene and culinary precision. From our temperature-controlled butchery to our open-fire pit, every dish is executed under strict international food safety standards.
                </p>
                <p className="font-serif italic text-zinc-900 text-lg font-semibold border-l-2 border-red-600 pl-4 py-1">
                  "See where good taste takes you — from clean preparation to unforgettable flavor."
                </p>
              </div>
            </div>

            {/* Metric Bento Widgets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-zinc-100">
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100/80">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-900 block">7am – 12am</span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Open Everyday</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100/80">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-red-600 block">100%</span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Halal & Fresh</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100/80">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-900 block">Area H</span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">New Owerri</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Professional Hygiene & Culinary Practice Pillars */}
        <div className="mt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="chip-pill chip-pill-red mb-3">
              <ShieldCheck size={12} /> Culinary Standards
            </span>
            <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-none mb-4">
              OUR 5 CULINARY STANDARDS
            </h3>
            <p className="text-zinc-600 text-xs sm:text-base font-medium">
              How Executive Chef Uzochukwu Elui & Team guarantee pristine hygiene and superior flavor in every dish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CULINARY_PILLARS.map((pillar, idx) => (
              <div key={idx} className="bento-card p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-5">
                    {pillar.icon}
                  </div>
                  <h4 className="font-serif text-xl font-bold text-zinc-900 mb-2 leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-red-600">
                  <span>Standard #0{idx + 1}</span>
                  <span>Verified</span>
                </div>
              </div>
            ))}

            {/* Chef Guarantee Card */}
            <div className="bento-card-dark p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <span className="px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest block w-max mb-4">
                  CHEF'S PROMISE
                </span>
                <h4 className="font-serif text-2xl font-bold text-white mb-2 leading-tight">
                  Pristine Hygiene Guarantee
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  "Every meal served at Old English Bar & Grills reflects our commitment to world-class food safety, clean craft, and genuine hospitality."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800 text-xs text-zinc-300 font-semibold relative z-10">
                Executive Chef Uzochukwu Elui & Kitchen Team
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
