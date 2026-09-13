export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  rating: number;
  reviewsCount: number;
  image: string;
  inStock: boolean;
  isExpress: boolean;
  isOffer: boolean;
  offerBadge?: string;
  description: string;
}

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'offers', name: 'Offers & Deals' },
  { id: 'beauty', name: 'Beauty & Skincare' },
  { id: 'vitamins', name: 'Vitamins & Supplements' },
  { id: 'surgicals', name: 'Surgicals & First Aid' },
  { id: 'baby-care', name: 'Baby Care' },
];

export const products: Product[] = [
  {
    id: 'prod-1',
    name: 'La Roche-Posay Mela B3 Anti-Dark Spot Serum 30ml',
    brand: 'La Roche-Posay',
    category: 'beauty',
    price: 185,
    originalPrice: 230,
    discountPercentage: 20,
    rating: 4.8,
    reviewsCount: 124,
    image: '/products/la-roche-mela-b3.jpg',
    inStock: true,
    isExpress: true,
    isOffer: true,
    offerBadge: '20% OFF',
    description: 'Targeted anti-dark spot concentrate with Melasyl and 10% Niacinamide for hyperpigmentation.'
  },
  {
    id: 'prod-2',
    name: 'Solgar Zinc Picolinate 22 mg - 100 Tablets',
    brand: 'Solgar',
    category: 'vitamins',
    price: 65,
    originalPrice: 85,
    discountPercentage: 23,
    rating: 4.9,
    reviewsCount: 210,
    image: '/products/solgar-zinc.jpg',
    inStock: true,
    isExpress: true,
    isOffer: true,
    offerBadge: 'SAVE 23%',
    description: 'High-absorption zinc supplement supporting immune system function, healthy skin, and eyes.'
  },
  {
    id: 'prod-3',
    name: 'NeoCell Grassfed Collagen Peptides Unflavored 400g',
    brand: 'NeoCell',
    category: 'vitamins',
    price: 140,
    originalPrice: 200,
    discountPercentage: 30,
    rating: 4.7,
    reviewsCount: 88,
    image: '/products/neocell-collagen.jpg',
    inStock: true,
    isExpress: true,
    isOffer: true,
    offerBadge: 'UP TO 30% OFF',
    description: 'Hydrolyzed collagen types 1 & 3 to support youthful skin, hair, nails, and joint health.'
  },
  {
    id: 'prod-4',
    name: 'Vichy Dercos Aminexil Clinical R.E.G.E.N. Booster Hair Serum 90ml',
    brand: 'Vichy',
    category: 'beauty',
    price: 215,
    originalPrice: 270,
    discountPercentage: 20,
    rating: 4.6,
    reviewsCount: 65,
    image: '/products/vichy-dercos.jpg',
    inStock: true,
    isExpress: true,
    isOffer: true,
    offerBadge: '20% OFF',
    description: 'Multi-target anti-hair fall treatment for stronger, thicker, and denser hair fibers.'
  },
  {
    id: 'prod-5',
    name: 'Digital Upper Arm Blood Pressure Monitor',
    brand: 'Omron',
    category: 'surgicals',
    price: 199,
    originalPrice: 299,
    discountPercentage: 33,
    rating: 4.9,
    reviewsCount: 340,
    image: '/products/bp-monitor.jpg',
    inStock: true,
    isExpress: true,
    isOffer: true,
    offerBadge: 'SPECIAL DEAL',
    description: 'Accurate and easy-to-use digital blood pressure monitor with memory storage and hypertension indicator.'
  },
  {
    id: 'prod-6',
    name: 'Gentle Baby Moisturizing Lotion 500ml',
    brand: 'Cetaphil Baby',
    category: 'baby-care',
    price: 48,
    originalPrice: 60,
    discountPercentage: 20,
    rating: 4.8,
    reviewsCount: 152,
    image: '/products/baby-lotion.jpg',
    inStock: true,
    isExpress: true,
    isOffer: false,
    description: 'Organic calendula blend formula designed to hydrate and protect delicate baby skin.'
  }
];