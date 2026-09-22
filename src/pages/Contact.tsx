import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, Headset } from 'lucide-react';
import { JINKA_PHONE_NUMBER, JINKA_SUPPORT_NUMBER, JINKA_EMAIL, JINKA_ADDRESS, JINKA_HOURS, generateGeneralConsultationWhatsAppLink } from '../utils/whatsapp';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    serviceInterest: 'Complete Home Theater',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-brand-black text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-8 text-center sm:text-left">
          <span className="text-xs uppercase tracking-[0.35em] text-brand-gold font-semibold">
            Private Consultation
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif mt-2 tracking-tight">
            LET'S BUILD <br className="hidden sm:block" />
            <span className="text-brand-gold italic">YOUR CINEMA.</span>
          </h1>
          <p className="mt-3 text-lg font-serif italic text-slate-300 font-light">
            “Schedule a dedicated space audit or visit our experience showroom in Dharmavaram.”
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-brand-card p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-brand-gold mx-auto animate-bounce" />
                <h3 className="text-2xl font-serif text-white">Consultation Request Received</h3>
                <p className="text-sm text-slate-300 font-light max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-brand-gold">{formData.name}</span>. Our senior acoustic design specialist will contact you at <span className="font-semibold text-white">{formData.phone}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', location: '', serviceInterest: 'Complete Home Theater', message: '' });
                  }}
                  className="mt-6 px-6 py-2.5 rounded-full bg-brand-gold text-brand-black text-xs font-bold uppercase tracking-wider hover:bg-brand-gold-light transition-all"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-serif text-white uppercase tracking-wider mb-6">
                  COMMISSION INQUIRY FORM
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full bg-brand-black/60 border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2 font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 8341342545"
                      className="w-full bg-brand-black/60 border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full bg-brand-black/60 border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2 font-medium">
                      Project Location / City
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Bengaluru, Anantapur"
                      className="w-full bg-brand-black/60 border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2 font-medium">
                    Primary Service Interest
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full bg-brand-black/60 border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold cursor-pointer"
                  >
                    <option value="Complete Home Theater">Turnkey Complete Home Theater</option>
                    <option value="Speakers Customization">Speakers Customization</option>
                    <option value="Premium Acoustics">Premium Room Acoustics & Isolation</option>
                    <option value="Premium Interior">Premium Cinema Interior & Lighting</option>
                    <option value="Customized Furniture">Motorized Recliners & Seating</option>
                    <option value="Bar Setup">Cinema VIP Bar & Lounge Setup</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2 font-medium">
                    Message / Space Dimensions
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your room size, target budget, or preferred timeline..."
                    className="w-full bg-brand-black/60 border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-brand-gold text-brand-black hover:bg-brand-gold-light font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Consultation Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Info & CTAs */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Box */}
            <div className="p-8 rounded-2xl bg-brand-card border border-white/10 space-y-6">
              <h3 className="text-xl font-serif text-white uppercase tracking-wider">
                DIRECT CONTACT DETAILS
              </h3>

              <div className="space-y-4">
                <a
                  href={`tel:${JINKA_PHONE_NUMBER}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold transition-all group"
                >
                  <div className="p-3 rounded-full bg-brand-black text-brand-gold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block tracking-wider">Direct Call</span>
                    <span className="text-lg font-serif text-white group-hover:text-brand-gold transition-colors">
                      +91 {JINKA_PHONE_NUMBER}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${JINKA_SUPPORT_NUMBER}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold transition-all group"
                >
                  <div className="p-3 rounded-full bg-brand-black text-brand-gold">
                    <Headset className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block tracking-wider">Customer Support</span>
                    <span className="text-lg font-serif text-white group-hover:text-brand-gold transition-colors">
                      +91 {JINKA_SUPPORT_NUMBER}
                    </span>
                  </div>
                </a>

                <a
                  href={generateGeneralConsultationWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 transition-all group"
                >
                  <div className="p-3 rounded-full bg-emerald-600 text-white">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-emerald-400 block tracking-wider">Instant Chat</span>
                    <span className="text-base font-serif text-white">WhatsApp Consultation</span>
                  </div>
                </a>

                <a
                  href={`mailto:${JINKA_EMAIL}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold transition-all group"
                >
                  <div className="p-3 rounded-full bg-brand-black text-brand-gold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block tracking-wider">Official Email</span>
                    <span className="text-sm font-serif text-white group-hover:text-brand-gold transition-colors">
                      {JINKA_EMAIL}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Address & Hours */}
            <div className="p-8 rounded-2xl bg-brand-card border border-white/10 space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-brand-gold font-semibold block mb-1">
                    Showroom & Experience Center
                  </span>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {JINKA_ADDRESS}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <Clock className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-brand-gold font-semibold block mb-1">
                    Operating Hours
                  </span>
                  <p className="text-sm text-slate-300 font-light">
                    {JINKA_HOURS}
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl border border-white/10 overflow-hidden bg-brand-card p-6 text-center">
              <span className="text-xs uppercase tracking-widest text-slate-400 block mb-2">Location Map</span>
              <p className="text-xs text-slate-500 font-light">32/98-A, Tarakaramapuram, Dharmavaram, Sri Sathya Sai District, Andhra Pradesh - 515671</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
