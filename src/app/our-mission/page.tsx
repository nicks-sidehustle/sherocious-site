import Link from 'next/link';

export const metadata = {
  title: 'Our Mission | SHEROCIOUS',
  description: '5% of every SHEROCIOUS purchase supports maternal mental health organizations. Learn about our commitment to empowering women.',
};

export default function OurMission() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1a1a2e] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Mission: <span className="text-[#c9a227]">Empowering Women</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            SHEROCIOUS is more than a brand. We&apos;re a movement to celebrate, uplift, 
            and support the amazing women who make our world go round.
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

            <div className="bg-[#c9a227]/10 border-l-4 border-[#c9a227] p-6 my-8">
              <p className="text-gray-800 font-medium text-lg">
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
            <ul className="text-gray-700 text-lg space-y-4 mb-8 list-none pl-0">
              <li className="flex items-start">
                <span className="text-[#c9a227] mr-3 font-bold">•</span>
                <span>Boost your confidence when you need it most</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#c9a227] mr-3 font-bold">•</span>
                <span>Remind you of your inherent worth and strength</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#c9a227] mr-3 font-bold">•</span>
                <span>Create daily moments of self-love and positivity</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#c9a227] mr-3 font-bold">•</span>
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
              className="inline-block bg-[#c9a227] text-[#1a1a2e] px-8 py-4 rounded font-bold text-lg hover:bg-[#e8d48a] transition-all"
            >
              Shop &amp; Support Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Commitment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="text-4xl font-bold text-[#c9a227] mb-2">5%</div>
              <div className="text-gray-600">Of every sale donated</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="text-4xl font-bold text-[#c9a227] mb-2">1000s</div>
              <div className="text-gray-600">Of women empowered</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="text-4xl font-bold text-[#c9a227] mb-2">100%</div>
              <div className="text-gray-600">Positive customer reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Giving Back */}
      <section className="py-16 bg-[#1a1a2e] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">1 Gift Sold = 1 Gift Given</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every SHEROCIOUS purchase helps us give back to Moms Mental Health organizations 
            and Cancer Treatment Centers. Together, we&apos;re making a difference.
          </p>
        </div>
      </section>
    </div>
  );
}
