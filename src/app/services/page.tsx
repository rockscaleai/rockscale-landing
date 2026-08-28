import ServicesIndexPageContent from '@/components/services/ServicesIndexPageContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Services | RockScale - AI Solutions & Engineering',
  description: 'Automate operations, modernize infrastructure, and build AI-powered products with RockScale.',
};

const page = () => {
  return <ServicesIndexPageContent />;
};

export default page;
