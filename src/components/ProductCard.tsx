import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { Eye, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getImageUrl } from '../utils/image';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const formattedOriginalPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(Number(product.original_price));

  const formattedSellingPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(Number(product.selling_price));

  const imageUrl = getImageUrl(product.image, "/assets/images/custom_speakers.png");

  return (
    <div className="group relative rounded-xl bg-brand-cream border border-brand-cream/20 aspect-square w-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      {/* Top Image Container */}
      <div className="relative w-full h-[55%] shrink-0 overflow-hidden bg-slate-200 rounded-t-xl">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Hover Action Overlay Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-brand-black/50 backdrop-blur-[2px]">
          <Link
            to={`/products/${product.slug}`}
            className="p-2 rounded-full bg-white text-brand-black hover:bg-brand-cream transition-colors shadow-md"
            title="View Product Details"
          >
            <Eye className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="p-4 h-[45%] shrink-0 flex flex-col justify-between text-brand-black bg-brand-cream rounded-b-xl">
        <div>
          <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-600 block mb-1">
            {product.category?.name || "Category"}
          </span>
          <Link to={`/products/${product.slug}`}>
            <h3 className="text-base sm:text-lg font-serif font-bold text-brand-black hover:text-slate-700 transition-colors line-clamp-2 leading-tight">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Price & Enquire CTA Area */}
        <div className="flex items-center justify-between border-t border-brand-black/10 pt-3">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <del className="text-xs text-slate-400 font-medium">{formattedOriginalPrice}</del>
              {product.discount_percentage && product.discount_percentage > 0 && (
                <span className="text-[10px] bg-green-600/10 text-green-700 px-1.5 py-0.5 rounded font-bold">
                  {product.discount_percentage}% OFF
                </span>
              )}
            </div>
            <span className="text-sm sm:text-base font-serif font-bold text-brand-black">
              {formattedSellingPrice}
            </span>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-brand-black text-white hover:bg-slate-800 text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-1 shadow-sm"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
