import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      {/* Newsletter Section */}
      <div className="bg-[#c9a227] py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-2xl font-bold text-[#1a1a2e] mb-2">Join the SHEROCIOUS Community</h3>
          <p className="text-[#1a1a2e]/80 mb-6">Get 20% off your first order + updates on new releases and giveaways</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]"
            />
            <button
              type="submit"
              className="bg-[#1a1a2e] text-white px-8 py-3 rounded font-bold hover:bg-[#2a2a4e] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-[#c9a227]">SHEROCIOUS</h4>
            <p className="text-gray-400 text-sm">
              Empowering women one step at a time. Bold affirmations, cozy socks, 
              and gifts that remind you how amazing you are.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h5 className="font-bold mb-4 text-[#c9a227]">Shop</h5>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/shop" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/shop/gift-boxes" className="hover:text-white transition-colors">Gift Boxes</Link></li>
              <li><Link href="/shop/socks" className="hover:text-white transition-colors">Socks</Link></li>
              <li><Link href="/shop/blanket-hoodies" className="hover:text-white transition-colors">Blanket Hoodies</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-bold mb-4 text-[#c9a227]">Company</h5>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/our-mission" className="hover:text-white transition-colors">Our Mission</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="https://www.amazon.com/stores/SHEROcious/page/A0CA9BB1-A4CF-409E-8576-E4FCC20AAAFA" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Amazon Store</a></li>
            </ul>
          </div>

          {/* Social & Cause */}
          <div>
            <h5 className="font-bold mb-4 text-[#c9a227]">Connect</h5>
            <p className="text-gray-400 text-sm mb-4">
              5% of every purchase supports maternal mental health organizations.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/sherocious/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#c9a227] transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </a>
              <a href="https://www.pinterest.com/sherocious/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#c9a227] transition-colors">
                <span className="sr-only">Pinterest</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.amazon.com/stores/SHEROcious/page/A0CA9BB1-A4CF-409E-8576-E4FCC20AAAFA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#c9a227] transition-colors">
                <span className="sr-only">Amazon</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.574 17.88 17.88 0 01-5.43-3.317c-.084-.07-.104-.15-.106-.378zM6.03 15.05c-.036-.18.04-.3.147-.39.108-.09.216-.068.324.024l.855.63c.528.36.99.51 1.386.45.396-.06.91-.39 1.53-.96l.54-.48c.288-.24.516-.31.684-.24.168.07.228.23.18.47-.12.57-.48 1.11-1.08 1.62-.6.51-1.236.81-1.908.9-.672.09-1.32-.06-1.944-.45a5.57 5.57 0 01-.714-.57zm17.01-1.08c-.334-.18-.643-.282-.93-.31-.286-.028-.746.03-1.38.17-.24.05-.4.02-.48-.09-.08-.11-.05-.24.09-.39.51-.56 1.17-.81 1.98-.75.81.06 1.5.39 2.07.99.12.13.12.25-.03.36-.256.18-.54.3-.855.36a1.8 1.8 0 01-.465 0 5.13 5.13 0 01-.6-.09z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Sherocious, LLC. All rights reserved.</p>
          <p className="mt-2">Let&apos;s Celebrate Your Awesomeness!</p>
          <p className="mt-2 text-xs">Free Shipping &amp; Free Returns on Amazon</p>
        </div>
      </div>
    </footer>
  );
}
