import QorebitArchitecture from '@/components/products/qorebit/QorebitArchitecture';
import QorebitBenefits from '@/components/products/qorebit/QorebitBenefits';
import QorebitCoreFeatures from '@/components/products/qorebit/QorebitCoreFeatures';
import QorebitDeveloperExperience from '@/components/products/qorebit/QorebitDeveloperExperience';
import QorebitFaq from '@/components/products/qorebit/QorebitFaq';
import QorebitFinalCTA from '@/components/products/qorebit/QorebitFinalCTA';
import QorebitHero from '@/components/products/qorebit/QorebitHero';
import QorebitStats from '@/components/products/qorebit/QorebitStats';
import QorebitStory from '@/components/products/qorebit/QorebitStory';
import QorebitUseCases from '@/components/products/qorebit/QorebitUseCases';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Qorebit AI | AI Infrastructure Platform — RockScale Products',
  description:
    'Access OpenAI, Anthropic, Google, Mistral and all frontier AI models through a single OpenAI-compatible API. Unified billing, model routing and enterprise workspace management.',
};

const QorebitPage = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5">
      {/* 1. Hero */}
      <QorebitHero />

      {/* 2. What is Qorebit — Storytelling */}
      <QorebitStory />

      {/* 3. Key Benefits */}
      <QorebitBenefits />

      {/* 4. Platform Architecture */}
      <QorebitArchitecture />

      {/* 5. Core Platform Features (12 features) */}
      <QorebitCoreFeatures />

      {/* 6. Developer Experience */}
      <QorebitDeveloperExperience />

      {/* 7. Use Cases */}
      <QorebitUseCases />

      {/* 8. Platform Statistics */}
      <QorebitStats />

      {/* 9. FAQs */}
      <QorebitFaq />

      {/* 10. Final CTA */}
      <QorebitFinalCTA />
    </main>
  );
};

export default QorebitPage;
