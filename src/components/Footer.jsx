import React from 'react';

export const Footer = ({ onOpenReservation, onOpenCsvUpload }) => {
  return (
    <footer className="bg-zinc-900 text-white py-16">
      <div className="container max-w-5xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-zinc-800">
          <div>
            <span className="font-serif text-2xl font-bold tracking-tight block mb-2">
              OLD ENGLISH
            </span>
            <p className="text-zinc-400 text-sm max-w-sm">
              African Charcoal Bar & Grill. Flame-kissed flavour in a modern lounge setting in Area H, New Owerri.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            <a href="#menu" className="hover:text-white transition-colors">Menu</a>
            <a href="#story" className="hover:text-white transition-colors">Story</a>
            <a href="#events" className="hover:text-white transition-colors">Events</a>
            <a href="#location" className="hover:text-white transition-colors">Location</a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <span>&copy; {new Date().getFullYear()} Old English Bar & Grill. Area H, New Owerri.</span>

          <div className="flex items-center gap-6">
            <a href="tel:08104128681" className="hover:text-zinc-300 transition-colors">
              08104128681
            </a>
            <button
              onClick={onOpenCsvUpload}
              className="text-zinc-600 hover:text-zinc-400 text-[11px] uppercase tracking-wider"
            >
              Admin
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
