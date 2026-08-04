import React, { useState } from 'react';
import { Building2, Sparkles, ShieldCheck, Phone, Mail, Award, Calendar, CheckCircle2, ArrowRight, Star, Tag, Clock, ChevronRight, MessageCircle, Camera, X, MapPin } from 'lucide-react';
import { getApartmentWhatsAppUrl } from '../config/whatsapp';

export const ONE_BEDROOM_GALLERY = [
  {
    id: '1bed-bedroom',
    url: '/images/apartments/1bed-bedroom.jpg',
    title: '1-Bedroom Executive Suite',
    caption: 'Plush King Bed, Custom Tufted Headboard, Armchair & Work Desk'
  },
  {
    id: '1bed-living',
    url: '/images/apartments/1bed-living.jpg',
    title: 'Private Living Lounge',
    caption: 'Deep Tufted Velvet Lounge Sofa, Accent Table & Nature Wall Art'
  },
  {
    id: '1bed-dining',
    url: '/images/apartments/1bed-dining.jpg',
    title: 'Dining & Lounge Area',
    caption: 'Marble Coffee Table, Woven Floor Rug & Dining Table for 2'
  },
  {
    id: '1bed-kitchen',
    url: '/images/apartments/1bed-kitchen.jpg',
    title: 'Full Kitchenette',
    caption: 'Fitted Cabinets, Double Sink, Microwave, Blender & Kettle'
  },
  {
    id: '1bed-hallway',
    url: '/images/apartments/1bed-hallway.jpg',
    title: 'Suite Foyer & Hallway',
    caption: 'Architectural Linear Ceiling Lights & Polished Tile Corridor'
  }
];

export const TWO_BEDROOM_GALLERY = [
  {
    id: '2bed-living',
    url: '/images/apartments/apt-living-1.jpg',
    title: 'Executive Living Room & Dining Area',
    caption: 'Spacious 2-Bedroom Sectional Lounge, Marble Coffee Table & Dining Space'
  },
  {
    id: '2bed-master-bedroom',
    url: '/images/apartments/apt-bedroom-1.jpg',
    title: 'Master Bedroom Suite',
    caption: 'Plush King Bed, Custom Tufted Headboard, Lounge Sofa & Floor Rug'
  },
  {
    id: '2bed-ensuite-bedroom',
    url: '/images/apartments/apt-bedroom-2.jpg',
    title: 'Second Ensuite Bedroom',
    caption: 'Spacious Bedroom with Built-in Wood Wardrobes & Tiled Flooring'
  },
  {
    id: '2bed-kitchen',
    url: '/images/apartments/apt-kitchen-1.jpg',
    title: 'Modern Fitted Kitchen',
    caption: 'Custom White Cabinetry, Refrigerator, Stove Top & Built-in Microwave'
  },
  {
    id: '2bed-sink',
    url: '/images/apartments/apt-kitchen-2.jpg',
    title: 'Granite Countertop Sink',
    caption: 'Granite Countertop with Running Water Double Sink & Microwave'
  }
];

export const APARTMENT_ROOM_GALLERY = [
  {
    id: 'building-exterior',
    url: '/images/apartments/building-exterior.jpg',
    title: 'Kcanice & Isabella Estate Building',
    caption: 'Multi-Story White Executive Residency & Gated Security in New Owerri'
  },
  ...ONE_BEDROOM_GALLERY,
  ...TWO_BEDROOM_GALLERY
];

export const APARTMENT_PRICING = [
  {
    id: '1-bedroom',
    type: '1 BEDROOM APARTMENT',
    regularPrice: '₦150,000',
    loyaltyPrice: '₦100,000',
    longStayPrice: '₦80,000',
    capacity: 'Ideal for 1–2 Guests',
    image: '/images/apartments/1bed-bedroom.jpg',
    gallery: ONE_BEDROOM_GALLERY,
    description: 'Bespoke 1-bedroom luxury suite featuring plush king bedding, private lounge area, smart LED TV, fully equipped kitchenette, and 24/7 power.',
    features: ['King Size Bed', 'Private Lounge', 'Full Fitted Kitchen', 'Smart TV & WiFi', 'Old English Room Service']
  },
  {
    id: '2-bedroom',
    type: '2 BEDROOM APARTMENT',
    regularPrice: '₦200,000',
    loyaltyPrice: '₦150,000',
    longStayPrice: '₦120,000',
    capacity: 'Ideal for 2–4 Guests',
    image: '/images/apartments/apt-living-1.jpg',
    gallery: TWO_BEDROOM_GALLERY,
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
    image: '/images/apartments/apt-bedroom-2.jpg',
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
    image: '/images/apartments/apt-kitchen-1.jpg',
    description: 'The pinnacle of luxury. Top-floor Penthouse suite with 360° panoramic balcony view, private cocktail lounge setup, and dedicated 24/7 butler service.',
    features: ['360° Panoramic View', 'Private Cocktail Setup', 'Dedicated Butler', 'Smart Automation']
  }
];

export const ApartmentsSection = () => {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [showFlyerModal, setShowFlyerModal] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({ name: '', phone: '', apartment: '1 BEDROOM APARTMENT', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [activeImageIndices, setActiveImageIndices] = useState({});
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [activeTourTab, setActiveTourTab] = useState('1bed');

  const getActiveIdx = (aptId, defaultIdx) => {
    return activeImageIndices[aptId] !== undefined ? activeImageIndices[aptId] : defaultIdx;
  };

  const setActiveIdx = (aptId, idx) => {
    setActiveImageIndices(prev => ({ ...prev, [aptId]: idx }));
  };

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
    <section id="apartments" className="py-12 sm:py-20 bg-white relative overflow-hidden">
      <div className="site-container">
        
        {/* Grand Hero Section with Building Exterior */}
        <div className="relative rounded-3xl overflow-hidden bg-zinc-950 mb-12 sm:mb-16 shadow-2xl group border border-zinc-200">
          <div className="relative min-h-[480px] sm:min-h-[520px] w-full flex flex-col justify-between">
            <img
              src="/images/apartments/building-exterior.jpg"
              alt="Kcanice & Isabella Apartment Building Exterior"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-black/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/40 to-transparent pointer-events-none" />

            {/* Top Badge & Expand Photo */}
            <div className="relative z-10 p-4 sm:p-6 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="chip-pill chip-pill-red shadow-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-extrabold uppercase">
                  <Building2 size={13} /> OFFICIAL ESTATE EXTERIOR
                </span>
                <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/10">
                  New Owerri Residency
                </span>
              </div>

              <button
                onClick={() => setFullscreenImage({
                  url: '/images/apartments/building-exterior.jpg',
                  title: 'Kcanice & Isabella Estate Building',
                  caption: 'Multi-Story White Executive Residency & Gated Security in New Owerri'
                })}
                className="bg-black/70 hover:bg-red-600 text-white px-3 py-2 rounded-full backdrop-blur-md transition-all shadow-lg flex items-center gap-1.5 text-xs font-bold border border-white/20 shrink-0 cursor-pointer active:scale-95"
                title="View Fullscreen Building Photo"
              >
                <Camera size={14} /> Full View
              </button>
            </div>

            {/* Hero Text & Actions Overlay */}
            <div className="relative z-10 p-5 sm:p-12 max-w-3xl text-left text-white mt-auto">
              <div className="flex items-center gap-2 mb-2 sm:mb-3 text-red-500 font-extrabold text-xs uppercase tracking-widest">
                <MapPin size={14} className="shrink-0" /> Area H, New Owerri, Imo State
              </div>

              <h1 className="font-display text-2xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight sm:leading-none mb-2 sm:mb-3 text-white">
                KCANICE & ISABELLA APARTMENTS
              </h1>
              
              <p className="font-serif italic text-base sm:text-xl text-zinc-200 font-normal mb-2 sm:mb-3">
                "Your Comfort, Our Priority."
              </p>

              <p className="text-zinc-300 text-xs sm:text-base font-medium max-w-2xl leading-relaxed mb-5 sm:mb-6">
                Bespoke luxury shortlet suites and multi-story executive residency in New Owerri. Integrated with 24/7 power, gated VIP security, and room service directly from Old English Bar & Grills.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                <a
                  href={getApartmentWhatsAppUrl("Hello Kcanice & Isabella Apartments! 🏨 I would like to inquire about suite reservations.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-xl flex items-center justify-center gap-2 active:scale-95"
                >
                  <MessageCircle size={15} /> Book via WhatsApp
                </a>
                <button
                  onClick={() => setShowFlyerModal(true)}
                  className="bg-zinc-900/90 hover:bg-zinc-900 text-white text-xs font-bold uppercase tracking-wider px-5 py-3.5 rounded-full transition-all shadow-lg flex items-center justify-center gap-2 border border-zinc-700 active:scale-95 cursor-pointer"
                >
                  <Award size={15} className="text-red-500" /> View Official Price List Flyer
                </button>
                <a
                  href="tel:08039352371"
                  className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md text-xs font-bold uppercase tracking-wider px-5 py-3.5 rounded-full transition-all border border-white/20 flex items-center justify-center gap-2 active:scale-95"
                >
                  <Phone size={14} /> Call Desk 0803 935 2371
                </a>
              </div>
            </div>
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
          {APARTMENT_PRICING.map((apt) => {
            const suiteGallery = apt.gallery || APARTMENT_ROOM_GALLERY;
            const activeIdx = getActiveIdx(apt.id, 0);
            const currentImgObj = suiteGallery[activeIdx] || suiteGallery[0];

            return (
              <div key={apt.id} className="bento-card p-5 sm:p-8 flex flex-col justify-between group transition-all hover:-translate-y-1">
                <div>
                  {/* Image Frame */}
                  <div 
                    className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-900 mb-4 cursor-pointer group/img"
                    onClick={() => setFullscreenImage(currentImgObj)}
                  >
                    <img
                      src={currentImgObj.url}
                      alt={currentImgObj.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 z-10">
                      <span className="chip-pill chip-pill-red shadow-md">
                        {apt.gallery ? `Verified ${apt.type.includes('1') ? '1-Bedroom' : '2-Bedroom'} Tour` : 'Kcanice & Isabella'}
                      </span>
                    </div>

                    {/* Camera Zoom Button */}
                    <div className="absolute top-4 right-4 z-10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setFullscreenImage(currentImgObj);
                        }}
                        className="bg-black/60 hover:bg-red-600 text-white p-2.5 rounded-full backdrop-blur-md transition-colors shadow-md active:scale-95 cursor-pointer"
                        title="View Fullscreen Photo"
                      >
                        <Camera size={15} />
                      </button>
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

                  {/* Room Gallery Interactive Thumbnails Bar */}
                  <div className="mb-5 bg-zinc-50 p-2.5 rounded-2xl border border-zinc-200/80">
                    <div className="flex items-center justify-between mb-2 px-1 gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5 shrink-0">
                        <Camera size={12} className="text-red-600 shrink-0" /> {apt.gallery ? 'Verified Photo Tour' : 'Room Gallery'} ({suiteGallery.length} Views)
                      </span>
                      <span className="text-[10px] font-semibold text-red-600 truncate max-w-[160px] sm:max-w-[200px]">
                        {currentImgObj.title}
                      </span>
                    </div>

                    <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                      {suiteGallery.map((img, idx) => (
                        <button
                          key={img.id}
                          onClick={() => setActiveIdx(apt.id, idx)}
                          title={img.title}
                          className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer active:scale-95 ${
                            activeIdx === idx
                              ? 'border-red-600 shadow-md scale-105'
                              : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                        </button>
                      ))}
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
                <div className="pt-4 border-t border-zinc-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                  <a
                    href={getApartmentWhatsAppUrl(`Hello Kcanice & Isabella Apartments! 🏨\n\nI would like to book/inquire about the ${apt.type} (${apt.regularPrice}/night). Please let me know availability.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-full transition-all text-center flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 active:scale-95"
                  >
                    <MessageCircle size={15} /> Book via WhatsApp
                  </a>
                  <a
                    href="tel:08039352371"
                    className="w-full sm:w-auto bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold uppercase tracking-wider py-3.5 px-5 rounded-full transition-all text-center flex items-center justify-center gap-1.5 border border-zinc-200 active:scale-95"
                  >
                    <Phone size={14} /> Call Desk
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Room Pictures Showcase Strip */}
        <div className="mb-16 bg-[#f8f8f6] rounded-3xl p-5 sm:p-10 border border-zinc-200/80">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="chip-pill chip-pill-red mb-2 inline-flex items-center gap-1">
              <Camera size={12} /> Authentic Suite Photos
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight mb-3">
              {activeTourTab === '1bed' ? '1 BEDROOM APARTMENT PHOTO TOUR' : '2 BEDROOM APARTMENT PHOTO TOUR'}
            </h3>
            <p className="text-zinc-600 text-xs sm:text-sm font-medium mb-6">
              {activeTourTab === '1bed'
                ? 'Explore authentic photos of our 1 Bedroom Luxury Suite — bedroom, private lounge, dining space, fitted kitchen, and corridor foyer.'
                : 'Explore authentic photos of our 2 Bedroom Executive Suite — master bedroom, second bedroom, living lounge, fitted kitchen, and countertop sink.'}
            </p>

            {/* Tour Switcher Buttons */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2 p-1.5 rounded-2xl sm:rounded-full bg-zinc-200/80 border border-zinc-300 max-w-md mx-auto sm:inline-flex">
              <button
                onClick={() => setActiveTourTab('1bed')}
                className={`w-full sm:w-auto px-5 py-2.5 rounded-xl sm:rounded-full text-xs font-bold transition-all cursor-pointer active:scale-95 ${
                  activeTourTab === '1bed'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-zinc-700 hover:text-zinc-900 hover:bg-zinc-300/50'
                }`}
              >
                1 BEDROOM TOUR (5 Photos)
              </button>
              <button
                onClick={() => setActiveTourTab('2bed')}
                className={`w-full sm:w-auto px-5 py-2.5 rounded-xl sm:rounded-full text-xs font-bold transition-all cursor-pointer active:scale-95 ${
                  activeTourTab === '2bed'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-zinc-700 hover:text-zinc-900 hover:bg-zinc-300/50'
                }`}
              >
                2 BEDROOM TOUR (5 Photos)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {(activeTourTab === '1bed' ? ONE_BEDROOM_GALLERY : TWO_BEDROOM_GALLERY).map((img) => (
              <div
                key={img.id}
                onClick={() => setFullscreenImage(img)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-95"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-black/60 text-white p-1.5 rounded-full backdrop-blur-md block">
                    <Camera size={13} />
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-bold leading-tight drop-shadow-sm">{img.title}</p>
                  <p className="text-[10px] text-zinc-300 line-clamp-1 mt-0.5">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Inquiry Form Bento */}
        <div className="bento-card-dark p-6 sm:p-12 relative overflow-hidden max-w-4xl mx-auto shadow-2xl">
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
                  <Phone size={15} className="text-red-400 shrink-0" />
                  <a href="tel:08039352371" className="hover:underline text-white font-bold">0803 935 2371</a>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={15} className="text-emerald-400 shrink-0" />
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
                  <Mail size={15} className="text-red-400 shrink-0" />
                  <a href="mailto:info@kcaniceisabella.com" className="hover:underline text-white">info@kcaniceisabella.com</a>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="md:col-span-7 bg-white text-zinc-900 p-5 sm:p-8 rounded-3xl shadow-xl">
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
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider shadow-md active:scale-95"
                    >
                      <MessageCircle size={15} /> Continue on WhatsApp
                    </a>
                    <button onClick={() => setSubmitted(false)} className="text-xs font-bold text-red-600 hover:underline mt-2 cursor-pointer">
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
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-3 text-base sm:text-xs font-medium text-zinc-900 focus:outline-none focus:ring-2 focus:ring-red-600/30"
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
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-3 text-base sm:text-xs font-medium text-zinc-900 focus:outline-none focus:ring-2 focus:ring-red-600/30"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-bold text-zinc-500 block mb-1">Select Apartment Type</label>
                    <select
                      value={inquiryForm.apartment}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, apartment: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-3 text-base sm:text-xs font-semibold text-zinc-900 focus:outline-none focus:ring-2 focus:ring-red-600/30"
                    >
                      <option value="1 BEDROOM APARTMENT">1 BEDROOM APARTMENT (₦150k / ₦100k)</option>
                      <option value="2 BEDROOM APARTMENT">2 BEDROOM APARTMENT (₦200k / ₦150k)</option>
                      <option value="3 BEDROOM APARTMENT">3 BEDROOM APARTMENT (₦250k / ₦200k)</option>
                      <option value="PENTHOUSE SUITE">PENTHOUSE SUITE (₦350k / ₦300k)</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-full transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setShowFlyerModal(false)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Header with prominent close button */}
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-zinc-200">
              <div className="flex items-center gap-2">
                <Award size={18} className="text-red-600 shrink-0" />
                <span className="font-serif text-sm sm:text-base font-extrabold text-zinc-900 truncate">
                  Official Price List Flyer
                </span>
              </div>
              <button
                onClick={() => setShowFlyerModal(false)}
                className="w-10 h-10 rounded-full bg-zinc-100 hover:bg-red-600 hover:text-white text-zinc-800 transition-all flex items-center justify-center font-bold shadow-sm active:scale-95 shrink-0 cursor-pointer"
                aria-label="Close flyer"
                title="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Image Body */}
            <div className="overflow-y-auto p-3 sm:p-5 flex-1 overscroll-contain bg-zinc-900/5">
              <img
                src="/images/kcanice-isabella-flyer.jpg"
                alt="Official Kcanice and Isabella Apartment Price List"
                className="w-full h-auto rounded-2xl shadow-md border border-zinc-200"
              />
            </div>

            {/* Sticky Bottom Actions */}
            <div className="sticky bottom-0 z-20 bg-zinc-50 border-t border-zinc-200 p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-2.5">
              <div className="text-center sm:text-left text-xs font-semibold text-zinc-600">
                Direct Phone: <a href="tel:08039352371" className="font-bold text-zinc-900 hover:underline">0803 935 2371</a>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href="tel:08039352371"
                  className="flex-1 sm:flex-initial bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full text-center transition-all flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <Phone size={14} /> Call Now
                </a>
                <a
                  href={getApartmentWhatsAppUrl("Hello Kcanice & Isabella Apartments! 🏨 I would like to inquire about rates from the official flyer.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full text-center transition-all flex items-center justify-center gap-1.5 shadow-md active:scale-95"
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Photo Lightbox Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 animate-fade-in"
          onClick={() => setFullscreenImage(null)}
        >
          {/* Top Bar with Info & High Visibility Floating Close Button */}
          <div className="w-full max-w-5xl flex items-center justify-between z-20 py-2 mb-2" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2">
              <span className="chip-pill chip-pill-red text-[10px] sm:text-xs">
                <Camera size={12} /> Photo Viewer
              </span>
            </div>

            <button
              onClick={() => setFullscreenImage(null)}
              className="bg-zinc-800/90 hover:bg-red-600 active:scale-95 text-white font-bold px-4 py-2.5 rounded-full backdrop-blur-md transition-all shadow-xl flex items-center gap-2 text-xs sm:text-sm border border-white/20 shrink-0 cursor-pointer"
              aria-label="Close photo view"
              title="Close Fullscreen View"
            >
              <span>Close</span>
              <X size={18} />
            </button>
          </div>

          {/* Main Centered Image */}
          <div className="relative max-w-5xl w-full flex-1 flex flex-col items-center justify-center min-h-0 py-2" onClick={(e) => e.stopPropagation()}>
            <img
              src={fullscreenImage.url}
              alt={fullscreenImage.title}
              className="max-h-[72vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-zinc-800"
            />
            <div className="mt-4 text-white text-center px-4 max-w-2xl">
              <h4 className="text-base sm:text-lg font-bold font-serif">{fullscreenImage.title}</h4>
              {fullscreenImage.caption && (
                <p className="text-xs text-zinc-300 mt-1 font-medium">{fullscreenImage.caption}</p>
              )}
            </div>
          </div>

          {/* Bottom Tap Anywhere to Dismiss Hint */}
          <div className="text-[11px] text-zinc-500 font-medium py-1">
            Tap anywhere outside to close
          </div>
        </div>
      )}
    </section>
  );
};

