import React, { useEffect } from 'react';
import { X, MessageSquare } from 'lucide-react';
import { generateGeneralConsultationWhatsAppLink } from '../utils/whatsapp';

interface GalleryLightboxProps {
  image: string | null;
  title?: string;
  description?: string;
  onClose: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  image,
  title,
  description,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (image) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in">
      {/* Background overlay click */}
      <div className="absolute inset-0 z-0" onClick={onClose} />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:text-brand-gold hover:border-brand-gold transition-all"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title || ''}
          className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
        />

        {(title || description) && (
          <div className="mt-6 text-center max-w-2xl bg-brand-black/80 backdrop-blur-md p-6 rounded-xl border border-white/10 w-full">
            {title && (
              <h3 className="text-xl sm:text-2xl font-serif text-white mb-2">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {description}
              </p>
            )}
            <div className="mt-4 flex justify-center">
              <a
                href={generateGeneralConsultationWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-gold text-brand-black text-xs font-semibold uppercase tracking-wider hover:bg-brand-gold-light transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Request Similar Design</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
