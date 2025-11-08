import React from 'react';
import ServicesHero from './_components/Hero';
import ServicesGrid from './_components/ServicesGrid';
import WhyChooseUs from './_components/WhyChooseUs';
import CTASection from './_components/CTA';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Services - Leads To Company | Comprehensive IT Solutions",
  description: "Explore Leads To Company' comprehensive range of IT services including web development, mobile apps, cloud services, AI/ML, DevOps, and more. Transform your business with our expert solutions.",
};


// Main Services Page
const ServicesPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        <ServicesHero />
        <ServicesGrid />
        <WhyChooseUs />
        <CTASection />
      </div>
    </>
  );
};

export default ServicesPage;