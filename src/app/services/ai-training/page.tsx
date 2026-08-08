import AITrainingPageContent from '@/components/services/ai-training/AITrainingPageContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'AI Training for Teams | RockScale',
  description:
    'Practical AI training for teams. RockScale helps organizations build AI skills, improve productivity, automate workflows and adopt AI responsibly.',
};

const AITrainingPage = () => {
  return <AITrainingPageContent />;
};

export default AITrainingPage;
