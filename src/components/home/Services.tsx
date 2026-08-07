import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Services = () => {
  return (
    <section className="bg-[url('/images/ns-img-169.png')] bg-cover bg-top bg-no-repeat pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mx-auto mb-14 max-w-[750px] space-y-5 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Services</span>
          </RevealAnimation>
          <div>
            <RevealAnimation delay={0.3}>
              <h2 className="mb-3">What we build for you.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mx-auto max-w-[600px]">
                From AI-powered copilots to enterprise data infrastructure — our five core offerings cover every layer of your AI transformation.
              </p>
            </RevealAnimation>
          </div>
        </div>
        {/* Service Cards */}
        <div className="mx-auto mb-10 grid max-w-[1010px] grid-cols-12 space-y-8 md:gap-8 md:space-y-0 lg:mb-18">
          <RevealAnimation delay={0.5}>
            <div className="col-span-12 space-y-6 rounded-[20px] bg-white p-8 sm:min-h-[288px] md:col-span-6 lg:col-span-7">
              <div className="w-full">
                <span className="ns-shape-8 text-secondary text-[52px]" />
              </div>
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6">Custom AI Solutions & LLM Integration.</h5>
                <p className="max-w-[430px]">
                  Build custom AI tools, GenAI copilots, chatbots, document intelligence, or RAG-based systems. Automate knowledge tasks and streamline operations.
                </p>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="col-span-12 space-y-6 rounded-[20px] bg-white p-8 sm:min-h-[288px] md:col-span-6 lg:col-span-5">
              <div className="w-full">
                <span className="ns-shape-35 text-secondary text-[52px]" />
              </div>
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6">AI-Powered Business Intelligence.</h5>
                <p>Move from descriptive to predictive analytics with ML-driven dashboards, customer segmentation, and forecasting.</p>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.7}>
            <div className="col-span-12 space-y-6 rounded-[20px] bg-white p-8 sm:min-h-[288px] md:col-span-4 lg:col-span-4">
              <div className="w-full">
                <span className="ns-shape-41 text-secondary text-[52px]" />
              </div>
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6">Data Integration.</h5>
                <p className="max-w-[430px]">
                  Build robust data pipelines and ELT/ETL architectures using Snowflake, BigQuery, and dbt.
                </p>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.8}>
            <div className="col-span-12 space-y-6 rounded-[20px] bg-white p-8 sm:min-h-[288px] md:col-span-4 lg:col-span-4">
              <div className="w-full">
                <span className="ns-shape-19 text-secondary text-[52px]" />
              </div>
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6">Data Governance.</h5>
                <p className="max-w-[430px]">
                  Ensure GDPR compliance, data quality monitoring, and lineage tracking for data flows and models.
                </p>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.9}>
            <div className="col-span-12 space-y-6 rounded-[20px] bg-white p-8 sm:min-h-[288px] md:col-span-4 lg:col-span-4">
              <div className="w-full">
                <span className="ns-shape-31 text-secondary text-[52px]" />
              </div>
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6">MLOps Consulting.</h5>
                <p className="max-w-[430px]">
                  Guide businesses in setting up MLOps pipelines and moving models from PoC to production safely.
                </p>
              </div>
            </div>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.9}>
          <div className="flex items-center justify-center">
            <LinkButton
              href="/contact-us"
              className="btn btn-secondary hover:btn-primary btn-md mx-auto w-[85%] md:w-auto">
              Talk to an expert
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Services;
