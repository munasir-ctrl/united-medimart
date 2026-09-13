import { notFound } from 'next/navigation';
import { getCategoryBySlug, getProductsByCategory, categories } from '@/data/content';
import { ProductCard } from '@/components/shared/ProductCard';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export default function CategoryPage({ params }: PageProps) {
  const categoryData = getCategoryBySlug(params.slug);

  if (!categoryData) {
    notFound();
  }

  const products = getProductsByCategory(categoryData.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{categoryData.name}</h1>
        <p className="text-gray-600">{categoryData.description}</p>
      </div>

      {products.length === 0 ? (
        <div className="bg-gray-50 rounded-2xl p-12 text-center border border-gray-200">
          <p className="text-gray-500 text-lg">No products found in this category yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}