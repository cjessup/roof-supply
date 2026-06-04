import Link from 'next/link';

const allServices = [
  { slug: 'roof-tiles', title: "Roof Tiles", desc: "Durable and weather-resistant tiles in a range of styles. Great for residential and commercial applications.", details: "We carry concrete, clay, and synthetic roof tiles from leading manufacturers. Excellent for high-wind and fire-resistant applications common in Southern California." },
  { slug: 'roofing-shingles', title: "Roofing Shingles", desc: "Classic asphalt shingles, architectural styles, and more.", details: "3-tab, architectural, and luxury shingles available in a wide variety of colors. Energy Star rated options available." },
  { slug: 'roofing-materials', title: "Roofing Materials", desc: "Underlayment, flashing, sealants, nails — all in one place.", details: "Synthetic underlayment, ice & water shield, step flashing, drip edge, pipe boots, sealant, and all fasteners you need." },
  { slug: 'roofing-material-delivery', title: "Roofing Material Delivery", desc: "Prompt delivery for residential and commercial sites.", details: "Same-day and next-day delivery available throughout Gardena, Escondido, and surrounding areas. Jobsite drop-off available." },
  { slug: 'metal-roofing', title: "Metal Roofing", desc: "Long-lasting, energy-efficient, and easy to install.", details: "Standing seam, corrugated, and screw-down metal panels. Great for commercial buildings and modern residential designs." },
  { slug: 'solar-roofs', title: "Solar Roofs", desc: "Eco-friendly panels and solar-ready roofing accessories.", details: "Solar-ready mounting systems, flashing kits, and integrated solar solutions. Ask us about compatibility with your roof type." },
  { slug: 'construction-materials', title: "Construction Materials", desc: "We also supply related construction-grade materials.", details: "Lumber, fasteners, safety equipment, and other job site essentials." },
  { slug: 'roof-leak-repair', title: "Roof Leak Repair", desc: "Flashing, sealants, patches, and more.", details: "Emergency leak repair kits, roof cement, fiberglass mesh, and all the products professional roofers use for fast fixes." },
  { slug: 'tpo-roofing', title: "TPO Roofing", desc: "Durable, energy-efficient thermoplastic polyolefin sheets.", details: "TPO membranes and accessories for commercial low-slope roofs. Heat-welded systems available." },
  { slug: 'pcv-roofing', title: "PVC Roofing", desc: "Ideal for flat commercial roofs.", details: "High-quality PVC roofing membranes and all associated components for long-term waterproofing performance." },
  { slug: 'coatings-spray', title: "Coatings Spray", desc: "Waterproofing and UV-resistant protective coatings.", details: "Acrylic, silicone, and polyurethane roof coatings. Extend the life of existing roofs with our spray-applied solutions." },
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl">
        <div className="uppercase tracking-[2px] text-xs font-semibold text-amber-600 mb-2">PRODUCTS &amp; SERVICES</div>
        <h1 className="text-5xl font-semibold tracking-tighter">Our Roofing Materials</h1>
        <p className="mt-4 text-xl text-gray-600">
          Whether you’re building a new roof or fixing an old one, we supply the essential materials for every type of project.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allServices.map((service, index) => (
          <div key={index} className="rounded-3xl border p-7 bg-white hover:shadow transition group">
            <div className="font-semibold text-2xl tracking-tight group-hover:text-blue-800">{service.title}</div>
            <p className="mt-3 text-gray-600">{service.desc}</p>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">{service.details}</p>
            
            <div className="mt-6 text-sm">
              <Link href="/contact" className="font-medium text-blue-800 hover:underline">Request pricing &amp; availability →</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-gray-50 p-8 text-center">
        <h3 className="font-semibold text-lg mb-2">Need help choosing the right materials?</h3>
        <p className="text-gray-600 mb-4">Our team is happy to walk you through options for your specific project.</p>
        <Link href="/contact" className="inline-block rounded-full bg-blue-800 text-white px-6 py-2.5 text-sm font-semibold">Contact Our Experts</Link>
      </div>
    </div>
  );
}
