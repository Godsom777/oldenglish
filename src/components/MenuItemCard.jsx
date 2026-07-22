import React from 'react';
import { Flame } from 'lucide-react';

export const MenuItemCard = ({ item, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(item)}
      className="group cursor-pointer flex flex-col"
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 mb-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          loading="lazy"
        />
        {item.featured && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md">
            Popular
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-1.5">
            <h3 className="font-serif text-xl font-medium text-zinc-900 group-hover:text-red-600 transition-colors duration-200">
              {item.name}
            </h3>
            <span className="font-sans text-sm font-semibold text-zinc-900 shrink-0">
              ${item.price}
            </span>
          </div>

          <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-3">
            {item.description}
          </p>
        </div>

        {item.spicyLevel > 0 && (
          <div className="flex items-center gap-1 text-red-600 text-xs">
            {Array.from({ length: item.spicyLevel }).map((_, i) => (
              <Flame key={i} size={12} className="fill-red-600" />
            ))}
            <span className="text-[11px] text-zinc-400 font-medium ml-1">Spicy</span>
          </div>
        )}
      </div>
    </div>
  );
};
