import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

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
    <section id="events" className="py-28 md:py-36 bg-zinc-50/60">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-red-600 text-xs font-bold uppercase tracking-widest block">
              Private Events
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-zinc-900 leading-tight">
              Host your special occasions with us.
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed">
              Whether planning an intimate private dinner, corporate celebration, birthday party, or full lounge takeover in New Owerri, our team crafts bespoke charcoal tasting menus and cocktail packages tailored to your event.
            </p>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-zinc-200/80">
              <h3 className="font-serif text-2xl font-normal text-zinc-900 mb-1">
                Private Event Inquiry
              </h3>
              <p className="text-zinc-400 text-xs mb-8">
                Tell us about your event and our events director will respond within 24 hours.
              </p>

              {submitted ? (
                <div className="text-center py-10 space-y-3">
                  <CheckCircle2 size={40} className="text-red-600 mx-auto" />
                  <h4 className="font-serif text-xl text-zinc-900">Inquiry Received</h4>
                  <p className="text-sm text-zinc-500">
                    We will be in touch with you at {formData.phone} shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-red-600 uppercase tracking-wider mt-4"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 outline-none focus:border-zinc-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="08104128681"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 outline-none focus:border-zinc-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block mb-1.5">
                        Event Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 outline-none focus:border-zinc-400 transition-colors"
                      >
                        <option>Birthday Party</option>
                        <option>Corporate Dinner</option>
                        <option>Private Tasting</option>
                        <option>Full Lounge Hire</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block mb-1.5">
                        Guest Count
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 outline-none focus:border-zinc-400 transition-colors"
                      >
                        <option>10 – 20 Guests</option>
                        <option>20 – 40 Guests</option>
                        <option>40 – 80 Guests</option>
                        <option>80+ Guests</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block mb-1.5">
                      Event Details & Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about budget, dietary needs, entertainment or special requests..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 outline-none focus:border-zinc-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-zinc-900 text-white text-xs font-semibold uppercase tracking-widest py-3.5 rounded-full hover:bg-red-600 transition-colors duration-300"
                  >
                    Send Event Request
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
