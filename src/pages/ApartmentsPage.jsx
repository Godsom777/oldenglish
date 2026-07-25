import React from 'react';
import { ApartmentsSection } from '../components/ApartmentsSection';
import { Building2 } from 'lucide-react';

export const ApartmentsPage = () => {
  return (
    <div className="pt-28 pb-16">
      {/* Page Header */}
      <div className="bg-[#f5f5f2] py-12 border-b border-zinc-200/80 mb-6">
        <div className="site-container text-center max-w-3xl mx-auto px-4">
          <span className="chip-pill chip-pill-red mb-3">
            <Building2 size={12} /> Executive Shortlet Suites
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-zinc-900 tracking-tight leading-none mb-3">
            OLD ENGLISH APARTMENTS
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base font-medium">
            Luxury shortlet suites and VIP apartments opening in Area H, New Owerri. Join the launch waitlist for early access.
          </p>
        </div>
      </div>

      <ApartmentsSection />
    </div>
  );
};
