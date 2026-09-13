export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: string;
  originalPrice?: string;
  image: string;
  description: string;
  inStock: boolean;
  featured?: boolean;
}

export const categories = [
  {
    id: 'baby-care',
    name: 'Baby & Child Care',
    slug: 'baby-care',
    description: 'Milk formulas, gentle lotions, wipes, and baby essentials.',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400',
    faqs: [
      { question: "Are infant milk formulas authentic?", answer: "Yes, all milk formulas are 100% genuine and sourced from licensed distributors." }
    ],
  },
  {
    id: 'skin-care',
    name: 'Skin & Personal Care',
    slug: 'skin-care',
    description: 'Hydrating lotions, toners, sunscreens, and dermatological care.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400',
    faqs: [],
  },
  {
    id: 'hair-care',
    name: 'Hair Care & Shampoos',
    slug: 'hair-care',
    description: 'Anti-dandruff shampoos, scalp treatments, and hair masks.',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=400',
    faqs: [],
  },
  {
    id: 'supplements',
    name: 'Vitamins & Nutrition',
    slug: 'supplements',
    description: 'Nutritional drinks, daily multivitamins, and health supplements.',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=400',
    faqs: [],
  },
  {
    id: 'hygiene',
    name: 'Hygiene & Wipes',
    slug: 'hygiene',
    description: 'Water wipes, cotton pads, sanitizers, and daily wellness essentials.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400',
    faqs: [],
  },
  {
    id: 'wellness',
    name: 'Fitness & Gym Essentials',
    slug: 'wellness',
    description: 'Shaker bottles, sports nutrition, and fitness accessories.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400',
    faqs: [],
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Advanced Baby Milk Formula 400g',
    slug: 'advanced-baby-milk-formula-400g',
    category: 'baby-care',
    price: '₹650',
    originalPrice: '₹850',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400',
    description: 'Nutrient-rich formula designed for healthy infant development.',
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Dermatological Daily Sunscreen SPF 50+',
    slug: 'dermatological-daily-sunscreen-spf-50',
    category: 'skin-care',
    price: '₹490',
    originalPrice: '₹690',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400',
    description: 'Broad spectrum UV protection suitable for sensitive skin.',
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    name: 'Clinical Anti-Dandruff Scalp Treatment Shampoo',
    slug: 'clinical-anti-dandruff-shampoo',
    category: 'hair-care',
    price: '₹350',
    originalPrice: '₹450',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=400',
    description: 'Provides fast relief from dry scalp and persistent flaking.',
    inStock: true,
    featured: true,
  },
  {
    id: '4',
    name: 'Daily Multivitamin & Minerals 60 Tablets',
    slug: 'daily-multivitamin-minerals-60-tablets',
    category: 'supplements',
    price: '₹590',
    originalPrice: '₹790',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=400',
    description: 'Complete nutritional support for daily immunity and stamina.',
    inStock: true,
    featured: true,
  },
];

export const homepageFaqs = [
  {
    question: "Do you offer home delivery in Perumbavoor?",
    answer: "Yes, we provide rapid home delivery across Perumbavoor and nearby areas."
  },
  {
    question: "How can I place an order via WhatsApp?",
    answer: "Simply click the 'Order via WhatsApp' button on any product or page to chat directly with our store pharmacists."
  },
  {
    question: "Are all medical and surgical products genuine?",
    answer: "Absolutely. We source our inventory strictly from authorized medical and pharmaceutical manufacturers."
  }
];

export const guideArticles = [
  {
    slug: 'choosing-the-right-baby-formula',
    title: 'How to Choose the Right Infant Milk Formula',
    description: 'A comprehensive guide for parents on selecting safe, nourishing formulas.',
    date: '2026-08-01',
    content: 'Choosing the correct formula depends on age, nutritional needs, and pediatrician advice...'
  },
  {
    slug: 'essential-surgical-supplies-at-home',
    title: 'Essential Medical & Surgical Supplies for Home Care',
    description: 'Keep your home first-aid kit fully stocked with these mandatory medical items.',
    date: '2026-08-05',
    content: 'Having basic surgical dressings, sanitizers, and monitoring equipment at home is essential...'
  }
];

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((p) => p.category === categorySlug);
}