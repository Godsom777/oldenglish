import React from 'react';
import { X, Flame, Wine, Utensils, Calendar, ShieldCheck } from 'lucide-react';

export const DishDetailModal = ({ item, onClose, onReserveWithItem }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full sm:max-w-xl bg-[#141418] border-t sm:border border-zinc-800 rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col">
        {/* Modal Header Image */}
        <div className="relative h-56 sm:h-64 w-full bg-zinc-900 shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141418] via-transparent to-black/60" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors border border-white/10"
          >
            <X size={20} />
          </button>

          {/* Title & Price Header Overlay */}
          <div className="absolute bottom-4 left-5 right-5">
            <div className="flex items-center gap-2 mb-1">
              {item.spicyLevel > 0 && (
                <span className="badge badge-red text-xs bg-red-950/80 border-red-800">
                  <Flame size={12} className="fill-red-500 text-red-500" />
                  <span>Spice Level {item.spicyLevel}/3</span>
                </span>
              )}
              {item.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] uppercase font-bold text-zinc-300 bg-black/60 px-2 py-0.5 rounded border border-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                {item.name}
              </h2>
              <span className="text-xl sm:text-2xl font-bold text-red-400 font-sans">
                ${item.price}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {/* Description */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-zinc-400 mb-1">
              Description
            </h4>
            <p className="text-zinc-200 text-sm leading-relaxed font-light">
              {item.description}
            </p>
          </div>

          {/* Key Ingredients */}
          {item.ingredients && item.ingredients.length > 0 && (
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                <Utensils size={14} className="text-red-400" /> Key Ingredients
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {item.ingredients.map((ing, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1 rounded-lg"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Sommelier / Bar Pairing Recommendation */}
          {item.pairing && (
            <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-red-950/60 text-red-400 shrink-0 mt-0.5">
                <Wine size={16} />
              </div>
              <div>
                <h5 className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                  Recommended Beverage Pairing
                </h5>
                <p className="text-xs text-zinc-400 mt-0.5 font-light">
                  {item.pairing}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-zinc-800/80 bg-[#101013] flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="btn-secondary text-xs px-4 py-2.5"
          >
            Back to Menu
          </button>

          <button
            onClick={() => {
              onClose();
              onReserveWithItem(item);
            }}
            className="btn-primary text-xs px-5 py-2.5"
          >
            <Calendar size={15} />
            <span>Book Table with this Dish</span>
          </button>
        </div>
      </div>
    </div>
  );
};
