
import React from 'react';
import Navigation from '../components/Navigation';
import ContactHero from '../components/ContactHero';
import ContactForm from '../components/ContactForm';
import ContactMethods from '../components/ContactMethods';
import FAQ from '../components/FAQ';
import BrandTrust from '../components/BrandTrust';
import ArticleInsights from '../components/ArticleInsights';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ContactHero />
      <ContactForm />
      <ContactMethods />
      <FAQ />
      <BrandTrust />
      <ArticleInsights />
      <Footer />
    </div>
  );
};

export default Contact;
