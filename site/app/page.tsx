'use client';

import Link from 'next/link';
import { useState } from 'react';

const services = [
  { title: "Roof Tiles", desc: "Durable and weather-resistant tiles in a range of styles", icon: "🏠" },
  { title: "Roofing Shingles", desc: "Classic asphalt shingles, architectural styles, and more", icon: "🪜" },
  { title: "Roofing Materials", desc: "Underlayment, flashing, sealants, nails — all in one place", icon: "📦" },
  { title: "Roofing Material Delivery", desc: "Prompt delivery for residential and commercial sites", icon: "🚚" },
  { title: "Metal Roofing", desc: "Long-lasting, energy-efficient, and easy to install", icon: "🔩" },
  { title: "Solar Roofs", desc: "Eco-friendly panels and solar-ready roofing accessories", icon: "☀️" },
  { title: "Construction Materials", desc: "We also supply related construction-grade materials", icon: "🧱" },
  { title: "Roof Leak Repair", desc: "Flashing, sealants, patches, and more", icon: "🔧" },
  { title: "TPO Roofing", desc: "Durable, energy-efficient thermoplastic polyolefin sheets", icon: "🛡️" },
  { title: "PVC Roofing", desc: "Ideal for flat commercial roofs", icon: "🏢" },
  { title: "Coatings Spray", desc: "Waterproofing and UV-resistant protective coatings", icon: "💦" },
];

const testimonials = [
  {
    quote: "Exceptional selection and fast delivery. I found everything I needed for my roof replacement job here.",
    name: "John Doe",
    role: "Roofing Contractor",
  },
  {
    quote: "Great service! The staff helped me pick the right underlayment for my DIY project.",
    name: "Jessica Bernstain",
    role: "Homeowner",
  },
  {
    quote: "Affordable and top-notch quality — will definitely return for future jobs.",
    name: "Mike Pomir",
    role: "Builder",
  },
];

const faqs = [
  { q: "How fast can materials be delivered?", a: "We offer same-day or next-day delivery on most products within Gardena and surrounding areas." },
  { q: "Do you offer bulk order discounts?", a: "Yes, we provide competitive rates for large-volume orders and contractor accounts." },
  { q: "Can homeowners buy directly?", a: "Absolutely! We serve both professional contractors and DIY homeowners." },
  { q: "Are your materials certified?", a: "All products meet or exceed industry standards and are sourced from trusted manufacturers." },
  { q: "Do you help with product selection?", a: "Yes! Our knowledgeable team is always available to guide you in choosing the right materials." },
  { q: "Can I schedule recurring deliveries?", a: "Absolutely. We offer flexible delivery schedules to keep your project on track." },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm font-medium mb-4">
              Serving Southern California Since  •  Gardena &amp; Escondido
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter leading-[1.05] mb-6">
              Reliable Roofing Materials &amp; Supply<br />in Southern California
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-8">
              Whether you’re a homeowner or a contractor, The Roof Supply Company delivers 
              dependable, top-grade roofing materials across Southern California and surrounding areas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex h-12 items-center justify-center rounded-full bg-amber-500 px-8 text-base font-semibold text-white hover:bg-amber-600 transition-colors"
              >
                Request A Free Quote
              </Link>
              <a 
                href="tel:2135968052" 
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-8 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Call Gardena: (213) 596-8052
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-400">
              <div>✓ Fast local delivery</div>
              <div>✓ Contractor pricing available</div>
              <div>✓ Wide selection in stock</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Bar */}
      <div className="bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-gray-700">
            <span className="font-medium">Looking for a Qualified Roofer? We Can Help!</span>
            <a href="tel:2135968052" className="font-semibold text-blue-800 hover:underline">Gardena (213) 596-8052</a>
            <a href="tel:6198781531" className="font-semibold text-blue-800 hover:underline">Escondido (619) 878-1531</a>
          </div>
          <Link href="/contact" className="text-blue-800 font-semibold hover:underline">
            Contact us →
          </Link>
        </div>
      </div>

      {/* About */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="uppercase tracking-[2px] text-xs font-semibold text-amber-600 mb-2">About Us</div>
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-6">
              Committed to Excellence in Roofing Supplies
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                At The Roof Supply Company, we are proud to support both homeowners and roofing professionals 
                with a trusted selection of high-performance materials.
              </p>
              <p>
                With a passion for excellence and a legacy of industry knowledge, we’re your go-to supplier 
                for all your roofing needs in Gardena and Escondido.
              </p>
            </div>
            <div className="mt-6 flex gap-4">
              <Link href="/services" className="text-sm font-semibold text-blue-800 hover:text-blue-700">Explore our services →</Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Quality Workmanship", desc: "Curated selection of roofing products that meet the highest industry standards." },
              { title: "Insured & Guaranteed", desc: "All products are backed by supplier guarantees and product warranties." },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-6 bg-white">
                <div className="font-semibold text-lg mb-2">{item.title}</div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <div id="services" className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[2px] text-xs font-semibold text-amber-600 mb-2">Our Products</div>
            <h2 className="text-4xl font-semibold tracking-tight">Our Roofing Materials</h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
              Whether you’re building a new roof or fixing an old one, we supply the essential materials for every type of project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link 
                key={index}
                href="/services" 
                className="group block rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-200 hover:shadow-sm transition-all"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <div className="font-semibold text-xl mb-2 group-hover:text-blue-800 transition-colors">{service.title}</div>
                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                <span className="text-sm font-medium text-blue-700 group-hover:underline">Read more →</span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link 
              href="/services" 
              className="inline-flex items-center rounded-full border border-gray-300 px-6 py-2.5 text-sm font-semibold hover:bg-white transition-colors"
            >
              View all services &amp; materials
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-12">
          <div className="uppercase tracking-[2px] text-xs font-semibold text-amber-600 mb-2">Why Choose Us</div>
          <h2 className="text-4xl font-semibold tracking-tight">Why You Should Choose Us</h2>
        </div>

        <div className="max-w-3xl mx-auto text-center text-lg text-gray-600 mb-12">
          At The Roof Supply Company, we’re more than just a supplier — we’re a trusted partner in every roofing project 
          across Gardena and Escondido. Our commitment to quality, service, and customer satisfaction is why local 
          contractors and homeowners continue to choose us time and time again.
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            "Fast & Reliable Service",
            "Fully Licensed & Insured",
            "Top-Quality Materials",
            "24/7 Premium Support",
            "Award Winning"
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border p-6 text-center bg-white">
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">✓</div>
              <div className="font-semibold">{item}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats / Achievement */}
      <div className="bg-blue-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="font-semibold text-2xl">Delivering Quality Roofing Supplies, Right to Your Jobsite</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-semibold tracking-tighter">1000+</div>
              <div className="text-blue-200 mt-1">Orders Delivered On Time</div>
            </div>
            <div>
              <div className="text-5xl font-semibold tracking-tighter">5★</div>
              <div className="text-blue-200 mt-1">Customer Reviews</div>
            </div>
            <div>
              <div className="text-5xl font-semibold tracking-tighter">500+</div>
              <div className="text-blue-200 mt-1">Contractors &amp; Homeowners Served</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="text-sm font-semibold underline underline-offset-4 hover:no-underline">Learn More →</Link>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-10">
          <div className="uppercase tracking-[2px] text-xs font-semibold text-amber-600 mb-2">Testimonials</div>
          <h2 className="text-4xl font-semibold tracking-tight">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div key={index} className="rounded-2xl border p-7 bg-white flex flex-col">
              <div className="text-amber-500 mb-4">★★★★★</div>
              <p className="text-gray-700 flex-1">“{t.quote}”</p>
              <div className="mt-6 text-sm">
                <div className="font-semibold text-gray-900">{t.name}</div>
                <div className="text-gray-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="uppercase tracking-[2px] text-xs font-semibold text-amber-600 mb-2">FAQs</div>
            <h2 className="text-4xl font-semibold tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border bg-white rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-medium"
                >
                  {faq.q}
                  <span className="text-xl leading-none">{openFaq === index ? '–' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-gray-600 text-sm border-t pt-3">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="uppercase tracking-[2px] text-xs font-semibold text-amber-600 mb-1">From the Blog</div>
            <h2 className="text-3xl font-semibold tracking-tight">Latest Articles</h2>
          </div>
          <Link href="/blog" className="hidden sm:block text-sm font-semibold text-blue-800 hover:underline">View All →</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Roofing Materials Delivery in Gardena CA Jobsite Checklist", date: "May 30, 2026" },
            { title: "Roof Leak Repair in Gardena CA: Common Leak Spots", date: "May 15, 2026" },
            { title: "TPO vs PVC Commercial Roofing in Gardena CA", date: "April 29, 2026" },
          ].map((post, i) => (
            <Link key={i} href="/blog" className="group block rounded-2xl border p-6 hover:border-gray-300 transition">
              <div className="text-xs text-gray-500 mb-2">{post.date}</div>
              <h3 className="font-semibold text-lg group-hover:text-blue-800 leading-tight mb-3">{post.title}</h3>
              <span className="text-sm text-blue-700 group-hover:underline">Read article →</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gray-900 py-16 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">Get in Touch with Our Roofing Experts Today</h2>
          <p className="text-gray-400 mb-8">Let our knowledgeable team help you find the right roofing materials for your next build or repair.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex justify-center rounded-full bg-white text-gray-900 px-8 py-3 font-semibold hover:bg-gray-100">
              Book Appointment
            </Link>
            <a href="tel:2135968052" className="inline-flex justify-center rounded-full border border-white/30 px-8 py-3 font-semibold hover:bg-white/10">
              Call (213) 596-8052
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
