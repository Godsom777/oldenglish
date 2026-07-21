import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, Compass, ExternalLink } from 'lucide-react';
import { OPERATING_HOURS, getLiveBusinessStatus } from '../utils/hoursUtil';

export const LocationSection = ({ onOpenReservation }) => {
  const status = getLiveBusinessStatus();

  return (
    <section id="location" className="py-28 bg-white border-t border-zinc-200/80">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag">VISIT & CONTACT</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
            LOCATION & HOURS
          </h2>
          <p className="text-zinc-600 text-base font-normal mt-2">
            Located in Area H, New Owerri, Imo State. Open everyday for breakfast, lunch, dinner, late night craft drinks, and Suya bar snacks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Operating Hours Table Card */}
          <div className="lg:col-span-5 bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-zinc-200">
                <div className="flex items-center gap-2.5">
                  <Clock size={22} className="text-red-600" />
                  <h3 className="font-serif text-xl font-bold text-zinc-900">Opening Schedule</h3>
                </div>

                <span className={`badge ${status.isOpen ? 'badge-open' : 'badge-closed'} text-xs font-bold`}>
                  <span className="pulse-dot"></span>
                  {status.statusText}
                </span>
              </div>

              <div className="mt-6 space-y-2.5 text-xs">
                {OPERATING_HOURS.map((item, idx) => {
                  const isToday = item.day === status.todayName;
                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                        isToday
                          ? 'bg-red-50 border border-red-200 text-zinc-900 font-bold'
                          : 'text-zinc-600 hover:bg-zinc-50'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {item.day}
                        {isToday && (
                          <span className="text-[10px] bg-red-600 text-white px-2 py-0.5 rounded font-bold uppercase">
                            Today
                          </span>
                        )}
                      </span>
                      <span className="font-mono text-zinc-900 font-semibold">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-200">
              <button onClick={onOpenReservation} className="btn-primary w-full py-3.5 text-xs justify-center font-bold">
                Book a Table Now
              </button>
            </div>
          </div>

          {/* Contact Details & Map Card */}
          <div className="lg:col-span-7 space-y-6">
            {/* Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200 shadow-sm">
                <div className="w-10 h-10 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
                  <MapPin size={22} />
                </div>
                <h4 className="font-serif text-xl font-bold text-zinc-900 mb-1">Location Address</h4>
                <p className="text-xs text-zinc-600 font-normal leading-relaxed mb-4">
                  <strong>Area H, New Owerri</strong><br />
                  Imo State, Nigeria
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5"
                >
                  Open Map Directions <ExternalLink size={13} />
                </a>
              </div>

              <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200 shadow-sm">
                <div className="w-10 h-10 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
                  <Phone size={22} />
                </div>
                <h4 className="font-serif text-xl font-bold text-zinc-900 mb-1">Direct Contact</h4>
                <p className="text-xs text-zinc-700 font-semibold mb-2">
                  Call Line: <a href="tel:08104128681" className="text-red-600 underline">08104128681</a>
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <a
                    href="https://wa.me/2348104128681"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs px-3.5 py-1.5 text-green-700 border-green-300 hover:bg-green-50"
                  >
                    <MessageSquare size={13} className="text-green-600" /> WhatsApp Direct
                  </a>
                </div>
              </div>
            </div>

            {/* Map Visual Card */}
            <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden border border-zinc-200 group shadow-md bg-zinc-100">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                alt="Map preview of New Owerri Imo State"
                className="w-full h-full object-cover filter contrast-105 opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

              {/* Map Pin Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 rounded-3xl bg-white/95 backdrop-blur-md border border-zinc-200 text-center shadow-xl">
                <div className="w-11 h-11 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto mb-2 shadow-md animate-pulse">
                  <MapPin size={24} />
                </div>
                <span className="font-serif font-bold text-zinc-900 text-lg block">OLD ENGLISH</span>
                <span className="text-[11px] text-red-600 font-bold uppercase tracking-wider block">
                  Bar & Grill • Area H, New Owerri
                </span>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-[11px] px-3.5 py-1.5 mt-3 inline-flex"
                >
                  <Compass size={13} className="text-red-600" /> Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
