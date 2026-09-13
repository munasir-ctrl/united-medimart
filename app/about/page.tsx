import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { AboutSection } from '@/components/sections/AboutSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { LocationSection } from '@/components/sections/LocationSection';
import { CTASection } from '@/components/sections/CTASection';
import { business } from '@/lib/business';
import { breadcrumbSchema, JsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About United Medimart | Medical Supermarket in Perumbavoor',
  description:
    'United Medimart is a medical supermarket located at Pattal on the Perumbavoor–Kuruppampady Road in Ernakulam, Kerala. Learn about our healthcare product range and commitment to serving Perumbavoor.',
  alternates: { canonical: `${business.website}/about` },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: business.website },
        { name: 'About', url: `${business.website}/about` },
      ])} />

      <section className="pt-24 lg:pt-32 pb-8 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
        </div>
      </section>

      <AboutSection />
      <TrustSection />
      <LocationSection />
      <CTASection />
    </>
  );
}
