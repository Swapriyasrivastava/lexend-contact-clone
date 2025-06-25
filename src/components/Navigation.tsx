
import React, { useState } from 'react';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">+</span>
              </div>
              <span className="text-xl font-bold text-gray-900">lexend</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Features</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Insights</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
            
            <div className="relative">
              <button 
                className="flex items-center text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => setIsMoreOpen(!isMoreOpen)}
              >
                More <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Request a demo</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Log in</a>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors">
              Start free trial
            </button>
            <div className="flex items-center text-gray-700">
              <Globe className="h-4 w-4 mr-1" />
              <span className="text-sm">En</span>
              <ChevronDown className="ml-1 h-3 w-3" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-2 space-y-2">
            <a href="#" className="block py-2 text-gray-700 hover:text-gray-900">Features</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-gray-900">Pricing</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-gray-900">Insights</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-gray-900">About</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-gray-900">Contact</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-gray-900">Request a demo</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-gray-900">Log in</a>
            <button className="w-full text-left bg-teal-600 text-white px-4 py-2 rounded-lg font-medium">
              Start free trial
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
