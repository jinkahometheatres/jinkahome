import React, { useState, useEffect } from 'react';
import { X, MapPin, Calendar, Clock, User, Phone, FileText, IndianRupee, Ruler, Loader2 } from 'lucide-react';
import { generateBookSlotWhatsAppLink, generateQuotationWhatsAppLink } from '../utils/whatsapp';

interface BookSlotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Mode = 'visit' | 'quotation';

export const BookSlotModal: React.FC<BookSlotModalProps> = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState<Mode>('visit');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  
  // Quotation specific
  const [requirement, setRequirement] = useState('Complete Home Theater');
  const [budget, setBudget] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  
  const [isLocating, setIsLocating] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const data = await response.json();
          if (data && data.display_name) {
            setLocation(data.display_name);
          } else {
            setLocation(`${latitude}, ${longitude}`);
          }
        } catch (error) {
          setLocation(`${position.coords.latitude}, ${position.coords.longitude}`);
        }
        setIsLocating(false);
      },
      (error) => {
        setIsLocating(false);
        alert('Failed to get location. Please input manually.');
      }
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim() || !location.trim()) {
      alert('Please fill out Name, Mobile, and Location.');
      return;
    }
    
    let url = '';
    
    if (mode === 'visit') {
      if (!date.trim()) {
        alert('Please fill out the Preferred Date.');
        return;
      }
      url = generateBookSlotWhatsAppLink(name, date, location, mobile);
    } else {
      if (!budget.trim() || !height.trim() || !width.trim() || !length.trim()) {
        alert('Please fill out Budget and Room Dimensions.');
        return;
      }
      const roomSize = `H:${height} x W:${width} x L:${length}`;
      url = generateQuotationWhatsAppLink(name, mobile, location, requirement, budget, roomSize);
    }
    
    window.open(url, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-black/90 backdrop-blur-md animate-fade-in p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-brand-card border border-brand-gold/20 rounded-2xl shadow-2xl p-6 sm:p-8 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-serif text-white uppercase tracking-wider mb-4">
            Book Site Visit / Quotation
          </h2>
          
          {/* Toggle Switch */}
          <div className="flex bg-brand-black/60 rounded-full p-1 border border-white/10 relative">
            <button
              onClick={() => setMode('visit')}
              className={`flex-1 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${
                mode === 'visit' ? 'bg-brand-gold text-brand-black shadow-lg shadow-brand-gold/20' : 'text-slate-400 hover:text-white'
              }`}
            >
              Site Visit
            </button>
            <button
              onClick={() => setMode('quotation')}
              className={`flex-1 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${
                mode === 'quotation' ? 'bg-brand-gold text-brand-black shadow-lg shadow-brand-gold/20' : 'text-slate-400 hover:text-white'
              }`}
            >
              Quotation
            </button>
          </div>
          
          <div className="mt-4 p-3 bg-brand-black/40 border border-brand-gold/20 rounded-lg text-center">
            <p className="text-sm text-brand-gold font-medium">
               {mode === 'visit' ? 'Site Visit Charges: 5,000/-' : 'Quotation Charges: 100/-'}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Shared Fields */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full bg-brand-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold transition-colors"
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
              <input
                type="tel"
                required
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Mobile Number"
                className="w-full bg-brand-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-4 h-4 text-brand-gold" />
              <textarea
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Project Location / Address"
                className="w-full bg-brand-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold transition-colors resize-none h-20"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleGetLocation}
                disabled={isLocating}
                className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-brand-gold hover:text-brand-gold-light transition-colors disabled:opacity-50"
              >
                {isLocating ? (
                  <Loader2 className="w-3 h-3 animate-spin" />
                ) : (
                  <MapPin className="w-3 h-3" />
                )}
                <span>{isLocating ? 'Locating...' : 'Use Current Location'}</span>
              </button>
            </div>
          </div>

          {/* Conditional Mode Fields */}
          {mode === 'visit' ? (
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
              <input
                type="date"
                required={mode === 'visit'}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-brand-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold transition-colors"
              />
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative">
                <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
                <select
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  className="w-full bg-brand-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold cursor-pointer"
                >
                  <option value="Complete Home Theater">Complete Home Theater</option>
                  <option value="Speakers Customization">Speakers Customization</option>
                  <option value="Premium Acoustics">Premium Acoustics</option>
                  <option value="Premium Interior">Premium Interior</option>
                  <option value="Customized Furniture">Customized Furniture</option>
                  <option value="Bar Setup">Bar Setup</option>
                </select>
              </div>

              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
                <input
                  type="text"
                  required={mode === 'quotation'}
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="Estimated Budget (e.g. 5 Lakhs)"
                  className="w-full bg-brand-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2 font-medium flex items-center gap-2">
                  <Ruler className="w-3 h-3 text-brand-gold" /> Room Size Details
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <input
                    type="text"
                    required={mode === 'quotation'}
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Height (ft)"
                    className="w-full bg-brand-black/50 border border-white/10 rounded-lg px-3 py-3 text-xs text-white text-center focus:outline-none focus:border-brand-gold"
                  />
                  <input
                    type="text"
                    required={mode === 'quotation'}
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    placeholder="Width (ft)"
                    className="w-full bg-brand-black/50 border border-white/10 rounded-lg px-3 py-3 text-xs text-white text-center focus:outline-none focus:border-brand-gold"
                  />
                  <input
                    type="text"
                    required={mode === 'quotation'}
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    placeholder="Length (ft)"
                    className="w-full bg-brand-black/50 border border-white/10 rounded-lg px-3 py-3 text-xs text-white text-center focus:outline-none focus:border-brand-gold"
                  />
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full mt-6 py-4 rounded-full bg-brand-gold text-brand-black font-bold text-xs uppercase tracking-[0.2em] shadow-lg hover:bg-brand-gold-light transition-all flex items-center justify-center gap-2"
          >
            <Clock className="w-4 h-4" />
            <span>Confirm Request on WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};
