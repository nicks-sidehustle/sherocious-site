import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { getFeaturedProducts, categories } from '@/data/products';

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-500 via-purple-500 to-pink-600 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Let&apos;s Celebrate Your <span className="text-yellow-300">Awesomeness!</span>
            </h1>
            <p className="text-xl sm:text-2xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Bold affirmation socks and gifts that remind you how f*cking amazing you really are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-100 transition-colors inline-flex items-center justify-center"
              >
                Shop Now →
              </Link>
              <Link
                href="/our-mission"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Our Mission 💛
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Callout */}
      <section className="bg-yellow-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">💛</span>
            <h2 className="text-2xl font-bold text-gray-900">More Than Just Socks</h2>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            <strong>5% of every purchase</strong> goes directly to organizations supporting 
            <strong> maternal mental health</strong>. When you wear SHEROCIOUS, you&apos;re not just 
            feeling empowered — you&apos;re empowering other women too.
          </p>
          <Link href="/our-mission" className="inline-block mt-6 text-pink-600 font-bold hover:text-pink-700">
            Learn about our mission →
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Bestsellers 🔥
            </h2>
            <p className="text-lg text-gray-600">
              The affirmations our badass community loves most
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-pink-700 hover:to-purple-700 transition-all"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/shop/${category.id === 'gift-box' ? 'gift-boxes' : category.id === 'blanket-hoodie' ? 'blanket-hoodies' : category.id}`}
                className="group relative bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 text-center hover:from-pink-200 hover:to-purple-200 transition-all"
              >
                <div className="text-6xl mb-4">
                  {category.id === 'gift-box' ? '🎁' : category.id === 'blanket-hoodie' ? '🧥' : '🧦'}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
                <span className="inline-block mt-4 text-pink-600 font-bold group-hover:text-pink-700">
                  Shop {category.name} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Affirmation Highlight */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            What You Say After &quot;I AM&quot; Changes Your Life
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['I Am Strong', 'I Am Powerful', 'I Am Badass', 'I Am Beautiful', 'I Am Unstoppable'].map((affirmation, i) => (
              <span
                key={i}
                className="bg-white/20 backdrop-blur px-6 py-3 rounded-full text-lg font-medium"
              >
                {affirmation}
              </span>
            ))}
          </div>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto">
            Every pair of SHEROCIOUS socks carries affirmations designed to lift you up, 
            remind you of your worth, and celebrate the badass goddess you are.
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Badass Community Says
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "These socks are the PERFECT gift! My friend loved the affirmations and the quality is amazing.",
                author: "Sarah M.",
                stars: 5,
              },
              {
                quote: "I bought the gift box for myself and I wear them when I need a confidence boost. They work!",
                author: "Jessica T.",
                stars: 5,
              },
              {
                quote: "Love that 5% goes to maternal mental health. Great cause, great socks, great company.",
                author: "Michelle R.",
                stars: 5,
              },
            ].map((review, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md">
                <div className="flex mb-3">
                  {[...Array(review.stars)].map((_, j) => (
                    <span key={j} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">&quot;{review.quote}&quot;</p>
                <p className="text-sm font-bold text-gray-900">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
