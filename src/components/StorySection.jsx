import React from 'react';

export const StorySection = () => {
  return (
    <section id="story" className="py-28 md:py-36 bg-white">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-zinc-100 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
                alt="Charcoal Flame Grill"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-red-600 text-xs font-bold uppercase tracking-widest block">
              Our Story
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-zinc-900 leading-tight">
              Where open fire meets hospitality.
            </h2>

            <p className="text-zinc-600 text-base leading-relaxed">
              Located in Area H, New Owerri, <strong className="text-zinc-900">Old English Bar & Grill</strong> brings together traditional West African charcoal flame cooking and modern lounge hospitality.
            </p>

            <p className="text-zinc-600 text-base leading-relaxed">
              From our 28-day dry-aged steaks finished with Yaji bone marrow butter to our whole charcoal-grilled tilapia, spicy pepper soups, and signature Chapmans, every dish honors raw ingredients and deep spice traditions.
            </p>

            <div className="pt-6 grid grid-cols-2 gap-8 border-t border-zinc-100">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-normal text-zinc-900 block">7 AM – 12 AM</span>
                <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Open Daily</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-normal text-zinc-900 block">Area H</span>
                <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">New Owerri, Imo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
