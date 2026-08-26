export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  tagline: string;
  description: string;
  price: number;
  formattedPrice: string;
  images: string[];
  specifications: Record<string, string>;
  features: string[];
  inStock: boolean;
  featured: boolean;
  badge?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "jinka-sig-51",
    slug: "jinka-signature-5-1-home-theater",
    name: "Jinka Signature 5.1 Home Theater System",
    category: "Home Theater Systems",
    categorySlug: "home-theater-systems",
    tagline: "Bespoke 5.1 Surround Sound Engineered for Pure Immersion",
    description: "The Jinka Signature 5.1 System combines precision-tuned custom floorstanding towers, a timbre-matched center channel, surround satellites, and a high-excursion powered subwoofer. Crafted with metallic gold accent rings and acoustically transparent mesh, it delivers crystal clear dialogue and earth-shattering bass dynamics.",
    price: 185000,
    formattedPrice: "₹1,85,000",
    images: [
      "/assets/images/custom_speakers.png",
      "/assets/images/luxury_theater.png",
    ],
    specifications: {
      "System Type": "5.1 Channel Active / Passive Hybrid",
      "Power Output": "1200W RMS Total System Power",
      "Subwoofer": "12-inch Long-Throw 500W Active Subwoofer",
      "Frequency Response": "22Hz – 35,000Hz",
      "Impedance": "8 Ohms Compatible",
      "Cabinet Finish": "Matte Black Satin with Champagne Gold Trim",
      "Warranty": "5 Years Manufacturer Direct"
    },
    features: [
      "Custom-built audiophile driver units",
      "Timbre-matched voice alignment for lifelike vocal clarity",
      "Active DSP crossover control for balanced spatial response",
      "Internal matrix bracing to prevent unwanted enclosure resonance",
      "High-purity oxygen-free copper internal wiring"
    ],
    inStock: true,
    featured: true,
    badge: "Signature Edition"
  },
  {
    id: "jinka-cinema-pro-71",
    slug: "jinka-cinema-pro-7-1",
    name: "Jinka Cinema Pro 7.1 Reference System",
    category: "Home Theater Systems",
    categorySlug: "home-theater-systems",
    tagline: "Reference-Grade 7.1 Spatial Audio Architecture",
    description: "Designed for larger dedicated screening rooms, the Cinema Pro 7.1 delivers uncompromising cinematic pressure and precise sound object positioning. Includes dual active subwoofers and custom architectural wall-mounted surround modules.",
    price: 340000,
    formattedPrice: "₹3,40,000",
    images: [
      "/assets/images/luxury_theater.png",
      "/assets/images/custom_speakers.png",
    ],
    specifications: {
      "System Type": "7.2 Channel Reference System",
      "Power Handling": "2200W Total Peak",
      "Subwoofers": "Dual 12-inch Dual-Driver Subwoofers",
      "Coverage Angle": "120° Wide Dispersion Tweeters",
      "Cabinet Material": "High-Density MDF with Brushed Metallic Accents",
      "Connectors": "Gold-Plated 5-Way Binding Posts"
    },
    features: [
      "Dual subwoofer configuration eliminates acoustic room standing waves",
      "Controlled directivity wave guides for precise sound staging",
      "Custom wall mounting brackets with anti-vibration damping pads",
      "Professional magnetic quick-release grilles"
    ],
    inStock: true,
    featured: true,
    badge: "Reference Grade"
  },
  {
    id: "jinka-atmos-elite-924",
    slug: "jinka-atmos-elite-system",
    name: "Jinka Atmos Elite 9.2.4 System",
    category: "Home Theater Systems",
    categorySlug: "home-theater-systems",
    tagline: "True 3D Spatial Overhead Immersion Powered by Dolby Atmos",
    description: "Experience sound that moves all around you—even overhead. The Jinka Atmos Elite package includes 9 floor level and surround channels, 2 ultra-deep subwoofers, and 4 in-ceiling height channels for full multi-dimensional Dolby Atmos and DTS:X audio rendering.",
    price: 590000,
    formattedPrice: "₹5,90,000",
    images: [
      "/assets/images/luxury_theater.png",
      "/assets/images/custom_speakers.png",
    ],
    specifications: {
      "Channel Layout": "9.2.4 (15 Channel Spatial System)",
      "Total Power": "3500W RMS",
      "Height Channels": "4x Architectural Flush In-Ceiling Speakers",
      "Subwoofer Output": "Dual 15-inch 1000W Subwoofers",
      "Certification": "Dolby Atmos & DTS:X Spatial Certified"
    },
    features: [
      "Full overhead height dispersion for true 3D object rendering",
      "Custom tuned room equalization DSP presets included",
      "In-wall zero-bezel architectural mounting for ceiling channels",
      "Handles up to 120dB SPL clean output without distortion"
    ],
    inStock: true,
    featured: true,
    badge: "Dolby Atmos Elite"
  },
  {
    id: "jinka-acoustic-pro-package",
    slug: "jinka-acoustic-pro-package",
    name: "Jinka Bespoke Acoustic Pro Panel Package",
    category: "Acoustic Solutions",
    categorySlug: "acoustic-solutions",
    tagline: "Custom Architectural Acoustic Panels & Bass Traps",
    description: "Transform room resonance into crystalline sonic clarity. Includes custom fabric absorbers, diffusion panels, corner bass traps, and ambient LED halo backlighting tailored to your room's precise dimensions.",
    price: 145000,
    formattedPrice: "₹1,45,000",
    images: [
      "/assets/images/bar_setup.png",
      "/assets/images/luxury_theater.png",
    ],
    specifications: {
      "Coverage": "Up to 350 sq. ft. wall surface area",
      "Absorber Core": "High-Density Acoustic Rockwool Core (NRC 0.95)",
      "Fabric Finish": "Luxury Flame-Retardant Velvet or Tweed",
      "Frame": "Precision CNC-cut Solid Hardwood Frame",
      "Lighting": "Integrated Warm Gold 3000K Ambient LED halo strips"
    },
    features: [
      "Custom NRC 0.95 sound absorption rating across mid & high frequencies",
      "Integrated corner bass trapping down to 40Hz",
      "Available in 12 curated luxury fabric colors",
      "Toolless magnetic hidden wall mounting keyholes"
    ],
    inStock: true,
    featured: true,
    badge: "Custom Crafted"
  },
  {
    id: "jinka-luxury-recliner-trio",
    slug: "jinka-luxury-recliner",
    name: "Jinka Emperor Motorized Recliner Row (Set of 3)",
    category: "Seating",
    categorySlug: "seating",
    tagline: "Italian Top-Grain Leather Cinema Seats with Smart Controls",
    description: "Pure comfort designed for marathon movie viewing. Handcrafted with top-grain Italian leather, dual-motor power headrest & lumbar support, ambient base LED lighting, heated seats, and built-in gold cup holders with USB-C wireless charging docks.",
    price: 220000,
    formattedPrice: "₹2,20,000",
    images: [
      "/assets/images/luxury_theater.png",
      "/assets/images/bar_setup.png",
    ],
    specifications: {
      "Material": "Top-Grain Italian Nappa Leather (Black / Espresso)",
      "Mechanism": "Heavy-Duty Dual Motor German Recline Mechanism",
      "Features": "Power Headrest, Power Lumbar, Heated Cushion, Massage",
      "Controls": "Gold-Plated Armrest Keypad + Wireless Phone Charger",
      "Dimensions": "Width: 102 inches (Set of 3 curved configuration)"
    },
    features: [
      "Dual German Okin motors for independent back and footrest positioning",
      "Memory foam padding with high-resilience ergonomic spring core",
      "Gold champagne metallic cup holders with LED temperature indicators",
      "Quiet motor operation below 30dB"
    ],
    inStock: true,
    featured: true,
    badge: "Luxury Comfort"
  },
  {
    id: "jinka-cinema-screen-pro-150",
    slug: "jinka-cinema-screen-pro",
    name: "Jinka Quantum 4K Fixed Frame Screen (150-inch)",
    category: "Projector Screens",
    categorySlug: "projector-screens",
    tagline: "Ambient Light Rejecting (ALR) 2.35:1 Ultra-Wide Screen",
    description: "Unmatched contrast and black levels even with room ambient lights on. Features 1.3 gain Ambient Light Rejecting optical material wrapped in a 3.5-inch black velvet frame with dynamic motorized magnetic masking jaws.",
    price: 165000,
    formattedPrice: "₹1,65,000",
    images: [
      "/assets/images/luxury_theater.png",
      "/assets/images/custom_speakers.png",
    ],
    specifications: {
      "Screen Size": "150-inch Diagonal (2.35:1 Cinemascope ratio)",
      "Gain": "1.3 Ambient Light Rejecting Optical Surface",
      "Resolution Support": "8K / 4K HDR Ultra HD Ready",
      "Frame": "Velvet-Wrapped Heavy Duty Aluminum Alloy Frame",
      "Acoustically Transparent": "Micro-perforated options available"
    },
    features: [
      "Rejects up to 90% of ambient room light for vivid daytime viewing",
      "Moiré-free micro-perforated weave allows in-wall center speakers behind screen",
      "Tension spring system guarantees 100% flat wrinkle-free surface",
      "Includes wall mounting brackets and magnetic alignment tools"
    ],
    inStock: true,
    featured: false
  },
  {
    id: "jinka-laser-projector-4k",
    slug: "jinka-4k-laser-projector-pro",
    name: "Jinka Vision 4K Ultra Short Throw Laser Projector",
    category: "Projectors",
    categorySlug: "projectors",
    tagline: "3500 ANSI Lumens Triple Laser Light Engine with Pure RGB",
    description: "Cast a 150-inch screen from just 9 inches away from the wall. Features pure triple-laser illumination, 3,000,000:1 dynamic contrast, MEMC motion smoothing, and motorized focus.",
    price: 295000,
    formattedPrice: "₹2,95,000",
    images: [
      "/assets/images/luxury_theater.png",
      "/assets/images/custom_speakers.png",
    ],
    specifications: {
      "Native Resolution": "4K UHD (3840 x 2160 pixels)",
      "Brightness": "3,500 ANSI Lumens",
      "Light Source": "Pure Tri-Chroma RGB Laser (30,000 Hours life)",
      "Contrast Ratio": "3,000,000:1 Dynamic Contrast",
      "Throw Ratio": "0.19:1 Ultra Short Throw"
    },
    features: [
      "Projects a massive 150-inch screen from inches away",
      "107% BT.2020 color gamut coverage for cinema color accuracy",
      "Built-in eye safety sensor auto-dims laser when objects approach",
      "HDMI 2.1 eARC input supporting 4K @ 120Hz gaming"
    ],
    inStock: true,
    featured: true,
    badge: "4K Laser Power"
  },
  {
    id: "jinka-bar-counter-custom",
    slug: "jinka-cinema-bar-setup",
    name: "Jinka Cinema VIP Bar & Lounge Setup",
    category: "Bar Setup",
    categorySlug: "bar-setup",
    tagline: "Custom Dark Marble & Gold Backlit Private Home Bar",
    description: "Complete custom built-in bar unit for dedicated screening rooms. Includes dark Nero Marquina marble countertop, gold back-lit bottle glass display, under-counter wine cooler niche, and matching plush bar stools.",
    price: 380000,
    formattedPrice: "₹3,80,000",
    images: [
      "/assets/images/bar_setup.png",
      "/assets/images/luxury_theater.png",
    ],
    specifications: {
      "Counter Material": "Imported Spanish Nero Marquina Marble",
      "Cabinetry": "Satin Dark Espresso Wood with Champagne Gold Channels",
      "Backlight": "Dimmable 2700K Warm Gold LED Glass Shelving",
      "Capacity": "Seats 4 guests with built-in stemware rack & wine fridge storage",
      "Customization": "Tailored to client room dimensions"
    },
    features: [
      "Custom designed to match theatre room acoustic cladding style",
      "Waterproof heat-resistant Italian marble surface finish",
      "Integrated soft-close hardware with gold push-to-open latches",
      "Hidden power ports for ice makers & coffee machines"
    ],
    inStock: true,
    featured: true,
    badge: "Bespoke Interior"
  }
];
