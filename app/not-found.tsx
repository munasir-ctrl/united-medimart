import Link from 'next/link';
import { Home, MessageCircle } from 'lucide-react';
import { WhatsAppButton } from '@/components/shared/ActionButtons';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
          Page Not Found
        </h1>
        <p className="text-base text-muted-foreground mb-8">
          The page you are looking for does not exist or has been moved. Please check the URL or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-light transition-colors"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </Link>
          <WhatsAppButton size="lg" />
        </div>
      </div>
    </section>
  );
}
