import Hero from '@/components/Hero';
import React from 'react';
import SubscriptionSection from '@/components/SubscriptionSection';
import Footer from '@/components/Footer';
import Aboutus from '@/components/Aboutus';
import Everywhere from '@/components/Everywjere';
function About() {
  return (
    <>
  <Hero />
  <Aboutus />
  {/* <Everywhere /> */}
  <SubscriptionSection />
  <Footer />
    </>
  );
}

export default About;
