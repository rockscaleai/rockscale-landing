import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import NotFoundContent from './NotFoundContent';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: '404 - Page Not Found | RockScale',
};

const page = () => {
  return <NotFoundContent />;
};

export default page;
