import AboutHero from '@/components/about/AboutHero';
import Capabilities from '@/components/about/Capabilities';
import MissionVision from '@/components/about/MissionVision';
import OurStory from '@/components/about/OurStory';
import Values from '@/components/about/Values';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import Faq from '@/components/home/Faq';
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
      <Capabilities />
      <WhyChooseUs />
      <GlobalPresenceClient />
      <Faq />
    </main>
  );
};

export default page;
