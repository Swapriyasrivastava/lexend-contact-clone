
import React from 'react';

const BrandTrust = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-900">Trusted by well-known brands.</h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 opacity-60">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-600 rounded-full"></div>
            <span className="text-xl font-semibold text-gray-700">Capsule</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-600 rounded-lg transform rotate-45"></div>
            <span className="text-xl font-semibold text-gray-700">Layers</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 border-4 border-teal-600 rounded-full"></div>
            <span className="text-xl font-semibold text-gray-700">Polymath</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-600 rounded-full relative">
              <div className="absolute inset-1 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-semibold text-gray-700">Segment</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
              <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
              <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
            </div>
            <span className="text-xl font-semibold text-gray-700">Alt+Shift</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandTrust;
