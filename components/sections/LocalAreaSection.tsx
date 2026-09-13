import { MapPin } from 'lucide-react';
import { business } from '@/lib/business';

export function LocalAreaSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14 fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
            Serving Perumbavoor &amp; Nearby Areas
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            United Medimart is located in Pattal on the Perumbavoor–Kuruppampady Road, making it easily accessible to customers across the region.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 fade-up">
          {business.serviceAreas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-border shadow-sm"
            >
              <MapPin className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-foreground">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
