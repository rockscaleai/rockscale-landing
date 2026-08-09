'use client';

import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  faqData: FaqItem[];
}

const Faq: React.FC<FaqProps> = ({ faqData }) => {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      <div>
        <RevealAnimation>
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-secondary/70 dark:text-accent/70 text-lg">
              Find answers to common questions about our executive AI training program.
            </p>
          </div>
        </RevealAnimation>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          {faqData.map((faq, index) => (
            <RevealAnimation key={index} delay={0.1 * index}>
              <div className="border border-secondary/20 dark:border-accent/20 rounded-lg">
                <button
                  onClick={() => toggle(index)}
                  className="flex items-center justify-between w-full p-6 cursor-pointer">
                  <h4 className="font-semibold text-lg text-left">{faq.question}</h4>
                  <span
                    className={`transform transition-transform duration-300 ${open === index ? 'rotate-45' : ''}`}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-secondary dark:stroke-accent">
                      <path
                        d="M12 5V19M5 12H19"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                {open === index && (
                  <div className="p-6 pt-0">
                    <p className="text-secondary/70 dark:text-accent/70">{faq.answer}</p>
                  </div>
                )}
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

Faq.displayName = 'Faq';
export default Faq;