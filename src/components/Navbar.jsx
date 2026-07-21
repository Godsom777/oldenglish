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

  // Refresh status every minute
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
          scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
        }`}
        style={{
          borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        }}
      >
        <div className="container flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 group-hover:scale-105 transition-transform">
              <Flame size={20} className="fill-red-500/30" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-1.5">
                OLD ENGLISH
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-red-500 font-semibold -mt-1">
                BAR & GRILL
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a href="#menu" className="hover:text-white transition-colors">
              Menu
            </a>
            <a href="#story" className="hover:text-white transition-colors">
              Our Story
            </a>
            <a href="#events" className="hover:text-white transition-colors">
              Private Events
            </a>
            <a href="#location" className="hover:text-white transition-colors">
              Hours & Location
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Live Status Badge */}
            <div
              className={`badge ${
                businessStatus.isOpen ? 'badge-open' : 'badge-closed'
              } text-xs hidden lg:flex`}
            >
              <span className="pulse-dot"></span>
              {businessStatus.statusText}
            </div>

            {/* CSV Menu Import Button */}
            <button
              onClick={onOpenCsvUpload}
              className="btn-secondary text-xs px-3.5 py-2"
              title="Upload Custom Menu CSV"
            >
              <Upload size={14} className="text-red-400" />
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
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-[340px] bg-[#121216] border-l border-zinc-800 p-6 flex flex-col justify-between transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center text-red-500">
                  <Flame size={18} />
                </div>
                <span className="font-serif text-lg font-bold text-white">OLD ENGLISH</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-400 hover:text-white p-1"
              >
                <X size={22} />
              </button>
            </div>

            {/* Live Status */}
            <div className="mt-4 p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-zinc-400" />
                <span className="text-xs text-zinc-300">{businessStatus.hoursText}</span>
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
                className="text-base font-medium text-zinc-200 hover:text-red-500 transition-colors py-2 border-b border-zinc-800/50"
              >
                Food & Drink Menu
              </a>
              <a
                href="#story"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-red-500 transition-colors py-2 border-b border-zinc-800/50"
              >
                Our Story
              </a>
              <a
                href="#events"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-red-500 transition-colors py-2 border-b border-zinc-800/50"
              >
                Private Events
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-red-500 transition-colors py-2 border-b border-zinc-800/50"
              >
                Hours & Location
              </a>
            </nav>
          </div>

          {/* Drawer Actions & Footer */}
          <div className="flex flex-col gap-3 pt-6 border-t border-zinc-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCsvUpload();
              }}
              className="btn-secondary w-full justify-center text-xs"
            >
              <Upload size={14} className="text-red-400" />
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
              <p className="text-[11px] text-zinc-500">12 Primrose Hill, London • 020 7946 0912</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
