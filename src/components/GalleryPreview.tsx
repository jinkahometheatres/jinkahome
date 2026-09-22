import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fetchGallery } from '../services/api';
import { ArrowRight, Maximize2 } from 'lucide-react';
import { getImageUrl } from '../utils/image';

interface GalleryPreviewProps {
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

export const GalleryPreview: React.FC<GalleryPreviewProps> = ({ onSelectImage }) => {
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    fetchGallery().then((data) => setImages(data.slice(0, 5)));
  }, []);

  if (images.length === 0) return null;

  return (
    <section className="py-24 sm:py-32 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-brand-gold">
              Architectural Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif mt-2 tracking-tight">
              THEATER PORTFOLIO
            </h2>
          </div>
          <Link
            to="/gallery"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold hover:text-brand-gold-light transition-colors group"
          >
            <span>Explore Full Gallery</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[260px] sm:auto-rows-[300px]">
          {images.map((item, idx) => {
            const isSpanTwo = idx === 0 || idx === 3;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                onClick={() => onSelectImage?.(getImageUrl(item.image, ''), item.category?.name || 'Gallery')}
                className={`group relative overflow-hidden rounded-xl border border-white/10 bg-brand-charcoal cursor-pointer ${
                  isSpanTwo ? 'md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1'
                }`}
              >
                <img
                  src={getImageUrl(item.image, '')}
                  alt={item.category?.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
