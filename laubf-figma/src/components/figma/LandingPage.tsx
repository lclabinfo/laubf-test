import React from 'react';
import Hero from '../../components/Hero';
import IntroSection from './IntroSection';
import EventsSection from './EventsSection';
import MessageSection from './MessageSection';
import MinistriesSection from './MinistriesSection';
import InstagramSection from './InstagramSection';
import VisitUsSection from './VisitUsSection';
import ImNewSection from './ImNewSection';
import CampusMinistriesSection from './CampusMinistriesSection';
import Footer from './Footer';

interface LandingPageProps {
  onNavigate: (page: any, id?: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="bg-white w-full overflow-x-hidden">
      <Hero />
      <IntroSection onNavigate={onNavigate} />
      <EventsSection onNavigate={onNavigate} />
      <MessageSection onNavigate={onNavigate} />
      <MinistriesSection onNavigate={onNavigate} />
      <InstagramSection />
      <VisitUsSection />
      <ImNewSection onNavigate={onNavigate} />
      <CampusMinistriesSection />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
