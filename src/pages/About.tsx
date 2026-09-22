import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/services';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { generateGeneralConsultationWhatsAppLink } from '../utils/whatsapp';
import { fetchSpecialties } from '../services/api';
import { getImageUrl } from '../utils/image';

interface SpecialtyBackend {
  id: number;
  name: string;
  image: string | null;
}

export const About: React.FC = () => {
  const [specialties, setSpecialties] = useState<SpecialtyBackend[]>([]);

  useEffect(() => {
    fetchSpecialties().then(setSpecialties);
  }, []);

  const steps = [
    {
      number: "01",
      title: "UNDERSTAND",
      subtitle: "Acoustic Audit & Vision Capture",
      description: "We analyze room dimensions, ambient noise floor, power availability, wall materials, and your visual preferences to establish precision acoustic targets."
    },
    {
      number: "02",
      title: "DESIGN",
      subtitle: "3D CAD & Sound Raytracing",
      description: "Using raytracing acoustic simulation software, we map speaker dispersion angles, primary sound reflection zones, and seating sightlines for optimal immersion."
    },
    {
      number: "03",
      title: "CUSTOMIZE",
      subtitle: "Handcrafted Enclosures & Finishes",
      description: "Custom speakers are voice-matched, acoustic wall panels wrapped in flame-retardant velvets, and motorized recliners upholstered with Italian leather."
    },
    {
      number: "04",
      title: "INSTALL",
      subtitle: "White-Glove Commissioning",
      description: "Our engineering crew installs double-wall isolation, concealed wiring, laser projection alignment, and multi-microphone room DSP calibration."
    },
    {
      number: "05",
      title: "EXPERIENCE",
      subtitle: "The Big Reveal",
      description: "We hand over the master smart remote control and welcome you to your private cinema sanctuary—where movies come alive beyond imagination."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-black text-white pt-32 pb-24">
      {/* Top Editorial Banner */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.35em] text-brand-gold font-semibold block mb-4">
            The Philosophy of Jinka
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif leading-[1.08] tracking-tight text-white font-normal uppercase">
            WE CREATE <br />
            <span className="text-brand-gold italic">EXPERIENCES,</span> <br />
            NOT JUST THEATERS.
          </h1>
          <p className="mt-8 text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Jinka Home Theaters specializes in designing and creating bespoke private cinema experiences by fusing audiophile sound precision, architectural interior design, custom furniture, and state-of-the-art 4K/8K projection technology.
          </p>
        </div>
      </div>

      {/* Large JINKA Logo Feature Section */}
      <section className="py-20 bg-brand-charcoal border-y border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <img
            src="/assets/logo.png"
            alt="JINKA HOME THEATERS"
            className="h-28 sm:h-40 mx-auto object-contain filter drop-shadow-[0_0_30px_rgba(212,175,55,0.25)] mb-6"
          />
          <blockquote className="text-2xl sm:text-4xl font-serif italic text-brand-cream max-w-3xl mx-auto leading-relaxed">
            “We don't just install systems, <br className="hidden sm:block" />
            we create <span className="text-brand-gold font-normal">unforgettable experiences.”</span>
          </blockquote>
        </div>
      </section>

      {/* Specialties Highlight */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-brand-gold">
            Our 5 Pillars of Excellence
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif mt-2">
            INTEGRATED CRAFTSMANSHIP
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {SERVICES.map((s) => {
            const backendMatch = specialties.find(b => b.name === s.name);
            const currentImage = backendMatch?.image ? getImageUrl(backendMatch.image, '') : null;

            return (
              <div
                key={s.id}
                className="p-6 rounded-xl bg-brand-card border border-white/10 flex flex-col justify-between hover:border-brand-gold transition-colors relative overflow-hidden group"
              >
                {currentImage && (
                  <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity">
                    <img src={currentImage} alt={s.name} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="relative z-10">
                  <span className="text-2xl font-serif text-brand-gold/40 font-bold block mb-2">{s.number}</span>
                  <h3 className="text-lg font-serif text-white mb-2">{s.name}</h3>
                  <p className="text-xs text-slate-400 font-light line-clamp-3">{s.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Process Timeline (01 -> 05) */}
      <section className="py-24 bg-brand-cream text-brand-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-[0.35em] text-brand-gold-dark font-semibold">
              From Concept to Premiere
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif mt-2">
              THE 5-STEP JOURNEY
            </h2>
            <p className="mt-4 text-slate-700 font-light text-sm">
              Our structured architectural workflow guarantees flawless execution on time and within scope.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 p-8 rounded-2xl bg-white shadow-xl border border-brand-cream-dark items-center"
              >
                <div className="md:col-span-2 text-center md:text-left">
                  <span className="text-5xl sm:text-7xl font-serif font-extrabold text-brand-gold-dark">
                    {step.number}
                  </span>
                </div>
                <div className="md:col-span-10">
                  <span className="text-xs uppercase tracking-[0.25em] text-brand-brown font-bold block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-brand-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-700 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <a
              href={generateGeneralConsultationWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-black text-brand-gold hover:bg-brand-charcoal font-semibold text-xs uppercase tracking-[0.2em] shadow-xl transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Schedule a Private Consultation</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
