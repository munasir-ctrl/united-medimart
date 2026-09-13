import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { FAQAccordion } from '@/components/shared/FAQAccordion';
import { CTASection } from '@/components/sections/CTASection';
import { homepageFaqs, categories } from '@/data/content';
import { business } from '@/lib/business';
import { faqSchema, breadcrumbSchema, JsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'FAQs | United Medimart Perumbavoor',
  description:
    'Frequently asked questions about United Medimart, our products, location and services in Perumbavoor, Kerala.',
  alternates: { canonical: `${business.website}/faqs` },
};

export default function FAQsPage() {
  const allFaqs = [
    ...homepageFaqs,
    ...categories.flatMap((c) => c.faqs),
  ];

  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([
          { name: 'Home', url: business.website },
          { name: 'FAQs', url: `${business.website}/faqs` },
        ]),
        faqSchema(allFaqs),
      ]} />

      <section className="pt-24 lg:pt-32 pb-12 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FAQs' }]} />
          <div className="mt-6 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3">
              Frequently Asked Questions
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Common questions about United Medimart and our products.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={allFaqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
