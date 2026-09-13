import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CalendarDays, Clock } from 'lucide-react';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { guideArticles } from '@/data/content';
import { CTASection } from '@/components/sections/CTASection';
import { business } from '@/lib/business';
import { breadcrumbSchema, JsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Healthcare & Product Guide | United Medimart',
  description:
    'Helpful healthcare and product guides from United Medimart Perumbavoor. Learn about medical supplies, rehabilitation equipment, body supports and baby-care essentials.',
  alternates: { canonical: `${business.website}/guides` },
};

export default function GuidesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: business.website },
        { name: 'Healthcare Guide', url: `${business.website}/guides` },
      ])} />

      <section className="pt-24 lg:pt-32 pb-12 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Healthcare Guide' }]} />
          <div className="mt-6 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3">
              Healthcare &amp; Product Guide
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Helpful guides to support your healthcare product decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {guideArticles.map((article) => (
              <Link
                key={article.id}
                href={`/guides/${article.slug}`}
                className="group flex flex-col p-6 bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-accent text-accent-foreground font-medium">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {article.readTime}
                  </span>
                </div>
                <h2 className="font-bold text-base text-foreground mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {new Date(article.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-primary">
                    Read More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
