import React from 'react';
import { motion } from 'framer-motion';

export const BrandIntro: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-36 bg-brand-cream text-brand-black overflow-hidden">
      {/* Large Oversized JINKA Logo Watermark in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none select-none w-[140%] max-w-7xl">
        <img
          src="/assets/logo.png"
          alt=""
          className="w-full h-auto object-contain filter grayscale"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-6"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-brand-gold-dark font-semibold">
            Architectural Sound & Vision
          </span>
          <div className="w-12 h-[1px] bg-brand-gold-dark/40 mx-auto mt-2" />
        </motion.div>

        {/* Large Editorial Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal leading-[1.15] text-brand-black tracking-tight"
        >
          “WE DON'T JUST INSTALL SYSTEMS. <br className="hidden sm:block" />
          WE CREATE <span className="italic font-normal text-brand-brown">UNFORGETTABLE EXPERIENCES.”</span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 sm:mt-12 text-base sm:text-xl md:text-2xl text-slate-700 font-sans font-light leading-relaxed max-w-3xl mx-auto"
        >
          Jinka Home Theaters creates immersive private cinema experiences by combining premium acoustics, customized interiors, advanced entertainment technology and bespoke furniture.
        </motion.p>

        {/* Accent Brand Signature Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 w-32 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto"
        />
      </div>
    </section>
  );
};
