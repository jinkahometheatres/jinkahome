import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Headset } from 'lucide-react';
import { JINKA_PHONE_NUMBER, JINKA_SUPPORT_NUMBER, JINKA_EMAIL, JINKA_ADDRESS, JINKA_HOURS } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="/assets/logo.png"
                alt="JINKA HOME THEATERS"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-xs uppercase tracking-[0.25em] font-serif text-brand-gold italic">
              “Experience Beyond Imagination”
            </p>
            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              Designing bespoke private cinema systems, custom audiophile speakers, architectural room acoustics, luxury seating, and entertainment lounges across India.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.facebook.com/share/19AmWwp1Hc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-black text-slate-300 transition-all flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/jinkahometheatres?igsi=MTdvNTJzNmRwMDAxdQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-black text-slate-300 transition-all flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@jinkahometheatres?si=KsWXQplftWXiG2q2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-black text-slate-300 transition-all flex items-center justify-center"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs font-light tracking-wider text-slate-300">
              <li>
                <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-brand-gold transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-brand-gold transition-colors">Categories</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-gold transition-colors">About Jinka</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-brand-gold transition-colors">Portfolio Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Specialties Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-6">
              Specialties
            </h4>
            <ul className="space-y-3 text-xs font-light tracking-wider text-slate-300">
              <li>
                <Link to="/about" className="hover:text-brand-gold transition-colors">Speakers Customization</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-gold transition-colors">Premium Acoustics</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-gold transition-colors">Premium Interior</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-gold transition-colors">Customized Furniture</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-gold transition-colors">Bar Setup</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-6">
              Showroom & Contact
            </h4>
            <ul className="space-y-4 text-xs font-light text-slate-300">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span>{JINKA_ADDRESS}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href={`tel:${JINKA_PHONE_NUMBER}`} className="hover:text-brand-gold transition-colors">
                  +91 {JINKA_PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Headset className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href={`tel:${JINKA_SUPPORT_NUMBER}`} className="hover:text-brand-gold transition-colors">
                  +91 {JINKA_SUPPORT_NUMBER} (Support)
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href={`mailto:${JINKA_EMAIL}`} className="hover:text-brand-gold transition-colors">
                  {JINKA_EMAIL}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span>{JINKA_HOURS}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-light space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} JINKA HOME THEATERS. All rights reserved.</p>
          <div className="flex space-x-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Architectural Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
