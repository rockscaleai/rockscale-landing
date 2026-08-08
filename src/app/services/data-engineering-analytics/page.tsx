import { Metadata } from 'next';
import DataEngineeringAnalyticsPageContent from '@/components/services/data-engineering-analytics/DataEngineeringAnalyticsPageContent';

export const metadata: Metadata = {
  title: 'Data Engineering & Analytics | RockScale',
  description:
    'RockScale helps businesses build reliable data pipelines, modern data platforms, analytics systems and AI-ready data foundations.',
};

const DataEngineeringAnalytics = () => {
  return <DataEngineeringAnalyticsPageContent />;
};

export default DataEngineeringAnalytics;