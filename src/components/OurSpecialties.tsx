import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/services';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const OurSpecialties: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-brand-black text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 text-center sm:text-left flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-brand-gold">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif mt-3 tracking-tight">
              OUR SPECIALTIES
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-slate-400 max-w-md font-light">
            Bespoke cinema engineering designed from initial acoustic rendering to final luxury interior hand-off.
          </p>
        </div>

        {/* Services List - Alternating Editorial Layouts */}
        <div className="space-y-24 sm:space-y-36">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative group overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-brand-charcoal">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-[350px] sm:h-[450px] md:h-[500px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Floating Number Badge on Image */}
                    <div className="absolute top-6 left-6 bg-brand-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-brand-gold/30">
                      <span className="text-sm font-serif text-brand-gold font-bold">
                        {service.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <span className="text-5xl sm:text-7xl font-serif text-brand-gold/20 font-bold block mb-2">
                    {service.number}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-serif text-white mb-3 tracking-wide">
                    {service.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold mb-6">
                    {service.tagline}
                  </p>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-8">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold hover:text-brand-gold-light transition-colors group"
                  >
                    <span>Discover Process</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
