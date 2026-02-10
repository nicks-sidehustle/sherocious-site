'use client';

export function VideoShowcase() {
  return (
    <section className="py-16 lg:py-24 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            See SHEROCIOUS in Action
          </h2>
          <p className="text-lg text-gray-300">
            Cozy comfort meets empowering style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="relative rounded-lg overflow-hidden bg-black aspect-[9/16] max-h-[500px] mx-auto">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/promo-1.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="relative rounded-lg overflow-hidden bg-black aspect-[9/16] max-h-[500px] mx-auto">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/promo-2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Follow us on Instagram and TikTok for more
          </p>
        </div>
      </div>
    </section>
  );
}
