import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { categories } from '@/data/content';
import { WhatsAppButton } from '@/components/shared/ActionButtons';
import { business } from '@/lib/business';

const categoryHighlights = [
  {
    name: 'Rehabilitation Equipment',
    slug: 'rehabilitation-equipment-perumbavoor',
    items: ['Wheelchairs', 'Walkers', 'Walking sticks', 'Commode chairs'],
    image: 'https://images.pexels.com/photos/7697766/pexels-photo-7697766.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Rehabilitation equipment including wheelchairs at United Medimart Perumbavoor',
  },
  {
    name: 'Body Supports & Braces',
    slug: 'body-supports-braces-perumbavoor',
    items: ['Knee supports', 'Ankle supports', 'Back supports', 'Cervical supports'],
    image: 'https://images.pexels.com/photos/11809348/pexels-photo-11809348.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Body supports and braces at United Medimart Perumbavoor',
  },
  {
    name: 'Surgical Supplies',
    slug: 'surgical-supplies-perumbavoor',
    items: ['Surgical consumables', 'Dressing supplies', 'Medical disposables', 'Wound care'],
    image: 'https://images.pexels.com/photos/7108117/pexels-photo-7108117.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Surgical supplies and instruments at United Medimart Perumbavoor',
  },
];

export function ProductShowcase() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14 fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3 text-balance">
            What You Can Find at United Medimart
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From everyday medical supplies to specialised rehabilitation equipment — explore what is available at our store.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {categoryHighlights.map((cat, index) => (
            <div
              key={cat.slug}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-border shadow-sm hover:shadow-xl transition-all duration-300 fade-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                <h3 className="absolute bottom-4 left-5 right-5 text-xl font-bold text-white">
                  {cat.name}
                </h3>
              </div>
              <div className="flex flex-col flex-1 p-5">
                <ul className="space-y-2 mb-5 flex-1">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 text-secondary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between gap-2">
                  <Link
                    href={`/${cat.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                  >
                    Explore Category
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <WhatsAppButton
                    size="sm"
                    label="Enquire"
                    message={`Hi ${business.name}, I would like to know more about your ${cat.name.toLowerCase()}.`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 fade-up">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-light transition-colors shadow-sm"
          >
            View All Products
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
