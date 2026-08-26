import React from 'react';
import { motion } from 'framer-motion';

export const BigBrandMoment: React.FC = () => {
  return (
    <section className="relative py-32 sm:py-48 bg-brand-black text-white overflow-hidden flex items-center justify-center border-y border-white/5">
      {/* Background Animated Light Ray Beam */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[600px] bg-gradient-to-r from-brand-gold/10 via-brand-gold-light/15 to-transparent blur-[140px] rounded-full pointer-events-none animate-pulse-subtle" />

      {/* Grid Pattern Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Large Central JINKA Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mb-8"
        >
          <img
            src="/assets/logo.png"
            alt="JINKA HOME THEATERS"
            className="h-24 sm:h-36 md:h-44 w-auto object-contain filter drop-shadow-[0_0_35px_rgba(212,175,55,0.3)]"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-wide text-white uppercase font-normal"
        >
          JINKA <span className="text-brand-gold italic">HOME THEATERS</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-lg sm:text-2xl font-serif italic text-brand-gold-light tracking-widest font-light"
        >
          “Experience Beyond Imagination”
        </motion.p>

        <div className="mt-12 w-24 h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
      </div>
    </section>
  );
};
