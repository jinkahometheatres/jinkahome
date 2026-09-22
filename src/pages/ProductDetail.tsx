import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { PhoneCall, ShoppingBag, ArrowLeft, CheckCircle } from 'lucide-react';
import { generateSingleProductWhatsAppLink } from '../utils/whatsapp';
import { useCart } from '../context/CartContext';
import { fetchProductBySlug, fetchProducts } from '../services/api';
import { Product } from '../data/products';
import { getImageUrl } from '../utils/image';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  const { addToCart } = useCart();

  useEffect(() => {
    const loadProductAndRelated = async () => {
      setIsLoading(true);
      if (slug) {
        const data = await fetchProductBySlug(slug);
        setProduct(data);

        // Fetch related products from the same category
        if (data && data.category) {
          const allProducts = await fetchProducts();
          const related = allProducts.filter(
            (p: Product) => p.category.id === data.category.id && p.id !== data.id
          ).slice(0, 3);
          setRelatedProducts(related);
        }
      }
      setIsLoading(false);
    };

    loadProductAndRelated();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-gold"></div>
      </div>
    );
  }

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

  const formattedOriginalPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency', currency: 'INR', maximumFractionDigits: 0
  }).format(Number(product.original_price));

  const formattedSellingPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency', currency: 'INR', maximumFractionDigits: 0
  }).format(Number(product.selling_price));

  const whatsappUrl = generateSingleProductWhatsAppLink(product.name, formattedSellingPrice);
  const imageUrl = getImageUrl(product.image, "/assets/images/custom_speakers.png");

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
                src={imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Note: Multiple images logic removed as requested */}
          </div>

          {/* Right Column: Product Information */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold block mb-2">
                {product.category?.name || "Category"}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight">
                {product.name}
              </h1>
            </div>

            <div className="py-4 border-y border-white/10 flex flex-col justify-between">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">Pricing Details</span>
              <div className="flex items-center gap-4">
                <del className="text-xl sm:text-2xl font-serif text-slate-500">
                  {formattedOriginalPrice}
                </del>
                {product.discount_percentage && product.discount_percentage > 0 && (
                  <span className="bg-brand-gold/10 text-brand-gold px-2 py-1 rounded font-bold text-sm tracking-wider">
                    {product.discount_percentage}% OFF
                  </span>
                )}
              </div>
              <span className="text-3xl sm:text-4xl font-serif font-bold text-brand-gold-light mt-2">
                 {formattedSellingPrice}
              </span>
            </div>

            <p className="text-sm text-slate-300 font-light leading-relaxed whitespace-pre-wrap">
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
            <div className="pt-6 grid grid-cols-1 gap-4 text-xs text-slate-400 border-t border-white/10">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <CheckCircle className="w-4 h-4 text-brand-gold" />
                <span>On-Site Installation (Subject to project)</span>
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
