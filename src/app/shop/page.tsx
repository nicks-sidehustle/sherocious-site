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
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Shop All Products</h1>
          <p className="text-xl text-pink-100">
            Bold affirmations for badass women • Free shipping on Amazon
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/shop"
              className="px-6 py-2 rounded-full bg-pink-600 text-white font-medium"
            >
              All Products
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/shop/${cat.id === 'gift-box' ? 'gift-boxes' : cat.id === 'blanket-hoodie' ? 'blanket-hoodies' : cat.id}`}
                className="px-6 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-pink-100 hover:text-pink-700 transition-colors"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission Reminder */}
      <section className="bg-yellow-50 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-gray-700">
            💛 <strong>5% of every purchase</strong> supports maternal mental health organizations
          </p>
        </div>
      </section>
    </div>
  );
}
