import React from 'react';
import { Flame, CheckCircle, ShieldCheck, MapPin } from 'lucide-react';

export const StorySection = () => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-white">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Bento Image */}
          <div className="lg:col-span-5 bento-card relative overflow-hidden min-h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
              alt="Charcoal Grill Craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute top-4 left-4">
              <span className="chip-pill chip-pill-red shadow-md">
                <Flame size={12} /> Flame Craft
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs uppercase font-bold text-red-400 tracking-widest block mb-1">
                Authentic Craft
              </span>
              <h4 className="font-serif text-2xl font-bold">
                "Fire is our canvas. Seasoned with Hausa Yaji."
              </h4>
            </div>
          </div>

          {/* Right Bento Story Content */}
          <div className="lg:col-span-7 bento-card p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <span className="chip-pill chip-pill-dark mb-6">
                Our Story
              </span>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-zinc-900 leading-tight mb-6">
                WHERE OPEN FIRE MEETS LUXURY.
              </h2>

              <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Located in <strong className="text-zinc-900">Area H, New Owerri</strong>, Old English Bar & Grill marries traditional West African charcoal flame cooking with modern lounge hospitality.
                </p>
                <p>
                  From 28-day dry-aged ribeye steaks finished with Yaji bone marrow butter to whole tilapia flame-kissed over open coals, rich pepper soups, and signature craft cocktails—every creation honors raw ingredients and deep spice heritage.
                </p>
              </div>
            </div>

            {/* Metric Bento Widgets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-zinc-100">
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-900 block">7am – 12am</span>
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Open Everyday</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-red-600 block">100%</span>
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Halal Certified</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-900 block">Area H</span>
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">New Owerri</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
