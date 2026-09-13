import type { Metadata } from 'next';
import { MapPin, Phone, MessageCircle, Navigation, Clock } from 'lucide-react';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { WhatsAppButton, CallButton, DirectionsButton } from '@/components/shared/ActionButtons';
import { business, getGeneralWhatsAppUrl, getPhoneUrl, getDirectionsUrl } from '@/lib/business';
import { breadcrumbSchema, JsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact United Medimart | Perumbavoor',
  description:
    'Contact United Medimart in Pattal, Perumbavoor. Reach us via WhatsApp, phone or get directions to our store on Perumbavoor–Kuruppampady Road.',
  alternates: { canonical: `${business.website}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: business.website },
        { name: 'Contact', url: `${business.website}/contact` },
      ])} />

      <section className="pt-24 lg:pt-32 pb-12 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
          <div className="mt-6 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3">
              Contact United Medimart
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Get in touch with us for product enquiries, availability checks or directions to our store.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact methods */}
            <div className="space-y-4">
              <div className="p-6 bg-white rounded-2xl border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10">
                    <MessageCircle className="h-6 w-6 text-[#25D366]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base text-foreground mb-1">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Send us a message to check product availability and pricing.
                    </p>
                    <WhatsAppButton size="sm" label="WhatsApp Us" />
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base text-foreground mb-1">Phone</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Call us during business hours for quick enquiries.
                    </p>
                    <CallButton size="sm" label="Call Us" />
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                    <Navigation className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base text-foreground mb-1">Directions</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Find us on Google Maps and get turn-by-turn directions.
                    </p>
                    <DirectionsButton size="sm" label="Get Directions" />
                  </div>
                </div>
              </div>
            </div>

            {/* Address & Map */}
            <div className="space-y-4">
              <div className="p-6 bg-white rounded-2xl border border-border shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-foreground mb-1">Our Location</h3>
                    <address className="not-italic text-sm text-muted-foreground leading-relaxed">
                      <div>Pattal, Near Indian Oil Petrol Pump</div>
                      <div>Perumbavoor–Kuruppampady Road</div>
                      <div>Perumbavoor, Ernakulam – 683542</div>
                      <div>Kerala, India</div>
                    </address>
                  </div>
                </div>
                {business.hours && (
                  <div className="flex items-start gap-4 pt-4 border-t border-border">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base text-foreground mb-1">Business Hours</h3>
                      <p className="text-sm text-muted-foreground">{business.hours}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                <iframe
                  src="https://www.google.com/maps?q=Perumbavoor%20Kerala&output=embed"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="United Medimart location map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
