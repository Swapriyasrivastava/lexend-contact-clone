
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContactMethods = () => {
  const methods = [
    {
      icon: "https://lexend-nextjs.vercel.app/assets/images/template/icon-location.svg",
      title: "Visit us",
      description: "Don Valley, Toronto, CA",
      linkText: "View on maps",
      href: "#"
    },
    {
      icon: "https://lexend-nextjs.vercel.app/assets/images/template/icon-chat.svg",
      title: "Via chat",
      description: "Get instant answers.",
      linkText: "Let's chat",
      href: "#"
    },
    {
      icon: "https://lexend-nextjs.vercel.app/assets/images/template/icon-internet.svg",
      title: "Report Issue",
      description: "Get priority support.",
      linkText: "Send report",
      href: "#"
    },
    {
      icon: "https://lexend-nextjs.vercel.app/assets/images/template/icon-community.svg",
      title: "Our community",
      description: "Connect with users.",
      linkText: "Join us now",
      href: "#"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Other ways to reach us</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((method, index) => (
            <div key={index} className="bg-rose-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <img 
                  src={method.icon} 
                  alt={method.title}
                  className="w-12 h-12"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {method.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {method.description}
              </p>
              
              <a 
                href={method.href}
                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
              >
                {method.linkText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;
