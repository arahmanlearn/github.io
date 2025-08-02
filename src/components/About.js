export function About() {
  const features = [
    {
      icon: "🛡️",
      title: "Trusted Service",
      description: "Licensed and verified real estate professionals with transparent dealings"
    },
    {
      icon: "👥",
      title: "Expert Team",
      description: "Experienced team with deep knowledge of Hyderabad's real estate market"
    },
    {
      icon: "🏆",
      title: "Quality Assured",
      description: "Only premium properties with proper documentation and legal clarity"
    },
    {
      icon: "🕒",
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your real estate needs"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl mb-6 font-bold">About E Hyderabad Properties</h2>
            <p className="text-lg text-gray-600 mb-8">
              E Hyderabad Properties is your trusted partner in finding the perfect real estate 
              solution in Hyderabad. With years of experience in the industry, we have helped 
              thousands of families find their dream homes and investors secure profitable properties.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We specialize in residential flats and land selling across all prime locations in 
              Hyderabad. Our commitment to transparency, quality, and customer satisfaction has 
              made us one of the most trusted names in Hyderabad's real estate market.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h4 className="mb-2 font-medium">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=600&fit=crop"
                alt="Hyderabad Cityscape"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-lg p-6 text-center">
              <div className="text-2xl text-red-600 mb-1 font-bold">15+</div>
              <div className="text-sm text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}