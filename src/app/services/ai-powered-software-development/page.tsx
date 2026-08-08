import { Metadata } from 'next';
import AIPoweredSoftwareDevelopmentPageContent from '@/components/services/ai-powered-software-development/AIPoweredSoftwareDevelopmentPageContent';

export const metadata: Metadata = {
  title: 'AI-Powered Software Development | RockScale',
  description:
    'RockScale builds production-ready AI applications, agents, copilots and intelligent software that help businesses automate workflows, improve productivity and create new digital experiences.',
};

const AIPoweredSoftwareDevelopment = () => {
  return <AIPoweredSoftwareDevelopmentPageContent />;
};

export default AIPoweredSoftwareDevelopment;