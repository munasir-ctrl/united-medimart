import { MapPin, Phone, MessageCircle, Navigation } from 'lucide-react';
import { business, getDirectionsUrl, getGeneralWhatsAppUrl, getPhoneUrl } from '@/lib/business';

export function LocationSection() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Visit United Medimart
            </h2>
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
              <address className="not-italic text-base text-white/90 leading-relaxed">
                <div>Pattal, Near Indian Oil Petrol Pump</div>
                <div>Perumbavoor–Kuruppampady Road</div>
                <div>Perumbavoor, Ernakulam – 683542</div>
                <div>Kerala, India</div>
              </address>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-primary bg-white rounded-lg hover:bg-white/90 transition-colors shadow-sm"
              >
                <Navigation className="h-5 w-5" />
                Get Directions
              </a>
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-[#25D366] rounded-lg hover:bg-[#1da851] transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
              <a
                href={getPhoneUrl()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call
              </a>
            </div>
          </div>

          {/* Map embed */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square fade-up">
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
    </section>
  );
}
