import React from 'react';
import { StorySection } from '../components/StorySection';
import { Award, ShieldCheck } from 'lucide-react';

export const StoryPage = () => {
  return (
    <div className="pt-28 pb-16">
      {/* Page Header */}
      <div className="bg-[#f5f5f2] py-12 border-b border-zinc-200/80">
        <div className="site-container text-center max-w-3xl mx-auto px-4">
          <span className="chip-pill chip-pill-dark mb-3">
            <Award size={12} className="text-red-500" /> Culinary Heritage
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-zinc-900 tracking-tight leading-none mb-3">
            OUR STORY & STANDARDS
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base font-medium">
            Founded by Executive Chef Uzochukwu Elui. Discover the story, culinary standards, and pristine kitchen hygiene behind Old English Bar & Grills.
          </p>
        </div>
      </div>

      <StorySection />
    </div>
  );
};
