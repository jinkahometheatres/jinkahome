import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSequence } from '../components/HeroSequence';
import { BrandIntro } from '../components/BrandIntro';
import { OurSpecialties } from '../components/OurSpecialties';
import { TechnologySection } from '../components/TechnologySection';
import { ShopByCategory } from '../components/ShopByCategory';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { WhyJinka } from '../components/WhyJinka';
import { CustomerReviews } from '../components/CustomerReviews';
import { BigBrandMoment } from '../components/BigBrandMoment';
import { GalleryPreview } from '../components/GalleryPreview';
import { FinalCTA } from '../components/FinalCTA';

interface HomeProps {
  onSelectGalleryImage?: (image: string, title?: string, desc?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onSelectGalleryImage }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-brand-black text-white">
      {/* Section 1: Hero Video Sequence */}
      <HeroSequence />

      {/* Section 2: Brand Intro (Cream Background) */}
      <BrandIntro />

      {/* Section 3: Our Specialties (Alternating Editorial Layout) */}
      <OurSpecialties />

      {/* Section 4: Technology Showcase */}
      <TechnologySection />

      {/* Section 5: Shop By Category */}
      <ShopByCategory />

      {/* Section 6: Featured Products Showcase */}
      <FeaturedProducts />

      {/* Section 7: Why Jinka (Split Layout) */}
      <WhyJinka />

      {/* Section 7.5: Customer Reviews */}
      <CustomerReviews />

      {/* Section 8: Big Brand Moment */}
      <BigBrandMoment />

      {/* Section 9: Gallery Preview */}
      <GalleryPreview onSelectImage={onSelectGalleryImage} />

      {/* Section 10: Final CTA (Cream Background) */}
      <FinalCTA />
    </div>
  );
};
