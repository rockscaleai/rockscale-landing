'use client';
import RevealAnimation from '../../animation/RevealAnimation';
import {SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiHuggingface, SiDatabricks, SiStreamlit, SiGooglecloud} from 'react-icons/si';

const technologies = [
  { id: 1, icon: SiTensorflow, label: 'TensorFlow' },
  { id: 2, icon: SiPytorch, label: 'PyTorch' },
  { id: 3, icon: SiScikitlearn, label: 'Scikit-learn' },
  { id: 5, icon: SiPandas, label: 'Pandas' },
  { id: 6, icon: SiNumpy, label: 'NumPy' },
  { id: 8, icon: SiHuggingface, label: 'Hugging Face' },
  { id: 9, icon: SiDatabricks, label: 'Databricks' },
  { id: 10, icon: SiStreamlit, label: 'Streamlit' },
  { id: 12, icon: SiGooglecloud, label: 'Google Cloud' },
];

const TrainingTechnologyStack = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="tech-stack-heading">
      <div className="main-container">
        <div className="mx-auto mb-10 max-w-[750px] space-y-5 text-center md:mb-[70px]">
            <RevealAnimation delay={0.2}>
                <span className="badge badge-green">Hands-On with Leading Tools</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
                <h2 id="tech-stack-heading" className="mb-3">Our Training Technology Stack</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
                <p className="text-secondary/60 mx-auto max-w-[600px]">
                We train your teams on the most popular and powerful AI and machine learning technologies used in the industry today, ensuring they can build and deploy cutting-edge solutions.
                </p>
            </RevealAnimation>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, idx) => (
            <RevealAnimation key={tech.id} delay={0.5 + idx * 0.1}>
                <div className="bg-background-3 dark:bg-background-7 rounded-lg p-8 text-center h-full flex flex-col items-center justify-center">
                    <tech.icon className="text-5xl mb-4 text-primary" />
                    <h3 className="text-lg font-semibold">{tech.label}</h3>
                </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingTechnologyStack;
