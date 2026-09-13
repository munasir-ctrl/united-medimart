import Link from 'next/link';
import { ArrowRight, Package, Scissors, Stethoscope, Accessibility, Activity, Baby, Sparkles } from 'lucide-react';
import type { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scissors,
  Stethoscope,
  Accessibility,
  Activity,
  Baby,
  Sparkles,
};

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = iconMap[category.icon] || Package;

  return (
    <Link
      href={`/${category.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={category.image}
          alt={category.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
        <div className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/95 backdrop-blur-sm shadow-sm">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-bold text-base text-foreground mb-2 group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
          {category.description}
        </p>
        <div className="flex items-center gap-1.5 text-sm font-semibold text-primary">
          Explore
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
