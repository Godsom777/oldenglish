import React, { useState } from 'react';
import { Users, Sparkles, Send, CheckCircle2 } from 'lucide-react';

export const EventsSection = ({ onOpenReservation }) => {
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Birthday Party',
    guests: '20-40',
    date: '',
    details: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setInquirySent(true);
  };

  return (
    <section id="events" className="py-28 bg-[#f8f9fa] border-t border-zinc-200/80 relative">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* Text & Event Types */}
          <div className="lg:col-span-6 space-y-6">
            <span className="section-tag">PRIVATE CELEBRATIONS & CATERING</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-zinc-900 leading-tight">
              HOST YOUR SPECIAL OCCASIONS WITH US.
            </h2>
            <p className="text-zinc-600 text-base font-normal leading-relaxed">
              Whether planning an intimate private dinner, corporate celebration, birthday party, or full lounge takeover in New Owerri, our team crafts bespoke charcoal tasting menus and cocktail packages tailored to your event.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-start gap-4">
                <div className="p-3 rounded-xl bg-red-50 text-red-600 shrink-0">
                  <Sparkles size={22} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-zinc-900">Bespoke Suya & Grill Tasting</h3>
                  <p className="text-xs text-zinc-600 mt-1 font-normal leading-relaxed">
                    Multi-course live grill experience served family-style with cocktail pairings.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-start gap-4">
                <div className="p-3 rounded-xl bg-red-50 text-red-600 shrink-0">
                  <Users size={22} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-zinc-900">Full & Partial Lounge Hire</h3>
                  <p className="text-xs text-zinc-600 mt-1 font-normal leading-relaxed">
                    Accommodates up to 120 guests with dedicated bar staff, sound system, and outdoor terrace access.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl relative">
              <h3 className="font-serif text-2xl font-bold text-zinc-900 mb-1">
                Private Event Inquiry
              </h3>
              <p className="text-xs text-zinc-500 mb-6 font-medium">
                Tell us about your event and our events director will respond within 24 hours.
              </p>

              {inquirySent ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-zinc-900">Inquiry Received</h4>
                  <p className="text-xs text-zinc-600 max-w-sm mx-auto">
                    Thank you, {formData.name}! Our team has received your request for {formData.eventType} in New Owerri and will contact you via <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setInquirySent(false)}
                    className="btn-secondary text-xs px-4 py-2 mt-2"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-600 block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-xl p-3 text-xs outline-none focus:border-red-600"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-600 block mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="08104128681"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-xl p-3 text-xs outline-none focus:border-red-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-600 block mb-1">
                        Event Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-xl p-3 text-xs outline-none focus:border-red-600"
                      >
                        <option>Birthday Party</option>
                        <option>Corporate Dinner</option>
                        <option>Private Tasting</option>
                        <option>Full Venue Hire</option>
                        <option>Wedding Afterparty</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-600 block mb-1">
                        Guest Count
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-xl p-3 text-xs outline-none focus:border-red-600"
                      >
                        <option>10 - 20 Guests</option>
                        <option>20 - 40 Guests</option>
                        <option>40 - 80 Guests</option>
                        <option>80+ Guests (Full Takeover)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-600 block mb-1">
                        Target Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-xl p-3 text-xs outline-none focus:border-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-600 block mb-1">
                      Event Details & Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about budget, dietary needs, entertainment or special requests..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-xl p-3 text-xs outline-none focus:border-red-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-3.5 text-xs justify-center font-bold"
                  >
                    <Send size={15} />
                    <span>Send Event Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
