import QorebitPageContent from '@/components/products/qorebit/QorebitPageContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Qorebit AI | AI Infrastructure Platform — RockScale',
  description:
    'Access OpenAI, Anthropic, Google, and Mistral through a single OpenAI-compatible API. Unified billing, model routing and enterprise workspace management.',
};

const QorebitPage = () => {
  return <QorebitPageContent />;
};

export default QorebitPage;
