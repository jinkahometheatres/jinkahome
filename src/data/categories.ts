export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export const CATEGORIES: Category[] = [
  {
    id: "home-theater-systems",
    slug: "home-theater-systems",
    name: "Home Theater Systems",
    description: "Complete turnkey surround sound and spatial audio system packages engineered for total cinematic immersion.",
    image: "/assets/images/luxury_theater.png",
    productCount: 12
  },
  {
    id: "speakers",
    slug: "speakers",
    name: "Speakers",
    description: "Bespoke tower, bookshelf, architectural in-wall, and in-ceiling speakers built with custom drivers and acoustic enclosures.",
    image: "/assets/images/custom_speakers.png",
    productCount: 24
  },
  {
    id: "av-receivers",
    slug: "av-receivers",
    name: "AV Receivers",
    description: "High-current multi-channel power amplifiers and pre-processors supporting Dolby Atmos, DTS:X, and 8K video switching.",
    image: "/assets/images/luxury_theater.png",
    productCount: 8
  },
  {
    id: "projectors",
    slug: "projectors",
    name: "Projectors",
    description: "Commercial-grade 4K HDR ultra-short throw and long-throw laser projectors delivering brilliant high-contrast imagery.",
    image: "/assets/images/luxury_theater.png",
    productCount: 6
  },
  {
    id: "projector-screens",
    slug: "projector-screens",
    name: "Projector Screens",
    description: "Ambient Light Rejecting (ALR) optical screens, acoustically transparent weaves, and motorized masking systems.",
    image: "/assets/images/luxury_theater.png",
    productCount: 10
  },
  {
    id: "seating",
    slug: "seating",
    name: "Seating",
    description: "Ergonomic motorized recliners, curved cinema rows, and plush loungers handcrafted in top-grain Italian leather.",
    image: "/assets/images/luxury_theater.png",
    productCount: 14
  },
  {
    id: "acoustic-solutions",
    slug: "acoustic-solutions",
    name: "Acoustic Solutions",
    description: "Architectural sound absorption panels, diffusers, bass traps, and soundproofing wall isolation systems.",
    image: "/assets/images/bar_setup.png",
    productCount: 16
  },
  {
    id: "home-theater-furniture",
    slug: "furniture",
    name: "Home Theater Furniture",
    description: "Custom equipment racks, AV cabinets, velvet acoustic curtains, and custom carpet solutions.",
    image: "/assets/images/bar_setup.png",
    productCount: 9
  },
  {
    id: "accessories",
    slug: "accessories",
    name: "Accessories",
    description: "Audiophile speaker cables, HDMI 2.1 optical cables, smart remote controls, and power conditioners.",
    image: "/assets/images/custom_speakers.png",
    productCount: 18
  }
];
