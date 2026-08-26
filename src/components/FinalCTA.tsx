import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, MessageSquare, Phone } from 'lucide-react';
import { generateGeneralConsultationWhatsAppLink, JINKA_PHONE_NUMBER } from '../utils/whatsapp';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 bg-brand-cream text-brand-black relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-brown/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.35em] text-brand-gold-dark font-semibold block mb-4"
        >
          Consultation & Commissioning
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl font-serif leading-[1.15] text-brand-black tracking-tight"
        >
          READY TO BUILD <br className="hidden sm:block" />
          <span className="italic font-normal text-brand-brown">YOUR PRIVATE CINEMA?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-base sm:text-xl text-slate-700 font-sans font-light leading-relaxed max-w-2xl mx-auto"
        >
          Talk to Jinka Home Theaters and create a theatre designed around your space, sound and experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href={generateGeneralConsultationWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-black text-brand-gold hover:bg-brand-charcoal font-semibold text-xs uppercase tracking-[0.2em] shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href={`tel:${JINKA_PHONE_NUMBER}`}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-brand-black/30 hover:border-brand-black bg-transparent text-brand-black font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3"
          >
            <Phone className="w-4 h-4 text-brand-gold-dark" />
            <span>Call Now: {JINKA_PHONE_NUMBER}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
