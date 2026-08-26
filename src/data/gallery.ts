export interface GalleryItem {
  id: string;
  title: string;
  category: 'theaters' | 'seating' | 'speakers' | 'interiors' | 'acoustics' | 'bar';
  categoryLabel: string;
  image: string;
  location: string;
  description: string;
  span?: string; // CSS grid span for masonry
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "The Sovereign Private Cinema",
    category: "theaters",
    categoryLabel: "Private Theater",
    image: "/assets/portfolio/image.png",
    location: "Bengaluru Estate",
    description: "A 9.2.4 Dolby Atmos dedicated cinema featuring custom velvet acoustic walls, 150-inch ALR screen, and Emperor motorized recliners.",
    span: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    id: "g2",
    title: "Jinka Custom Gold Series Speaker Array",
    category: "speakers",
    categoryLabel: "Custom Speakers",
    image: "/assets/portfolio/image copy.png",
    location: "Hyderabad Villa",
    description: "Timbre-matched front stage towers featuring matte black cabinets with hand-burnished metallic gold driver bezels.",
    span: "col-span-1 row-span-1"
  },
  {
    id: "g3",
    title: "Nero Marquina VIP Cinema Bar",
    category: "bar",
    categoryLabel: "VIP Bar Setup",
    image: "/assets/portfolio/image copy 2.png",
    location: "Sri Sathya Sai Residence",
    description: "Dark marble hospitality lounge with warm 2700K gold backlit bottle display and custom leather bar seating.",
    span: "col-span-1 row-span-1"
  },
  {
    id: "g4",
    title: "Starlight Ceiling & Acoustic Wood Slats",
    category: "interiors",
    categoryLabel: "Luxury Interior",
    image: "/assets/portfolio/image copy 3.png",
    location: "Chennai Penthouse",
    description: "Custom fiber-optic starry sky layout paired with vertical acoustic walnut slats and dimmable gold LED cove accent lighting.",
    span: "col-span-1 md:col-span-2 row-span-1"
  },
  {
    id: "g5",
    title: "Bespoke Geometric Acoustic Wall Panels",
    category: "acoustics",
    categoryLabel: "Acoustic Solutions",
    image: "/assets/portfolio/image copy 4.png",
    location: "Coimbatore Mansion",
    description: "High-density NRC 0.95 fabric absorption panels with hidden magnetic mounting and ambient backlighting.",
    span: "col-span-1 row-span-1"
  },
  {
    id: "g6",
    title: "Emperor Italian Leather Motorized Recliners",
    category: "seating",
    categoryLabel: "Motorized Seating",
    image: "/assets/portfolio/image.png",
    location: "Dharmavaram Project",
    description: "Tiered cinema seating row with memory foam cushioning, heated recline motors, and gold charging docks.",
    span: "col-span-1 row-span-1"
  },
  {
    id: "g7",
    title: "The Obsidian 4K Projection Screening Room",
    category: "theaters",
    categoryLabel: "Private Theater",
    image: "/assets/portfolio/image copy.png",
    location: "Anantapur Residence",
    description: "Ultra-short throw 4K laser projector setup with zero-bezel fixed frame ALR screen and stealth architectural ceiling speakers.",
    span: "col-span-1 md:col-span-2 row-span-1"
  },
  {
    id: "g8",
    title: "Audiophile Reference Tower Array",
    category: "speakers",
    categoryLabel: "Custom Speakers",
    image: "/assets/portfolio/image copy 2.png",
    location: "Kurnool Villa",
    description: "Dual 12-inch active subwoofers integrated into handcrafted dark espresso timber enclosures.",
    span: "col-span-1 row-span-1"
  }
];
