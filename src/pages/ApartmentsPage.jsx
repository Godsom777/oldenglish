import React from 'react';
import { ApartmentsSection } from '../components/ApartmentsSection';
import { Building2 } from 'lucide-react';

export const ApartmentsPage = () => {
  return (
    <div className="pt-28 pb-16">
      {/* Page Header */}
      <div className="bg-[#f5f5f2] py-12 border-b border-zinc-200/80 mb-6">
        <div className="site-container text-center max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 text-white text-xs font-bold uppercase tracking-widest mb-3">
            <Building2 size={12} className="text-red-500" /> Kcanice & Isabella by Old English
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-zinc-900 tracking-tight leading-none mb-3">
            KCANICE & ISABELLA APARTMENTS
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base font-medium">
            Luxury shortlet suites and executive apartments in New Owerri. Experience comfort, loyalty discounts, and VIP room service directly from Old English.
          </p>
        </div>
      </div>

      <ApartmentsSection />
    </div>
  );
};
