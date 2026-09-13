export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  rating?: number;
  deliveryTime?: string;
  badge?: string;
  description: string;
  features: string[];
  inStock: boolean;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  faqs?: { question: string; answer: string }[];
}

export interface GuideArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category?: string;
  date: string;
  updated?: string;
  readTime?: string;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Medical Supplies',
    slug: 'medical-supplies',
    description: 'Essential diagnostic and daily care medical supplies for home and clinic use.',
    image: '/images/categories/medical-supplies.jpg',
    faqs: [
      {
        question: 'What types of medical supplies do you stock?',
        answer: 'We stock diagnostic devices, daily care items, monitors, and clinical essentials.'
      }
    ]
  },
  {
    id: '2',
    name: 'Rehabilitation Equipment',
    slug: 'rehabilitation-equipment',
    description: 'Mobility aids, wheelchairs, walkers, and physical therapy equipment.',
    image: '/images/categories/rehab.jpg',
    faqs: [
      {
        question: 'Are mobility aids available for rent or purchase?',
        answer: 'All our rehabilitation and mobility equipment is available for direct purchase.'
      }
    ]
  },
  {
    id: '3',
    name: 'Body Supports & Braces',
    slug: 'body-supports',
    description: 'Orthopedic supports, knee braces, lumbar belts, and posture correctors.',
    image: '/images/categories/supports.jpg',
    faqs: [
      {
        question: 'How do I choose the correct size for a body support?',
        answer: 'You can check our sizing guides or visit our store in Perumbavoor for professional sizing assistance.'
      }
    ]
  },
  {
    id: '4',
    name: 'Baby Care Essentials',
    slug: 'baby-care',
    description: 'Safe and gentle healthcare products designed for infants and toddlers.',
    image: '/images/categories/baby-care.jpg',
    faqs: [
      {
        question: 'Are baby care products safe for sensitive skin?',
        answer: 'Yes, all our listed baby care items are dermatologically tested and safe.'
      }
    ]
  }
];

export const homepageFaqs = [
  {
    question: 'Where is United Medimart located?',
    answer: 'United Medimart is located in Perumbavoor, Kerala, providing quality medical equipment and healthcare supplies.'
  },
  {
    question: 'Do you offer home delivery for medical equipment?',
    answer: 'Yes, we provide reliable delivery options across our service regions.'
  },
  {
    question: 'Are products covered under warranty?',
    answer: 'Most diagnostic devices and electronic medical equipment come with standard manufacturer warranties.'
  }
];

export const products: Product[] = [
  {
    id: 'prod-1',
    name: 'Digital Blood Pressure Monitor',
    slug: 'digital-blood-pressure-monitor',
    category: 'medical-supplies',
    price: '₹1,850',
    originalPrice: '₹2,200',
    discount: '15% OFF',
    rating: 4.8,
    deliveryTime: 'Same Day Delivery',
    badge: 'Bestseller',
    description: 'Clinically accurate upper arm blood pressure monitor with large LCD display and irregular heartbeat indicator.',
    features: ['One-touch operation', 'Memory storage for 120 readings', 'WHO blood pressure classification indicator'],
    inStock: true,
    image: '/images/products/bp-monitor.jpg'
  },
  {
    id: 'prod-2',
    name: 'Foldable Standard Wheelchair',
    slug: 'foldable-standard-wheelchair',
    category: 'rehabilitation-equipment',
    price: '₹6,500',
    originalPrice: '₹7,500',
    discount: '13% OFF',
    rating: 4.9,
    deliveryTime: 'Next Day Delivery',
    badge: 'Popular',
    description: 'Durable chrome-plated steel frame wheelchair with comfortable padded armrests and folding design for easy transport.',
    features: ['Heavy-duty steel frame', 'Detachable footrests', 'Puncture-proof solid tires'],
    inStock: true,
    image: '/images/products/wheelchair.jpg'
  },
  {
    id: 'prod-3',
    name: 'Neoprene Knee Support',
    slug: 'neoprene-knee-support',
    category: 'body-supports',
    price: '₹650',
    originalPrice: '₹800',
    discount: '18% OFF',
    rating: 4.7,
    deliveryTime: 'Same Day Delivery',
    badge: 'Essential',
    description: 'Provides therapeutic warmth and compression for weak or injured knees, supporting joint mobility during recovery.',
    features: ['Open patella design', 'Breathable neoprene material', 'Adjustable Velcro straps'],
    inStock: true,
    image: '/images/products/knee-support.jpg'
  }
];

export const guideArticles: GuideArticle[] = [
  {
    id: 'guide-1',
    slug: 'choosing-the-right-blood-pressure-monitor',
    title: 'How to Choose the Right Blood Pressure Monitor for Home Use',
    excerpt: 'A comprehensive guide to selecting an accurate and reliable upper arm blood pressure monitor for daily health tracking.',
    content: 'Monitoring blood pressure at home is essential for managing hypertension. When selecting a monitor, always prefer upper-arm cuff models over wrist models for clinical accuracy...',
    category: 'Medical Supplies',
    date: '2026-07-15',
    readTime: '4 min read'
  },
  {
    id: 'guide-2',
    slug: 'understanding-mobility-aids-wheelchairs-walkers',
    title: 'Understanding Mobility Aids: Wheelchairs, Walkers, and Crutches',
    excerpt: 'Learn how to select the appropriate mobility aid to enhance patient independence, safety, and rehabilitation progress.',
    content: 'Choosing the right mobility aid depends entirely on the patient’s strength, balance, and post-recovery requirements. Walkers offer maximum stability while wheelchairs provide long-distance support...',
    category: 'Rehabilitation',
    date: '2026-07-22',
    readTime: '5 min read'
  }
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((p) => p.category === categorySlug);
}

export function getRelatedCategories(currentSlug: string) {
  return categories.filter((c) => c.slug !== currentSlug).slice(0, 3);
}

export function getFeaturedProducts() {
  return products.slice(0, 4);
}