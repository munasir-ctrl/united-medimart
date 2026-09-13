import { WhatsAppButton, CallButton, DirectionsButton } from '@/components/shared/ActionButtons';

export function FinalCTA() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary-light text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Looking for a Healthcare Product?
          </h2>
          <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto mb-8 text-pretty">
            Whether you need medical supplies, surgical products, rehabilitation equipment, body supports, baby-care products or personal-care items, contact United Medimart to check availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <WhatsAppButton size="lg" variant="primary" label="WhatsApp Us" />
            <CallButton size="lg" variant="white" label="Call Us" />
            <DirectionsButton size="lg" variant="white" label="Get Directions" />
          </div>
        </div>
      </div>
    </section>
  );
}
