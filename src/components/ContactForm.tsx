
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ fullName: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image section */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://lexend-nextjs.vercel.app/assets/images/template/hero-contact.jpg"
                alt="Person in mustard shirt using phone"
                className="w-full h-[500px] object-cover"
              />
              {/* Testimonial overlay */}
              <div className="absolute bottom-8 left-8 right-8 bg-black bg-opacity-75 rounded-lg p-6 text-white">
                <blockquote className="text-lg mb-4">
                  "This software simplifies the website building process, making it a breeze to manage our online presence."
                </blockquote>
                <div>
                  <div className="font-semibold">David Larry</div>
                  <div className="text-sm text-gray-300">Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Have a question or feedback? Fill out the form below, and we'll get back to you as soon as possible.
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="h-12 bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="h-12 bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your message.."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500 resize-none"
                />
              </div>

              <div className="space-y-4">
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg text-base"
                >
                  Send message
                </Button>
                
                <p className="text-center text-gray-600">
                  Or drop us a message via
                  <a href="mailto:hello@example.com" className="text-teal-600 hover:text-teal-700 ml-1">
                    email
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
