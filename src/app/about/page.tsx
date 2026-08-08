import AboutHero from '@/components/about/AboutHero';
import Approach from '@/components/about/Approach';
import Capabilities from '@/components/about/Capabilities';
import AboutCTA from '@/components/about/CTA';
import Differentiators from '@/components/about/Differentiators';
import MissionVision from '@/components/about/MissionVision';
import OurStory from '@/components/about/OurStory';
import Team from '@/components/about/Team';
import TechStack from '@/components/about/TechStack';
import Values from '@/components/about/Values';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import Faq from '@/components/home/Faq';
import IndustrySolutions from '@/components/home/IndustrySolutions';
import { defaultMetadata } from '@/utils/generateMetaData';
import GlobalPresenceClient from '@/components/about/GlobalPresenceClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'About Us | RockScale - AI Solutions & Engineering',
  description: 'Learn about RockScale, an AI Solutions, Data Engineering and Cloud Infrastructure consulting company.',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <AboutHero />
      <OurStory />
      <MissionVision />
      <Values />
      <Differentiators />
      <Capabilities />
      <Approach />
      <WhyChooseUs />
      <Team />
      <TechStack />
      <IndustrySolutions />
      <GlobalPresenceClient />
      <Faq />
      <AboutCTA />
    </main>
  );
};

export default page;
