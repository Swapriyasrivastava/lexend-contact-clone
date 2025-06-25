
import React from 'react';

const ContactHero = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative stars */}
        <div className="relative">
          <div className="absolute -top-8 left-1/4 text-2xl">✦</div>
          <div className="absolute -top-4 right-1/3 text-lg">✦</div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
            Let's get in touch.
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Feel free to reach out to us using the options below, and our dedicated team will 
            respond to your inquiries promptly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
