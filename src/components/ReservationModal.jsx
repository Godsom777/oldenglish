import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, CheckCircle2, ChevronRight, ChevronLeft, Utensils, Phone } from 'lucide-react';

const SEATING_ZONES = [
  { id: 'main-dining', label: 'Main Dining Room', desc: 'Lively atmosphere near the visible charcoal grill.' },
  { id: 'suya-bar', label: 'Suya Bar & Lounge', desc: 'Sleek counter seats with direct mixologist view.' },
  { id: 'terrace', label: 'Outdoor VIP Terrace', desc: 'Open-air terrace with ambient lighting.' },
  { id: 'private-room', label: 'Private Dining Room', desc: 'Intimate space for private celebrations.' },
];

const TIME_SLOTS = [
  '08:00 AM', '10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM', '07:30 PM', '09:00 PM', '10:30 PM'
];

export const ReservationModal = ({ isOpen, onClose, initialItem = null }) => {
  const [step, setStep] = useState(1);
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('07:30 PM');
  const [zone, setZone] = useState('main-dining');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [bookingRef, setBookingRef] = useState(null);

  if (!isOpen) return null;

  const handleNextStep = () => {
    if (step === 3) {
      const ref = `OE-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(ref);
      setStep(4);
    } else {
      setStep(step + 1);
    }
  };

  const handleReset = () => {
    setStep(1);
    setBookingRef(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleReset}
      />

      {/* Modal Box */}
      <div className="relative w-full sm:max-w-xl bg-white border-t sm:border border-zinc-200 rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-5 border-b border-zinc-200 flex items-center justify-between bg-zinc-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-red-100 border border-red-200 text-red-600 flex items-center justify-center font-bold text-xs">
              {step < 4 ? step : '✓'}
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-zinc-900">
                {step === 4 ? 'Reservation Confirmed' : 'Table Reservation'}
              </h3>
              <p className="text-[11px] text-zinc-500 font-medium">
                {step === 1 && 'Step 1: Date, Time & Party Size'}
                {step === 2 && 'Step 2: Choose Seating Preference'}
                {step === 3 && 'Step 3: Contact & Special Requests'}
                {step === 4 && 'Your digital table pass is ready'}
              </p>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="w-8 h-8 rounded-full bg-white text-zinc-500 hover:text-zinc-900 flex items-center justify-center border border-zinc-200"
          >
            <X size={16} />
          </button>
        </div>

        {/* Selected Dish Banner */}
        {initialItem && step < 4 && (
          <div className="bg-red-50 border-b border-red-100 px-5 py-2.5 flex items-center gap-3 text-xs text-red-800">
            <Utensils size={14} className="text-red-600 shrink-0" />
            <span>
              Reserving table with dish: <strong>{initialItem.name}</strong>
            </span>
          </div>
        )}

        {/* Wizard Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {/* STEP 1: Date, Time, Guests */}
          {step === 1 && (
            <div className="space-y-6">
              {/* Party Size */}
              <div>
                <label className="text-xs uppercase font-bold tracking-wider text-zinc-600 mb-2 flex items-center gap-1.5">
                  <Users size={14} className="text-red-600" /> Number of Guests
                </label>
                <div className="grid grid-cols-6 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuests(num)}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                        guests === num
                          ? 'bg-zinc-900 text-white shadow-md'
                          : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200'
                      }`}
                    >
                      {num} {num === 1 ? 'Guest' : ''}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <label className="text-xs uppercase font-bold tracking-wider text-zinc-600 mb-2 flex items-center gap-1.5">
                  <Calendar size={14} className="text-red-600" /> Select Date
                </label>
                <input
                  type="date"
                  value={date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 font-semibold rounded-xl p-3 text-sm outline-none focus:border-red-600 transition-colors"
                />
              </div>

              {/* Time Slots */}
              <div>
                <label className="text-xs uppercase font-bold tracking-wider text-zinc-600 mb-2 flex items-center gap-1.5">
                  <Clock size={14} className="text-red-600" /> Available Time Slot (7am – 12am)
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {TIME_SLOTS.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTime(t)}
                      className={`py-2 rounded-lg text-xs font-bold transition-all ${
                        time === t
                          ? 'bg-red-600 text-white border border-red-600'
                          : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Seating Zone */}
          {step === 2 && (
            <div className="space-y-4">
              <label className="text-xs uppercase font-bold tracking-wider text-zinc-600 mb-1 block">
                Seating Atmosphere Preference
              </label>

              <div className="space-y-3">
                {SEATING_ZONES.map((z) => (
                  <div
                    key={z.id}
                    onClick={() => setZone(z.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start justify-between ${
                      zone === z.id
                        ? 'bg-red-50/60 border-red-600 text-zinc-900 shadow-sm'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-zinc-300'
                    }`}
                  >
                    <div>
                      <h4 className="font-serif text-base font-bold text-zinc-900">{z.label}</h4>
                      <p className="text-xs text-zinc-600 mt-0.5 font-normal">{z.desc}</p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center mt-1 ${
                        zone === z.id
                          ? 'border-red-600 bg-red-600 text-white'
                          : 'border-zinc-300 bg-white'
                      }`}
                    >
                      {zone === z.id && <CheckCircle2 size={12} />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Contact & Notes */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="text-xs uppercase font-bold tracking-wider text-zinc-600 mb-1 block">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Chisom Okoro"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 font-semibold rounded-xl p-3 text-sm outline-none focus:border-red-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase font-bold tracking-wider text-zinc-600 mb-1 block">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="08104128681"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 font-semibold rounded-xl p-3 text-sm outline-none focus:border-red-600"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase font-bold tracking-wider text-zinc-600 mb-1 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 font-semibold rounded-xl p-3 text-sm outline-none focus:border-red-600"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase font-bold tracking-wider text-zinc-600 mb-1 block">
                  Dietary Restrictions or Special Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Birthday celebration, allergy notes, quiet table..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-xl p-3 text-sm outline-none focus:border-red-600"
                />
              </div>
            </div>
          )}

          {/* STEP 4: Digital Confirmation Ticket Pass */}
          {step === 4 && (
            <div className="text-center py-4 space-y-6">
              <div className="w-14 h-14 rounded-full bg-red-100 text-red-600 border border-red-200 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 size={32} />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-zinc-900 mb-1">
                  Table Reserved Successfully!
                </h3>
                <p className="text-xs text-zinc-600">
                  We look forward to welcoming you to Old English Bar & Grill, Area H New Owerri.
                </p>
              </div>

              {/* Digital Pass Card */}
              <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200 text-left relative overflow-hidden shadow-lg">
                <div className="flex items-center justify-between border-b border-zinc-200 pb-4 mb-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-red-600 tracking-wider">
                      RESERVATION REFERENCE
                    </span>
                    <h4 className="font-mono text-xl font-bold text-zinc-900">{bookingRef}</h4>
                  </div>
                  <span className="badge badge-open text-xs font-bold">CONFIRMED</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-zinc-400 block text-[10px] uppercase font-bold">GUEST NAME</span>
                    <span className="text-zinc-900 font-bold">{formData.name || 'Guest'}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[10px] uppercase font-bold">PARTY SIZE</span>
                    <span className="text-zinc-900 font-bold">{guests} Guests</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[10px] uppercase font-bold">DATE & TIME</span>
                    <span className="text-zinc-900 font-bold">{date} at {time}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[10px] uppercase font-bold">LOCATION</span>
                    <span className="text-zinc-900 font-bold">Area H, New Owerri</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-200 text-[11px] text-zinc-600 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <MapPin size={13} className="text-red-600" /> Area H, New Owerri
                  </span>
                  <span className="flex items-center gap-1 font-bold text-zinc-900">
                    <Phone size={12} className="text-red-600" /> 08104128681
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Controls */}
        <div className="p-4 sm:p-5 border-t border-zinc-200 bg-zinc-50 flex items-center justify-between gap-3 shrink-0">
          {step > 1 && step < 4 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="btn-secondary text-xs px-4 py-2.5 font-bold"
            >
              <ChevronLeft size={16} /> Back
            </button>
          ) : (
            <span />
          )}

          {step < 4 ? (
            <button
              onClick={handleNextStep}
              disabled={step === 3 && (!formData.name || !formData.phone)}
              className={`btn-primary text-xs px-6 py-2.5 font-bold ${
                step === 3 && (!formData.name || !formData.phone)
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`}
            >
              <span>{step === 3 ? 'Confirm Reservation' : 'Continue'}</span>
              <ChevronRight size={16} />
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="btn-primary w-full text-xs py-3 justify-center font-bold"
            >
              Done & Return to Site
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
