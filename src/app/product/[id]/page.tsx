import { products, getProductById } from '@/data/products';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return params.then(({ id }) => {
    const product = getProductById(id);
    if (!product) return { title: 'Product Not Found' };
    
    return {
      title: `${product.name} | SHEROCIOUS`,
      description: product.description,
    };
  });
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const categoryLabels = {
    'gift-box': 'Gift Box',
    'socks': 'Socks',
    'blanket-hoodie': 'Blanket Hoodie',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-[#c9a227]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-[#c9a227]">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="space-y-4">
              <div className="relative bg-gray-100 rounded-lg aspect-square overflow-hidden">
                {product.image && !product.image.includes('placeholder') ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400">Product Image</span>
                  </div>
                )}
                {product.featured && (
                  <span className="absolute top-4 left-4 bg-[#c9a227] text-[#1a1a2e] text-sm font-bold px-4 py-2 rounded">
                    BESTSELLER
                  </span>
                )}
              </div>
              {/* Gallery thumbnails */}
              {product.gallery && product.gallery.length > 0 && (
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {product.gallery.map((img, i) => (
                    <div key={i} className="relative aspect-square rounded overflow-hidden bg-gray-100 cursor-pointer hover:ring-2 hover:ring-[#c9a227] transition-all">
                      <Image src={img} alt={`${product.name} view ${i + 2}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <span className="text-sm font-medium text-[#1a1a2e] bg-gray-200 px-3 py-1 rounded">
                {categoryLabels[product.category]}
              </span>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4 mb-2">
                {product.name}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6">{product.tagline}</p>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-bold text-gray-900">${product.price}</span>
                <span className="text-gray-500">Free shipping with Prime</span>
              </div>

              <p className="text-gray-700 mb-8">{product.description}</p>

              {/* Affirmations */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-3">Affirmations Included:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.affirmations.map((aff, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-4 py-2 rounded font-medium">
                      {aff}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-4">
                <a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block bg-[#c9a227] text-[#1a1a2e] text-center px-8 py-4 rounded font-bold text-lg hover:bg-[#e8d48a] transition-all"
                >
                  Buy Now on Amazon
                </a>
                <p className="text-center text-sm text-gray-500">
                  Free shipping | Free returns | Secure checkout
                </p>
              </div>

              {/* Mission */}
              <div className="mt-8 bg-[#c9a227]/10 border border-[#c9a227] p-4 rounded">
                <p className="text-sm text-gray-700">
                  <strong>5% of this purchase</strong> supports maternal mental health organizations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why You&apos;ll Love It
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-bold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Soft, durable cotton blend that feels amazing on your feet</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-gray-900 mb-2">Daily Empowerment</h3>
              <p className="text-gray-600">Bold affirmations to boost your confidence with every step</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-gray-900 mb-2">Perfect Gift</h3>
              <p className="text-gray-600">Beautiful packaging makes it the ideal gift for any amazing woman</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Customer Reviews
          </h2>
          <div className="flex justify-center items-center gap-2 mb-8">
            <span className="text-[#c9a227] text-2xl">★★★★★</span>
            <span className="text-gray-700 font-medium">5.0 out of 5 stars</span>
          </div>
          <p className="text-center text-gray-600">
            100% positive reviews on Amazon. Customers love the quality, comfort, and empowering messages.
          </p>
        </div>
      </section>
    </div>
  );
}
