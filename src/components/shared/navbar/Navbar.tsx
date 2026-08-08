'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { mobileMenuData } from '@/data/navbar-data';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import rockscaleLogo from '@public/images/Rockscale_logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MobileMenu from '../mobile-menu/MobileMenu';
import MobileMenuButton from '../mobile-menu/MobileMenuButton';
import ProductsMenu from './ProductsMenu';

const dropdownNavItems = [
  { label: 'Products', dataMenu: 'products-mega-menu', MenuComponent: ProductsMenu },
];

const plainNavItemsBefore = [
  { label: 'About Us', href: '/about' },
];

const plainNavItemsAfter = [
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact Us', href: '/contact-us' },
];

const Navbar = () => {
  const [menuDropdownId, setMenuDropdownId] = useState<string | null>(null);

  const { isScrolled } = useNavbarScroll(150);

  const handleMenuHover = (dropdownId?: string | null) => {
    setMenuDropdownId(dropdownId || null);
  };

  return (
    <MobileMenuProvider>
      <header
        onMouseLeave={() => handleMenuHover(null)}
        className={cn(
          'lp:!max-w-[1290px] fixed top-5 left-1/2 z-50 mx-auto w-full max-w-[350px] -translate-x-1/2 transition-all duration-500 min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]',
          isScrolled && 'top-2',
        )}>
        <RevealAnimation direction="up" offset={100} delay={0.1} instant>
          <div
            className={cn(
              'border-stroke-2 bg-accent mx-auto flex items-center justify-between rounded-full border px-2.5 py-2.5 xl:py-0',
            )}>
            <div className="flex items-center justify-center">
              <Link href="/" className="inline-flex items-center">
                <span className="sr-only">Home</span>
                <figure className="hidden lg:block">
                  <Image src={rockscaleLogo} alt="RockScale" className="h-auto w-[72px]" priority />
                </figure>
                <figure className="block max-w-[22px] lg:hidden">
                  <Image src={rockscaleLogo} alt="RockScale" className="h-auto w-full" priority />
                </figure>
              </Link>
            </div>
            <nav className="hidden items-center xl:flex">
              <ul className="flex items-center">
                {plainNavItemsBefore.map(({ label, href }) => (
                  <li key={label} className="py-2.5">
                    <Link
                      href={href}
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex cursor-pointer items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                      <span>{label}</span>
                    </Link>
                  </li>
                ))}
                {dropdownNavItems.map(({ label, dataMenu, MenuComponent }) => (
                  <li
                    key={label}
                    className="group/item relative cursor-pointer py-2.5"
                    data-menu={dataMenu}
                    onMouseEnter={() => handleMenuHover(dataMenu)}>
                    <button
                      type="button"
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex cursor-pointer items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                      <span>{label}</span>
                      <span className="block origin-center translate-y-px transition-all duration-300 group-hover/item:rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </button>
                    <MenuComponent menuDropdownId={menuDropdownId} setMenuDropdownId={setMenuDropdownId} />
                  </li>
                ))}
                {plainNavItemsAfter.map(({ label, href }) => (
                  <li key={label} className="py-2.5">
                    <Link
                      href={href}
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex cursor-pointer items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                      <span>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden items-center justify-center xl:flex">
              <Link href="/contact-us" className="btn btn-md btn-primary hover:btn-white-dark" style={{backgroundColor: '#061225', borderColor: '#061225', color: '#fff'}}>
                <span>Book a consultation</span>
              </Link>
            </div>
            <MobileMenuButton />
          </div>
        </RevealAnimation>
      </header>
      <MobileMenu menuData={mobileMenuData} />
    </MobileMenuProvider>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
