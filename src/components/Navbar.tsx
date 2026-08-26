import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, PhoneCall, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { generateGeneralConsultationWhatsAppLink } from '../utils/whatsapp';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'CATEGORIES', path: '/categories' },
    { name: 'ABOUT', path: '/about' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isMobileMenuOpen || isScrolled
          ? 'bg-brand-black border-b border-brand-gold/20 shadow-2xl py-3'
          : isHomePage
          ? 'bg-gradient-to-b from-brand-black/80 via-brand-black/30 to-transparent py-5'
          : 'bg-brand-black border-b border-brand-gold/15 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/assets/logo.png"
              alt="JINKA HOME THEATERS"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-brand-gold font-semibold'
                      : 'text-slate-300 hover:text-brand-gold-light'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-300 hover:text-brand-gold transition-colors duration-200"
              aria-label="Search products"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-slate-300 hover:text-brand-gold transition-colors duration-200 relative"
              aria-label="View shopping inquiry cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-gold text-brand-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            {/* WhatsApp Consultation Button */}
            <a
              href={generateGeneralConsultationWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/40 text-brand-gold text-xs tracking-wider uppercase font-semibold hover:bg-brand-gold hover:text-brand-black transition-all duration-300 shadow-sm hover:shadow-brand-gold/20"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Enquire</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-brand-gold focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-brand-black z-40 flex flex-col justify-between p-6 border-t border-brand-gold/20 animate-fade-in">
          <div className="flex flex-col space-y-6 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center justify-between text-lg uppercase tracking-widest text-slate-200 hover:text-brand-gold py-2 border-b border-white/5"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-brand-gold" />
              </Link>
            ))}
          </div>

          <div className="space-y-4 pb-8">
            <a
              href={generateGeneralConsultationWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-brand-gold text-brand-black font-bold uppercase tracking-wider text-sm shadow-lg hover:bg-brand-gold-light transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>WhatsApp Consultation</span>
            </a>
            <div className="text-center text-xs text-slate-400">
              <p>Direct Call: +91 8341342545</p>
              <p className="text-[10px] text-slate-500 mt-1">Dharmavaram, Sri Sathya Sai District</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
