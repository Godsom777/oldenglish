import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Upload, Download, RefreshCw, Flame, Check } from 'lucide-react';
import { DEFAULT_CATEGORIES } from '../data/defaultMenu';
import { MenuItemCard } from './MenuItemCard';

export const MenuSection = ({
  menuItems,
  onSelectItem,
  onReserveWithItem,
  onOpenCsvUpload,
  onDownloadSampleCsv,
  onResetDefaultMenu,
  isCustomMenuLoaded
}) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTagFilter, setSelectedTagFilter] = useState('all');

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category match
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;

      // Search query match
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.ingredients && item.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase())));

      // Tag filter match
      let matchesTag = true;
      if (selectedTagFilter === 'spicy') matchesTag = item.spicyLevel > 0;
      if (selectedTagFilter === 'halal') matchesTag = item.tags?.some(t => t.toLowerCase().includes('halal'));
      if (selectedTagFilter === 'gf') matchesTag = item.tags?.some(t => t.toLowerCase().includes('gluten'));
      if (selectedTagFilter === 'vegan') matchesTag = item.tags?.some(t => t.toLowerCase().includes('vegan'));

      return matchesCategory && matchesSearch && matchesTag;
    });
  }, [menuItems, activeCategory, searchQuery, selectedTagFilter]);

  // Compute item count per category
  const categoryCounts = useMemo(() => {
    const counts = { all: menuItems.length };
    DEFAULT_CATEGORIES.forEach(cat => {
      if (cat.id !== 'all') {
        counts[cat.id] = menuItems.filter(i => i.category === cat.id).length;
      }
    });
    return counts;
  }, [menuItems]);

  return (
    <section id="menu" className="py-24 bg-[#0d0d10] border-t border-zinc-900 relative">
      <div className="container">
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-tag">GASTRONOMY SELECTION</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              CHARCOAL & BAR MENU
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light mt-2 max-w-xl">
              Authentic African grill classics, tender Suya skewers, rich soups, and signature craft cocktails.
            </p>
          </div>

          {/* CSV Quick Import / Export Toolbar */}
          <div className="flex flex-wrap items-center gap-2">
            {isCustomMenuLoaded && (
              <button
                onClick={onResetDefaultMenu}
                className="btn-secondary text-xs px-3 py-2 text-zinc-400 hover:text-white"
                title="Restore Default African Menu"
              >
                <RefreshCw size={13} />
                <span>Restore Default Menu</span>
              </button>
            )}

            <button
              onClick={onDownloadSampleCsv}
              className="btn-secondary text-xs px-3 py-2 text-zinc-300 hover:text-white"
              title="Download CSV Menu Template"
            >
              <Download size={13} className="text-red-400" />
              <span>Sample CSV</span>
            </button>

            <button
              onClick={onOpenCsvUpload}
              className="btn-primary text-xs px-3.5 py-2"
            >
              <Upload size={13} />
              <span>Upload CSV Menu</span>
            </button>
          </div>
        </div>

        {/* Filter Toolbar (Categories & Search) */}
        <div className="space-y-6 mb-10">
          {/* Category Tabs (Scrollable on Mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {DEFAULT_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 px-4 py-2.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-red-600 text-white shadow-lg shadow-red-950/40'
                      : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-black/30 text-white' : 'bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar & Tag Filters */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-3 rounded-2xl bg-[#141418] border border-zinc-800">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
              />
              <input
                type="text"
                placeholder="Search dishes, ingredients (e.g., Suya, Tilapia, Chapman)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent pl-10 pr-4 py-2 text-sm text-white placeholder-zinc-500 outline-none"
              />
            </div>

            {/* Quick Dietary Filters */}
            <div className="flex items-center gap-1.5 overflow-x-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-zinc-800">
              <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider px-2 shrink-0">
                Filter:
              </span>
              {[
                { id: 'all', label: 'All' },
                { id: 'spicy', label: '🌶️ Spicy' },
                { id: 'halal', label: '🌙 Halal' },
                { id: 'gf', label: '🌾 Gluten-Free' },
                { id: 'vegan', label: '🌱 Vegan' },
              ].map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => setSelectedTagFilter(tag.id)}
                  className={`text-xs px-3 py-1.5 rounded-lg shrink-0 transition-colors ${
                    selectedTagFilter === tag.id
                      ? 'bg-zinc-800 text-red-400 font-semibold border border-red-900/40'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                onSelect={onSelectItem}
                onReserveWithItem={onReserveWithItem}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 px-4 bg-[#141418] rounded-2xl border border-zinc-800">
            <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-500 mx-auto mb-3">
              <Search size={22} />
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-1">No Dishes Found</h3>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto mb-4">
              We couldn’t find any items matching your search or filters. Try adjusting your filter parameters or search term.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setSelectedTagFilter('all');
              }}
              className="btn-secondary text-xs px-4 py-2"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
