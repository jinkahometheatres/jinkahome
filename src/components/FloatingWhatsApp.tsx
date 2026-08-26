import React from 'react';
import { MessageSquare } from 'lucide-react';
import { generateGeneralConsultationWhatsAppLink } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={generateGeneralConsultationWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Direct WhatsApp Consultation"
      title="Chat with Jinka Home Theaters"
    >
      <MessageSquare className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-xs uppercase font-bold tracking-wider ml-0 group-hover:ml-2">
        Enquire via WhatsApp
      </span>
    </a>
  );
};
