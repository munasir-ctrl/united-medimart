export type Locale = 'en' | 'ml';

export interface Category {
  id: string;
  name: string;
  nameMalayalam: string;
  slug: string;
  description: string;
  descriptionMalayalam: string;
  longDescription: string;
  longDescriptionMalayalam: string;
  image: string;
  imageAlt: string;
  icon: string;
  seoTitle: string;
  seoDescription: string;
  productTypes: string[];
  faqs: FAQ[];
}

export interface Product {
  id: string;
  name: string;
  nameMalayalam: string;
  slug: string;
  categorySlug: string;
  description: string;
  descriptionMalayalam: string;
  image: string;
  imageAlt: string;
  price?: string;
  availability?: string;
  featured?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
  questionMalayalam?: string;
  answerMalayalam?: string;
}

export interface GuideArticle {
  id: string;
  title: string;
  titleMalayalam: string;
  slug: string;
  excerpt: string;
  excerptMalayalam: string;
  date: string;
  updated: string;
  category: string;
  readTime: string;
}
