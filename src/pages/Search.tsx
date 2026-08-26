import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from '../components/ProductCard';

export const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');

  const matchingProducts = query.trim() === ''
    ? []
    : PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      );

  const matchingCategories = query.trim() === ''
    ? []
    : CATEGORIES.filter((c) =>
        c.name.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-brand-black text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 border-b border-white/10 pb-8 text-center sm:text-left">
          <span className="text-xs uppercase tracking-[0.35em] text-brand-gold font-semibold">
            Catalog Search
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif mt-2 tracking-tight">
            SEARCH PRODUCTS
          </h1>
        </div>

        {/* Large Input Box */}
        <div className="relative max-w-3xl mx-auto mb-16">
          <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 text-brand-gold" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type keywords like '5.1', 'Speakers', 'Recliner', 'Projector', 'Atmos'..."
            className="w-full bg-brand-card border-2 border-brand-gold/40 rounded-full pl-18 pr-8 py-5 text-lg sm:text-2xl font-serif text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold shadow-2xl transition-all"
            autoFocus
          />
        </div>

        {/* Live Search Results */}
        {query.trim() !== '' ? (
          <div className="space-y-16">
            {/* Category Results */}
            {matchingCategories.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold mb-6">
                  Matching Categories ({matchingCategories.length})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {matchingCategories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/products?category=${cat.slug}`}
                      className="p-6 rounded-xl bg-brand-card border border-white/10 hover:border-brand-gold flex items-center justify-between transition-all group"
                    >
                      <div>
                        <h4 className="text-lg font-serif text-white group-hover:text-brand-gold transition-colors">
                          {cat.name}
                        </h4>
                        <span className="text-xs text-slate-400 font-light mt-1 block">
                          {cat.productCount} Product Models
                        </span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-brand-gold" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Product Results */}
            {matchingProducts.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold mb-6">
                  Matching Products ({matchingProducts.length})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {matchingProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </div>
            )}

            {matchingCategories.length === 0 && matchingProducts.length === 0 && (
              <div className="text-center py-20 bg-brand-card rounded-2xl border border-white/10">
                <p className="text-2xl font-serif text-white">No results found for "{query}"</p>
                <p className="text-xs text-slate-400 font-light mt-2">Try checking for spelling or search for popular audio categories below.</p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12 max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block mb-6">
              Popular Searches
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {['Home Theater', 'Dolby Atmos', 'Speakers', 'Recliner', 'Laser Projector', 'Acoustic Panels', 'Bar Setup'].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-5 py-2.5 rounded-full bg-brand-card border border-white/10 hover:border-brand-gold text-xs text-slate-300 hover:text-brand-gold transition-all"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
