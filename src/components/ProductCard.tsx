import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { PhoneCall, Eye, ShoppingBag } from 'lucide-react';
import { generateSingleProductWhatsAppLink } from '../utils/whatsapp';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative rounded-xl bg-brand-cream border border-brand-cream/20 aspect-square w-full overflow-hidden flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      {/* Top Image Container - Exactly 50% Height */}
      <div className="relative w-full h-[50%] shrink-0 overflow-hidden bg-slate-200">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badge - Black with White Text */}
        {product.badge && (
          <div className="absolute top-2.5 left-2.5 bg-brand-black text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
            {product.badge}
          </div>
        )}

        {/* Hover Action Overlay Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-brand-black/50 backdrop-blur-[2px]">
          <Link
            to={`/products/${product.slug}`}
            className="p-2 rounded-full bg-white text-brand-black hover:bg-brand-cream transition-colors shadow-md"
            title="View Product Details"
          >
            <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>
        </div>
      </div>

      {/* Bottom Content Area - Exactly 50% Height Cream Background with Black Text */}
      <div className="p-3.5 sm:p-4 h-[50%] shrink-0 flex flex-col justify-between bg-brand-cream text-brand-black overflow-hidden">
        <div>
          <span className="text-[9px] uppercase tracking-[0.18em] font-semibold text-slate-600 block mb-0.5">
            {product.category}
          </span>
          <Link to={`/products/${product.slug}`}>
            <h3 className="text-sm sm:text-base font-serif font-bold text-brand-black group-hover:text-slate-800 transition-colors line-clamp-1 leading-snug">
              {product.name}
            </h3>
          </Link>
          <p className="mt-1 text-[11px] sm:text-xs text-slate-700 font-normal line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Enquire CTA Area */}
        <div className="pt-2 border-t border-brand-black/10 flex items-center justify-between">
          <div>
            <span className="text-[8px] sm:text-[9px] uppercase text-slate-500 block tracking-wider font-medium">Estimated Price</span>
            <span className="text-xs sm:text-sm font-serif font-bold text-brand-black">
              {product.formattedPrice}
            </span>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-brand-black text-white hover:bg-slate-800 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1 shadow-sm"
          >
            <ShoppingBag className="w-3 h-3" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
