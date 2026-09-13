import { homepageFaqs } from '@/data/content';
import { FAQAccordion } from '@/components/shared/FAQAccordion';

export function FAQSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14 fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-muted-foreground">
            Common questions about United Medimart and our products.
          </p>
        </div>
        <div className="fade-up">
          <FAQAccordion faqs={homepageFaqs} />
        </div>
      </div>
    </section>
  );
}
