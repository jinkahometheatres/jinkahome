import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from '../components/ProductCard';
import { Search, SlidersHorizontal } from 'lucide-react';

export const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategorySlug = searchParams.get('category') || 'all';
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategorySlug === 'all' || product.categorySlug === selectedCategorySlug;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategorySlug, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-brand-black text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Top Heading */}
        <div className="mb-12 border-b border-white/10 pb-8 text-center sm:text-left">
          <span className="text-xs uppercase tracking-[0.35em] text-brand-gold font-semibold">
            Catalog & Systems
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif mt-2 tracking-tight">
            THE COLLECTION
          </h1>
          <p className="mt-3 text-lg font-serif italic text-slate-300 font-light">
            “Engineered for sound. Designed for immersion.”
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 mb-12 bg-brand-card p-4 sm:p-6 rounded-2xl border border-white/10">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 lg:pb-0" style={{ scrollbarWidth: 'none' }}>
            <button
              onClick={() => setSearchParams({})}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedCategorySlug === 'all'
                  ? 'bg-brand-gold text-brand-black shadow-md'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              All Systems ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSearchParams({ category: cat.slug })}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                  selectedCategorySlug === cat.slug
                    ? 'bg-brand-gold text-brand-black shadow-md'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search & Sort Input */}
          <div className="flex items-center gap-4">
            <div className="relative flex-grow sm:flex-grow-0 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by keyword..."
                className="w-full bg-brand-black/60 border border-white/15 rounded-full pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold"
              />
            </div>

            <div className="relative flex items-center gap-2 border border-white/15 rounded-full px-3 py-2 bg-brand-black/60">
              <SlidersHorizontal className="w-3.5 h-3.5 text-brand-gold" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs text-slate-200 focus:outline-none cursor-pointer pr-2"
              >
                <option value="featured" className="bg-brand-black text-white">Featured</option>
                <option value="price-asc" className="bg-brand-black text-white">Price: Low to High</option>
                <option value="price-desc" className="bg-brand-black text-white">Price: High to Low</option>
                <option value="name" className="bg-brand-black text-white">Name</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Count Indicator */}
        <div className="mb-8 flex items-center justify-between text-xs text-slate-400">
          <span>Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}</span>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-brand-card rounded-2xl border border-white/10">
            <p className="text-xl font-serif text-white">No products found in this category.</p>
            <button
              onClick={() => {
                setSearchParams({});
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2 rounded-full bg-brand-gold text-brand-black text-xs font-bold uppercase tracking-wider hover:bg-brand-gold-light transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
