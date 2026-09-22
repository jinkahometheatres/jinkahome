import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../services/api';
import { Category } from '../data/products';
import { ArrowRight } from 'lucide-react';
import { getImageUrl } from '../utils/image';

export const ShopByCategory: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };
    loadCategories();
  }, []);

  if (categories.length === 0) return null;

  return (
    <section className="py-20 sm:py-28 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-slate-400">
              Curated Catalog
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif mt-2 tracking-tight text-white">
              SHOP BY CATEGORY
            </h2>
          </div>
          <Link
            to="/categories"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-slate-300 hover:text-white transition-colors group"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Equal Sized Square Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.slice(0, 6).map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-xl bg-brand-cream border border-brand-cream/20 aspect-square w-full overflow-hidden flex flex-col shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <Link to={`/products?category=${cat.slug}`} className="flex flex-col h-full w-full">
                {/* Top Image Container */}
                <div className="relative w-full h-[60%] shrink-0 overflow-hidden bg-slate-200">
                  <img
                    src={getImageUrl(cat.image, '/assets/images/luxury_theater.png')}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Bottom Content Area */}
                <div className="p-4 sm:p-5 h-[40%] shrink-0 flex flex-col justify-center bg-brand-cream text-brand-black overflow-hidden relative">
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-black tracking-tight group-hover:text-slate-800 transition-colors leading-tight">
                      {cat.name}
                    </h3>
                  </div>

                  <div className="mt-4 pt-4 border-t border-brand-black/10 flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-brand-black group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                      <span>Explore Collection</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
