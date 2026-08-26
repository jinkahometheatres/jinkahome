import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import { ArrowRight } from 'lucide-react';

export const Categories: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-8 text-center sm:text-left flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-brand-gold font-semibold">
              System Architecture
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif mt-2 tracking-tight">
              PRODUCT CATEGORIES
            </h1>
            <p className="mt-3 text-lg font-serif italic text-slate-300 font-light">
              “Architectural audio-visual categories tailored to your space.”
            </p>
          </div>
          <Link
            to="/products"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-gold text-brand-black font-semibold text-xs uppercase tracking-widest hover:bg-brand-gold-light transition-all"
          >
            <span>Explore All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Categories Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              className="group relative overflow-hidden rounded-2xl bg-brand-card border border-white/10 hover:border-brand-gold/50 transition-all duration-500 flex flex-col justify-between"
            >
              <Link to={`/products?category=${cat.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-black/70 backdrop-blur-md border border-brand-gold/30 text-brand-gold">
                    0{idx + 1}
                  </span>
                </div>
              </Link>

              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <Link to={`/products?category=${cat.slug}`}>
                    <h2 className="text-2xl font-serif text-white group-hover:text-brand-gold transition-colors mb-2">
                      {cat.name}
                    </h2>
                  </Link>
                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-light">
                    {cat.productCount} Product Models
                  </span>
                  <Link
                    to={`/products?category=${cat.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-brand-gold group-hover:text-brand-gold-light"
                  >
                    <span>View Category</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className="h-[2px] w-full bg-transparent group-hover:bg-brand-gold transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
