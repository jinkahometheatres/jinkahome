import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const HeroSequence: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [videoFinished, setVideoFinished] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const totalFrames = 49;
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const animationFrameIdRef = useRef<number | null>(null);
  const currentFrameRef = useRef<number>(0);

  // Check viewport on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Preload all 49 frame images from /assets/hero/
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, '0');
      img.src = `/assets/hero/ezgif-frame-${frameNum}.jpg`;

      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / totalFrames) * 100));
        if (loadedCount === totalFrames) {
          setImagesLoaded(true);
        }
      };

      img.onerror = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / totalFrames) * 100));
        if (loadedCount === totalFrames) {
          setImagesLoaded(true);
        }
      };

      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  // Helper to draw frame on canvas with mobile containment (no cropping) vs desktop cover
  const drawFrame = (frameIndex: number, mobileMode: boolean) => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = container.getBoundingClientRect();

    const displayWidth = rect.width;
    const displayHeight = rect.height;

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    // Mobile: Math.min (CONTAIN) -> zero cropping, fits 100% inside mobile frame!
    // Desktop: Math.max (COVER) -> full width display
    const fitScale = mobileMode
      ? Math.min(displayWidth / imgWidth, displayHeight / imgHeight)
      : Math.max(displayWidth / imgWidth, displayHeight / imgHeight);

    const renderWidth = imgWidth * fitScale;
    const renderHeight = imgHeight * fitScale;
    const x = (displayWidth - renderWidth) / 2;
    const y = (displayHeight - renderHeight) / 2;

    ctx.clearRect(0, 0, displayWidth, displayHeight);

    // If mobile contain mode, draw a dark ambient backdrop blur effect behind the frame
    if (mobileMode) {
      ctx.fillStyle = '#09090b';
      ctx.fillRect(0, 0, displayWidth, displayHeight);
    }

    ctx.drawImage(img, x, y, renderWidth, renderHeight);
    ctx.restore();

    currentFrameRef.current = frameIndex;
  };

  // Start 10-second playback sequence
  const startPlayback = () => {
    setVideoFinished(false);

    const mobileMode = window.innerWidth < 768;
    const DURATION_MS = 10000; // 10 seconds for mobile frame sequence
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / DURATION_MS);
      const frameIndex = Math.min(totalFrames - 1, Math.floor(progress * (totalFrames - 1)));

      drawFrame(frameIndex, mobileMode);

      if (progress < 1) {
        animationFrameIdRef.current = requestAnimationFrame(animate);
      } else {
        // Playback finished after 10 seconds -> draw last frame & reveal text
        drawFrame(totalFrames - 1, mobileMode);
        setVideoFinished(true);
      }
    };

    animationFrameIdRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (imagesLoaded) {
      startPlayback();
    }
  }, [imagesLoaded]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobileMode = window.innerWidth < 768;
      drawFrame(currentFrameRef.current, mobileMode);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-brand-black flex items-center justify-center select-none"
    >
      {/* Background Frame Sequence Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-contain md:object-cover z-0 pointer-events-none opacity-95 transition-opacity duration-700"
      />

      {/* Preloader Overlay until 49 frames are loaded */}
      {!imagesLoaded && (
        <div className="absolute inset-0 z-30 bg-brand-black flex flex-col items-center justify-center p-6 text-center">
          <img
            src="/assets/logo.png"
            alt="JINKA"
            className="h-14 sm:h-16 w-auto object-contain mb-8 animate-pulse"
          />
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-brand-gold transition-all duration-300 ease-out"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <span className="text-xs uppercase tracking-[0.3em] font-serif text-brand-gold">
            Preparing 10s Experience ({loadProgress}%)
          </span>
        </div>
      )}

      {/* Vignette & Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-brand-black/60 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-brand-black/30 to-brand-black/90 z-10 pointer-events-none" />

      {/* Hero Typography & CTAs - Reveals cleanly after the 10-second video finishes */}
      <AnimatePresence>
        {videoFinished && (
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center pt-8 sm:pt-12"
          >
            {/* Subtitle Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-brand-gold/40 bg-brand-black/75 backdrop-blur-md mb-4 sm:mb-6 shadow-2xl"
            >
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold text-brand-gold-light">
                Luxury Home Theater Craftsmen
              </span>
            </motion.div>

            {/* Main Brand Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight font-normal text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.95)] leading-[1.1]"
            >
              JINKA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cream via-brand-gold-light to-brand-gold italic">
                HOME THEATERS
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.65 }}
              className="mt-4 sm:mt-6 text-xs sm:text-xl md:text-2xl text-slate-200 font-sans tracking-[0.2em] sm:tracking-[0.25em] uppercase font-light max-w-2xl drop-shadow-md"
            >
              Experience Beyond Imagination
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full sm:w-auto"
            >
              <Link
                to="/products"
                className="w-full sm:w-auto px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark text-brand-black font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] flex items-center justify-center gap-3"
              >
                <span>Explore Home Theaters</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/categories"
                className="w-full sm:w-auto px-8 py-3.5 sm:px-9 sm:py-4 rounded-full border border-white/30 hover:border-brand-gold bg-brand-black/70 backdrop-blur-md text-white hover:text-brand-gold font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center"
              >
                <span>View Collection</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Down Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-6 sm:h-8 bg-gradient-to-b from-brand-gold to-transparent" />
      </motion.div>
    </section>
  );
};
