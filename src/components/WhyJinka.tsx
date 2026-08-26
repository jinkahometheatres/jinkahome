import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Wrench, Headphones, Award } from 'lucide-react';

export const WhyJinka: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: "Premium Quality",
      subtitle: "Bespoke Engineering & Materials",
      description: "We source hand-selected Italian leather, audiophile drivers, imported natural marbles, and precision acoustic dampeners for unparalleled craftsmanship."
    },
    {
      icon: Wrench,
      title: "Expert Installation",
      subtitle: "Precision Calibration & Tuning",
      description: "Our certified acoustic technicians handle electrical wiring, laser alignment, sound isolation, and Dolby Atmos room calibration."
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      subtitle: "White-Glove VIP Concierge",
      description: "Enjoy lifetime direct technical support, system software updates, periodic acoustic health checks, and priority service dispatch."
    },
    {
      icon: ShieldCheck,
      title: "Customer Satisfaction",
      subtitle: "Guaranteed Audio-Visual Perfection",
      description: "We don't leave until your private cinema exceeds expectations, delivering spine-tingling sound pressure and breathtaking visual clarity."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-brand-cream text-brand-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Big Statement */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.35em] text-brand-gold-dark font-semibold">
              The Jinka Distinction
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif mt-3 leading-[1.15] tracking-tight">
              WHY DISCERNING CLIENTS CHOOSE JINKA
            </h2>
            <p className="mt-6 text-slate-700 font-sans font-light text-base leading-relaxed">
              Creating a world-class home theater requires seamless harmony between acoustic physics, interior architecture, electrical engineering, and ergonomic luxury.
            </p>

            <div className="mt-8 p-6 rounded-xl bg-white shadow-lg border border-brand-cream-dark">
              <p className="text-sm font-serif italic text-brand-brown">
                “Every detail—from room acoustics to gold stitching on recliners—is designed to transport you into the heart of cinema.”
              </p>
              <span className="text-xs font-sans uppercase tracking-widest text-slate-500 font-bold block mt-3">
                — Jinka Engineering Principles
              </span>
            </div>
          </div>

          {/* Right Column: 4 Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="p-8 rounded-xl bg-white/80 backdrop-blur-sm border border-brand-cream-dark shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-black text-brand-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif text-brand-black mb-1">
                    {pillar.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider text-brand-gold-dark font-bold block mb-3">
                    {pillar.subtitle}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
