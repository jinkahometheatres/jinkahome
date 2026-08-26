import React from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, Plus, Minus, MessageSquare, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { generateCartWhatsAppLink } from '../utils/whatsapp';

export const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  const whatsappItems = cart.map((item) => ({
    name: item.product.name,
    quantity: item.quantity,
    price: item.product.formattedPrice,
  }));

  const whatsappUrl = generateCartWhatsAppLink(whatsappItems);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brand-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-brand-black border-l border-brand-gold/20 shadow-2xl flex flex-col justify-between p-6 sm:p-8">
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-brand-gold" />
              <h3 className="text-lg font-serif text-white uppercase tracking-wider">
                Inquiry Cart ({totalItems})
              </h3>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Close Cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-grow overflow-y-auto py-6 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-16 text-slate-400">
                <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <p className="text-lg font-serif text-white">Your inquiry cart is empty</p>
                <p className="text-xs text-slate-500 mt-2 font-light">Explore our home theater products and add items to request a custom quote.</p>
                <Link
                  to="/products"
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-gold text-brand-black text-xs uppercase tracking-wider font-semibold hover:bg-brand-gold-light transition-all"
                >
                  <span>Browse Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-4 rounded-xl bg-brand-card border border-white/10 items-center justify-between"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg bg-brand-charcoal"
                  />
                  <div className="flex-grow">
                    <h4 className="text-xs font-serif font-bold text-white line-clamp-1">
                      {item.product.name}
                    </h4>
                    <span className="text-[10px] text-brand-gold block mt-0.5">
                      {item.product.formattedPrice}
                    </span>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-white/20 rounded-md">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 text-slate-400 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 text-slate-400 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-red-400 hover:text-red-300 p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer */}
          {cart.length > 0 && (
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400 font-light">Estimated Total</span>
                <span className="font-serif font-bold text-xl text-brand-gold-light">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-[0.2em] shadow-lg flex items-center justify-center gap-3 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
              </a>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
                <Link
                  to="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="underline hover:text-white"
                >
                  View Cart Page
                </Link>
                <button
                  onClick={clearCart}
                  className="hover:text-red-400"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
