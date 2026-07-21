import React, { useState, useEffect } from 'react';
import { Flame, Calendar, Upload, Menu as MenuIcon, X, Clock, MapPin, Phone } from 'lucide-react';
import { getLiveBusinessStatus } from '../utils/hoursUtil';

export const Navbar = ({ onOpenReservation, onOpenCsvUpload }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessStatus, setBusinessStatus] = useState(getLiveBusinessStatus());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setBusinessStatus(getLiveBusinessStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass-nav py-3.5 shadow-sm' : 'bg-white/80 py-5 backdrop-blur-sm'
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-red-600 group-hover:scale-105 transition-transform shadow-sm">
              <Flame size={22} className="fill-red-600/20" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 flex items-center gap-1.5">
                OLD ENGLISH
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-red-600 font-bold -mt-1">
                BAR & GRILL • NEW OWERRI
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-700">
            <a href="#menu" className="hover:text-red-600 transition-colors">
              Menu
            </a>
            <a href="#story" className="hover:text-red-600 transition-colors">
              Our Story
            </a>
            <a href="#events" className="hover:text-red-600 transition-colors">
              Private Events
            </a>
            <a href="#location" className="hover:text-red-600 transition-colors">
              Hours & Location
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Direct Phone Link */}
            <a
              href="tel:08104128681"
              className="text-xs font-bold text-zinc-800 hover:text-red-600 flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-zinc-100 transition-colors"
            >
              <Phone size={14} className="text-red-600" />
              <span>08104128681</span>
            </a>

            {/* Live Status Badge */}
            <div
              className={`badge ${
                businessStatus.isOpen ? 'badge-open' : 'badge-closed'
              } text-xs hidden lg:flex`}
            >
              <span className="pulse-dot"></span>
              {businessStatus.statusText} • 7am–12am
            </div>

            {/* CSV Menu Import Button */}
            <button
              onClick={onOpenCsvUpload}
              className="btn-secondary text-xs px-3.5 py-2.5"
              title="Upload Custom Menu CSV"
            >
              <Upload size={14} className="text-red-600" />
              <span>Import CSV</span>
            </button>

            {/* Reserve Button */}
            <button onClick={onOpenReservation} className="btn-primary text-xs px-4 py-2.5">
              <Calendar size={15} />
              <span>Reserve Table</span>
            </button>
          </div>

          {/* Mobile Actions & Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenReservation}
              className="btn-primary text-xs px-3 py-2"
            >
              Reserve
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn-icon"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-[340px] bg-white border-l border-zinc-200 p-6 flex flex-col justify-between transition-transform duration-300 ease-out shadow-2xl ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-zinc-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                  <Flame size={18} />
                </div>
                <span className="font-serif text-lg font-bold text-zinc-900">OLD ENGLISH</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-500 hover:text-zinc-900 p-1"
              >
                <X size={22} />
              </button>
            </div>

            {/* Live Status */}
            <div className="mt-4 p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-zinc-600" />
                <span className="text-xs font-semibold text-zinc-800">Everyday: 7am – 12am</span>
              </div>
              <span className={`badge text-[10px] ${businessStatus.isOpen ? 'badge-open' : 'badge-closed'}`}>
                {businessStatus.isOpen ? 'OPEN' : 'CLOSED'}
              </span>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-4 mt-6">
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-zinc-800 hover:text-red-600 transition-colors py-2 border-b border-zinc-100"
              >
                Food & Drink Menu
              </a>
              <a
                href="#story"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-zinc-800 hover:text-red-600 transition-colors py-2 border-b border-zinc-100"
              >
                Our Story
              </a>
              <a
                href="#events"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-zinc-800 hover:text-red-600 transition-colors py-2 border-b border-zinc-100"
              >
                Private Events
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-zinc-800 hover:text-red-600 transition-colors py-2 border-b border-zinc-100"
              >
                Hours & Location
              </a>
            </nav>
          </div>

          {/* Drawer Actions & Footer */}
          <div className="flex flex-col gap-3 pt-6 border-t border-zinc-200">
            <a
              href="tel:08104128681"
              className="btn-secondary w-full justify-center text-xs"
            >
              <Phone size={14} className="text-red-600" />
              <span>Call 08104128681</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCsvUpload();
              }}
              className="btn-secondary w-full justify-center text-xs"
            >
              <Upload size={14} className="text-red-600" />
              <span>Import Menu CSV</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="btn-primary w-full justify-center text-sm"
            >
              <Calendar size={16} />
              <span>Book a Table</span>
            </button>

            <div className="text-center mt-2">
              <p className="text-[11px] text-zinc-500 font-medium">Area H, New Owerri, Imo State</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
