import React from 'react';
import { X, Flame, Wine, Utensils, Calendar } from 'lucide-react';

export const DishDetailModal = ({ item, onClose, onReserveWithItem }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center animate-fade-in">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col">
        {/* Image */}
        <div className="relative h-64 w-full shrink-0">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 text-zinc-700 flex items-center justify-center hover:bg-white transition-colors shadow-sm"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1 -mt-6 relative bg-white rounded-t-3xl">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              {item.spicyLevel > 0 && (
                <div className="flex items-center gap-1 mb-2 text-red-600">
                  {Array.from({ length: item.spicyLevel }).map((_, i) => (
                    <Flame key={i} size={13} className="fill-red-600" />
                  ))}
                  <span className="text-[11px] font-semibold ml-1">Spice Level {item.spicyLevel}/3</span>
                </div>
              )}
              <h2 className="font-serif text-2xl font-semibold text-zinc-900 leading-tight">{item.name}</h2>
            </div>
            <span className="text-2xl font-semibold text-zinc-900 shrink-0">${item.price}</span>
          </div>

          <p className="text-zinc-600 text-sm leading-relaxed">{item.description}</p>

          {/* Ingredients */}
          {item.ingredients?.length > 0 && (
            <div>
              <h4 className="text-[11px] uppercase font-semibold tracking-widest text-zinc-400 mb-2 flex items-center gap-1.5">
                <Utensils size={13} /> Ingredients
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {item.ingredients.map((ing, idx) => (
                  <span key={idx} className="text-xs bg-zinc-100 text-zinc-700 px-3 py-1 rounded-full font-medium">{ing}</span>
                ))}
              </div>
            </div>
          )}

          {/* Pairing */}
          {item.pairing && (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-100">
              <Wine size={16} className="text-zinc-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">Pairs with</span>
                <span className="text-sm text-zinc-700">{item.pairing}</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-zinc-100 flex gap-3 shrink-0">
          <button onClick={onClose} className="flex-1 py-3 text-sm font-medium text-zinc-600 rounded-full border border-zinc-200 hover:bg-zinc-50 transition-colors">
            Back
          </button>
          <button
            onClick={() => { onClose(); onReserveWithItem(item); }}
            className="flex-1 py-3 text-sm font-medium text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
          >
            <Calendar size={15} /> Reserve with this
          </button>
        </div>
      </div>
    </div>
  );
};
