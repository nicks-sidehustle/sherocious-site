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
    <div className="group bg-white rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        {hasRealImage ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a2e]/5">
            <span className="text-[#1a1a2e]/30 text-sm font-medium">Product Image</span>
          </div>
        )}
        {product.featured && (
          <span className="absolute top-3 left-3 bg-[#c9a227] text-[#1a1a2e] text-xs font-bold px-3 py-1 rounded">
            BESTSELLER
          </span>
        )}
        <span className="absolute top-3 right-3 bg-white text-gray-700 text-xs font-medium px-2 py-1 rounded">
          {categoryLabels[product.category]}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#c9a227] transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-3">{product.tagline}</p>
        
        {/* Affirmations */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.affirmations.slice(0, 2).map((aff, i) => (
            <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {aff}
            </span>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
          <Link
            href={`/product/${product.id}`}
            className="bg-[#1a1a2e] text-white px-4 py-2 rounded text-sm font-bold hover:bg-[#2a2a4e] transition-all"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
