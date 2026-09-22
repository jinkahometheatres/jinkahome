import React, { useState, useEffect, useMemo } from 'react';
import { fetchGallery, fetchCategories } from '../services/api';
import { Maximize2, Sparkles } from 'lucide-react';
import { getImageUrl } from '../utils/image';

interface GalleryPageProps {
  onSelectImage?: (image: string, title?: string, desc?: string) => void;
}

interface GalleryImage {
  id: number;
  image: string;
  category: {
    id: number;
    name: string;
    slug: string;
  };
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

export const Gallery: React.FC<GalleryPageProps> = ({ onSelectImage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [galleryItems, setGalleryItems] = useState<GalleryImage[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchGallery().then(setGalleryItems);
    fetchCategories().then(setCategories);
  }, []);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return galleryItems;
    return galleryItems.filter((item) => item.category?.slug === selectedCategory);
  }, [selectedCategory, galleryItems]);

  return (
    <div className="min-h-screen bg-brand-black text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 border-b border-white/10 pb-8 text-center sm:text-left">
          <span className="text-xs uppercase tracking-[0.35em] text-brand-gold font-semibold">
            Architectural Photography
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif mt-2 tracking-tight">
            THE GALLERY
          </h1>
          <p className="mt-3 text-lg font-serif italic text-slate-300 font-light">
            “Explore handcrafted screening rooms, acoustic wall scapes, and bespoke theater bars.”
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-none pb-6 mb-12" style={{ scrollbarWidth: 'none' }}>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-brand-gold text-brand-black shadow-lg shadow-brand-gold/20'
                : 'bg-brand-card text-slate-300 border border-white/10 hover:border-brand-gold'
            }`}
          >
            All Projects
          </button>
          
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === cat.slug
                  ? 'bg-brand-gold text-brand-black shadow-lg shadow-brand-gold/20'
                  : 'bg-brand-card text-slate-300 border border-white/10 hover:border-brand-gold'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Masonry Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px] sm:auto-rows-[340px]">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage?.(getImageUrl(item.image, ''), item.category?.name)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-brand-card cursor-pointer transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
            >
              <img
                src={getImageUrl(item.image, '')}
                alt={item.category?.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <p className="text-xl font-serif">No images found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};
