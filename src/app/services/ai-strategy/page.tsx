import AIStrategyRoadmapPageContent from '@/components/services/ai-strategy/AIStrategyRoadmapPageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Strategy & Roadmap | RockScale',
  description:
    'RockScale helps businesses identify high-value AI opportunities, assess readiness and build practical AI roadmaps that move from strategy to production.',
};

export default function AIStrategyRoadmapPage() {
  return <AIStrategyRoadmapPageContent />;
}
