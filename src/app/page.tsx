import Counter from '@/components/home/Counter';
import CTA from '@/components/home/CTA';
import Faq from '@/components/home/Faq';
import Feature from '@/components/home/Feature';
import Hero from '@/components/home/Hero';
import IndustrySolutions from '@/components/home/IndustrySolutions';
import Insights from '@/components/home/Insights';
import Journey from '@/components/home/Journey';
import Projects from '@/components/home/Projects';
import Services from '@/components/home/Services';
import Testimonial from '@/components/home/Testimonial';
import TrustedBy from '@/components/home/TrustedBy';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import { defaultMetadata } from '@/utils/generateMetaData';
import getMarkDownData from '@/utils/getMarkDownData';
import { ICaseStudy } from '@/interface';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'RockScale — AI Solutions, Data Engineering & Cloud Infrastructure',
  description:
    'RockScale helps startups, SMEs, and mid-sized companies accelerate growth with custom AI solutions, data engineering, and cloud infrastructure consulting.',
};

const page = () => {
  const featuredProjects = getMarkDownData<ICaseStudy & { [key: string]: unknown }>(
    'src/data/case-study',
  ).slice(0, 4);

  return (
    <main className="bg-background-2 dark:bg-background-5">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Trusted By — logo cloud */}
      <TrustedBy />

      {/* 3. Why RockScale — problems we solve */}
      <Feature />

      {/* 4. Core Services — 6-service grid */}
      <Services />

      {/* 5. AI Transformation Journey — 6-step timeline */}
      <Journey />

      {/* 6. Industry Solutions — 6 industries grid */}
      <IndustrySolutions />

      {/* 7. Why Choose RockScale — differentiators split */}
      <WhyChooseUs />

      {/* 8. Featured Case Studies */}
      <Projects featuredProjects={featuredProjects} />

      {/* 9. Metrics / Impact */}
      <Counter />

      {/* 10. Client Testimonials */}
      <Testimonial />

      {/* 11. Insights & Resources */}
      <Insights />

      {/* 12. Frequently Asked Questions */}
      <Faq />

      {/* 13. Final CTA */}
      <CTA />
    </main>
  );
};

export default page;
