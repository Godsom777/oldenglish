import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone, Building2 } from 'lucide-react';
import { getLiveBusinessStatus } from '../utils/hoursUtil';

export const Navbar = ({ onOpenReservation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const status = getLiveBusinessStatus();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Pill Navbar Header */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6">
        <div className="site-container">
          <div className="pill-navbar px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-300">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <img
                src="/images/logo.png"
                alt="Old English Bar & Grills Logo"
                className="h-9 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <span className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-900 leading-none">
                OLD ENGLISH
              </span>
            </a>

            {/* Desktop Navigation Pills */}
            <nav className="hidden lg:flex items-center gap-1.5 bg-zinc-100/90 p-1 rounded-full border border-zinc-200/60">
              <a
                href="#menu"
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-zinc-600 hover:text-zinc-900 hover:bg-white transition-all"
              >
                Menu
              </a>
              <a
                href="#story"
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-zinc-600 hover:text-zinc-900 hover:bg-white transition-all"
              >
                Story
              </a>
              <a
                href="#bar-story"
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-zinc-600 hover:text-zinc-900 hover:bg-white transition-all"
              >
                Bar
              </a>
              <a
                href="#rooms"
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-zinc-600 hover:text-zinc-900 hover:bg-white transition-all"
              >
                Rooms
              </a>
              <a
                href="#apartments"
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-red-600 hover:bg-white transition-all flex items-center gap-1.5"
              >
                <span>Apartments</span>
                <span className="text-[9px] font-extrabold bg-red-600 text-white px-1.5 py-0.5 rounded-full uppercase tracking-widest">
                  SOON
                </span>
              </a>
              <a
                href="#events"
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-zinc-600 hover:text-zinc-900 hover:bg-white transition-all"
              >
                Events
              </a>
              <a
                href="#location"
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-zinc-600 hover:text-zinc-900 hover:bg-white transition-all"
              >
                Contact
              </a>
            </nav>

            {/* Desktop Action Widgets */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-700 text-xs font-medium border border-zinc-200/60">
                <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-400'}`} />
                <span>{status.isOpen ? 'Open Now' : 'Closed'}</span>
              </div>

              <button
                onClick={() => onOpenReservation()}
                className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-red-600/20 hover:shadow-lg"
              >
                Reserve Table
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onOpenReservation()}
                className="bg-red-600 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-full shadow-sm"
              >
                Reserve
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-800 rounded-full hover:bg-zinc-100"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white/98 backdrop-blur-2xl p-6 flex flex-col justify-between lg:hidden animate-fade-in">
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-100">
              <a href="#" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
                <img
                  src="/images/logo.png"
                  alt="Old English Bar & Grills Logo"
                  className="h-10 w-auto object-contain"
                />
                <span className="font-display text-2xl font-bold text-zinc-900">OLD ENGLISH</span>
              </a>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-zinc-600">
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-lg font-serif">
              <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="text-zinc-900 font-semibold hover:text-red-600 py-2 border-b border-zinc-100">
                Menu & Dishes
              </a>
              <a href="#story" onClick={() => setMobileMenuOpen(false)} className="text-zinc-900 font-semibold hover:text-red-600 py-2 border-b border-zinc-100">
                Our Story
              </a>
              <a href="#bar-story" onClick={() => setMobileMenuOpen(false)} className="text-zinc-900 font-semibold hover:text-red-600 py-2 border-b border-zinc-100">
                Our Bar & Mixology
              </a>
              <a href="#rooms" onClick={() => setMobileMenuOpen(false)} className="text-zinc-900 font-semibold hover:text-red-600 py-2 border-b border-zinc-100">
                Rooms & Spaces
              </a>
              <a href="#apartments" onClick={() => setMobileMenuOpen(false)} className="text-red-600 font-bold py-2 border-b border-zinc-100 flex items-center justify-between">
                <span>Luxury Apartments</span>
                <span className="text-[10px] font-extrabold bg-red-600 text-white px-2 py-0.5 rounded-full uppercase">COMING SOON</span>
              </a>
              <a href="#events" onClick={() => setMobileMenuOpen(false)} className="text-zinc-900 font-semibold hover:text-red-600 py-2 border-b border-zinc-100">
                Private Events
              </a>
              <a href="#location" onClick={() => setMobileMenuOpen(false)} className="text-zinc-900 font-semibold hover:text-red-600 py-2 border-b border-zinc-100">
                Location & Hours
              </a>
            </nav>
          </div>

          <div className="space-y-3">
            <a href="tel:08104128681" className="flex items-center justify-center gap-2 text-sm font-semibold text-zinc-800 py-3 rounded-full border border-zinc-200">
              <Phone size={14} /> Call 08104128681
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenReservation(); }}
              className="w-full bg-red-600 text-white text-sm font-bold uppercase tracking-wider py-3.5 rounded-full shadow-lg shadow-red-600/20"
            >
              Reserve Table / Room
            </button>
          </div>
        </div>
      )}
    </>
  );
};
