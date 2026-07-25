import React, { useState } from 'react';
import { Building2, Sparkles, ShieldCheck, Zap, Utensils, Bell, CheckCircle2, ArrowRight, Star } from 'lucide-react';

export const ApartmentsSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  const APARTMENT_PREVIEWS = [
    {
      id: 'penthouse',
      title: 'Royal Penthouse Suite',
      subtitle: 'Executive Shortlet & VIP Residency',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      badge: 'COMING SOON',
      description: 'Ultra-modern 3-bedroom luxury penthouse featuring panoramic city views, private balcony lounge, plush Italian leather interiors, and smart home automation.',
      amenities: ['Panoramic Balcony', 'Smart Automation', 'Chef Room Service', '24/7 Constant Power']
    },
    {
      id: 'executive-suite',
      title: 'Executive Studio Apartments',
      subtitle: 'Bespoke Luxury Stays in Owerri',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      badge: 'COMING SOON',
      description: 'Elegantly furnished 1 & 2-bedroom serviced suites designed for business executives, travelers, and VIP guests seeking comfort, security, and prestige.',
      amenities: ['High-Speed WiFi', '24/7 Security', 'Direct Bar & Grill Service', 'Daily Housekeeping']
    }
  ];

  return (
    <section id="apartments" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="site-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <Building2 size={13} className="shrink-0" />
            <span>Luxury Residency · Coming Soon</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-zinc-900 tracking-tight leading-none mb-4">
            OLD ENGLISH <span className="text-red-600">APARTMENTS.</span>
          </h2>
          
          <p className="text-zinc-600 text-xs sm:text-base font-medium leading-relaxed">
            Elevating hospitality in Area H, New Owerri. Luxury shortlet suites and executive apartments integrated seamlessly with Old English Bar & Grills room service.
          </p>
        </div>

        {/* Bento Grid Preview Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {APARTMENT_PREVIEWS.map((apt) => (
            <div key={apt.id} className="lg:col-span-6 bento-card p-6 sm:p-8 flex flex-col justify-between group">
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-900 mb-6">
                  <img
                    src={apt.image}
                    alt={apt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                      {apt.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                    <span className="text-[11px] uppercase font-bold text-red-400 tracking-wider block mb-0.5">
                      {apt.subtitle}
                    </span>
                    <h3 className="font-display text-2xl font-bold tracking-tight">
                      {apt.title}
                    </h3>
                  </div>
                </div>

                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                  {apt.description}
                </p>

                {/* Amenities */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {apt.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-zinc-700 bg-zinc-50 p-2.5 rounded-xl border border-zinc-100">
                      <CheckCircle2 size={14} className="text-red-600 shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  Opening Late 2026
                </span>
                <span className="text-xs font-bold text-red-600 flex items-center gap-1">
                  <Star size={13} className="fill-red-600" /> Premium VIP Living
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Waitlist Banner Bento Widget */}
        <div className="bento-card-dark p-8 sm:p-12 relative overflow-hidden text-center max-w-4xl mx-auto shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="chip-pill chip-pill-red mb-4 inline-flex">
              <Bell size={12} /> VIP Launch Waitlist
            </span>

            <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
              BE THE FIRST TO EXPERIENCE OLD ENGLISH SUITES
            </h3>

            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-8">
              Subscribe to get exclusive early booking access, special launch rates, and VIP invitations to the Grand Opening of Old English Luxury Apartments in Area H, New Owerri.
            </p>

            {subscribed ? (
              <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 p-4 rounded-2xl flex items-center justify-center gap-2 text-sm font-bold animate-fade-in">
                <CheckCircle2 size={18} /> You are on the VIP Launch List! We will notify you when bookings open.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-zinc-400 text-xs font-medium rounded-full px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-300 shrink-0 shadow-lg shadow-red-600/30 flex items-center justify-center gap-2"
                >
                  <span>Join Waitlist</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
