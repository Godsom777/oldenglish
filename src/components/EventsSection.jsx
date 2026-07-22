import React, { useState } from 'react';
import { Send, CheckCircle2, Calendar, Users, Wine } from 'lucide-react';

export const EventsSection = ({ onOpenReservation }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Birthday Party',
    guests: '20-40',
    details: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="events" className="py-24 sm:py-32 bg-[#f5f5f2]">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Bento Info */}
          <div className="lg:col-span-5 bento-card p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="chip-pill chip-pill-red mb-6">
                Private Dining & Catering
              </span>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-zinc-900 leading-tight mb-4">
                HOST YOUR SPECIAL OCCASIONS.
              </h2>

              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Host intimate dinners, birthday parties, corporate celebrations, or full lounge takeovers in New Owerri with tailored charcoal tasting menus and cocktail pairings.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-zinc-100 mt-4">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
                alt="Private Event Setting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold flex items-center justify-between">
                <span>Lounge Capacity: 120+ Guests</span>
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px]">Area H</span>
              </div>
            </div>
          </div>

          {/* Right Bento Form */}
          <div className="lg:col-span-7 bento-card p-8 sm:p-10">
            <h3 className="font-serif text-2xl font-bold text-zinc-900 mb-1">
              Private Event Inquiry
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              Our events team will respond to your request within 24 hours.
            </p>

            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <CheckCircle2 size={44} className="text-red-600 mx-auto" />
                <h4 className="font-serif text-2xl font-bold text-zinc-900">Inquiry Sent Successfully!</h4>
                <p className="text-xs text-zinc-500">
                  We will contact you at <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-red-600 uppercase tracking-widest mt-4 hover:underline"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200/80 rounded-2xl px-4 py-3 text-xs font-medium text-zinc-900 outline-none focus:ring-2 focus:ring-red-600/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="08104128681"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200/80 rounded-2xl px-4 py-3 text-xs font-medium text-zinc-900 outline-none focus:ring-2 focus:ring-red-600/30 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block mb-1.5">
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200/80 rounded-2xl px-4 py-3 text-xs font-medium text-zinc-900 outline-none focus:ring-2 focus:ring-red-600/30 transition-all"
                    >
                      <option>Birthday Party</option>
                      <option>Corporate Dinner</option>
                      <option>Private Tasting</option>
                      <option>Full Lounge Hire</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block mb-1.5">
                      Guest Count
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200/80 rounded-2xl px-4 py-3 text-xs font-medium text-zinc-900 outline-none focus:ring-2 focus:ring-red-600/30 transition-all"
                    >
                      <option>10 – 20 Guests</option>
                      <option>20 – 40 Guests</option>
                      <option>40 – 80 Guests</option>
                      <option>80+ Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block mb-1.5">
                    Special Details or Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about budget, dietary needs, entertainment, or special requests..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-zinc-50 border border-zinc-200/80 rounded-2xl px-4 py-3 text-xs font-medium text-zinc-900 outline-none focus:ring-2 focus:ring-red-600/30 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest py-4 rounded-full transition-all duration-300 shadow-lg shadow-red-600/25 flex items-center justify-center gap-2"
                >
                  <Send size={14} /> Send Event Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
