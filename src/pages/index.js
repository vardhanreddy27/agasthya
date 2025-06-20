import Hero from '@/components/Hero'
import React from 'react'
import 'lenis/dist/lenis.css'
import { TimelineDemo } from '@/components/TimelineDemo';
import Features from '@/components/Features';
import Infinate from '@/components/Infinate';
import { WorldMapDemo } from '@/components/WorldMapDemo';
import Footer from '@/components/Footer';
import Certified from '@/components/Certified';
import LeadershipTeam from '@/components/LeadershipTeam';
import SubscriptionSection from '@/components/SubscriptionSection';
import Banner from '@/components/Banner';
import Ingredients from '@/components/Ingredients';
import { FeaturesSectionDemo } from '@/components/FeaturesSectionDemo';
import HeroSection from '@/components/HeroSection';
import Welcome from '@/components/Welcom';
import Ourpl from '@/components/Ourpl';
import Organic from '@/components/Organic';
function index() {
  return (
    <div>
      <Hero />
      <Welcome />
<FeaturesSectionDemo />

<Ingredients />
      <HeroSection />
      <Certified />
            <Infinate />

      <Features />
      <Organic />
      <Ourpl />
      <Banner />
      <TimelineDemo />
            <LeadershipTeam />

      <WorldMapDemo />
      <SubscriptionSection />
      <Footer />
    </div>
  )
}
export default index