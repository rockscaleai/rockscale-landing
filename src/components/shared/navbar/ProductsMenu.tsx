'use client';
import { FeatureIcon, ServiceIcon } from '@/icons/menu-icon';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import CompanyMenuLink from './CompanyMenuLink';

const productLinks = [
  {
    title: 'Products Overview',
    description: 'Explore our ecosystem of AI platforms',
    href: '/products',
    icon: FeatureIcon,
  },
  {
    title: 'Enterprise Solutions',
    description: 'Custom platforms tailored for your business',
    href: '/services',
    icon: ServiceIcon,
  },
];

const ProductsMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) => {
  const handleClose = () => setMenuDropdownId(null);

  return (
    <div>
      <div
        className={cn(
          'dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[692px] -translate-x-1/2 bg-transparent',
          menuDropdownId === 'products-mega-menu' ? '!pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="products-mega-menu"
        className={cn(
          'dropdown-menu dark:bg-background-6 border-stroke-1 dark:border-background-7 pointer-events-none absolute top-full left-1/2 z-50 mt-2 flex w-full -translate-x-1/2 items-start gap-y-6 rounded-[20px] border bg-white p-4 opacity-0 transition-all duration-300 md:w-[692px] md:gap-x-8',
          menuDropdownId === 'products-mega-menu'
            ? '!pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        <ul className="w-full space-y-2 md:max-w-[284px]">
          {productLinks.map((link) => (
            <CompanyMenuLink key={link.title} {...link} onClose={handleClose} />
          ))}
        </ul>
        <figure className="flex-1 space-y-3">
          <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-medium">Available Products</p>
          <Link href="/products/qorebit-ai" onClick={handleClose} className="block">
            <figure className="group relative flex min-h-[220px] w-full max-w-full flex-col justify-end overflow-hidden rounded-[14px] bg-secondary p-6">
              <div className="absolute inset-0 z-0 bg-[url('/images/ns-img-169.png')] bg-cover bg-center opacity-40 transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute top-0 right-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-ns-green/30 blur-2xl transition-all duration-500 group-hover:bg-ns-cyan/40" />
              
              <div className="relative z-10">
                <span className="badge badge-green bg-ns-green/20 text-ns-green border-none mb-3">Featured Product</span>
                <p className="text-heading-6 font-medium text-white mb-2">Qorebit AI</p>
                <p className="text-tagline-2 w-full max-w-[280px] font-normal text-white/70">
                  The unified AI infrastructure platform for modern businesses. One API to access all frontier models.
                </p>
              </div>
            </figure>
          </Link>
        </figure>
      </div>
    </div>
  );
};

ProductsMenu.displayName = 'ProductsMenu';
export default ProductsMenu;
