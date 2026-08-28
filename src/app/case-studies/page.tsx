import CaseStudiesPageContent from '@/components/case-studies/CaseStudiesPageContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Case Studies & Success Stories | RockScale',
  description: 'Explore how RockScale has helped startups, SMEs, and mid-size companies unlock growth through AI and Data Engineering.',
};

const CaseStudiesPage = () => {
  return <CaseStudiesPageContent />;
};

export default CaseStudiesPage;
