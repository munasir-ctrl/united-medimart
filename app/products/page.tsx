import type { Metadata } from 'next';
import { categories, products } from '@/data/content';
import { CategoryCard } from '@/components/shared/CategoryCard';
import { ProductCard } from '@/components/shared/ProductCard';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { CTASection } from '@/components/sections/CTASection';
import { business } from '@/lib/business';

export const metadata: Metadata = {
  title: 'Products | Medical, Surgical, Rehabilitation & More',
  description:
    'Browse all healthcare product categories at United Medimart Perumbavoor — surgical supplies, medical products, rehabilitation equipment, body supports, baby care and cosmetics.',
  alternates: { canonical: `${business.website}/products` },
};

export default function ProductsPage() {
  return (
    <>
      <section className="pt-24 lg:pt-32 pb-12 lg:pb-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Products' }]} />
          <div className="mt-6 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3">
              Our Products
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Explore the full range of healthcare product categories available at United Medimart in Perumbavoor.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-16">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
