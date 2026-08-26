import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ChevronRight, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProducts = query.trim() === ''
    ? []
    : PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      );

  const filteredCategories = query.trim() === ''
    ? []
    : CATEGORIES.filter((c) =>
        c.name.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 bg-brand-black/95 backdrop-blur-2xl flex flex-col p-6 sm:p-12 animate-fade-in overflow-y-auto">
      {/* Header Close */}
      <div className="max-w-4xl mx-auto w-full flex justify-end mb-8">
        <button
          onClick={onClose}
          className="p-3 rounded-full border border-white/20 hover:border-brand-gold text-slate-300 hover:text-brand-gold transition-colors"
          aria-label="Close Search"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="max-w-3xl mx-auto w-full flex-grow">
        {/* Search Input Bar */}
        <div className="relative border-b-2 border-brand-gold/60 pb-4 mb-12">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 text-brand-gold" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search home theaters, speakers, recliners, 4K projectors..."
            className="w-full bg-transparent pl-12 pr-4 text-xl sm:text-3xl font-serif text-white placeholder-slate-500 focus:outline-none"
            autoFocus
          />
        </div>

        {/* Results */}
        {query.trim() !== '' && (
          <div className="space-y-10">
            {/* Category Matches */}
            {filteredCategories.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold mb-4">
                  Categories ({filteredCategories.length})
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {filteredCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        navigate(`/products?category=${cat.slug}`);
                        onClose();
                      }}
                      className="p-4 rounded-lg bg-brand-card border border-white/10 hover:border-brand-gold text-left flex items-center justify-between transition-all"
                    >
                      <div>
                        <span className="text-sm font-serif text-white block font-medium">
                          {cat.name}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {cat.productCount} Products
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-brand-gold" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Product Matches */}
            {filteredProducts.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold mb-4">
                  Products ({filteredProducts.length})
                </h4>
                <div className="space-y-3">
                  {filteredProducts.map((prod) => (
                    <button
                      key={prod.id}
                      onClick={() => {
                        navigate(`/products/${prod.slug}`);
                        onClose();
                      }}
                      className="w-full p-4 rounded-lg bg-brand-card border border-white/10 hover:border-brand-gold text-left flex items-center gap-4 transition-all group"
                    >
                      <img
                        src={prod.images[0]}
                        alt=""
                        className="w-16 h-12 object-cover rounded bg-brand-charcoal"
                      />
                      <div className="flex-grow">
                        <span className="text-xs font-serif text-white group-hover:text-brand-gold transition-colors block font-medium">
                          {prod.name}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {prod.category} • {prod.formattedPrice}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {filteredCategories.length === 0 && filteredProducts.length === 0 && (
              <div className="text-center py-12 text-slate-400">
                <p className="text-lg font-serif">No products found matching "{query}"</p>
                <p className="text-xs mt-2 font-light">Try searching for "Speakers", "Projector", "Atmos", or "Recliner"</p>
              </div>
            )}
          </div>
        )}

        {query.trim() === '' && (
          <div className="text-center py-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 block mb-4">
              Popular Searches
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {['5.1 Home Theater', 'Dolby Atmos', '4K Laser Projector', 'Motorized Recliner', 'Acoustic Panels', 'Bar Setup'].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:border-brand-gold text-xs text-slate-300 hover:text-brand-gold transition-colors"
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
