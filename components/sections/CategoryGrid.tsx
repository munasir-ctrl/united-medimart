import { categories } from '@/data/content';
import { CategoryCard } from '@/components/shared/CategoryCard';

export function CategoryGrid() {
  const safeCategories = categories || [];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14 fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3 text-balance">
            Everything You Need for Better Care
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our healthcare product categories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {safeCategories.map((category, index) => (
            <div key={category?.id || index} className="fade-up" style={{ transitionDelay: `${index * 80}ms` }}>
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}