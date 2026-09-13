import Link from 'next/link';
import { ArrowRight, CalendarDays, Clock } from 'lucide-react';
import { guideArticles } from '@/data/content';

export function GuideSection() {
  const articles = guideArticles.slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-14 fade-up">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              Healthcare &amp; Product Guide
            </h2>
            <p className="text-base text-muted-foreground">
              Helpful guides to support your healthcare product decisions.
            </p>
          </div>
          <Link
            href="/guides"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
          >
            View All Guides
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {articles.map((article, index) => (
            <Link
              key={article.id}
              href={`/guides/${article.slug}`}
              className="group flex flex-col p-6 bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 fade-up"
              style={{ transitionDelay: `${index * 80}ms` }}
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
              <h3 className="font-bold text-base text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4 line-clamp-3">
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
  );
}
