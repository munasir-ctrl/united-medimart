'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Star, Plus, Clock, Flame } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    category: string;
    price: string;
    originalPrice?: string;
    discount?: string;
    rating?: number;
    deliveryTime?: string;
    badge?: string;
    image: string;
    description: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        {/* Top Badges Row */}
        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
          {product.discount ? (
            <span className="bg-[#E53935] text-white text-[11px] font-extrabold px-2 py-1 rounded-md shadow-sm">
              {product.discount}
            </span>
          ) : (
            <span />
          )}
          
          {product.badge && (
            <span className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
              <Flame className="w-3 h-3 fill-white" />
              {product.badge}
            </span>
          )}
        </div>

        {/* Product Image */}
        <Link href={`/products/${product.id}`} className="block relative w-full h-48 sm:h-52 mb-4 overflow-hidden rounded-xl bg-gray-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Category Pill */}
        <div className="mb-2">
          <span className="inline-block bg-sky-50 text-sky-700 text-[11px] font-semibold px-2 py-0.5 rounded">
            {product.category}
          </span>
        </div>

        {/* Product Title */}
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 text-sm sm:text-base line-clamp-2 mb-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
      </div>

      <div>
        {/* Rating & Delivery Time */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3 pt-2 border-t border-gray-100">
          {product.rating && (
            <div className="flex items-center gap-1 text-amber-500 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating.toFixed(1)}</span>
            </div>
          )}
          {product.deliveryTime && (
            <div className="flex items-center gap-1 text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full">
              <Clock className="w-3 h-3 text-gray-400" />
              <span>{product.deliveryTime}</span>
            </div>
          )}
        </div>

        {/* Price & Add Button */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-base sm:text-lg font-extrabold text-gray-900">
              {product.price}
            </div>
            {product.originalPrice && (
              <div className="text-xs text-gray-400 line-through">
                {product.originalPrice}
              </div>
            )}
          </div>

          <button
            onClick={() => alert(`Added ${product.name} to cart!`)}
            className="w-9 h-9 rounded-full border border-sky-600 text-sky-600 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors shadow-sm"
            aria-label="Add to cart"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}