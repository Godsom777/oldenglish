import React, { useState } from 'react';
import { Building2, Sparkles, ShieldCheck, Phone, Mail, Award, Calendar, CheckCircle2, ArrowRight, Star, Tag, Clock, ChevronRight, MessageCircle } from 'lucide-react';
import { getApartmentWhatsAppUrl } from '../config/whatsapp';

export const APARTMENT_PRICING = [
  {
    id: '1-bedroom',
    type: '1 BEDROOM APARTMENT',
    regularPrice: '₦150,000',
    loyaltyPrice: '₦100,000',
    longStayPrice: '₦80,000',
    capacity: 'Ideal for 1–2 Guests',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    description: 'Bespoke 1-bedroom luxury suite featuring plush king bedding, private lounge area, smart LED TV, fully equipped kitchenette, and 24/7 power.',
    features: ['King Size Bed', 'Private Lounge', 'Smart TV & WiFi', 'Old English Room Service']
  },
  {
    id: '2-bedroom',
    type: '2 BEDROOM APARTMENT',
    regularPrice: '₦200,000',
    loyaltyPrice: '₦150,000',
    longStayPrice: '₦120,000',
    capacity: 'Ideal for 2–4 Guests',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    description: 'Spacious 2-bedroom executive apartment with ensuite bathrooms, grand dining space, modern kitchen, and Italian leather seating.',
    features: ['2 Ensuite Bedrooms', 'Grand Dining Area', 'Full Fitted Kitchen', 'Daily Housekeeping']
  },
  {
    id: '3-bedroom',
    type: '3 BEDROOM APARTMENT',
    regularPrice: '₦250,000',
    loyaltyPrice: '₦200,000',
    longStayPrice: '₦180,000',
    capacity: 'Ideal for 4–6 Guests',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Opulent 3-bedroom family & VIP suite featuring master balcony, luxury marble baths, high-speed fiber internet, and premium sound systems.',
    features: ['3 Luxury Bedrooms', 'Master Balcony', 'High-Speed Fiber', 'Gated VIP Security']
  },
  {
    id: 'penthouse',
    type: 'PENTHOUSE SUITE',
    regularPrice: '₦350,000',
    loyaltyPrice: '₦300,000',
    longStayPrice: '₦250,000',
    capacity: 'VIP Executive Residency',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    description: 'The pinnacle of luxury. Top-floor Penthouse suite with 360° panoramic balcony view, private cocktail lounge setup, and dedicated 24/7 butler service.',
    features: ['360° Panoramic View', 'Private Cocktail Setup', 'Dedicated Butler', 'Smart Automation']
  }
];

export const ApartmentsSection = () => {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [showFlyerModal, setShowFlyerModal] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({ name: '', phone: '', apartment: '1 BEDROOM APARTMENT', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const getInquiryMessage = () => {
    return `Hello Kcanice & Isabella Apartments! 🏨

I would like to make an apartment booking inquiry:

• Name: ${inquiryForm.name}
• Phone: ${inquiryForm.phone}
• Apartment Requested: ${inquiryForm.apartment}
${inquiryForm.message ? `• Additional Message: ${inquiryForm.message}\n` : ''}`;
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (inquiryForm.name && inquiryForm.phone) {
      setSubmitted(true);
      const url = getApartmentWhatsAppUrl(getInquiryMessage());
      window.open(url, '_blank');
    }
  };

  return (
    <section id="apartments" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="site-container">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 px-2">
          {/* Logo & Brand Emblem */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-zinc-900 text-white flex items-center justify-center font-serif text-2xl font-bold tracking-tighter mb-3 shadow-lg">
              K&I
            </div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-600">
              KCANICE & ISABELLA APARTMENT
            </span>
            <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-widest mt-1">
              by Old English Bar & Grills
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-zinc-900 tracking-tight leading-none mb-3">
            EXPERIENCE COMFORT. <span className="text-red-600">LIVE ELEGANTLY.</span>
          </h2>
          
          <p className="font-serif italic text-xl text-zinc-700 font-normal mb-4">
            "Your Comfort, Our Priority."
          </p>

          <p className="text-zinc-600 text-xs sm:text-base font-medium max-w-2xl mx-auto leading-relaxed mb-6">
            Bespoke luxury shortlet suites and executive residency in New Owerri. Integrated with 24/7 power, VIP security, and room service directly from Old English Bar & Grills.
          </p>

          {/* Action Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setShowFlyerModal(true)}
              className="bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-md flex items-center gap-2"
            >
              <Award size={14} className="text-red-500" /> View Official Price List Flyer
            </button>
            <a
              href="tel:08039352371"
              className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-md flex items-center gap-2"
            >
              <Phone size={14} /> Call 0803 935 2371
            </a>
          </div>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="bento-card p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                <Tag size={20} />
              </div>
              <h4 className="font-serif text-lg font-bold text-zinc-900 mb-1">LOYALTY DISCOUNT</h4>
              <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                Enjoy exclusive discounted rates designed specially for our returning guests.
              </p>
            </div>
            <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider mt-4">Save up to ₦50,000/night</span>
          </div>

          <div className="bento-card p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                <Clock size={20} />
              </div>
              <h4 className="font-serif text-lg font-bold text-zinc-900 mb-1">LONG STAY DISCOUNT</h4>
              <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                The longer you stay, the more you save. Special weekly & monthly extended rates.
              </p>
            </div>
            <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider mt-4">Save up to ₦100,000/night</span>
          </div>

          <div className="bento-card p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                <ShieldCheck size={20} />
              </div>
              <h4 className="font-serif text-lg font-bold text-zinc-900 mb-1">PREMIUM COMFORT</h4>
              <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                Unmatched luxury, 24/7 power, high-speed WiFi, and convenience tailored just for you.
              </p>
            </div>
            <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider mt-4">24/7 VIP Hospitality</span>
          </div>
        </div>

        {/* Pricing & Suite Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {APARTMENT_PRICING.map((apt) => (
            <div key={apt.id} className="bento-card p-6 sm:p-8 flex flex-col justify-between group transition-all hover:-translate-y-1">
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-900 mb-6">
                  <img
                    src={apt.image}
                    alt={apt.type}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-4 left-4 z-10">
                    <span className="chip-pill chip-pill-red shadow-md">
                      Kcanice & Isabella
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white z-10 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-0.5">
                        {apt.capacity}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
                        {apt.type}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                  {apt.description}
                </p>

                {/* Rates Table Card */}
                <div className="bg-zinc-50 rounded-2xl p-4 border border-zinc-200/80 mb-6 space-y-2 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-200 font-bold text-zinc-900">
                    <span>Regular Night Rate:</span>
                    <span className="font-mono text-base text-red-600">{apt.regularPrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-600 font-semibold pt-1">
                    <span className="flex items-center gap-1"><Tag size={12} className="text-emerald-600" /> Returning Guest Loyalty:</span>
                    <span className="font-mono text-emerald-700 font-bold">{apt.loyaltyPrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-600 font-semibold">
                    <span className="flex items-center gap-1"><Clock size={12} className="text-indigo-600" /> Extended Stay Rate:</span>
                    <span className="font-mono text-indigo-700 font-bold">{apt.longStayPrice}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {apt.features.map((feat, idx) => (
                    <span key={idx} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-zinc-700 border border-zinc-200">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-2.5">
                <a
                  href={getApartmentWhatsAppUrl(`Hello Kcanice & Isabella Apartments! 🏨\n\nI would like to book/inquire about the ${apt.type} (${apt.regularPrice}/night). Please let me know availability.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider py-3 rounded-full transition-all text-center flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
                >
                  <MessageCircle size={14} /> Book via WhatsApp
                </a>
                <a
                  href="tel:08039352371"
                  className="w-full sm:w-auto bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-full transition-all text-center flex items-center justify-center gap-1.5 border border-zinc-200"
                >
                  <Phone size={13} /> Call Desk
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact & Inquiry Form Bento */}
        <div className="bento-card-dark p-8 sm:p-12 relative overflow-hidden max-w-4xl mx-auto shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Info */}
            <div className="md:col-span-5 text-left text-white space-y-4">
              <span className="px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest inline-block">
                DIRECT RESERVATION
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
                BOOK YOUR STAY TODAY
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                Contact our front desk directly for booking inquiries, airport pick-up, and long-stay corporate arrangements.
              </p>

              <div className="space-y-2 pt-2 text-xs font-semibold text-zinc-300">
                <div className="flex items-center gap-2">
                  <Phone size={15} className="text-red-400" />
                  <a href="tel:08039352371" className="hover:underline text-white font-bold">0803 935 2371</a>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={15} className="text-emerald-400" />
                  <a
                    href={getApartmentWhatsAppUrl("Hello Kcanice & Isabella Apartments! 🏨 I have an inquiry regarding apartment availability.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-emerald-400 font-bold"
                  >
                    WhatsApp Booking Line
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={15} className="text-red-400" />
                  <a href="mailto:info@kcaniceisabella.com" className="hover:underline text-white">info@kcaniceisabella.com</a>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="md:col-span-7 bg-white text-zinc-900 p-6 sm:p-8 rounded-3xl shadow-xl">
              {submitted ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="font-serif text-xl font-bold">Inquiry Sent via WhatsApp!</h4>
                  <p className="text-xs text-zinc-600">
                    If WhatsApp didn't open automatically, click below to send your booking inquiry directly.
                  </p>
                  <div className="pt-2 flex flex-col items-center gap-2">
                    <a
                      href={getApartmentWhatsAppUrl(getInquiryMessage())}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider shadow-md"
                    >
                      <MessageCircle size={15} /> Continue on WhatsApp
                    </a>
                    <button onClick={() => setSubmitted(false)} className="text-xs font-bold text-red-600 hover:underline mt-2">
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4 text-left">
                  <h4 className="font-serif text-lg font-bold text-zinc-900 border-b border-zinc-100 pb-2">Quick Reservation Request</h4>
                  <div>
                    <label className="text-[10px] uppercase font-bold text-zinc-500 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-2.5 text-xs font-medium text-zinc-900 focus:outline-none focus:ring-2 focus:ring-red-600/30"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-bold text-zinc-500 block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="0803 935 2371"
                      value={inquiryForm.phone}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-2.5 text-xs font-medium text-zinc-900 focus:outline-none focus:ring-2 focus:ring-red-600/30"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-bold text-zinc-500 block mb-1">Select Apartment Type</label>
                    <select
                      value={inquiryForm.apartment}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, apartment: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-2.5 text-xs font-semibold text-zinc-900 focus:outline-none focus:ring-2 focus:ring-red-600/30"
                    >
                      <option value="1 BEDROOM APARTMENT">1 BEDROOM APARTMENT (₦150k / ₦100k)</option>
                      <option value="2 BEDROOM APARTMENT">2 BEDROOM APARTMENT (₦200k / ₦150k)</option>
                      <option value="3 BEDROOM APARTMENT">3 BEDROOM APARTMENT (₦250k / ₦200k)</option>
                      <option value="PENTHOUSE SUITE">PENTHOUSE SUITE (₦350k / ₦300k)</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider py-3 rounded-full transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={15} /> Send Booking via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Official Price List Flyer Modal */}
      {showFlyerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in" onClick={() => setShowFlyerModal(false)}>
          <div className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 text-center max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-3 px-2 pb-2 border-b border-zinc-100">
              <span className="font-serif text-lg font-bold text-zinc-900">Official Kcanice & Isabella Price List</span>
              <button onClick={() => setShowFlyerModal(false)} className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-700 flex items-center justify-center font-bold">✕</button>
            </div>
            <img
              src="/images/kcanice-isabella-flyer.jpg"
              alt="Official Kcanice and Isabella Apartment Price List"
              className="w-full h-auto rounded-2xl shadow-md border border-zinc-200"
            />
            <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-bold text-zinc-700 px-2">
              <span>Direct Phone: 0803 935 2371</span>
              <a href="tel:08039352371" className="bg-red-600 text-white px-4 py-2 rounded-full uppercase tracking-wider">Call Now</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
