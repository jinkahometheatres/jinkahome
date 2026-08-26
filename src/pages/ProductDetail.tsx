import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { PhoneCall, ShoppingBag, CheckCircle, Shield, ArrowLeft } from 'lucide-react';
import { generateSingleProductWhatsAppLink } from '../utils/whatsapp';
import { useCart } from '../context/CartContext';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const { addToCart } = useCart();
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-brand-black text-white pt-40 pb-24 text-center">
        <div className="max-w-md mx-auto px-6">
          <h2 className="text-3xl font-serif">Product Not Found</h2>
          <p className="mt-4 text-slate-400 text-sm">The product you are looking for does not exist or has been relocated.</p>
          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-gold text-brand-black font-semibold text-xs uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Collection</span>
          </Link>
        </div>
      </div>
    );
  }

  const whatsappUrl = generateSingleProductWhatsAppLink(product.name, product.formattedPrice);
  const relatedProducts = PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-brand-black text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-slate-400 hover:text-brand-gold transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Collection</span>
        </Link>

        {/* Top Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-brand-card border border-white/10 shadow-2xl">
              <img
                src={product.images[selectedImageIdx] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-brand-gold text-brand-black text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Thumbnail selector if multiple images */}
            {product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIdx(idx)}
                    className={`relative w-24 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIdx === idx ? 'border-brand-gold scale-105' : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Information */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold block mb-2">
                {product.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight">
                {product.name}
              </h1>
              <p className="mt-2 text-sm font-serif italic text-brand-gold-light">
                {product.tagline}
              </p>
            </div>

            <div className="py-4 border-y border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Est. Investment</span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-brand-gold-light">
                  {product.formattedPrice}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-full border border-emerald-500/30">
                <CheckCircle className="w-4 h-4" />
                <span>Available for Commission</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 font-light leading-relaxed">
              {product.description}
            </p>

            {/* Primary Action Buttons */}
            <div className="space-y-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>

              <button
                onClick={() => addToCart(product)}
                className="w-full py-4 rounded-full border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Inquiry Cart</span>
              </button>
            </div>

            {/* Guarantees */}
            <div className="pt-6 grid grid-cols-2 gap-4 text-xs text-slate-400 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-gold" />
                <span>5-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-gold" />
                <span>On-Site Installation</span>
              </div>
            </div>
          </div>
        </div>



        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-12 border-t border-white/10">
            <h3 className="text-2xl sm:text-3xl font-serif text-white mb-8">
              RECOMMENDED COMPLEMENTS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
