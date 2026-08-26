import React, { useState, useMemo } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/gallery';
import { Maximize2, Sparkles } from 'lucide-react';

interface GalleryPageProps {
  onSelectImage: (image: string, title: string, desc: string) => void;
}

export const Gallery: React.FC<GalleryPageProps> = ({ onSelectImage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'theaters', label: 'Private Theaters' },
    { id: 'speakers', label: 'Custom Speakers' },
    { id: 'seating', label: 'Motorized Seating' },
    { id: 'interiors', label: 'Luxury Interiors' },
    { id: 'acoustics', label: 'Acoustic Panels' },
    { id: 'bar', label: 'VIP Bar Setup' },
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

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
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-brand-gold text-brand-black shadow-lg shadow-brand-gold/20'
                  : 'bg-brand-card text-slate-300 border border-white/10 hover:border-brand-gold'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px] sm:auto-rows-[340px]">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item.image, item.title, item.description)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-brand-card cursor-pointer transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
