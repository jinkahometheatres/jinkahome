import React, { useRef, useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../services/api';
import { Product } from '../data/products';

export const FeaturedProducts: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [featured, setFeatured] = useState<Product[]>([]);

  useEffect(() => {
    const loadFeatured = async () => {
      const data = await fetchProducts();
      // For now, use the first 6 products as featured
      setFeatured(data.slice(0, 6)); 
    };
    loadFeatured();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (featured.length === 0) return null;

  return (
    <section className="py-20 sm:py-28 bg-brand-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-slate-400">
              Masterpiece Collection
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif mt-2 tracking-tight text-white">
              FEATURED SYSTEMS
            </h2>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-4">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-white/20 hover:border-white hover:text-white transition-colors"
              aria-label="Previous Featured Product"
            >
              <ArrowLeft className="w-5 h-5 text-slate-300" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-white/20 hover:border-white hover:text-white transition-colors"
              aria-label="Next Featured Product"
            >
              <ArrowRight className="w-5 h-5 text-slate-300" />
            </button>
            <Link
              to="/products"
              className="ml-2 text-xs uppercase tracking-[0.2em] font-semibold text-slate-300 hover:text-white transition-colors hidden sm:inline-block"
            >
              View Full Collection
            </Link>
          </div>
        </div>

        {/* Horizontal Scroll Showcase with Equal Sized Square Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-8 pt-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featured.map((product) => (
            <div
              key={product.id}
              className="w-[280px] sm:w-[330px] lg:w-[360px] aspect-square flex-shrink-0 snap-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
