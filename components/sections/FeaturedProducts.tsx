import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '@/data/content';
import { ProductCard } from '@/components/shared/ProductCard';

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-14 fade-up">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              Popular Products
            </h2>
            <p className="text-base text-muted-foreground">
              Some of the products available at United Medimart.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
          >
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product, index) => (
            <div key={product.id} className="fade-up" style={{ transitionDelay: `${index * 60}ms` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
