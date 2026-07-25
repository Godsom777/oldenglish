import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Phone, MapPin } from 'lucide-react';

export const Footer = ({ onOpenReservation, onOpenCsvUpload }) => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#111113] text-white pt-16 pb-12 border-t border-zinc-800">
      <div className="site-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 pb-12 border-b border-zinc-800/80">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 inline-flex">
              <img
                src="/images/logo.png"
                alt="Old English Bar & Grills Logo"
                className="h-12 w-auto object-contain"
              />
              <span className="font-display text-2xl font-bold tracking-tight">OLD ENGLISH</span>
            </Link>
            <p className="font-serif italic text-red-400 text-sm font-normal mb-3">
              "See where good taste takes you"
            </p>
            <p className="text-zinc-400 text-xs leading-relaxed mb-4">
              Founded by Executive Chef Uzochukwu Elui. Flame-kissed Suya, grilled tilapia, rich pepper soups, and craft mixology prepared under strict international hygiene standards in Owerri Imo State.
            </p>
            <p className="text-zinc-500 text-xs font-semibold">Area H, New Owerri, Imo State</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 mb-4">Page Navigation</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><Link to="/" className="text-zinc-400 hover:text-white transition-colors">Home Page</Link></li>
              <li><Link to="/menu" className="text-zinc-400 hover:text-white transition-colors">Gastronomy Menu</Link></li>
              <li><Link to="/story" className="text-zinc-400 hover:text-white transition-colors">Our Story & Standards</Link></li>
              <li><Link to="/bar" className="text-zinc-400 hover:text-white transition-colors">Our Bar & Mixology</Link></li>
              <li><Link to="/rooms" className="text-zinc-400 hover:text-white transition-colors">Rooms & Spaces Gallery</Link></li>
              <li><Link to="/apartments" className="text-zinc-400 hover:text-white transition-colors">Kcanice & Isabella Apartments</Link></li>
              <li><Link to="/events" className="text-zinc-400 hover:text-white transition-colors">Private Events</Link></li>
              <li><Link to="/contact" className="text-zinc-400 hover:text-white transition-colors">Location & Hours</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 mb-4">Contact Us</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><a href="tel:08104128681" className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-1.5"><Phone size={13} /> 08104128681</a></li>
              <li><a href="tel:08039352371" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"><Phone size={13} /> 0803 935 2371 (Apartment)</a></li>
              <li><a href="https://wa.me/2348104128681" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">WhatsApp Line</a></li>
              <li><a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"><MapPin size={13} /> Google Maps</a></li>
            </ul>
          </div>

          {/* Hours & Slogan */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 mb-4">Hours</h4>
            <p className="text-zinc-400 text-xs leading-relaxed font-medium mb-3">
              Open Everyday<br />
              <strong className="text-white">7:00 AM – 12:00 AM</strong>
            </p>
            <button
              onClick={() => onOpenReservation()}
              className="bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all shadow-md shadow-red-600/20"
            >
              Reserve Table / Room
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <span>&copy; {new Date().getFullYear()} Old English Bar & Grills & Kcanice & Isabella Apartments. All rights reserved.</span>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenCsvUpload}
              className="text-zinc-600 hover:text-zinc-400 text-[11px] uppercase tracking-wider font-semibold"
            >
              Admin CSV
            </button>

            <button
              onClick={scrollTop}
              className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
