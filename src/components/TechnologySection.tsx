import React from 'react';
import { motion } from 'framer-motion';

export const TechnologySection: React.FC = () => {
  const technologies = [
    {
      name: "Dolby Atmos",
      tagline: "Overhead Spatial Audio",
      logo: "/assets/technologies/DolbyAtmos.png",
      description: "Sound moves all around you in three-dimensional space with overhead height channels and precise audio object placement."
    },
    {
      name: "Dolby Digital",
      tagline: "Cinematic Surround Standards",
      logo: "/assets/technologies/Dolbydigital.png",
      description: "Industry-standard multi-channel audio delivery delivering pristine multi-speaker surround fidelity and crisp dialogue."
    },
    {
      name: "DTS Digital Surround",
      tagline: "High Bitrate Master Audio",
      logo: "/assets/technologies/DTS Digital Surround.png",
      description: "High-definition multi-channel sound encoding for unmatched dynamic range and punchy low-frequency acoustic energy."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-brand-charcoal text-white relative overflow-hidden border-y border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.35em] text-brand-gold font-medium">
            Industry Standards
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif mt-3 tracking-tight">
            POWERED BY PREMIUM TECHNOLOGY
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold/40 mx-auto mt-4" />
        </motion.div>

        {/* Technology Cards Grid */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {technologies.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group relative p-8 sm:p-10 rounded-2xl bg-brand-black/60 border border-white/10 hover:border-brand-gold/50 backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] flex flex-col items-center justify-between text-center"
            >
              {/* Top Glow Bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-brand-gold group-hover:to-transparent transition-all duration-500" />

              {/* Logo Area */}
              <div className="h-24 sm:h-28 w-full flex items-center justify-center mb-6 p-4">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="max-h-full max-w-[200px] object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-brand-gold block mb-2">
                  {tech.tagline}
                </span>
                <h3 className="text-xl font-serif text-white mb-3">
                  {tech.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
