export function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop" 
          alt="Hyderabad Real Estate"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl mb-6 font-bold">
          Your Dream Property in <span className="text-red-500">Hyderabad</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Find the perfect flat or land in Hyderabad with E Hyderabad Properties. 
          We specialize in premium residential and commercial real estate solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-colors flex items-center gap-2"
            onClick={() => scrollToSection('contact')}
          >
            <span>📞</span>
            Contact Us Now
          </button>
          <button 
            className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg transition-colors"
            onClick={() => scrollToSection('services')}
          >
            View Services
          </button>
        </div>
        
        <div className="flex items-center justify-center text-gray-200">
          <span className="mr-2">📍</span>
          <span>Serving all areas of Hyderabad</span>
        </div>
      </div>
    </section>
  );
}