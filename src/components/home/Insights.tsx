import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCard from '../shared/card/BlogCard';
import LinkButton from '../ui/button/LinkButton';

const Insights = () => {
  const blogs = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs').slice(0, 3);

  return (
    <section
      className="py-16 md:py-20 lg:py-[100px]"
      aria-labelledby="insights-heading">
      <div className="main-container">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-[750px] space-y-5 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Insights</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 id="insights-heading">
                Insights on AI, Data &amp; Cloud
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[600px]">
                Practical thinking from our engineers and strategists on building AI systems that actually
                work in production.
              </p>
            </RevealAnimation>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {blogs.map((blog, index) => (
            <RevealAnimation key={blog.slug} delay={0.3 + index * 0.1}>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <BlogCard blog={blog} />
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* View all CTA */}
        <RevealAnimation delay={0.7}>
          <div className="mt-14 flex items-center justify-center">
            <LinkButton
              href="/blog"
              className="btn btn-secondary hover:btn-primary btn-md mx-auto w-[85%] md:w-auto">
              Read all insights
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

Insights.displayName = 'Insights';
export default Insights;
