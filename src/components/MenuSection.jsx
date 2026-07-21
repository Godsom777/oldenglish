import React, { useState, useMemo } from 'react';
import { Search, Upload, Download, RefreshCw } from 'lucide-react';
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
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;

      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.ingredients && item.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase())));

      let matchesTag = true;
      if (selectedTagFilter === 'spicy') matchesTag = item.spicyLevel > 0;
      if (selectedTagFilter === 'halal') matchesTag = item.tags?.some(t => t.toLowerCase().includes('halal'));
      if (selectedTagFilter === 'gf') matchesTag = item.tags?.some(t => t.toLowerCase().includes('gluten'));
      if (selectedTagFilter === 'vegan') matchesTag = item.tags?.some(t => t.toLowerCase().includes('vegan'));

      return matchesCategory && matchesSearch && matchesTag;
    });
  }, [menuItems, activeCategory, searchQuery, selectedTagFilter]);

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
    <section id="menu" className="py-28 bg-[#f8f9fa] border-t border-zinc-200/80 relative">
      <div className="container">
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-tag">GASTRONOMY SELECTION</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
              CHARCOAL & BAR MENU
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base font-normal mt-2 max-w-xl leading-relaxed">
              Authentic African grill classics, tender Suya skewers, rich soups, and signature craft cocktails in New Owerri.
            </p>
          </div>

          {/* CSV Quick Import / Export Toolbar */}
          <div className="flex flex-wrap items-center gap-2.5">
            {isCustomMenuLoaded && (
              <button
                onClick={onResetDefaultMenu}
                className="btn-secondary text-xs px-3.5 py-2.5 text-zinc-700 hover:text-zinc-900"
                title="Restore Default African Menu"
              >
                <RefreshCw size={14} />
                <span>Restore Default</span>
              </button>
            )}

            <button
              onClick={onDownloadSampleCsv}
              className="btn-secondary text-xs px-3.5 py-2.5 text-zinc-700 hover:text-zinc-900"
              title="Download CSV Menu Template"
            >
              <Download size={14} className="text-red-600" />
              <span>Sample CSV</span>
            </button>

            <button
              onClick={onOpenCsvUpload}
              className="btn-primary text-xs px-4 py-2.5"
            >
              <Upload size={14} />
              <span>Upload CSV Menu</span>
            </button>
          </div>
        </div>

        {/* Filter Toolbar (Categories & Search) */}
        <div className="space-y-6 mb-12">
          {/* Category Tabs */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-3 scrollbar-none">
            {DEFAULT_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 px-5 py-3 rounded-full text-xs font-bold transition-all flex items-center gap-2.5 ${
                    isActive
                      ? 'bg-zinc-900 text-white shadow-md'
                      : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200 shadow-sm'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-zinc-100 text-zinc-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar & Tag Filters */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-3xl bg-white border border-zinc-200 shadow-sm">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
              />
              <input
                type="text"
                placeholder="Search dishes, ingredients (e.g., Suya, Tilapia, Chapman)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent pl-11 pr-4 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none"
              />
            </div>

            {/* Quick Dietary Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-zinc-100">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider px-2 shrink-0">
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
                  className={`text-xs px-3.5 py-1.5 rounded-xl shrink-0 transition-colors font-medium ${
                    selectedTagFilter === tag.id
                      ? 'bg-red-50 text-red-600 font-bold border border-red-200'
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                  }`}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items Grid - Generous 32px Gap */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <div className="text-center py-20 px-4 bg-white rounded-3xl border border-zinc-200 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 mx-auto mb-4">
              <Search size={24} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-zinc-900 mb-1">No Dishes Found</h3>
            <p className="text-xs text-zinc-600 max-w-sm mx-auto mb-6">
              We couldn’t find any items matching your search or filters. Try adjusting your search term.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setSelectedTagFilter('all');
              }}
              className="btn-secondary text-xs px-5 py-2.5"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
