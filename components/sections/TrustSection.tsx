import { Check } from 'lucide-react';

const benefits = [
  'Wide range of healthcare products',
  'Medical and surgical supplies',
  'Rehabilitation equipment',
  'Body supports and braces',
  'Baby-care products',
  'Convenient Perumbavoor location',
  'Easy WhatsApp enquiries',
  'Helpful product guidance',
];

export function TrustSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14 fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
            Why Choose United Medimart?
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            A complete healthcare-product destination serving Perumbavoor and nearby areas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-5 bg-white rounded-xl border border-border shadow-sm fade-up"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/15">
                <Check className="h-4 w-4 text-secondary" />
              </div>
              <span className="text-sm font-medium text-foreground leading-snug">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
