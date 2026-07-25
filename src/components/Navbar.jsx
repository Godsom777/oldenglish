import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu as MenuIcon, X, Phone } from 'lucide-react';
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

  const navItemClass = ({ isActive }) =>
    `px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
      isActive
        ? 'bg-red-600 text-white shadow-sm'
        : 'text-zinc-600 hover:text-zinc-900 hover:bg-white'
    }`;

  return (
    <>
      {/* Floating Pill Navbar Header */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6">
        <div className="site-container">
          <div className="pill-navbar px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-300">
            {/* Logo Link to Home */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/images/logo.png"
                alt="Old English Bar & Grills Logo"
                className="h-9 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <span className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-900 leading-none">
                OLD ENGLISH
              </span>
            </Link>

            {/* Desktop Navigation Pills */}
            <nav className="hidden xl:flex items-center gap-1 bg-zinc-100/90 p-1 rounded-full border border-zinc-200/60">
              <NavLink to="/" end className={navItemClass}>
                Home
              </NavLink>
              <NavLink to="/menu" className={navItemClass}>
                Menu
              </NavLink>
              <NavLink to="/story" className={navItemClass}>
                Story
              </NavLink>
              <NavLink to="/bar" className={navItemClass}>
                Bar
              </NavLink>
              <NavLink to="/rooms" className={navItemClass}>
                Rooms
              </NavLink>
              <NavLink to="/apartments" className={navItemClass}>
                Apartments
              </NavLink>
              <NavLink to="/events" className={navItemClass}>
                Events
              </NavLink>
              <NavLink to="/contact" className={navItemClass}>
                Contact
              </NavLink>
            </nav>

            {/* Desktop Action Widgets */}
            <div className="hidden xl:flex items-center gap-3">
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
            <div className="flex items-center gap-2 xl:hidden">
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
        <div className="fixed inset-0 z-50 bg-white/98 backdrop-blur-2xl p-6 flex flex-col justify-between xl:hidden animate-fade-in">
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-100">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
                <img
                  src="/images/logo.png"
                  alt="Old English Bar & Grills Logo"
                  className="h-10 w-auto object-contain"
                />
                <span className="font-display text-2xl font-bold text-zinc-900">OLD ENGLISH</span>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-zinc-600">
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-3 text-lg font-serif">
              <NavLink to="/" end onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `py-2 border-b border-zinc-100 font-semibold ${isActive ? 'text-red-600 font-bold' : 'text-zinc-900'}`}>
                Home Page
              </NavLink>
              <NavLink to="/menu" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `py-2 border-b border-zinc-100 font-semibold ${isActive ? 'text-red-600 font-bold' : 'text-zinc-900'}`}>
                Gastronomy Menu
              </NavLink>
              <NavLink to="/story" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `py-2 border-b border-zinc-100 font-semibold ${isActive ? 'text-red-600 font-bold' : 'text-zinc-900'}`}>
                Culinary Heritage & Story
              </NavLink>
              <NavLink to="/bar" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `py-2 border-b border-zinc-100 font-semibold ${isActive ? 'text-red-600 font-bold' : 'text-zinc-900'}`}>
                Our Bar & Mixology
              </NavLink>
              <NavLink to="/rooms" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `py-2 border-b border-zinc-100 font-semibold ${isActive ? 'text-red-600 font-bold' : 'text-zinc-900'}`}>
                Rooms & Spaces Gallery
              </NavLink>
              <NavLink to="/apartments" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `py-2 border-b border-zinc-100 font-semibold ${isActive ? 'text-red-600 font-bold' : 'text-zinc-900'}`}>
                Kcanice & Isabella Apartments
              </NavLink>
              <NavLink to="/events" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `py-2 border-b border-zinc-100 font-semibold ${isActive ? 'text-red-600 font-bold' : 'text-zinc-900'}`}>
                Private Events & Catering
              </NavLink>
              <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `py-2 border-b border-zinc-100 font-semibold ${isActive ? 'text-red-600 font-bold' : 'text-zinc-900'}`}>
                Contact, Location & Hours
              </NavLink>
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
              Reserve a Table / Room
            </button>
          </div>
        </div>
      )}
    </>
  );
};
