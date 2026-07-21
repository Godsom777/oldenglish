import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Compass, ExternalLink } from 'lucide-react';
import { OPERATING_HOURS, getLiveBusinessStatus } from '../utils/hoursUtil';

export const LocationSection = ({ onOpenReservation }) => {
  const status = getLiveBusinessStatus();

  return (
    <section id="location" className="py-24 bg-[#0b0b0d] border-t border-zinc-900">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag">VISIT & CONTACT</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            LOCATION & HOURS
          </h2>
          <p className="text-zinc-400 text-sm font-light mt-2">
            Located in the heart of Primrose Hill, London. Open daily for lunch, dinner, late night craft drinks, and Suya bar snacks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Operating Hours Table Card */}
          <div className="lg:col-span-5 bg-[#141418] border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-red-500" />
                  <h3 className="font-serif text-xl font-bold text-white">Opening Schedule</h3>
                </div>

                <span className={`badge ${status.isOpen ? 'badge-open' : 'badge-closed'} text-xs`}>
                  <span className="pulse-dot"></span>
                  {status.statusText}
                </span>
              </div>

              <div className="mt-6 space-y-3.5 text-xs">
                {OPERATING_HOURS.map((item, idx) => {
                  const isToday = item.day === status.todayName;
                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-2.5 rounded-xl transition-colors ${
                        isToday
                          ? 'bg-red-950/40 border border-red-900/50 text-white font-semibold'
                          : 'text-zinc-400 hover:bg-zinc-900/50'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {item.day}
                        {isToday && (
                          <span className="text-[10px] bg-red-600 text-white px-1.5 py-0.2 rounded font-bold uppercase">
                            Today
                          </span>
                        )}
                      </span>
                      <span className="font-mono text-zinc-300">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800">
              <button onClick={onOpenReservation} className="btn-primary w-full py-3 text-xs justify-center">
                Book a Table Now
              </button>
            </div>
          </div>

          {/* Contact Details & Interactive Map Mock Card */}
          <div className="lg:col-span-7 space-y-6">
            {/* Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#141418] border border-zinc-800">
                <div className="w-9 h-9 rounded-xl bg-red-950/60 text-red-400 flex items-center justify-center mb-4">
                  <MapPin size={20} />
                </div>
                <h4 className="font-serif text-lg font-bold text-white mb-1">Location Address</h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-3">
                  12 Primrose Hill Road, Regent’s Park<br />
                  London, NW1 8JR, United Kingdom
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-red-400 hover:text-red-300 flex items-center gap-1"
                >
                  Get Driving Directions <ExternalLink size={12} />
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-[#141418] border border-zinc-800">
                <div className="w-9 h-9 rounded-xl bg-red-950/60 text-red-400 flex items-center justify-center mb-4">
                  <Phone size={20} />
                </div>
                <h4 className="font-serif text-lg font-bold text-white mb-1">Direct Contact</h4>
                <p className="text-xs text-zinc-400 font-light mb-1">
                  Reservations: <strong>+44 20 7946 0912</strong>
                </p>
                <p className="text-xs text-zinc-400 font-light mb-3">
                  General Info: <strong>hello@oldenglishbarandgrill.co.uk</strong>
                </p>
                <span className="text-[11px] text-zinc-500 block">Dress Code: Smart Casual</span>
              </div>
            </div>

            {/* Simulated Map Visual Card */}
            <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden border border-zinc-800 group shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                alt="Map preview of Primrose Hill London"
                className="w-full h-full object-cover filter grayscale contrast-125 opacity-40 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-transparent to-transparent" />

              {/* Map Pin Card Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 text-center shadow-2xl">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto mb-2 shadow-lg shadow-red-950/80 animate-pulse">
                  <MapPin size={22} />
                </div>
                <span className="font-serif font-bold text-white text-base block">OLD ENGLISH</span>
                <span className="text-[11px] text-red-400 font-semibold uppercase tracking-wider block">
                  Bar & Grill • Primrose Hill
                </span>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-[11px] px-3 py-1.5 mt-3 inline-flex"
                >
                  <Compass size={13} className="text-red-400" /> Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
