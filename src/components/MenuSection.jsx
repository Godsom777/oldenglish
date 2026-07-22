import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
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
    <section id="menu" className="py-28 md:py-36 bg-zinc-50/60">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-red-600 text-xs font-bold uppercase tracking-widest block mb-3">
            Selection
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-zinc-900 tracking-tight leading-tight mb-4">
            Charcoal & Bar Menu
          </h2>
          <p className="text-zinc-500 text-base font-normal">
            Savor authentic flame-kissed dishes, slow-charred meats, and signature craft drinks.
          </p>
        </div>

        {/* Filter Tabs & Search */}
        <div className="max-w-4xl mx-auto mb-16 flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-zinc-200/70">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none justify-start sm:justify-center">
            {DEFAULT_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 shrink-0 ${
                    isActive
                      ? 'bg-zinc-900 text-white shadow-sm'
                      : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Minimal Search */}
          <div className="relative w-full sm:w-64 shrink-0">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-zinc-200 rounded-full pl-9 pr-4 py-2 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors"
            />
          </div>
        </div>

        {/* Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {filteredItems.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                onSelect={onSelectItem}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-zinc-400 text-sm">No dishes match your search query.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="text-xs font-semibold text-red-600 uppercase tracking-wider mt-3 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
