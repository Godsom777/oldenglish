import React from 'react';
import { MenuSection } from '../components/MenuSection';
import { Sparkles, Utensils } from 'lucide-react';

export const MenuPage = ({
  menuItems,
  onSelectItem,
  onReserveWithItem,
  onOpenCsvUpload,
  downloadSampleMenuCsv,
  handleResetDefaultMenu,
  isCustomMenuLoaded
}) => {
  return (
    <div className="pt-28 pb-16">
      {/* Page Header */}
      <div className="bg-[#f5f5f2] py-12 border-b border-zinc-200/80 mb-6">
        <div className="site-container text-center max-w-3xl mx-auto px-4">
          <span className="chip-pill chip-pill-red mb-3">
            <Utensils size={12} /> Executive Menu Collection
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-zinc-900 tracking-tight leading-none mb-3">
            GASTRONOMY MENU
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base font-medium">
            Curated premium specialties from Executive Chef Uzochukwu Elui — flame grills, authentic soups, finger chops, and signature cocktails.
          </p>
        </div>
      </div>

      <MenuSection
        menuItems={menuItems}
        onSelectItem={onSelectItem}
        onReserveWithItem={onReserveWithItem}
        onOpenCsvUpload={onOpenCsvUpload}
        onDownloadSampleCsv={downloadSampleMenuCsv}
        onResetDefaultMenu={handleResetDefaultMenu}
        isCustomMenuLoaded={isCustomMenuLoaded}
      />
    </div>
  );
};
