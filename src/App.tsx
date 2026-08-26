import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SearchOverlay } from './components/SearchOverlay';
import { CartDrawer } from './components/CartDrawer';
import { GalleryLightbox } from './components/GalleryLightbox';

// Pages
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Categories } from './pages/Categories';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { SearchPage } from './pages/Search';
import { CartPage } from './pages/Cart';

// Scroll to top helper component on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const AppContent: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [lightboxState, setLightboxState] = useState<{
    image: string | null;
    title?: string;
    description?: string;
  }>({ image: null });

  const handleOpenLightbox = (image: string, title?: string, description?: string) => {
    setLightboxState({ image, title, description });
  };

  const handleCloseLightbox = () => {
    setLightboxState({ image: null });
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-black text-slate-100 selection:bg-brand-gold selection:text-brand-black font-sans">
      <ScrollToTop />

      {/* Global Header Navigation */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Main Content Router */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onSelectGalleryImage={handleOpenLightbox} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery onSelectImage={handleOpenLightbox} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Global Interactive Overlays */}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDrawer />
      <GalleryLightbox
        image={lightboxState.image}
        title={lightboxState.title}
        description={lightboxState.description}
        onClose={handleCloseLightbox}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
};

export default App;
