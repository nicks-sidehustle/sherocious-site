'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#1a1a2e] text-white sticky top-0 z-50">
      {/* Mission Banner */}
      <div className="bg-[#c9a227] text-[#1a1a2e] text-center py-2 text-sm font-medium">
        5% of every purchase supports maternal mental health organizations
      </div>
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-wider text-[#c9a227]">SHEROCIOUS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="hover:text-[#c9a227] transition-colors font-medium">
              Shop All
            </Link>
            <Link href="/shop/gift-boxes" className="hover:text-[#c9a227] transition-colors font-medium">
              Gift Boxes
            </Link>
            <Link href="/shop/socks" className="hover:text-[#c9a227] transition-colors font-medium">
              Socks
            </Link>
            <Link href="/shop/blanket-hoodies" className="hover:text-[#c9a227] transition-colors font-medium">
              Blanket Hoodies
            </Link>
            <Link href="/our-mission" className="hover:text-[#c9a227] transition-colors font-medium">
              Our Mission
            </Link>
            <Link href="/blog" className="hover:text-[#c9a227] transition-colors font-medium">
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/shop"
              className="bg-[#c9a227] text-[#1a1a2e] px-6 py-2 rounded font-bold hover:bg-[#e8d48a] transition-colors"
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-700">
            <Link href="/shop" className="block hover:text-[#c9a227] font-medium">Shop All</Link>
            <Link href="/shop/gift-boxes" className="block hover:text-[#c9a227] font-medium">Gift Boxes</Link>
            <Link href="/shop/socks" className="block hover:text-[#c9a227] font-medium">Socks</Link>
            <Link href="/shop/blanket-hoodies" className="block hover:text-[#c9a227] font-medium">Blanket Hoodies</Link>
            <Link href="/our-mission" className="block hover:text-[#c9a227] font-medium">Our Mission</Link>
            <Link href="/blog" className="block hover:text-[#c9a227] font-medium">Blog</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
