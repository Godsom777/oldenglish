import React from 'react';
import { Flame, Info, Plus } from 'lucide-react';

export const MenuItemCard = ({ item, onSelect, onReserveWithItem }) => {
  return (
    <div
      onClick={() => onSelect(item)}
      className="group relative bg-white rounded-3xl border border-zinc-200/90 overflow-hidden hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-xl hover:shadow-zinc-200/60 p-2"
    >
      {/* Image Container */}
      <div className="relative h-52 sm:h-56 w-full rounded-2xl overflow-hidden bg-zinc-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          {/* Spice level pill */}
          {item.spicyLevel > 0 ? (
            <div className="badge text-[11px] backdrop-blur-md bg-white/95 text-red-600 border-red-200 font-semibold shadow-sm">
              <span className="flex gap-0.5 text-red-600">
                {Array.from({ length: item.spicyLevel }).map((_, i) => (
                  <Flame key={i} size={12} className="fill-red-600" />
                ))}
              </span>
              <span>Spicy</span>
            </div>
          ) : (
            <span />
          )}

          {/* Price Badge */}
          <div className="px-3.5 py-1 rounded-full bg-zinc-900 text-white font-bold text-sm shadow-md">
            ${item.price}
          </div>
        </div>

        {/* Featured Ribbon if applicable */}
        {item.featured && (
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-red-600 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
            Chef’s Pick
          </div>
        )}
      </div>

      {/* Content Body with Extra Whitespace */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 bg-zinc-100 px-2.5 py-1 rounded-md border border-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Dish Name */}
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-zinc-900 group-hover:text-red-600 transition-colors line-clamp-1">
            {item.name}
          </h3>

          {/* Description */}
          <p className="text-zinc-600 text-xs sm:text-sm mt-2 line-clamp-2 font-normal leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Card Footer Actions */}
        <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
          <span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-900 transition-colors flex items-center gap-1">
            <Info size={14} /> View Details
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onReserveWithItem(item);
            }}
            className="text-xs font-semibold text-red-600 hover:text-white bg-red-50 hover:bg-red-600 px-3.5 py-2 rounded-xl border border-red-200 hover:border-red-600 transition-colors flex items-center gap-1 shadow-sm"
          >
            <Plus size={14} /> Reserve & Order
          </button>
        </div>
      </div>
    </div>
  );
};
