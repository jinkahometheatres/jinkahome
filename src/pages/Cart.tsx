import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, Plus, Minus, MessageSquare, ArrowRight, MapPin, Loader2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { generateCartWhatsAppLink } from '../utils/whatsapp';
import { getImageUrl } from '../utils/image';

export const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const [location, setLocation] = useState('');
  const [isLocating, setIsLocating] = useState(false);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          // Reverse geocoding using Nominatim (OpenStreetMap)
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

  const whatsappItems = cart.map((item) => ({
    name: item.product.name,
    quantity: item.quantity,
    price: new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Number(item.product.selling_price)),
  }));

  const whatsappUrl = generateCartWhatsAppLink(whatsappItems);

  return (
    <div className="min-h-screen bg-brand-black text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 border-b border-white/10 pb-8 text-center sm:text-left">
          <span className="text-xs uppercase tracking-[0.35em] text-brand-gold font-semibold">
            Inquiry Concierge
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif mt-2 tracking-tight">
            INQUIRY CART ({totalItems})
          </h1>
          <p className="mt-3 text-lg font-serif italic text-slate-300 font-light">
            “Review selected audio-visual components and request a tailored quotation via WhatsApp.”
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-brand-card rounded-2xl border border-white/10 max-w-xl mx-auto">
            <ShoppingBag className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-2xl font-serif text-white">Your inquiry cart is empty</h3>
            <p className="text-sm text-slate-400 font-light mt-2 max-w-md mx-auto">
              Browse our bespoke home theater systems, audiophile speakers, and motorized seating to add items to your commission request.
            </p>
            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-brand-gold text-brand-black font-semibold text-xs uppercase tracking-widest hover:bg-brand-gold-light transition-all shadow-lg"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Cart Items List */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs text-slate-400 font-light">
                <span>Product Item</span>
                <span>Quantity & Total</span>
              </div>

              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="p-6 rounded-2xl bg-brand-card border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-brand-gold/40 transition-all"
                >
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <img
                      src={getImageUrl(item.product.image, "/assets/images/custom_speakers.png")}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-xl bg-brand-charcoal flex-shrink-0"
                    />
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">
                        {item.product.category?.name || "Category"}
                      </span>
                      <Link to={`/products/${item.product.slug}`}>
                        <h4 className="text-base font-serif font-bold text-white hover:text-brand-gold transition-colors line-clamp-1">
                          {item.product.name}
                        </h4>
                      </Link>
                      <span className="text-xs text-slate-400 font-light block mt-1">
                        Est. ₹{Number(item.product.selling_price).toLocaleString('en-IN')} per unit
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 border-white/10 pt-4 sm:pt-0">
                    <div className="flex items-center border border-white/20 rounded-lg bg-brand-black/60 px-2 py-1">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 text-slate-400 hover:text-white"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-sm font-mono text-white font-bold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 text-slate-400 hover:text-white"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <span className="text-base font-serif font-bold text-brand-gold-light min-w-[100px] text-right">
                    ₹{(Number(item.product.selling_price) * item.quantity).toLocaleString('en-IN')}
                    </span>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 text-red-400 hover:text-red-300 transition-colors"
                      title="Remove product"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex justify-between items-center pt-4">
                <Link
                  to="/products"
                  className="text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-brand-gold"
                >
                  ← Continue Shopping
                </Link>
                <button
                  onClick={clearCart}
                  className="text-xs text-red-400 hover:text-red-300 font-light"
                >
                  Clear Entire Cart
                </button>
              </div>
            </div>

            {/* Summary Box */}
            <div className="lg:col-span-4 bg-brand-card p-8 rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-xl font-serif text-white uppercase tracking-wider border-b border-white/10 pb-4">
                COMMISSION SUMMARY
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between text-slate-400 font-light">
                  <span>Selected Products ({totalItems})</span>
                  <span className="text-white">₹{totalPrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-400 font-light">
                  <span>Consultation & Site Audit</span>
                  <span className="text-emerald-400 font-medium">Included Complimentary</span>
                </div>
                <div className="flex justify-between text-slate-400 font-light">
                  <span>Standard Installation</span>
                  <span className="text-slate-300">Custom Quoted</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-sm font-serif text-white">Estimated Subtotal</span>
                <span className="text-2xl font-serif font-bold text-brand-gold-light">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </span>
              </div>
              
              <div className="space-y-3 border-t border-white/10 pt-4">
                <span className="text-xs text-slate-400 uppercase tracking-widest block mb-1">Delivery Location</span>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-brand-gold" />
                  <textarea
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter location or use button"
                    className="w-full bg-brand-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold transition-colors resize-none h-16"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleGetLocation}
                    disabled={isLocating}
                    className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-brand-gold hover:text-brand-gold-light transition-colors disabled:opacity-50"
                  >
                    {isLocating ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <MapPin className="w-3.5 h-3.5" />
                    )}
                    <span>{isLocating ? 'Locating...' : 'Use Current Location'}</span>
                  </button>
                </div>
              </div>

              <a
                href={generateCartWhatsAppLink(whatsappItems, location)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-[0.2em] shadow-xl flex items-center justify-center gap-3 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
              </a>

              <p className="text-[11px] text-slate-500 font-light text-center leading-relaxed">
                Clicking will open WhatsApp with pre-filled details of your cart items sent directly to Jinka Home Theaters (+91 8341342545).
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
