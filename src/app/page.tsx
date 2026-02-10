import Link from 'next/link';
import Image from 'next/image';
import { ProductCard } from '@/components/ProductCard';
import { VideoShowcase } from '@/components/VideoShowcase';
import { getFeaturedProducts, categories } from '@/data/products';

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#1a1a2e] text-white py-20 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/products/hoodie-lifestyle.jpg"
            alt="SHEROCIOUS lifestyle"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Let&apos;s Celebrate Your <span className="text-[#c9a227]">Awesomeness!</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Bold affirmation socks and gifts that remind you how amazing you really are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="bg-[#c9a227] text-[#1a1a2e] px-8 py-4 rounded font-bold text-lg hover:bg-[#e8d48a] transition-colors inline-flex items-center justify-center"
              >
                Shop Now
              </Link>
              <Link
                href="/our-mission"
                className="border-2 border-[#c9a227] text-[#c9a227] px-8 py-4 rounded font-bold text-lg hover:bg-[#c9a227] hover:text-[#1a1a2e] transition-colors inline-flex items-center justify-center"
              >
                Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Callout */}
      <section className="bg-[#c9a227] py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">More Than Just Socks</h2>
          <p className="text-lg text-[#1a1a2e]/80 max-w-2xl mx-auto">
            <strong>5% of every purchase</strong> goes directly to organizations supporting 
            <strong> maternal mental health</strong>. When you wear SHEROCIOUS, you&apos;re not just 
            feeling empowered — you&apos;re empowering other women too.
          </p>
          <Link href="/our-mission" className="inline-block mt-6 text-[#1a1a2e] font-bold hover:underline">
            Learn about our mission
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Bestsellers
            </h2>
            <p className="text-lg text-gray-600">
              The affirmations our community loves most
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
              className="inline-block bg-[#1a1a2e] text-white px-8 py-4 rounded font-bold text-lg hover:bg-[#2a2a4e] transition-all"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <VideoShowcase />

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
                className="group relative bg-gray-100 rounded-lg p-8 text-center hover:bg-gray-200 transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <span className="inline-block text-[#c9a227] font-bold group-hover:text-[#1a1a2e]">
                  Shop {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Affirmation Highlight */}
      <section className="bg-[#1a1a2e] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            What You Say After &quot;I AM&quot; Changes Your Life
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['I Am Strong', 'I Am Powerful', 'I Am Badass', 'I Am Beautiful', 'I Am Unstoppable'].map((affirmation, i) => (
              <span
                key={i}
                className="bg-white/10 border border-[#c9a227] px-6 py-3 rounded text-lg font-medium"
              >
                {affirmation}
              </span>
            ))}
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every pair of SHEROCIOUS socks carries affirmations designed to lift you up, 
            remind you of your worth, and celebrate the goddess you are.
          </p>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600">5.0 stars across all products on Amazon</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "These socks are the PERFECT gift! My friend loved the affirmations and the quality is amazing.",
                author: "Sarah M.",
                product: "Gift Box 3-Pack",
                stars: 5,
              },
              {
                quote: "I bought the blanket hoodie for myself and it's the softest thing I own. The matching socks are a bonus!",
                author: "Jessica T.",
                product: "Badass Goddess Blanket Hoodie",
                stars: 5,
              },
              {
                quote: "Love that 5% goes to maternal mental health. Great cause, great socks, great company.",
                author: "Michelle R.",
                product: "A Little Crazy A Lot Badass",
                stars: 5,
              },
            ].map((review, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex mb-3 text-[#c9a227]">
                  {[...Array(review.stars)].map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">&quot;{review.quote}&quot;</p>
                <p className="text-sm font-bold text-gray-900">— {review.author}</p>
                <p className="text-xs text-gray-500">{review.product}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
