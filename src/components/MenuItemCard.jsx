import React from 'react';
import { Flame, Info, Plus } from 'lucide-react';

export const MenuItemCard = ({ item, onSelect, onReserveWithItem }) => {
  return (
    <div
      onClick={() => onSelect(item)}
      className="group relative bg-[#151519] rounded-2xl border border-zinc-800/80 overflow-hidden hover:border-red-900/60 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-xl hover:shadow-red-950/20"
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-900">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151519] via-transparent to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          {/* Spice level pill */}
          {item.spicyLevel > 0 ? (
            <div className="badge badge-red text-[11px] backdrop-blur-md bg-black/60 border-red-500/40">
              <span className="flex gap-0.5 text-red-500">
                {Array.from({ length: item.spicyLevel }).map((_, i) => (
                  <Flame key={i} size={11} className="fill-red-500" />
                ))}
              </span>
              <span>Spicy</span>
            </div>
          ) : (
            <span />
          )}

          {/* Price Badge */}
          <div className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white font-semibold text-sm">
            ${item.price}
          </div>
        </div>

        {/* Featured Ribbon if applicable */}
        {item.featured && (
          <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-md bg-red-600/90 text-[10px] font-bold uppercase tracking-wider text-white">
            Chef’s Pick
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] uppercase font-semibold tracking-wider text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Dish Name */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1">
            {item.name}
          </h3>

          {/* Description */}
          <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 line-clamp-2 font-light leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Card Footer Actions */}
        <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between">
          <span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors flex items-center gap-1">
            <Info size={13} /> View Ingredients
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onReserveWithItem(item);
            }}
            className="text-xs font-semibold text-red-400 hover:text-red-300 bg-red-950/40 hover:bg-red-900/60 px-3 py-1.5 rounded-lg border border-red-800/40 transition-colors flex items-center gap-1"
          >
            <Plus size={13} /> Reserve & Order
          </button>
        </div>
      </div>
    </div>
  );
};
