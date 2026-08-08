'use client';

import AIAdoptionProblem from '@/components/services/ai-training/AIAdoptionProblem';
import AITrainingFaq from '@/components/services/ai-training/AITrainingFaq';
import AITrainingHero from '@/components/services/ai-training/AITrainingHero';
import AITrainingTestimonials from '@/components/services/ai-training/AITrainingTestimonials';
import CustomizedForYourBusiness from '@/components/services/ai-training/CustomizedForYourBusiness';
import FinalCTA from '@/components/services/ai-training/FinalCTA';
import HandsOnLearning from '@/components/services/ai-training/HandsOnLearning';
import Outcomes from '@/components/services/ai-training/Outcomes';
import RoleBasedTraining from '@/components/services/ai-training/RoleBasedTraining';
import TrainingApproach from '@/components/services/ai-training/TrainingApproach';
import TrainingFormats from '@/components/services/ai-training/TrainingFormats';
import TrainingPrograms from '@/components/services/ai-training/TrainingPrograms';
import TrainingTechnologyStack from '@/components/services/ai-training/TrainingTechnologyStack';
import WhatWeTrain from '@/components/services/ai-training/WhatWeTrain';
import WhoWeTrain from '@/components/services/ai-training/WhoWeTrain';
import WhyRockScale from '@/components/services/ai-training/WhyRockScale';
import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';

const AITrainingPageContent = () => {
  return (
    <main>
      <Navbar />
      <AITrainingHero />
      <div id="problem">
        <AIAdoptionProblem />
      </div>
      <div id="solution">
        <WhatWeTrain />
        <TrainingPrograms />
      </div>
      <div id="who-we-train">
        <WhoWeTrain />
        <RoleBasedTraining />
      </div>
      <div id="approach">
        <TrainingApproach />
        <HandsOnLearning />
        <CustomizedForYourBusiness />
        <TrainingFormats />
      </div>
      <div id="outcomes">
        <Outcomes />
        <TrainingTechnologyStack />
      </div>
      <div id="why-rockscale">
        <WhyRockScale />
        <AITrainingTestimonials />
      </div>
      <div id="faq">
        <AITrainingFaq />
      </div>
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default AITrainingPageContent;
