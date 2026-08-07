import TechStack from '@/components/about/TechStack';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import IndustrySolutions from '@/components/home/IndustrySolutions';
import Projects from '@/components/home/Projects';
import CoreServices from '@/components/services/CoreServices';
import DeliveryProcess from '@/components/services/DeliveryProcess';
import EngagementModels from '@/components/services/EngagementModels';
import ServiceCTA from '@/components/services/ServiceCTA';
import ServiceFaq from '@/components/services/ServiceFaq';
import ServiceHero from '@/components/services/ServiceHero';
import { ICaseStudy } from '@/interface';
import { defaultMetadata } from '@/utils/generateMetaData';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Services | RockScale - AI Solutions & Engineering',
  description: 'Automate operations, modernize infrastructure, and build AI-powered products with RockScale.',
};

const page = () => {
  const featuredProjects = getMarkDownData<ICaseStudy & { [key: string]: unknown }>(
    'src/data/case-study',
  ).slice(0, 4);

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <ServiceHero />
      <CoreServices />
      <IndustrySolutions />
      <WhyChooseUs />
      <DeliveryProcess />
      <TechStack />
      <Projects featuredProjects={featuredProjects} />
      <EngagementModels />
      <ServiceFaq />
      <ServiceCTA />
    </main>
  );
};

export default page;
