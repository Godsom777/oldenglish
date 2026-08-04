import React from 'react';
import { Link } from 'react-router-dom';
import {
  Utensils,
  Award,
  Sparkles,
  Building2,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Flame,
  Clock,
  Phone,
  Wine
} from 'lucide-react';
import { MenuItemCard } from './MenuItemCard';
import { getLiveBusinessStatus } from '../utils/hoursUtil';

export const HomeTeasers = ({
  menuItems,
  onSelectItem,
  onReserveWithItem,
  onOpenReservation
}) => {
  const status = getLiveBusinessStatus();

  // Pick top 4 featured menu items
  const featuredDishes = menuItems
    ? menuItems.filter((item) => item.featured).slice(0, 4)
    : [];

  return (
    <div className="space-y-16 py-12">
      {/* 1. FEATURED MENU TEASER */}
      <section className="site-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="chip-pill chip-pill-red mb-3">
              <Utensils size={12} /> Chef's Signature Selection
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              CURATED MENU HIGHLIGHTS
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-xl">
              A quick taste of Executive Chef Uzochukwu Elui's flame-grilled specialties, authentic Africana soups, and craft cocktails.
            </p>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 shadow-md shadow-red-600/20 hover:shadow-lg w-max"
          >
            Explore Full Menu <ArrowRight size={16} />
          </Link>
        </div>

        {/* 4 Featured Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredDishes.map((dish) => (
            <MenuItemCard
              key={dish.id}
              item={dish}
              onSelect={onSelectItem}
              onReserve={onReserveWithItem}
            />
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 hover:text-red-600 transition-colors group"
          >
            <span>View all 20+ dishes, drink pairings, and menu uploader</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 2. CULINARY STORY & HYGIENE TEASER */}
      <section className="bg-[#f5f5f2] py-14 border-y border-zinc-200/80">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Box */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-auto lg:h-[380px]">
              <img
                src="/images/story-chef.jpg"
                alt="Executive Chef Uzochukwu Elui"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="chip-pill chip-pill-red mb-2 inline-flex">
                  <Award size={12} /> Founder & Master Chef
                </span>
                <h3 className="font-serif text-xl font-bold">Executive Chef Uzochukwu Elui</h3>
                <p className="text-xs text-zinc-300 mt-1">Pioneering Igbo & International Gastronomy in Owerri</p>
              </div>
            </div>

            {/* Content Box */}
            <div className="lg:col-span-7 space-y-5">
              <span className="chip-pill chip-pill-dark">
                <ShieldCheck size={12} className="text-red-500" /> Culinary Heritage
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                AUTHENTIC FLAVORS, UNCOMPROMISING HYGIENE.
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                At <strong className="text-zinc-900">Old English Bar & Grills</strong>, every recipe is crafted using strictly fresh local ingredients, artisanal flame technique, and hospital-grade kitchen hygiene standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-sm">
                  <Flame className="text-red-600 mb-2" size={20} />
                  <h4 className="font-bold text-sm text-zinc-900">Hardwood Flame</h4>
                  <p className="text-xs text-zinc-500 mt-1">Authentic charcoal smoky flavor</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-sm">
                  <ShieldCheck className="text-emerald-600 mb-2" size={20} />
                  <h4 className="font-bold text-sm text-zinc-900">Pristine Hygiene</h4>
                  <p className="text-xs text-zinc-500 mt-1">100% open-kitchen standards</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-sm">
                  <Wine className="text-purple-600 mb-2" size={20} />
                  <h4 className="font-bold text-sm text-zinc-900">Craft Mixology</h4>
                  <p className="text-xs text-zinc-500 mt-1">Handcrafted botanical cocktails</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/story"
                  className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 shadow-md"
                >
                  Discover Our Story & Kitchen Standards <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ROOMS & ATMOSPHERES TEASER */}
      <section className="site-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="chip-pill chip-pill-red mb-3">
              <Sparkles size={12} /> Multi-Zone Dining
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              5 UNIQUE DINING ATMOSPHERES
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-xl">
              From our vibrant main lounge to private subterranean Cave & Bunker rooms, choose your preferred dining vibe.
            </p>
          </div>
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 shadow-md w-max"
          >
            Explore All 5 Spaces <ArrowRight size={16} />
          </Link>
        </div>

        {/* 3 Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bento-card overflow-hidden group flex flex-col justify-between">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/images/rooms/room-submarine.jpg"
                alt="Submarine Room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-zinc-900/90 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                Submarine Lounge
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-zinc-900 mb-2">Submarine Room</h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Deep aquatic ambient lighting and acoustic intimacy for special dates & VIP groups.
                </p>
              </div>
              <button
                onClick={() => onOpenReservation(null, 'submarine')}
                className="w-full bg-zinc-100 hover:bg-red-600 hover:text-white text-zinc-900 text-xs font-bold uppercase tracking-wider py-2.5 rounded-full transition-colors"
              >
                Reserve Space
              </button>
            </div>
          </div>

          <div className="bento-card overflow-hidden group flex flex-col justify-between">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/images/rooms/room-cave.jpg"
                alt="Cave Room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-zinc-900/90 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                Cave Experience
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-zinc-900 mb-2">Cave Room</h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Rustic brick arches and warm moody lighting, perfect for celebratory dinners.
                </p>
              </div>
              <button
                onClick={() => onOpenReservation(null, 'cave')}
                className="w-full bg-zinc-100 hover:bg-red-600 hover:text-white text-zinc-900 text-xs font-bold uppercase tracking-wider py-2.5 rounded-full transition-colors"
              >
                Reserve Space
              </button>
            </div>
          </div>

          <div className="bento-card overflow-hidden group flex flex-col justify-between">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/images/rooms/room-outdoor.jpg"
                alt="Outdoor Terrace"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                Al Fresco Terrace
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-zinc-900 mb-2">Outdoor Terrace</h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Open-air dining under night lights with fresh breeze, music, and cocktail bar.
                </p>
              </div>
              <button
                onClick={() => onOpenReservation(null, 'outdoor')}
                className="w-full bg-zinc-100 hover:bg-red-600 hover:text-white text-zinc-900 text-xs font-bold uppercase tracking-wider py-2.5 rounded-full transition-colors"
              >
                Reserve Space
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. APARTMENTS TEASER */}
      <section className="site-container">
        <div className="bento-card bg-zinc-900 text-white p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="chip-pill bg-white/10 text-white border-white/20 inline-flex items-center gap-2">
                <Building2 size={12} className="text-red-500" /> Kcanice & Isabella Shortlets
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
                LUXURY APARTMENTS IN NEW OWERRI
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Stay at our premium shortlet suites with 24/7 power, security, high-speed Wi-Fi, and executive room service directly from Old English Bar & Grills.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                to="/apartments"
                className="w-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-full text-center transition-all shadow-lg shadow-red-600/20 inline-flex items-center justify-center gap-2"
              >
                Discover Shortlet Suites <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOCATION & HOURS QUICK CARD */}
      <section className="site-container">
        <div className="bg-[#f5f5f2] rounded-3xl p-8 sm:p-10 border border-zinc-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-400'}`} />
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                {status.isOpen ? 'Open Now (7:00 AM – 12:00 AM)' : 'Currently Closed'}
              </span>
            </div>
            <h3 className="font-display text-2xl font-extrabold text-zinc-900">
              LOCATION & DIRECT INQUIRIES
            </h3>
            <p className="text-zinc-600 text-sm">
              Area H, New Owerri, Imo State, Nigeria &bull; Direct Phone: <a href="tel:08104128681" className="font-semibold text-zinc-900 underline">08104128681</a>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 justify-center">
            <button
              onClick={() => onOpenReservation()}
              className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-md shadow-red-600/20"
            >
              Reserve Table
            </button>
            <Link
              to="/contact"
              className="bg-white hover:bg-zinc-900 hover:text-white text-zinc-900 border border-zinc-300 text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-sm"
            >
              Location & Map <ArrowRight size={14} className="inline ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
