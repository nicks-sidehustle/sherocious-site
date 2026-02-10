import { ProductCard } from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import Link from 'next/link';

export const metadata = {
  title: 'Shop All | SHEROCIOUS',
  description: 'Shop empowering affirmation socks, gift boxes, and blanket hoodies. Bold messages for badass women. Free shipping on Amazon.',
};

export default function Shop() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-[#1a1a2e] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Shop All Products</h1>
          <p className="text-xl text-gray-300">
            Bold affirmations for badass women | Free shipping on Amazon
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/shop"
              className="px-6 py-2 rounded bg-[#1a1a2e] text-white font-medium"
            >
              All Products
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/shop/${cat.id === 'gift-box' ? 'gift-boxes' : cat.id === 'blanket-hoodie' ? 'blanket-hoodies' : cat.id}`}
                className="px-6 py-2 rounded bg-gray-100 text-gray-700 font-medium hover:bg-[#c9a227] hover:text-[#1a1a2e] transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-600 mb-8">{products.length} products</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission Reminder */}
      <section className="bg-[#c9a227] py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-[#1a1a2e]">
            <strong>5% of every purchase</strong> supports maternal mental health organizations
          </p>
        </div>
      </section>
    </div>
  );
}
