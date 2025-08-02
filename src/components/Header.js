import React from 'react';
import { useState } from 'react';
// import logo from 'figma:asset/6f9d55485cb9d9c50e67d3fe62a886af5628e643.png';
import logo from "../img/logo.jpg"; // Adjust the path as necessary
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="E Hyderabad Properties Logo" className="h-10 w-auto" />
            <div className="text-lg font-bold text-red-600">E Hyderabad Properties</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-red-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact</a>
          </nav>

          {/* Contact Phone */}
          <div className="hidden md:flex items-center space-x-2 text-red-600">
            <span>📞</span>
            <a href="tel:9154400915" className="hover:text-red-700 transition-colors">
              9154400915
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-red-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact</a>
              <div className="flex items-center space-x-2 text-red-600 pt-2 border-t">
                <span>📞</span>
                <a href="tel:9154400915" className="hover:text-red-700 transition-colors">
                  9154400915
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}