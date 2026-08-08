import ForwardDeployedEngineerPageContent from '@/components/services/forward-deployed-engineer/ForwardDeployedEngineerPageContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Forward Deployed Engineer | RockScale',
  description:
    'Embed experienced AI, software, data and cloud engineers directly with your team to solve complex technical problems and move from idea to production faster.',
};

const ForwardDeployedEngineerPage = () => {
  return <ForwardDeployedEngineerPageContent />;
};

export default ForwardDeployedEngineerPage;