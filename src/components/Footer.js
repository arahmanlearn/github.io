// import logo from 'figma:asset/6f9d55485cb9d9c50e67d3fe62a886af5628e643.png';
import logo from "../img/logo.jpg";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="E Hyderabad Properties Logo" className="h-10 w-auto brightness-0 invert" />
              <div className="text-xl font-bold text-red-500">E Hyderabad Properties</div>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for premium real estate solutions in Hyderabad. 
              We help you find the perfect property for your needs.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <span>📍</span>
              <span>Hyderabad, Telangana</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4 font-bold">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Residential Flats</li>
              <li>Land Selling</li>
              <li>Property Consultation</li>
              <li>Investment Advisory</li>
              <li>Documentation Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4 font-bold">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <a 
                href="tel:9154400915" 
                className="flex items-center gap-2 hover:text-red-400 transition-colors"
              >
                <span>📞</span>
                9154400915
              </a>
              <a 
                href="https://www.youtube.com/@ehyderabadproperties1517/videos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-red-400 transition-colors"
              >
                <span>📺</span>
                YouTube Channel
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2025 E Hyderabad Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}