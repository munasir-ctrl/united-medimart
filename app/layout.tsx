import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_Malayalam } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';
import { AppHeader } from '@/components/layout/AppHeader';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { ScrollAnimationProvider } from '@/components/shared/ScrollAnimationProvider';
import { BoomIntroAnimation } from '@/components/shared/BoomIntroAnimation';
import { business } from '@/lib/business';
import { localBusinessSchema, organizationSchema, websiteSchema, JsonLd } from '@/lib/schema';
import { MessageCircle } from 'lucide-react';

const notoMalayalam = Noto_Sans_Malayalam({
  subsets: ['malayalam'],
  variable: '--font-noto-malayalam',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(business.website),
  title: {
    default: 'United Medimart | Medical Supermarket in Perumbavoor, Kerala',
    template: '%s | United Medimart',
  },
  description:
    'United Medimart is your complete medical supermarket in Perumbavoor, Kerala. Medical, surgical, rehabilitation, body supports, baby care and personal care products. Contact us on WhatsApp.',
  keywords: [
    'medical shop Perumbavoor',
    'medical store Perumbavoor',
    'medical supermarket Perumbavoor',
    'surgical shop Perumbavoor',
    'rehabilitation equipment Perumbavoor',
    'body support shop Perumbavoor',
    'baby care products Perumbavoor',
    'cosmetics shop Perumbavoor',
    'wheelchair shop Perumbavoor',
    'medical supplies Perumbavoor',
    'United Medimart',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: business.website,
    siteName: business.name,
    title: 'United Medimart | Medical Supermarket in Perumbavoor, Kerala',
    description:
      'Your complete medical supermarket in Perumbavoor. Medical, surgical, rehabilitation, body supports, baby care and personal care products.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'United Medimart | Medical Supermarket in Perumbavoor, Kerala',
    description:
      'Your complete medical supermarket in Perumbavoor. Medical, surgical, rehabilitation, body supports, baby care and personal care products.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: business.website,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={notoMalayalam.variable}>
      <body className="font-sans antialiased relative bg-slate-50/50 text-slate-900 selection:bg-primary selection:text-white">
        {/* High-Impact Boom Intro Animation (Plays once per session) */}
        <BoomIntroAnimation />

        <JsonLd data={[localBusinessSchema(), organizationSchema(), websiteSchema()]} />
        
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
        </div>

        <CartProvider>
          {/* Client Wrapper Component containing Header, CartDrawer & CheckoutModal */}
          <AppHeader />
          
          <ScrollAnimationProvider>
            <main className="min-h-screen pb-20 lg:pb-0">{children}</main>
          </ScrollAnimationProvider>

          <a
            href="https://wa.me/910000000000?text=Hi%20United%20Medimart%2C%20I%20have%20an%20inquiry"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order via WhatsApp"
            className="fixed bottom-20 right-4 z-50 flex items-center gap-2.5 rounded-full bg-emerald-600 px-4 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-emerald-500 hover:shadow-emerald-600/30 lg:bottom-6 lg:right-6"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-200 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
            </span>
            <MessageCircle className="h-5 w-5 fill-current" />
            <span className="hidden text-sm font-semibold sm:inline">Order via WhatsApp</span>
          </a>

          <Footer />
          <MobileBottomNav />
        </CartProvider>
      </body>
    </html>
  );
}