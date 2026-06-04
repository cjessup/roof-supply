import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-gray-900 font-bold">RS</span>
              </div>
              <span className="font-semibold text-white text-lg">The Roof Supply Co.</span>
            </div>
            <p className="text-sm">
              Delivering top-quality roofing materials across Southern California with fast, reliable service for contractors and homeowners.
            </p>
          </div>

          {/* Gardena Location */}
          <div>
            <h3 className="font-semibold text-white mb-3">Gardena Location</h3>
            <div className="space-y-1 text-sm">
              <a href="tel:2135968052" className="block hover:text-white">(213) 596-8052</a>
              <a 
                href="https://maps.app.goo.gl/f3UpakANB1yujrvw6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-white"
              >
                15934 S. Figueroa St.<br />Gardena, CA 92048
              </a>
              <div className="pt-1 text-xs">Mon–Fri: 6:00 AM – 4:00 PM<br />Sat: 7:00 AM – 11:00 AM<br />Sun: Closed</div>
            </div>
          </div>

          {/* Escondido Location */}
          <div>
            <h3 className="font-semibold text-white mb-3">Escondido Location</h3>
            <div className="space-y-1 text-sm">
              <a href="tel:6198781531" className="block hover:text-white">(619) 878-1531</a>
              <a 
                href="https://maps.app.goo.gl/WYB8jTGqSxikUSvw7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-white"
              >
                530 N Spruce St.<br />Escondido, CA 92025
              </a>
              <div className="pt-1 text-xs">Mon–Fri: 6:00 AM – 4:00 PM<br />Sat: 7:00 AM – 11:00 AM<br />Sun: Closed</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-3">Quick Links</h3>
            <div className="space-y-1.5 text-sm">
              <Link href="/services" className="block hover:text-white">Services</Link>
              <Link href="/blog" className="block hover:text-white">Blog</Link>
              <Link href="/contact" className="block hover:text-white">Contact Us</Link>
              <a 
                href="http://Customer.gosuppli.com/rscg/auth/login" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-white"
              >
                Pay Now (Gardena)
              </a>
              <a 
                href="http://Customer.gosuppli.com/rsgfsd/auth/login" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-white"
              >
                Pay Now (Escondido)
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-xs text-gray-500 flex flex-col md:flex-row justify-between gap-2">
          <div>© {new Date().getFullYear()} The Roof Supply Co. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400">Terms &amp; Conditions</a>
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
