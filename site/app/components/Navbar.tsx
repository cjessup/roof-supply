'use client';

import Link from 'next/link';
import { useState } from 'react';

const PAYMENT_GARDENA = 'http://Customer.gosuppli.com/rscg/auth/login';
const PAYMENT_ESCONDIDO = 'http://Customer.gosuppli.com/rsgfsd/auth/login';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-800 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">RS</span>
            </div>
            <div>
              <div className="font-semibold text-xl tracking-tight text-gray-900">The Roof Supply Co.</div>
              <div className="text-[10px] text-gray-500 -mt-1">Southern California</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="text-gray-700 hover:text-blue-800 transition-colors">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-800 transition-colors">Services</Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-800 transition-colors">Blog</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-800 transition-colors">Contact</Link>
          </div>

          {/* Pay Now Buttons + Contact Info (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PAYMENT_GARDENA}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 text-sm font-semibold rounded-full bg-amber-500 hover:bg-amber-600 text-white transition-colors"
            >
              Pay Now • Gardena
            </a>
            <a
              href={PAYMENT_ESCONDIDO}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 text-sm font-semibold rounded-full bg-amber-500 hover:bg-amber-600 text-white transition-colors"
            >
              Pay Now • Escondido
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white px-4 py-4 space-y-3 text-sm">
          <Link href="/" className="block py-1 text-gray-700" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/services" className="block py-1 text-gray-700" onClick={() => setMobileOpen(false)}>Services</Link>
          <Link href="/blog" className="block py-1 text-gray-700" onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link href="/contact" className="block py-1 text-gray-700" onClick={() => setMobileOpen(false)}>Contact</Link>

          <div className="pt-3 border-t space-y-2">
            <a
              href={PAYMENT_GARDENA}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-2 rounded-full bg-amber-500 text-white font-semibold text-sm"
            >
              Pay Now • Gardena
            </a>
            <a
              href={PAYMENT_ESCONDIDO}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-2 rounded-full bg-amber-500 text-white font-semibold text-sm"
            >
              Pay Now • Escondido
            </a>
          </div>

          <div className="pt-2 text-xs text-gray-600">
            <div>Gardena: <a href="tel:2135968052" className="font-medium">(213) 596-8052</a></div>
            <div>Escondido: <a href="tel:6198781531" className="font-medium">(619) 878-1531</a></div>
          </div>
        </div>
      )}
    </nav>
  );
}
