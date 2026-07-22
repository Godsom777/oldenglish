import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { getLiveBusinessStatus } from '../utils/hoursUtil';

export const LocationSection = ({ onOpenReservation }) => {
  const status = getLiveBusinessStatus();

  return (
    <section id="location" className="py-28 md:py-36 bg-white">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-red-600 text-xs font-bold uppercase tracking-widest block mb-3">
            Visit & Contact
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-zinc-900 tracking-tight leading-tight mb-4">
            Location & Hours
          </h2>
          <p className="text-zinc-500 text-base font-normal">
            Located in Area H, New Owerri, Imo State. Open everyday for breakfast, lunch, dinner, late night craft drinks, and Suya bar snacks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Hours & Location Details */}
          <div className="bg-zinc-50 rounded-3xl p-8 sm:p-10 border border-zinc-200/70 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-zinc-200/80">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-zinc-900">Opening Schedule</h3>
                  <p className="text-xs text-zinc-400 mt-1">Everyday 7:00 AM – 12:00 AM</p>
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${
                    status.isOpen ? 'bg-emerald-100 text-emerald-800' : 'bg-zinc-200 text-zinc-600'
                  }`}
                >
                  {status.isOpen ? 'Open Now' : 'Closed'}
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5 flex items-center gap-2">
                    <MapPin size={14} className="text-red-600" /> Location Address
                  </h4>
                  <p className="text-zinc-900 text-base font-medium">Area H, New Owerri</p>
                  <p className="text-zinc-500 text-sm">Imo State, Nigeria</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5 flex items-center gap-2">
                    <Phone size={14} className="text-red-600" /> Direct Contact
                  </h4>
                  <a
                    href="tel:08104128681"
                    className="text-zinc-900 text-base font-medium hover:text-red-600 transition-colors block"
                  >
                    Call: 08104128681
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-zinc-200/80 flex flex-wrap gap-4">
              <button
                onClick={onOpenReservation}
                className="bg-zinc-900 text-white text-xs font-semibold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-red-600 transition-colors"
              >
                Reserve a Table
              </button>
              <a
                href="https://wa.me/2348104128681"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zinc-300 text-zinc-800 text-xs font-semibold uppercase tracking-widest px-6 py-3 rounded-full hover:border-zinc-900 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Card 2: Visual Location Card */}
          <div className="relative rounded-3xl overflow-hidden min-h-[320px] bg-zinc-900 text-white p-8 sm:p-10 flex flex-col justify-between">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
              alt="Old English Lounge Exterior"
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
            />

            <div className="relative z-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-red-400 block mb-2">
                New Owerri Lounge
              </span>
              <h3 className="font-serif text-3xl font-normal leading-snug">
                Experience fire & hospitality in Area H.
              </h3>
            </div>

            <div className="relative z-10 pt-6">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-zinc-900 text-xs font-semibold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-red-600 hover:text-white transition-all shadow-lg"
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
