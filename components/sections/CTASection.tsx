import { WhatsAppButton, DirectionsButton } from '@/components/shared/ActionButtons';

interface CTASectionProps {
  title?: string;
  text?: string;
}

export function CTASection({
  title = 'Have Questions About Our Products?',
  text = 'Contact United Medimart to check product availability and get helpful guidance.',
}: CTASectionProps) {
  return (
    <section className="py-12 lg:py-16 bg-accent/50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
          {title}
        </h2>
        <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
          {text}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <WhatsAppButton size="lg" />
          <DirectionsButton size="lg" variant="outline" />
        </div>
      </div>
    </section>
  );
}
