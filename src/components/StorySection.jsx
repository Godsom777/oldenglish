import React from 'react';
import { Flame, Award, HeartHandshake, ShieldCheck } from 'lucide-react';

export const StorySection = () => {
  return (
    <section id="story" className="py-28 bg-white border-t border-zinc-200/80 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-50/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left Imagery Stack */}
          <div className="relative">
            {/* Primary Image */}
            <div className="relative rounded-3xl overflow-hidden border border-zinc-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
                alt="Grill master at Old English"
                className="w-full h-[440px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-zinc-200 shadow-lg">
                <p className="font-serif italic text-sm text-zinc-900 font-medium">
                  "Fire is our canvas. Every cut of meat is seasoned with authentic Yaji spice and flame-kissed over open hardwood right here in New Owerri."
                </p>
                <span className="block text-[11px] font-bold text-red-600 uppercase tracking-wider mt-2">
                  — Chef Segun & Team
                </span>
              </div>
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3.5 p-4.5 rounded-2xl bg-white border border-zinc-200 shadow-xl">
              <div className="w-11 h-11 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                <Award size={24} />
              </div>
              <div>
                <span className="block text-xs font-bold text-zinc-900">Culinary Excellence</span>
                <span className="text-[10px] text-zinc-500 font-medium">Hardwood Charcoal Grill • Area H</span>
              </div>
            </div>
          </div>

          {/* Right Narrative Text */}
          <div className="space-y-6">
            <span className="section-tag">HERITAGE & PHILOSOPHY</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-zinc-900 leading-tight">
              WHERE BRITISH LOUNGE ELEGANCE MEETS <span className="text-red-600 italic font-normal">AFRICAN FIRE</span>.
            </h2>

            <p className="text-zinc-700 text-base leading-relaxed font-normal">
              Located at <strong>Area H, New Owerri</strong>, <strong>Old English Bar & Grill</strong> brings together traditional West African charcoal flame cooking and modern lounge hospitality.
            </p>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
              From our 28-day dry-aged steaks finished with Yaji bone marrow butter to our whole charcoal-grilled tilapia, spicy pepper soups, and signature Chapmans, every dish honors raw ingredients and deep spice traditions.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 gap-5 pt-6 border-t border-zinc-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <Flame size={18} />
                </div>
                <span className="text-xs font-bold text-zinc-900">Hardwood Charcoal Smokers</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <span className="text-xs font-bold text-zinc-900">100% Halal Certified Options</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <HeartHandshake size={18} />
                </div>
                <span className="text-xs font-bold text-zinc-900">Warm Hospitality</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <Award size={18} />
                </div>
                <span className="text-xs font-bold text-zinc-900">Craft Cocktail Bar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
