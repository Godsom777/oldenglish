import React from 'react';
import { Flame, Award, HeartHandshake, ShieldCheck } from 'lucide-react';

export const StorySection = () => {
  return (
    <section id="story" className="py-24 bg-[#0b0b0d] border-t border-zinc-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-950/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Imagery Stack */}
          <div className="relative">
            {/* Primary Image */}
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
                alt="Grill master at Old English"
                className="w-full h-[420px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10">
                <p className="font-serif italic text-sm text-zinc-200">
                  "Fire is our canvas. Every cut of meat is seasoned with authentic Yaji spice and flame-kissed over open hardwood."
                </p>
                <span className="block text-[11px] font-bold text-red-400 uppercase tracking-wider mt-2">
                  — Chef Segun & Team
                </span>
              </div>
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 p-4 rounded-2xl bg-[#16161c] border border-zinc-700 shadow-2xl">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center font-bold">
                <Award size={22} />
              </div>
              <div>
                <span className="block text-xs font-bold text-white">Culinary Excellence</span>
                <span className="text-[10px] text-zinc-400">Authentic African Hardwood Charcoal</span>
              </div>
            </div>
          </div>

          {/* Right Narrative Text */}
          <div className="space-y-6">
            <span className="section-tag">HERITAGE & PHILOSOPHY</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              WHERE BRITISH LOUNGE ELEGANCE MEETS <span className="text-red-500 italic font-normal">AFRICAN FIRE</span>.
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              Founded with a commitment to culinary authenticity, <strong>Old English Bar & Grill</strong> reimagines traditional West African charcoal flame cooking within a dark, sophisticated bar environment.
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed font-light">
              From our 28-day dry-aged steaks finished with Yaji bone marrow butter to our whole charcoal-grilled tilapia and signature Chapmans, every dish honors raw ingredients, deep spice traditions, and exceptional hospitality.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-red-950/60 text-red-400 flex items-center justify-center shrink-0">
                  <Flame size={16} />
                </div>
                <span className="text-xs font-semibold text-zinc-200">Hardwood Charcoal Smokers</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-red-950/60 text-red-400 flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <span className="text-xs font-semibold text-zinc-200">100% Halal Certified Options</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-red-950/60 text-red-400 flex items-center justify-center shrink-0">
                  <HeartHandshake size={16} />
                </div>
                <span className="text-xs font-semibold text-zinc-200">Warm & Attentive Service</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-red-950/60 text-red-400 flex items-center justify-center shrink-0">
                  <Award size={16} />
                </div>
                <span className="text-xs font-semibold text-zinc-200">Craft Mixology Bar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
