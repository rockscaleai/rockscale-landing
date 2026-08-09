import ExecAIGap from './ExecAIGap';
import ExecBusinessLens from './ExecBusinessLens';
import ExecCTA from './ExecCTA';
import ExecFaq from './ExecFaq';
import ExecHero from './ExecHero';
import ExecKnowledgeGrid from './ExecKnowledgeGrid';
import ExecLandscape from './ExecLandscape';
import ExecOpportunities from './ExecOpportunities';
import ExecTestimonials from './ExecTestimonials';
import ExecWorkshop from './ExecWorkshop';

const ExecutiveAIPageContent = () => {
  return (
    <main>
      <ExecHero />
      <ExecAIGap />
      <ExecKnowledgeGrid />
      <ExecBusinessLens />
      <ExecLandscape />
      <ExecOpportunities />
      <ExecWorkshop />
      <ExecTestimonials />
      <ExecFaq />
      <ExecCTA />
    </main>
  );
};

ExecutiveAIPageContent.displayName = 'ExecutiveAIPageContent';
export default ExecutiveAIPageContent;