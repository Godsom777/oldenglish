import React from 'react';
import { Flame, Plus } from 'lucide-react';

export const MenuItemCard = ({ item, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(item)}
      className="bento-card p-4 group cursor-pointer flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
    >
      <div>
        {/* Image Frame */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 mb-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />

          {/* Floating Price Pill (Image 1 & 2 inspired) */}
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-zinc-900 font-bold text-xs px-3 py-1.5 rounded-full shadow-md border border-zinc-200/50">
            ${item.price}
          </div>

          {/* Spicy / Chef Tag */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {item.featured && (
              <span className="bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                Chef's Pick
              </span>
            )}
            {item.spicyLevel > 0 && (
              <div className="bg-white/95 backdrop-blur-md text-red-600 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm w-max">
                {Array.from({ length: item.spicyLevel }).map((_, i) => (
                  <Flame key={i} size={10} className="fill-red-600" />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="px-1">
          <h3 className="font-serif text-xl font-bold text-zinc-900 group-hover:text-red-600 transition-colors duration-200 mb-1.5 leading-snug">
            {item.name}
          </h3>

          <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2 mb-3">
            {item.description}
          </p>
        </div>
      </div>

      {/* Card Footer Button Pill */}
      <div className="px-1 pt-3 border-t border-zinc-100 flex items-center justify-between">
        <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
          {item.category || 'Specialty'}
        </span>

        <button className="w-7 h-7 rounded-full bg-zinc-100 group-hover:bg-red-600 text-zinc-700 group-hover:text-white flex items-center justify-center transition-all duration-300">
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
};
