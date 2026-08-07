import Counter from '@/components/home/Counter';
import CTA from '@/components/home/CTA';
import Feature from '@/components/home/Feature';
import Hero from '@/components/home/Hero';
import Integration from '@/components/home/Integration';
import Projects from '@/components/home/Projects';
import Services from '@/components/home/Services';
import Testimonial from '@/components/home/Testimonial';
import { defaultMetadata } from '@/utils/generateMetaData';
import getMarkDownData from '@/utils/getMarkDownData';
import { ICaseStudy } from '@/interface';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'RockScale - AI Solutions & Infrastructure',
};

const page = () => {
  const featuredProjects = getMarkDownData<ICaseStudy & { [key: string]: unknown }>(
    'src/data/case-study',
  ).slice(0, 4);

  return (
    <main className="bg-background-2 dark:bg-background-5">
      <Hero />
      <Feature />
      <Services />
      <Integration />
      <Projects featuredProjects={featuredProjects} />
      <Counter />
      <Testimonial />
      <CTA />
    </main>
  );
};

export default page;
