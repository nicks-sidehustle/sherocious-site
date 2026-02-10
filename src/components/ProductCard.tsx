import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const categoryLabels = {
    'gift-box': 'Gift Box',
    'socks': 'Socks',
    'blanket-hoodie': 'Blanket Hoodie',
  };

  const hasRealImage = product.image && !product.image.includes('placeholder');

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative aspect-square bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden">
        {hasRealImage ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-6xl">
            {product.category === 'blanket-hoodie' ? '🧥' : product.category === 'gift-box' ? '🎁' : '🧦'}
          </div>
        )}
        {product.featured && (
          <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            BESTSELLER
          </span>
        )}
        <span className="absolute top-3 right-3 bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded-full">
          {categoryLabels[product.category]}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-gray-900 mb-1 group-hover:text-pink-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-3">{product.tagline}</p>
        
        {/* Affirmations */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.affirmations.slice(0, 2).map((aff, i) => (
            <span key={i} className="text-xs bg-pink-50 text-pink-700 px-2 py-1 rounded-full">
              {aff}
            </span>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
          <Link
            href={`/product/${product.id}`}
            className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold hover:from-pink-700 hover:to-purple-700 transition-all"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
