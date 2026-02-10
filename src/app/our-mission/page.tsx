import Link from 'next/link';

export const metadata = {
  title: 'Our Mission | SHEROCIOUS',
  description: '5% of every SHEROCIOUS purchase supports maternal mental health organizations. Learn about our commitment to empowering women.',
};

export default function OurMission() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-500 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-6xl mb-6 block">💛</span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Mission: Empowering Women
          </h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto">
            SHEROCIOUS is more than a brand. We&apos;re a movement to celebrate, uplift, 
            and support the badass women who make our world go round.
          </p>
        </div>
      </section>

      {/* The Cause */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              5% of Profits to Maternal Mental Health
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Being a mother is one of the most rewarding—and challenging—experiences 
              a woman can have. Yet too many mothers struggle in silence with postpartum 
              depression, anxiety, and other mental health challenges.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              That&apos;s why <strong>5% of every SHEROCIOUS purchase</strong> goes directly 
              to organizations dedicated to maternal mental health support. When you buy 
              a pair of socks or a gift box, you&apos;re not just treating yourself or someone 
              you love—you&apos;re helping a mother get the support she needs.
            </p>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8">
              <p className="text-pink-800 font-medium text-lg">
                &quot;We believe every woman deserves to feel supported, celebrated, 
                and reminded of her incredible strength—especially during the 
                transformative journey of motherhood.&quot;
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              The Power of Affirmations
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Words matter. The things we tell ourselves shape how we feel, 
              how we act, and who we become. That&apos;s why every SHEROCIOUS product 
              features bold, empowering affirmations designed to:
            </p>
            <ul className="text-gray-700 text-lg space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-pink-500 mr-3">✓</span>
                <span>Boost your confidence when you need it most</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-3">✓</span>
                <span>Remind you of your inherent worth and strength</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-3">✓</span>
                <span>Create daily moments of self-love and positivity</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-3">✓</span>
                <span>Spark conversations about self-care and mental health</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Join the SHEROCIOUS Movement
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              When you wear SHEROCIOUS, you&apos;re part of a community of women 
              who believe in lifting each other up. You&apos;re making a statement 
              that self-love isn&apos;t selfish—it&apos;s essential.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/shop"
              className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-pink-700 hover:to-purple-700 transition-all"
            >
              Shop & Support Our Mission →
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Impact So Far
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="text-4xl font-bold text-pink-600 mb-2">5%</div>
              <div className="text-gray-600">Of every sale donated</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="text-4xl font-bold text-pink-600 mb-2">1000s</div>
              <div className="text-gray-600">Of badass women empowered</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="text-4xl font-bold text-pink-600 mb-2">💛</div>
              <div className="text-gray-600">Mothers supported</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
