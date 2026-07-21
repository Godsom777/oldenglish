import React from 'react';
import { X, Flame, Wine, Utensils, Calendar } from 'lucide-react';

export const DishDetailModal = ({ item, onClose, onReserveWithItem }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full sm:max-w-xl bg-white border-t sm:border border-zinc-200 rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col">
        {/* Modal Header Image */}
        <div className="relative h-60 sm:h-64 w-full bg-zinc-100 shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/50" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 text-zinc-800 flex items-center justify-center hover:bg-white transition-colors border border-zinc-200 shadow-md"
          >
            <X size={20} />
          </button>

          {/* Title & Price Header Overlay */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 mb-1.5">
              {item.spicyLevel > 0 && (
                <span className="badge badge-red text-xs font-semibold bg-red-100 border-red-200 text-red-700">
                  <Flame size={13} className="fill-red-600 text-red-600" />
                  <span>Spice Level {item.spicyLevel}/3</span>
                </span>
              )}
              {item.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] uppercase font-bold text-zinc-800 bg-white/90 px-2.5 py-0.5 rounded-md border border-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900 leading-tight">
                {item.name}
              </h2>
              <span className="text-2xl font-bold text-red-600 font-sans">
                ${item.price}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Description */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-zinc-500 mb-1.5">
              Description
            </h4>
            <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal">
              {item.description}
            </p>
          </div>

          {/* Key Ingredients */}
          {item.ingredients && item.ingredients.length > 0 && (
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-zinc-500 mb-2 flex items-center gap-1.5">
                <Utensils size={15} className="text-red-600" /> Key Ingredients
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.ingredients.map((ing, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-zinc-100 border border-zinc-200 text-zinc-800 px-3 py-1.5 rounded-xl font-medium"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Beverage Pairing */}
          {item.pairing && (
            <div className="p-4 rounded-2xl bg-red-50/60 border border-red-100 flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-red-100 text-red-600 shrink-0 mt-0.5">
                <Wine size={18} />
              </div>
              <div>
                <h5 className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                  Recommended Beverage Pairing
                </h5>
                <p className="text-xs text-zinc-700 mt-0.5 font-normal">
                  {item.pairing}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 border-t border-zinc-200 bg-zinc-50 flex items-center justify-between gap-3 shrink-0">
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
