
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Frequently asked questions:</h2>
        </div>

        <div className="bg-rose-50 rounded-2xl p-8">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg bg-white">
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                Do I need to know about how to code?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as 
                JavaScript in order to be able to use Lexend.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg bg-white">
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                Can I use it for commercial projects?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Yes, you can use Lexend for both personal and commercial projects. Our licensing allows 
                for commercial use in most cases.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg bg-white">
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                Can I use it for multiple projects?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Yes, depending on your subscription plan, you can use Lexend across multiple projects. 
                Check your plan details for specific limitations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg bg-white">
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                Can I use this to create and sell a product?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Yes, you can create and sell products built with Lexend. Please review our terms of 
                service for any specific restrictions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg bg-white">
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                What is your refund policy?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                We offer a 30-day money-back guarantee for all our plans. If you're not satisfied, 
                contact our support team for a full refund.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
