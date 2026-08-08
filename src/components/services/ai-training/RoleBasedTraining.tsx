'use client';
import { TabProvider } from '@/context/TabContext';
import RevealAnimation from '../../animation/RevealAnimation';
import RoleBasedTrainingTabContent from './RoleBasedTrainingTabContent';
import RoleBasedTrainingTabList from './RoleBasedTrainingTabList';

const RoleBasedTraining = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[100px]">
      <div className="main-container">
        <div className="space-y-5 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan">Role-Based AI Training</span>
          </RevealAnimation>
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.3}>
              <h2>Training tailored to the way your teams work.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mx-auto max-w-[600px]">
              Our training is not one-size-fits-all. We customize our curriculum to focus on the specific tools, workflows, and challenges relevant to each team in your organization.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.5}>
          <div className="py-[70px]">
            <TabProvider defaultValue={0}>
              <RoleBasedTrainingTabList />
              <RoleBasedTrainingTabContent />
            </TabProvider>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default RoleBasedTraining;
