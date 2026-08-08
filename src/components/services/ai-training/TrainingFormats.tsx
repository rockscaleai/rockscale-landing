'use client';
import RevealAnimation from '../../animation/RevealAnimation';
import LinkButton from '../../ui/button/LinkButton';

const TrainingFormats = () => {
  return (
    <section className="bg-secondary relative overflow-hidden pb-16 pt-16 md:pb-20 md:pt-20 lg:pb-[100px] lg:pt-[100px]" aria-labelledby="training-formats-heading">
      <div className="main-container">
        <div className="mx-auto max-w-[760px] text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-blur mb-5 text-ns-yellow">Flexible Training Formats</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="training-formats-heading" className="mb-4 text-white">
            Learn in the format that works for you.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto mb-8 max-w-[620px] text-white/60">
            We offer a range of training formats to fit your team’s needs, schedule, and learning style. Whether you prefer in-person workshops, virtual classrooms, or self-paced online courses, we have a solution that will work for you.
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <RevealAnimation delay={0.4}>
                <div className="bg-white/5 rounded-lg p-8 text-center h-full">
                    <h3 className="text-2xl text-white mb-4">On-Site Workshops</h3>
                    <p className="text-white/60">
                    Bring our expert instructors to your office for intensive, in-person training sessions customized to your team’s needs.
                    </p>
                </div>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
                <div className="bg-white/5 rounded-lg p-8 text-center h-full">
                    <h3 className="text-2xl text-white mb-4">Virtual Classrooms</h3>
                    <p className="text-white/60">
                    Participate in live, interactive training sessions from anywhere in the world. Our virtual classrooms are engaging and collaborative.
                    </p>
                </div>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
                <div className="bg-white/5 rounded-lg p-8 text-center h-full">
                    <h3 className="text-2xl text-white mb-4">Self-Paced Online</h3>
                    <p className="text-white/60">
                    Learn at your own pace with our comprehensive online courses. Access high-quality video content, exercises, and projects anytime.
                    </p>
                </div>
            </RevealAnimation>
        </div>
        <RevealAnimation delay={0.7} className="text-center mt-12">
          <LinkButton
            href="/contact-us"
            className="btn btn-white btn-md hover:btn-primary">
            Discuss Your Training Needs
          </LinkButton>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default TrainingFormats;
