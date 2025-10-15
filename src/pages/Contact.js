import Hero from '@/components/Hero';
import React from 'react';
import SubscriptionSection from '@/components/SubscriptionSection';
import Footer from '@/components/Footer';
import { FeaturesSectionDemo } from '@/components/FeaturesSectionDemo';
import ContactBanner from '@/components/ContactBanner';
function Contact() {
  return (
    <> 
        <Hero />
        <ContactBanner />
        <FeaturesSectionDemo />
  <SubscriptionSection />
  <Footer />
    </>
  )
}

export default Contact
