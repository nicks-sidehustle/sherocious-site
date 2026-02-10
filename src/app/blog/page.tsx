import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts } from '@/data/blog';

export const metadata = {
  title: 'Blog | SHEROCIOUS',
  description: 'Inspiring stories of women breaking barriers, mental health resources, and empowering content from SHEROCIOUS.',
};

export default function BlogPage() {
  const posts = getBlogPosts();

  const categoryColors = {
    'inspiration': 'bg-[#c9a227] text-[#1a1a2e]',
    'mental-health': 'bg-green-600 text-white',
    'history': 'bg-purple-600 text-white',
    'resources': 'bg-blue-600 text-white',
  };

  const categoryLabels = {
    'inspiration': 'Inspiration',
    'mental-health': 'Mental Health',
    'history': 'History',
    'resources': 'Resources',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-[#1a1a2e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            The SHEROCIOUS <span className="text-[#c9a227]">Journal</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stories of strength, resources for resilience, and inspiration for every woman 
            on her journey to celebrating her awesomeness.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Link href={`/blog/${posts[0].slug}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg shadow-sm border overflow-hidden">
              <div className="relative aspect-video lg:aspect-auto bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] to-[#2a2a4e]">
                  <span className="text-white/30 text-lg">Featured Image</span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className={`inline-block px-3 py-1 rounded text-sm font-medium w-fit mb-4 ${categoryColors[posts[0].category]}`}>
                  {categoryLabels[posts[0].category]}
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#c9a227] transition-colors">
                  {posts[0].title}
                </h2>
                <p className="text-gray-600 mb-4">{posts[0].excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{posts[0].author}</span>
                  <span className="mx-2">•</span>
                  <span>{posts[0].date}</span>
                  <span className="mx-2">•</span>
                  <span>{posts[0].readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1a2e]/80 to-[#2a2a4e]/80">
                      <span className="text-white/50 text-sm">Article Image</span>
                    </div>
                    <span className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-medium ${categoryColors[post.category]}`}>
                      {categoryLabels[post.category]}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#c9a227] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Banner */}
      <section className="bg-[#c9a227] py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">
            5% of Every Purchase Supports Maternal Mental Health
          </h2>
          <p className="text-[#1a1a2e]/80 mb-6">
            When you shop SHEROCIOUS, you're helping mothers get the support they need.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-[#1a1a2e] text-white px-8 py-3 rounded font-bold hover:bg-[#2a2a4e] transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}
