export const services = {
  'pressure-cleaning': {
    name: 'Pressure Cleaning',
    description: 'Professional high-pressure cleaning to remove stubborn dirt, grime, and mold from your exterior surfaces.',
    benefits: ['Restores original look', 'Prevents slip hazards', 'Increases property value']
  },
  'roof-cleaning': {
    name: 'Roof Cleaning',
    description: 'Safe and effective roof washing to eliminate lichen, moss, and black streaks, extending the life of your roof.',
    benefits: ['Extends roof lifespan', 'Improves home energy efficiency', 'Enhances curb appeal instantly']
  },
  'driveway-cleaning': {
    name: 'Driveway Cleaning',
    description: 'Deep cleaning for concrete, exposed aggregate, and paved driveways to remove oil stains and tire marks.',
    benefits: ['Removes tough oil stains', 'Kills weeds between pavers', 'Creates a welcoming entrance']
  },
  'house-washing': {
    name: 'House Washing',
    description: 'Soft wash techniques to safely clean your home exterior without damaging paint or siding.',
    benefits: ['Safe for all exterior types', 'Removes harmful mold and mildew', 'Perfect pre-sale preparation']
  },
  'solar-panel-cleaning': {
    name: 'Solar Panel Cleaning',
    description: 'Specialized pure-water cleaning for solar panels to maximize energy efficiency and output.',
    benefits: ['Increases energy production', 'Prevents permanent staining', 'Maintains warranty compliance']
  },
  'gutter-cleaning': {
    name: 'Gutter Cleaning',
    description: 'Safe and effective gutter clearing to prevent water damage, protect foundations, and ensure proper drainage.',
    benefits: ['Prevents costly water damage', 'Reduces bushfire risk', 'Stops pests from breeding']
  },
  'commercial-cleaning': {
    name: 'Commercial Cleaning',
    description: 'Professional exterior cleaning for body corporates, real estate agencies, storefronts, and industrial complexes.',
    benefits: ['Maintains professional image', 'Reduces slip-and-fall liability', 'Flexible after-hours scheduling']
  }
};

export const suburbs = {
  'brisbane': { name: 'Brisbane', region: 'Brisbane Area', type: 'urban' },
  'gold-coast': { name: 'Gold Coast', region: 'South East QLD', type: 'coastal' },
  'sunshine-coast': { name: 'Sunshine Coast', region: 'South East QLD', type: 'tropical' },
  'logan': { name: 'Logan', region: 'Logan City', type: 'urban' },
  'ipswich': { name: 'Ipswich', region: 'Ipswich City', type: 'urban' },
  'redcliffe': { name: 'Redcliffe', region: 'Moreton Bay Region', type: 'coastal' },
  'scarborough': { name: 'Scarborough', region: 'Moreton Bay Region', type: 'coastal' },
  'caloundra': { name: 'Caloundra', region: 'Sunshine Coast', type: 'coastal' },
  'noosa': { name: 'Noosa', region: 'Sunshine Coast', type: 'tropical' },
  'moreton-bay': { name: 'Moreton Bay', region: 'Moreton Bay Region', type: 'coastal' },
  'north-lakes': { name: 'North Lakes', region: 'Moreton Bay Region', type: 'urban' },
  'banksia-beach': { name: 'Banksia Beach', region: 'Moreton Bay Region', type: 'coastal' },
  'springwood': { name: 'Springwood', region: 'Logan City', type: 'urban' },
  'southport': { name: 'Southport', region: 'Gold Coast', type: 'coastal' },
  'maroochydore': { name: 'Maroochydore', region: 'Sunshine Coast', type: 'coastal' },
  'fortitude-valley': { name: 'Fortitude Valley', region: 'Brisbane Area', type: 'urban' },
  'caboolture': { name: 'Caboolture', region: 'Moreton Bay Region', type: 'urban' },
  'bray-park': { name: 'Bray Park', region: 'Moreton Bay Region', type: 'urban' },
  'deception-bay': { name: 'Deception Bay', region: 'Moreton Bay Region', type: 'coastal' },
  'kallangur': { name: 'Kallangur', region: 'Moreton Bay Region', type: 'urban' },
  'strathpine': { name: 'Strathpine', region: 'Moreton Bay Region', type: 'urban' },
  'mango-hill': { name: 'Mango Hill', region: 'Moreton Bay Region', type: 'urban' },
  'burpengary': { name: 'Burpengary', region: 'Moreton Bay Region', type: 'urban' },
  'morayfield': { name: 'Morayfield', region: 'Moreton Bay Region', type: 'urban' },
  'narangba': { name: 'Narangba', region: 'Moreton Bay Region', type: 'urban' }
};

const imagesByType = {
  coastal: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80',
  urban: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
  tropical: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80'
};

export const parseSlug = (slug) => {
  if (!slug || typeof slug !== 'string') return null;
  const cleanSlug = slug.toLowerCase().trim();
  
  const serviceKeys = Object.keys(services).sort((a, b) => b.length - a.length);
  const matchedServiceKey = serviceKeys.find(key => cleanSlug.startsWith(key + '-'));
  
  if (!matchedServiceKey) return null;
  
  const matchedSuburbKey = cleanSlug.substring(matchedServiceKey.length + 1);
  
  if (!suburbs[matchedSuburbKey]) return null;
  
  return {
    serviceId: matchedServiceKey,
    suburbId: matchedSuburbKey,
    service: services[matchedServiceKey],
    suburb: suburbs[matchedSuburbKey]
  };
};

export const getNearbySuburbs = (currentSuburbId) => {
  const current = suburbs[currentSuburbId];
  if (!current) return [];
  return Object.entries(suburbs)
    .filter(([id, sub]) => id !== currentSuburbId && sub.region === current.region)
    .slice(0, 4)
    .map(([id, sub]) => ({ id, ...sub }));
};

export const getRelatedServices = (currentServiceId) => {
  return Object.entries(services)
    .filter(([id]) => id !== currentServiceId)
    .slice(0, 4)
    .map(([id, srv]) => ({ id, ...srv }));
};

export const getPageData = (slug) => {
  const parsed = parseSlug(slug);
  if (!parsed) return null;

  const { service, suburb } = parsed;
  const isCoastal = suburb.type === 'coastal';
  const isTropical = suburb.type === 'tropical';

  const climateFactor = isCoastal ? 'salt spray and coastal winds' : isTropical ? 'high humidity and tropical storms' : 'urban pollution and dust';
  
  return {
    title: `${service.name} in ${suburb.name} | Exterior Wash QLD`,
    metaDescription: `Professional ${service.name.toLowerCase()} in ${suburb.name}. Fully insured, fast quotes, quality results. Call 0468 848 342 today.`,
    heroImage: imagesByType[suburb.type] || imagesByType.urban,
    localKeywords: [
      `${service.name.toLowerCase()} ${suburb.name}`,
      `best ${service.name.toLowerCase()} near me`,
      `${suburb.name} exterior cleaning`,
      `professional washing ${suburb.region}`
    ],
    heroTitle: `Professional ${service.name} in ${suburb.name}`,
    heroSubtitle: isCoastal 
      ? `Protect your ${suburb.name} coastal property from salt damage with our specialized cleaning services.`
      : `Transform your ${suburb.name} property with our professional, fully-insured cleaning services.`,
    introParagraph: `Living in ${suburb.name} means dealing with specific environmental challenges like ${climateFactor}. Our ${service.name.toLowerCase()} services are specifically tailored for ${suburb.name} properties. We use commercial-grade equipment and eco-friendly solutions to cut through the toughest grime, ensuring your home or business looks its absolute best while being protected from long-term damage.`,
    faqs: [
      {
        question: `How often should I get ${service.name.toLowerCase()} in ${suburb.name}?`,
        answer: `Due to the ${climateFactor} in ${suburb.name}, we recommend professional ${service.name.toLowerCase()} at least once every 12 months to prevent permanent staining and deterioration.`
      },
      {
        question: `Do you provide ${service.name.toLowerCase()} services across all of ${suburb.name}?`,
        answer: `Yes! We service all residential and commercial properties throughout ${suburb.name} and the wider ${suburb.region}.`
      },
      {
        question: `Is your ${service.name.toLowerCase()} process safe for my property?`,
        answer: `Absolutely. We use tailored pressure settings and eco-friendly solutions specifically chosen for your surface type to ensure a deep clean without any damage.`
      },
      {
        question: `How much does ${service.name.toLowerCase()} cost in ${suburb.name}?`,
        answer: `Pricing depends on the size and condition of the area. We offer free, no-obligation quotes for all ${suburb.name} residents. Contact us today for an accurate estimate.`
      },
      {
        question: `Are you fully insured for work in ${suburb.name}?`,
        answer: `Yes, Exterior Wash QLD is fully licensed and carries comprehensive liability insurance for your complete peace of mind.`
      }
    ]
  };
};