import React, { useState, useMemo } from 'react';
import { Search, Flame } from 'lucide-react';
import { DEFAULT_CATEGORIES } from '../data/defaultMenu';
import { MenuItemCard } from './MenuItemCard';

export const MenuSection = ({
  menuItems,
  onSelectItem,
  onReserveWithItem,
}) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [menuItems, activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#f5f5f2]">
      <div className="site-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 px-2">
          <span className="chip-pill chip-pill-red mb-4">
            <Flame size={12} /> Today's Selection
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-zinc-900 tracking-tight leading-none mb-4">
            GASTRONOMY MENU
          </h2>
          <p className="text-zinc-600 text-xs sm:text-base font-medium leading-relaxed">
            Hardwood flame grill classics, Suya skewers, rich pepper soups, and signature craft mixology.
          </p>
        </div>

        {/* Floating Pill Filter Bar & Search */}
        <div className="max-w-4xl mx-auto mb-12 bg-white rounded-3xl sm:rounded-full p-2.5 border border-zinc-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto px-2 py-1 scrollbar-none">
            {DEFAULT_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0 ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Pill */}
          <div className="relative w-full sm:w-64 shrink-0 px-2 sm:px-0">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-100 border-0 rounded-full pl-10 pr-4 py-2 text-xs font-medium text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600/30 transition-all"
            />
          </div>
        </div>

        {/* Bento Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                onSelect={onSelectItem}
              />
            ))}
          </div>
        ) : (
          <div className="bento-card p-10 sm:p-12 text-center max-w-md mx-auto">
            <p className="text-zinc-500 text-sm font-medium">No dishes found matching your query.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-4 text-xs font-bold text-red-600 uppercase tracking-widest hover:underline"
            >
              Clear Search & Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
