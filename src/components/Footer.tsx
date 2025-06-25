
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Globe, ChevronDown } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">+</span>
              </div>
              <span className="text-xl font-bold">lexend</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              This powerful tool eliminates the need to leave Salesforce to get things done as I can 
              create a custom proposal with dynamic pricing tables.
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact v2</a></li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">With sidebar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Product detail</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Product detail v2</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cart</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Checkout</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Order confirmation</a></li>
            </ul>
          </div>

          {/* Request a demo */}
          <div>
            <h3 className="font-semibold mb-4">Request a demo</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Sign in</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sign in v2</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sign up</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sign up v2</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reset password</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reset password v2</a></li>
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="font-semibold mb-4">Blog</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Blog detail</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">404</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Coming Soon</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                Lexend © 2025, All rights reserved.
              </p>
              <div className="flex space-x-6 mt-2">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy notice</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Legal</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie settings</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Social icons */}
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>

              {/* Language selector */}
              <div className="flex items-center text-gray-400 border-l border-gray-700 pl-4">
                <Globe className="h-4 w-4 mr-2" />
                <span className="text-sm mr-1">English</span>
                <ChevronDown className="h-3 w-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
