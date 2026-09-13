import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { guideArticles } from '@/data/content';
import { CTASection } from '@/components/sections/CTASection';
import { WhatsAppButton } from '@/components/shared/ActionButtons';
import { business } from '@/lib/business';
import { breadcrumbSchema, JsonLd } from '@/lib/schema';

export function generateStaticParams() {
  return guideArticles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = guideArticles.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `${business.website}/guides/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      modifiedTime: article.updated,
    },
  };
}

export default function GuideArticlePage({ params }: { params: { slug: string } }) {
  const article = guideArticles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const relatedArticles = guideArticles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: business.website },
        { name: 'Healthcare Guide', url: `${business.website}/guides` },
        { name: article.title, url: `${business.website}/guides/${article.slug}` },
      ])} />

      <section className="pt-24 lg:pt-32 pb-8 bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Guides', href: '/guides' },
            { label: article.title },
          ]} />
        </div>
      </section>

      <article className="py-8 lg:py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
            <span className="px-2.5 py-1 rounded-full bg-accent text-accent-foreground font-medium">
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              Published {new Date(article.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            {article.updated !== article.date && (
              <span className="flex items-center gap-1.5">
                Updated {new Date(article.updated).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            )}
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              {article.excerpt}
            </p>
            <p className="text-base text-foreground leading-relaxed mb-4">
              This article is part of the healthcare and product guide series from United Medimart, your medical supermarket in Perumbavoor, Kerala. The information provided here is for general guidance and should not replace professional medical advice.
            </p>
            <p className="text-base text-foreground leading-relaxed mb-4">
              For specific product enquiries, availability checks or pricing information, please contact United Medimart through WhatsApp. Our team can help you understand the available products and their features.
            </p>
            <div className="my-8 p-6 bg-accent/50 rounded-xl">
              <p className="text-sm font-medium text-foreground mb-3">
                Need help choosing the right product?
              </p>
              <WhatsAppButton message={`Hi ${business.name}, I just read your guide "${article.title}" and would like to know more about the products mentioned.`} />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Note:</strong> This guide provides general information only. For medical advice, diagnosis or treatment, please consult a qualified healthcare professional. Product availability at United Medimart may vary. Please contact the store to check current stock.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Guides
            </Link>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                href={`/guides/${rel.slug}`}
                className="group flex flex-col p-5 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-all"
              >
                <span className="text-xs text-muted-foreground mb-2">{rel.category}</span>
                <h3 className="font-semibold text-sm text-foreground mb-2 group-hover:text-primary transition-colors">
                  {rel.title}
                </h3>
                <span className="flex items-center gap-1 text-xs font-semibold text-primary mt-auto">
                  Read More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
