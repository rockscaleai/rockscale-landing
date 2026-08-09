'use client';

import Faq from '@/components/shared/Faq';
import faqData from '@/data/json/faq/executive-ai-training-faq.json';

const ExecFaq = () => {
  return (
    <section className="py-20 lg:py-[120px] bg-white dark:bg-background-7">
      <div className="main-container">
        <Faq faqData={faqData} />
      </div>
    </section>
  );
};

ExecFaq.displayName = 'ExecFaq';
export default ExecFaq;