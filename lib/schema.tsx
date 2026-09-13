import { business } from '@/lib/business';
import type { Category, FAQ } from '@/types';

export function localBusinessSchema() {
  const serviceAreas = business.serviceAreas || [];
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    description: business.tagline,
    url: business.website,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pattal, Near Indian Oil Petrol Pump, Perumbavoor–Kuruppampady Road',
      addressLocality: 'Perumbavoor',
      addressRegion: 'Kerala',
      postalCode: '683542',
      addressCountry: 'IN',
    },
    areaServed: serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
  };

  if (business.phone) {
    schema.telephone = business.phone;
  }
  if (business.coordinates?.lat && business.coordinates?.lng) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude: business.coordinates.lat,
      longitude: business.coordinates.lng,
    };
  }
  if (business.hours) {
    schema.openingHours = business.hours;
  }

  return schema;
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: business.name,
    url: business.website,
    description: business.tagline,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pattal, Near Indian Oil Petrol Pump, Perumbavoor–Kuruppampady Road',
      addressLocality: 'Perumbavoor',
      addressRegion: 'Kerala',
      postalCode: '683542',
      addressCountry: 'IN',
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: business.name,
    url: business.website,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[] = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: (items || []).map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: FAQ[] = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (faqs || []).map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function categorySchema(category: Category) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category?.name,
    description: category?.description,
    url: `${business.website}/${category?.slug}`,
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}