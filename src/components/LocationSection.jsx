import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, MessageCircle } from 'lucide-react';
import { OPERATING_HOURS, getLiveBusinessStatus } from '../utils/hoursUtil';

export const LocationSection = ({ onOpenReservation }) => {
  const status = getLiveBusinessStatus();

  return (
    <section id="location" className="py-24 sm:py-32 bg-white">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="chip-pill chip-pill-dark mb-4">
            <MapPin size={12} className="text-red-500" /> Area H, New Owerri
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-zinc-900 tracking-tight leading-none mb-4">
            LOCATION & HOURS
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-medium">
            Open everyday 7:00 AM – 12:00 AM for charcoal grill, Suya lounge, cocktails, and dining.
          </p>
        </div>

        {/* 3 Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Bento Card 1: Operating Hours Schedule */}
          <div className="bento-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-red-600" />
                  <h3 className="font-serif text-xl font-bold text-zinc-900">Opening Hours</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  status.isOpen ? 'bg-emerald-100 text-emerald-800' : 'bg-zinc-100 text-zinc-600'
                }`}>
                  {status.isOpen ? 'Open Now' : 'Closed'}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {OPERATING_HOURS.map((item, idx) => {
                  const isToday = item.day === status.todayName;
                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-between py-2 px-3 rounded-xl transition-colors ${
                        isToday ? 'bg-red-50 font-bold text-red-900 border border-red-100' : 'text-zinc-600'
                      }`}
                    >
                      <span>{item.day}{isToday ? ' (Today)' : ''}</span>
                      <span className="font-mono">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={onOpenReservation}
              className="mt-6 w-full bg-zinc-900 text-white text-xs font-bold uppercase tracking-wider py-3 rounded-full hover:bg-red-600 transition-colors"
            >
              Reserve Table
            </button>
          </div>

          {/* Bento Card 2: Contact & Location */}
          <div className="bento-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-zinc-100">
                <MapPin size={18} className="text-red-600" />
                <h3 className="font-serif text-xl font-bold text-zinc-900">Address & Contact</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">Physical Address</span>
                  <p className="text-zinc-900 text-base font-bold">Area H, New Owerri</p>
                  <p className="text-zinc-500 text-xs">Imo State, Nigeria</p>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">Direct Phone</span>
                  <a href="tel:08104128681" className="text-red-600 text-lg font-extrabold hover:underline block">
                    08104128681
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-100 flex flex-col gap-2">
              <a
                href="https://wa.me/2348104128681"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider py-3 rounded-full hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2 border border-emerald-200/60"
              >
                <MessageCircle size={14} /> WhatsApp Line
              </a>
            </div>
          </div>

          {/* Bento Card 3: Visual Location Card */}
          <div className="bento-card-dark p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden min-h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
              alt="Map view"
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="relative z-10">
              <span className="chip-pill chip-pill-red mb-3">
                <MapPin size={12} /> Pin Location
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                Old English Bar & Grill
              </h3>
              <p className="text-xs text-zinc-400 mt-1">Area H, New Owerri, Imo State</p>
            </div>

            <div className="relative z-10 pt-6">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-zinc-900 text-xs font-bold uppercase tracking-wider py-3 rounded-full hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                Open Google Maps <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
