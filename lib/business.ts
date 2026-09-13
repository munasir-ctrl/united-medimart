export const business = {
  name: 'United Medimart',
  tagline: 'Your Complete Medical Supermarket in Perumbavoor',
  taglineMalayalam: 'പെരുമ്പാവൂരിലെ മെഡിക്കൽ സൂപ്പർമാർക്കറ്റ്',
  categories: 'Medical • Surgical • Baby Care • Cosmetics • Body Supports • Rehabilitation Equipment',
  address: {
    line1: 'Pattal, Near Indian Oil Petrol Pump',
    line2: 'Perumbavoor–Kuruppampady Road',
    line3: 'Perumbavoor',
    line4: 'Ernakulam – 683542',
    line5: 'Kerala, India',
    full: 'Pattal, Near Indian Oil Petrol Pump, Perumbavoor–Kuruppampady Road, Perumbavoor, Ernakulam – 683542, Kerala, India',
    city: 'Perumbavoor',
    district: 'Ernakulam',
    state: 'Kerala',
    pincode: '683542',
    country: 'India',
  },
  // Configuration placeholders — update these env vars with real values
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '',
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || '',
  googleMapsUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL || 'https://www.google.com/maps/search/?api=1&query=United+Medimart+Perumbavoor',
  hours: process.env.NEXT_PUBLIC_BUSINESS_HOURS || '',
  website: process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://unitedmedimart.com',
  coordinates: {
    lat: process.env.NEXT_PUBLIC_LAT || '',
    lng: process.env.NEXT_PUBLIC_LNG || '',
  },
  serviceAreas: [
    'Perumbavoor',
    'Pattal',
    'Kuruppampady',
    'Rayamangalam',
    'Vengola',
    'Kunnathunadu',
  ],
} as const;

export function getWhatsAppUrl(message: string): string {
  const number = business.whatsapp;
  const encoded = encodeURIComponent(message);
  if (number) {
    const cleaned = number.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleaned}?text=${encoded}`;
  }
  return `https://wa.me/?text=${encoded}`;
}

export function getGeneralWhatsAppUrl(): string {
  return getWhatsAppUrl(`Hi ${business.name}, I would like to know more about your products.`);
}

export function getPhoneUrl(): string {
  if (business.phone) {
    return `tel:${business.phone.replace(/\s/g, '')}`;
  }
  return '#';
}

export function getDirectionsUrl(): string {
  return business.googleMapsUrl;
}
