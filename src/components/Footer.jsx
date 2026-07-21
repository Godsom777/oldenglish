import React from 'react';
import { Flame, Upload, ArrowUp, Share2, Globe, MessageCircle } from 'lucide-react';

export const Footer = ({ onOpenReservation, onOpenCsvUpload }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] text-zinc-400 border-t border-zinc-900 pt-16 pb-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-900">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500">
                <Flame size={18} />
              </div>
              <span className="font-serif text-xl font-bold text-white tracking-tight">
                OLD ENGLISH
              </span>
            </a>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              Minimalist luxury bar & charcoal grill. Authentic Yaji Suya, prime wood-flamed steaks, whole tilapia, and artisanal cocktails in Primrose Hill.
            </p>
            <div className="flex items-center gap-3 pt-2 text-zinc-400">
              <a href="#" aria-label="Social Media" className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors">
                <Globe size={15} />
              </a>
              <a href="#" aria-label="Share" className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors">
                <Share2 size={15} />
              </a>
              <a href="#" aria-label="Contact Us" className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors">
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <a href="#menu" className="hover:text-red-400 transition-colors">
                  Food & Cocktail Menu
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-red-400 transition-colors">
                  Our Culinary Heritage
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-red-400 transition-colors">
                  Private Events & Catering
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-red-400 transition-colors">
                  Opening Hours & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              Reservations
            </h4>
            <p className="text-xs text-zinc-500 font-light mb-4">
              Walk-ins welcome at our Suya Bar. Table reservations recommended for dinner & weekend service.
            </p>
            <button onClick={onOpenReservation} className="btn-primary text-xs px-4 py-2">
              Book Your Table
            </button>
          </div>

          {/* Menu Management */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              Menu Admin
            </h4>
            <p className="text-xs text-zinc-500 font-light mb-4">
              Have your own menu CSV? Upload your file to update dishes live on the site anytime.
            </p>
            <button
              onClick={onOpenCsvUpload}
              className="btn-secondary text-xs px-3.5 py-2"
            >
              <Upload size={13} className="text-red-400" />
              <span>Import Menu CSV</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} Old English Bar & Grill Ltd. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
            >
              Back to Top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
