import FeaturedProduct from '@/components/products/FeaturedProduct';
import ProductPhilosophy from '@/components/products/ProductPhilosophy';
import ProductRoadmap from '@/components/products/ProductRoadmap';
import ProductsHero from '@/components/products/ProductsHero';
import WhyWeBuildProducts from '@/components/products/WhyWeBuildProducts';
import CTA from '@/components/home/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Products | RockScale — AI Platforms for Modern Businesses',
  description:
    'Explore the RockScale product ecosystem. Enterprise AI platforms and intelligent software built from real consulting experience.',
};

const ProductsPage = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5">
      <ProductsHero />
      <ProductPhilosophy />
      <FeaturedProduct />
      <WhyWeBuildProducts />
      <ProductRoadmap />
      <CTA />
    </main>
  );
};

export default ProductsPage;
