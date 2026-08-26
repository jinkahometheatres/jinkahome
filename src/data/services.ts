export interface Service {
  number: string;
  id: string;
  name: string;
  tagline: string;
  description: string;
  description2?: string;
  image: string;
  details: string[];
}

export const SERVICES: Service[] = [
  {
    number: "01",
    id: "speakers-customization",
    name: "Speakers Customization",
    tagline: "Tailored Acoustic Engineering & Cabinet Finishing",
    description: "Every room has distinct acoustic properties. We craft custom speaker enclosures, crossover networks, and driver arrays tuned specifically to match your room volume, wall materials, and listening distance.",
    image: "/assets/images/custom_speakers.png",
    details: [
      "Custom voice-matching and crossover calibration",
      "Bespoke wood, matte black, and metallic gold lacquer finishes",
      "Architectural flush in-wall and in-ceiling stealth integration",
      "High-output active subwoofers tuned for room modes"
    ]
  },
  {
    number: "02",
    id: "premium-acoustics",
    name: "Premium Acoustics",
    tagline: "Precision Sound Absorption, Diffusion & Isolation",
    description: "Uncontrolled reflections degrade acoustic clarity. Our acoustic engineering team calculates reverberation time (RT60) and designs custom absorption panels, quadratic diffusers, and bass traps to deliver pure studio-master audio fidelity.",
    image: "/assets/Premium Acoustics.png",
    description2: "Eliminating flutter echoes, standing waves, and sound leakage allows every whispered dialogue line and explosive film score to resonate with crisp dynamic realism.",
    details: [
      "Scientific RT60 room reverberation analysis & 3D sound modeling",
      "Architectural fabric acoustic wall cladding and hidden rockwool insulation",
      "Custom wood diffusers and low-frequency corner bass trap absorption",
      "Soundproofing isolation walls, double-leaf doors, and acoustic seals"
    ]
  },
  {
    number: "03",
    id: "premium-interior",
    name: "Premium Interior",
    tagline: "Atmospheric Lighting & Luxury Architectural Finishes",
    description: "A private cinema is an immersive architectural sanctuary. We synthesize warm gold ambient cove lighting, starry optical fiber ceilings, dark acoustic velvet drapes, and rich wood cladding to craft a breathtaking visual experience.",
    image: "/assets/Premium Interior.png",
    details: [
      "Custom 3D architectural rendering & interior space planning",
      "Fiber-optic starlight ceilings with shooting star animations",
      "Smart scene-based LED dimming compatible with Control4 and Lutron",
      "Luxury floor carpeting, acoustic wall carpeting, and shadow-gap wood detailing"
    ]
  },
  {
    number: "04",
    id: "customized-furniture",
    name: "Customized Furniture",
    tagline: "Ergonomic Motorized Seating & Custom Equipment Credenzas",
    description: "Indulge in unmatched seating luxury. We design and build custom motorized cinema recliners, chaise lounges, and AV equipment credenzas upholstered in top-grain Italian leather with gold stitching and integrated controls.",
    image: "/assets/Customized Furniture.png",
    details: [
      "Dual-motor electric recline with independent headrest and lumbar articulation",
      "Custom seating tier risers for unobstructed viewing lines",
      "Heated massage cushions, wireless charging armrests, and gold cup holders",
      "Acoustically ventilated equipment racks and hidden cabinet enclosures"
    ]
  },
  {
    number: "05",
    id: "bar-setup",
    name: "Bar Setup",
    tagline: "Integrated Cinema VIP Lounge & Bar Installations",
    description: "Elevate movie night into a luxury VIP hospitality experience. We craft integrated home cinema bars featuring dark marble counters, gold backlit glass liquor displays, wine chillers, and plush lounge seating.",
    image: "/assets/images/bar_setup.png",
    details: [
      "Custom Nero Marquina and Calacatta marble bar countertops",
      "Warm gold halo backlit glass display shelves and custom stemware racks",
      "Under-counter beverage chillers, ice makers, and cocktail prep sinks",
      "Seamless visual integration with the main theater room design aesthetic"
    ]
  }
];
