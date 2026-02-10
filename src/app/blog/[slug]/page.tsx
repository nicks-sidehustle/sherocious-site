import { blogPosts, getBlogPostBySlug } from '@/data/blog';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const post = getBlogPostBySlug(slug);
    if (!post) return { title: 'Article Not Found' };
    
    return {
      title: `${post.title} | SHEROCIOUS Blog`,
      description: post.excerpt,
    };
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

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
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-[#c9a227]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#c9a227]">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 truncate">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <header className="py-12 bg-[#1a1a2e] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className={`inline-block px-3 py-1 rounded text-sm font-medium mb-6 ${categoryColors[post.category]}`}>
            {categoryLabels[post.category]}
          </span>
          <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-300">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative h-64 md:h-96 bg-gray-200">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-strong:text-gray-900 prose-a:text-[#c9a227] prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-[#c9a227] prose-blockquote:text-gray-600 prose-blockquote:italic prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />
        </div>
      </article>

      {/* Share & CTA */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Share This Article
          </h2>
          <p className="text-gray-600 mb-6">
            Know someone who needs to hear this? Share it with them.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://sherocious.com/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-6 py-2 rounded font-medium hover:bg-gray-700 transition-colors"
            >
              Share on X
            </a>
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://sherocious.com/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition-colors"
            >
              Share on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Shop CTA */}
      <section className="py-12 bg-[#c9a227]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">
            Wear Your Strength
          </h2>
          <p className="text-[#1a1a2e]/80 mb-6">
            Every SHEROCIOUS purchase supports maternal mental health organizations.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-[#1a1a2e] text-white px-8 py-3 rounded font-bold hover:bg-[#2a2a4e] transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* More Articles */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.filter(p => p.slug !== post.slug).slice(0, 2).map((relatedPost) => (
              <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
                <article className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                  <span className={`inline-block px-2 py-1 rounded text-xs font-medium mb-3 ${categoryColors[relatedPost.category]}`}>
                    {categoryLabels[relatedPost.category]}
                  </span>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#c9a227] transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Simple markdown-like formatting
function formatContent(content: string): string {
  return content
    .replace(/## (.*)/g, '<h2>$1</h2>')
    .replace(/### (.*)/g, '<h3>$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^/, '<p>')
    .replace(/$/, '</p>')
    .replace(/<p><h/g, '<h')
    .replace(/<\/h2><\/p>/g, '</h2>')
    .replace(/<\/h3><\/p>/g, '</h3>')
    .replace(/<p>---<\/p>/g, '<hr class="my-8 border-gray-200" />')
    .replace(/<p>- (.*?)<\/p>/g, '<ul><li>$1</li></ul>')
    .replace(/<\/ul><ul>/g, '');
}
