import React from 'react';
import { Flame, Plus } from 'lucide-react';

export const MenuItemCard = ({ item, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(item)}
      className="bento-card p-5 sm:p-6 group cursor-pointer flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
    >
      <div>
        {/* Image Frame */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 mb-5">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />

          {/* Spicy / Chef Tag */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {item.featured && (
              <span className="bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                Chef's Pick
              </span>
            )}
            {item.spicyLevel > 0 && (
              <div className="bg-white/95 backdrop-blur-md text-red-600 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm w-max">
                {Array.from({ length: item.spicyLevel }).map((_, i) => (
                  <Flame key={i} size={10} className="fill-red-600" />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="mb-4">
          <h3 className="font-serif text-xl font-bold text-zinc-900 group-hover:text-red-600 transition-colors duration-200 mb-2 leading-tight">
            {item.name}
          </h3>

          <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>

      {/* Card Footer Button Pill */}
      <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
        <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
          {item.category ? item.category.replace('-', ' ') : 'Specialty'}
        </span>

        <button className="w-8 h-8 rounded-full bg-zinc-100 group-hover:bg-red-600 text-zinc-700 group-hover:text-white flex items-center justify-center transition-all duration-300">
          <Plus size={15} />
        </button>
      </div>
    </div>
  );
};
