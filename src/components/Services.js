export function Services() {
  const services = [
    {
      title: "Residential Flats",
      description: "Premium apartments and flats in prime locations across Hyderabad",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      icon: "🏢",
      features: ["2BHK & 3BHK Options", "Prime Locations", "Modern Amenities", "Ready to Move"]
    },
    {
      title: "Land Selling",
      description: "Residential and commercial plots with clear titles and documentation",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
      icon: "🏞️",
      features: ["Clear Titles", "HMDA Approved", "Investment Opportunities", "Flexible Payment"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We specialize in helping you find the perfect property in Hyderabad, 
            whether you're looking for a new home or an investment opportunity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="flex items-center gap-2 text-xl font-bold mb-2">
                  <span className="text-2xl">{service.icon}</span>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl text-red-600 mb-2 font-bold">500+</div>
            <div className="text-gray-600">Properties Sold</div>
          </div>
          <div>
            <div className="text-3xl text-red-600 mb-2 font-bold">1000+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl text-red-600 mb-2 font-bold">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl text-red-600 mb-2 font-bold">50+</div>
            <div className="text-gray-600">Areas Covered</div>
          </div>
        </div>
      </div>
    </section>
  );
}