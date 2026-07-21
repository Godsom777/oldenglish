import React from 'react';
import { Flame, Upload, ArrowUp, Share2, Globe, MessageCircle, Phone, MapPin } from 'lucide-react';

export const Footer = ({ onOpenReservation, onOpenCsvUpload }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-100 text-zinc-700 border-t border-zinc-200/80 pt-16 pb-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-200">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-red-100 border border-red-200 flex items-center justify-center text-red-600">
                <Flame size={18} />
              </div>
              <span className="font-serif text-xl font-bold text-zinc-900 tracking-tight">
                OLD ENGLISH
              </span>
            </a>
            <p className="text-xs text-zinc-600 font-normal leading-relaxed">
              Minimalist luxury bar & charcoal grill in Area H, New Owerri, Imo State. Authentic Yaji Suya, fresh grilled tilapia, pepper soup, and craft cocktails.
            </p>
            <div className="flex items-center gap-3 pt-2 text-zinc-600">
              <a href="#" aria-label="Social Media" className="w-8 h-8 rounded-full bg-white hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors border border-zinc-200">
                <Globe size={15} />
              </a>
              <a href="#" aria-label="Share" className="w-8 h-8 rounded-full bg-white hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors border border-zinc-200">
                <Share2 size={15} />
              </a>
              <a href="https://wa.me/2348104128681" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-8 h-8 rounded-full bg-white hover:bg-green-600 hover:text-white flex items-center justify-center transition-colors border border-zinc-200">
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-zinc-600">
              <li>
                <a href="#menu" className="hover:text-red-600 transition-colors">
                  Food & Cocktail Menu
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-red-600 transition-colors">
                  Our Heritage
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-red-600 transition-colors">
                  Private Events & Catering
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-red-600 transition-colors">
                  Opening Hours & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4">
              Visit Us
            </h4>
            <p className="text-xs text-zinc-600 font-normal mb-2 flex items-start gap-1.5">
              <MapPin size={14} className="text-red-600 shrink-0 mt-0.5" />
              <span>Area H, New Owerri, Imo State</span>
            </p>
            <p className="text-xs text-zinc-600 font-normal mb-4 flex items-center gap-1.5">
              <Phone size={14} className="text-red-600 shrink-0" />
              <a href="tel:08104128681" className="font-bold text-zinc-900 hover:text-red-600">08104128681</a>
            </p>
            <button onClick={onOpenReservation} className="btn-primary text-xs px-4 py-2 font-bold">
              Book Your Table
            </button>
          </div>

          {/* Menu Management */}
          <div>
            <h4 className="font-serif text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4">
              Menu Admin
            </h4>
            <p className="text-xs text-zinc-600 font-normal mb-4">
              Have a custom menu CSV? Upload your file to update dishes live on the site anytime.
            </p>
            <button
              onClick={onOpenCsvUpload}
              className="btn-secondary text-xs px-3.5 py-2"
            >
              <Upload size={14} className="text-red-600" />
              <span>Import Menu CSV</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-medium">
          <p>© {new Date().getFullYear()} Old English Bar & Grill, Area H New Owerri. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-zinc-700 hover:text-red-600 font-bold transition-colors"
            >
              Back to Top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
