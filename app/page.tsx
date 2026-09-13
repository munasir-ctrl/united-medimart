'use client';

import { useState } from 'react';
import Link from 'next/link';
import { WellnessGoalsSection, MedimartRemainingSections } from '@/components/sections/MedimartSections';
import { Hero } from '@/components/sections/Hero';
import { CategoryGrid } from '@/components/sections/CategoryGrid';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { TrustSection } from '@/components/sections/TrustSection';
import { LocalAreaSection } from '@/components/sections/LocalAreaSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { GuideSection } from '@/components/sections/GuideSection';
import { LocationSection } from '@/components/sections/LocationSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { CheckoutModal } from '@/components/checkout/CheckoutModal';
import { homepageFaqs } from '@/data/content';
import { faqSchema, JsonLd } from '@/lib/schema';
import { Tag, Zap, Sparkles, HeartPulse, Upload } from 'lucide-react';

export default function HomePage() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen selection:bg-teal-500 selection:text-white">
      <JsonLd data={faqSchema(homepageFaqs)} />

      {/* Interactive Sticky Quick Navigation */}
      <section className="py-4 bg-white/95 border-b border-slate-100 shadow-xs sticky top-0 z-40 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-5 gap-3 text-center max-w-2xl mx-auto">
            
            <Link href="/products" className="group flex flex-col items-center gap-1.5 p-1.5 rounded-2xl hover:bg-slate-50 transition-all">
              <div className="h-12 w-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 group-hover:scale-110 group-hover:bg-amber-100 transition-all shadow-xs">
                <Tag className="h-5 w-5" />
              </div>
              <span className="text-[11px] font-bold text-slate-800 group-hover:text-amber-600 tracking-tight transition-colors">Offers</span>
            </Link>

            <Link href="/products" className="group flex flex-col items-center gap-1.5 p-1.5 rounded-2xl hover:bg-slate-50 transition-all">
              <div className="h-12 w-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-100 transition-all shadow-xs">
                <Zap className="h-5 w-5" />
              </div>
              <span className="text-[11px] font-bold text-slate-800 group-hover:text-emerald-600 tracking-tight transition-colors">Express</span>
            </Link>

            <Link href="/products" className="group flex flex-col items-center gap-1.5 p-1.5 rounded-2xl hover:bg-slate-50 transition-all">
              <div className="h-12 w-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 group-hover:scale-110 group-hover:bg-rose-100 transition-all shadow-xs">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-[11px] font-bold text-slate-800 group-hover:text-rose-500 tracking-tight transition-colors">Beauty</span>
            </Link>

            <button onClick={() => setIsCheckoutOpen(true)} className="group flex flex-col items-center gap-1.5 p-1.5 rounded-2xl hover:bg-slate-50 transition-all cursor-pointer">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-100 transition-all shadow-xs">
                <Upload className="h-5 w-5" />
              </div>
              <span className="text-[11px] font-bold text-slate-800 group-hover:text-blue-600 tracking-tight transition-colors">Upload RX</span>
            </button>

            <Link href="/products" className="group flex flex-col items-center gap-1.5 p-1.5 rounded-2xl hover:bg-slate-50 transition-all">
              <div className="h-12 w-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 group-hover:scale-110 group-hover:bg-teal-100 transition-all shadow-xs">
                <HeartPulse className="h-5 w-5" />
              </div>
              <span className="text-[11px] font-bold text-slate-800 group-hover:text-teal-600 tracking-tight transition-colors">Wellness</span>
            </Link>

          </div>
        </div>
      </section>

      {/* Wellness Goals Section Placed Right at the Top */}
      <WellnessGoalsSection />

      {/* Hero Banner & Main Sections */}
      <Hero />
      <CategoryGrid />
      <ProductShowcase />
      
      {/* Remaining Medimart Sections */}
      <MedimartRemainingSections />

      <FeaturedProducts />
      <WhyChooseUs />
      <TrustSection />
      <LocalAreaSection />
      <FAQSection />
      <GuideSection />
      <LocationSection />
      <AboutSection />
      <FinalCTA />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
}