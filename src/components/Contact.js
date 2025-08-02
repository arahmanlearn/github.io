export function Contact() {
  return (
    <section id="contact" className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to find your dream property? Contact us today and let our experts 
            help you make the right choice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phone Contact */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us Now</h3>
            <p className="text-gray-600 mb-4">Speak directly with our property experts</p>
            <div className="space-y-4">
              <a 
                href="tel:9154400915" 
                className="text-2xl text-red-600 hover:text-red-700 transition-colors block font-bold"
              >
                9154400915
              </a>
              <button 
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                onClick={() => window.open('tel:9154400915')}
              >
                <span>📞</span>
                Call Now
              </button>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Our Location</h3>
            <p className="text-gray-600 mb-4">We serve all areas across Hyderabad</p>
            <div className="space-y-4">
              <p className="text-lg font-medium">Hyderabad</p>
              <p className="text-sm text-gray-600">
                Covering all prime locations including Gachibowli, Hitec City, 
                Kondapur, Kukatpally, and more
              </p>
            </div>
          </div>

          {/* YouTube Channel */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
            <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">📺</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Watch Our Videos</h3>
            <p className="text-gray-600 mb-4">Property tours and market insights</p>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Check out our YouTube channel for property tours, 
                market updates, and real estate tips
              </p>
              <button 
                className="w-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                onClick={() => window.open('https://www.youtube.com/@ehyderabadproperties1517/videos', '_blank')}
              >
                <span>📺</span>
                Visit Channel
              </button>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-center mb-6 flex items-center justify-center gap-2">
            <span>🕒</span>
            Business Hours
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-600 mb-1">Monday - Saturday</p>
              <p className="font-medium">9:00 AM - 8:00 PM</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Sunday</p>
              <p className="font-medium">10:00 AM - 6:00 PM</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Available for urgent queries 24/7 via phone
          </p>
        </div>
      </div>
    </section>
  );
}