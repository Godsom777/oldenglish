import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

export const Navbar = ({ onOpenReservation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md py-3.5 shadow-sm border-b border-zinc-100'
            : 'bg-white/80 backdrop-blur-sm py-5 border-b border-zinc-100/60'
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 tracking-tight group">
            <span className="w-2 h-2 rounded-full bg-red-600 inline-block group-hover:scale-125 transition-transform" />
            <span className="font-serif text-2xl font-bold tracking-tight text-zinc-900">
              OLD ENGLISH
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-zinc-500">
            <a href="#menu" className="hover:text-zinc-900 transition-colors">Menu</a>
            <a href="#story" className="hover:text-zinc-900 transition-colors">Story</a>
            <a href="#events" className="hover:text-zinc-900 transition-colors">Events</a>
            <a href="#location" className="hover:text-zinc-900 transition-colors">Location & Hours</a>
          </nav>

          {/* Desktop Reservation Button */}
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:08104128681" className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
              08104128681
            </a>
            <button
              onClick={onOpenReservation}
              className="bg-zinc-900 text-white text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full hover:bg-red-600 transition-colors duration-300"
            >
              Reserve Table
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={onOpenReservation}
              className="bg-zinc-900 text-white text-xs font-semibold px-4 py-2 rounded-full"
            >
              Reserve
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white p-8 flex flex-col justify-between md:hidden animate-fade-in">
          <div>
            <div className="flex items-center justify-between mb-12">
              <span className="font-serif text-2xl font-bold text-zinc-900">OLD ENGLISH</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-zinc-600">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-6 text-xl font-serif">
              <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="text-zinc-900 hover:text-red-600">Menu</a>
              <a href="#story" onClick={() => setMobileMenuOpen(false)} className="text-zinc-900 hover:text-red-600">Our Story</a>
              <a href="#events" onClick={() => setMobileMenuOpen(false)} className="text-zinc-900 hover:text-red-600">Private Events</a>
              <a href="#location" onClick={() => setMobileMenuOpen(false)} className="text-zinc-900 hover:text-red-600">Hours & Location</a>
            </nav>
          </div>
          <div className="space-y-4">
            <a href="tel:08104128681" className="block text-center text-sm font-medium text-zinc-600 py-3 border border-zinc-200 rounded-full">
              Call 08104128681
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenReservation(); }}
              className="w-full bg-zinc-900 text-white text-sm font-semibold py-3.5 rounded-full"
            >
              Reserve a Table
            </button>
          </div>
        </div>
      )}
    </>
  );
};
