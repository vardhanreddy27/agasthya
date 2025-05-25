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
import { ThreeDMarqueeDemo } from '@/components/ThreeDMarqueeDemo';
import { FeaturesSectionDemo } from '@/components/FeaturesSectionDemo';
import HeroSection from '@/components/HeroSection';
import Band from '@/components/Band';
import Animation from '@/components/Animation';
import Welcome from '@/components/Welcom';
function index() {
  return (
    <div>
      <Hero />
      {/* <Animation /> */}
      <Welcome />

      <Band />
<FeaturesSectionDemo />
<Ingredients />
      <HeroSection />
      <Certified />
            <Infinate />

      <Features />
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