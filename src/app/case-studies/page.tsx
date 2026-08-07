import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';
import CaseStudiesHero from '@/components/case-studies/CaseStudiesHero';
import FeaturedSuccessStory from '@/components/case-studies/FeaturedSuccessStory';
import CaseStudyGrid from '@/components/case-studies/CaseStudyGrid';
import Industries from '@/components/case-studies/Industries';
import BusinessProblems from '@/components/case-studies/BusinessProblems';
import DeliveryFramework from '@/components/case-studies/DeliveryFramework';
import OutcomesStats from '@/components/case-studies/OutcomesStats';
import TechStack from '@/components/case-studies/TechStack';
import CaseStudyFaq from '@/components/case-studies/CaseStudyFaq';
import Testimonial from '@/components/home/Testimonial';
import Insights from '@/components/home/Insights';
import CTA from '@/components/shared/cta/CTA';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Case Studies & Success Stories | RockScale',
  description: 'Explore how RockScale has helped startups, SMEs, and mid-size companies unlock growth through AI and Data Engineering.',
};

const CaseStudiesPage = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5">
      <CaseStudiesHero />
      <FeaturedSuccessStory />
      <CaseStudyGrid />
      <Industries />
      <BusinessProblems />
      <DeliveryFramework />
      <OutcomesStats />
      <TechStack />
      <Testimonial />
      <Insights />
      <CaseStudyFaq />
      <CTA
        className="dark:bg-background-7 bg-white pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[100px] lg:pb-[100px]"
        badgeClass="!badge-green"
        badgeText="Let’s Build Your Next AI Success Story"
        ctaHeading="Ready to transform your business?"
        description="Schedule a consultation with our experts to discuss your business challenges and how our AI, data, and cloud solutions can help you scale."
        ctaBtnText="Book a Discovery Call"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

CaseStudiesPage.displayName = 'CaseStudiesPage';
export default CaseStudiesPage;
