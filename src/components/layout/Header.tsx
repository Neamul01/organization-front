'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigationItems, ctaButton } from '@/config/navigation';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Logo variant="full" theme="dark" height={42} />
        </Link>

        <div className="flex items-center gap-10">
          <nav className="hidden items-center space-x-8 md:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-primary text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="hidden md:flex">
              <Link
                href={ctaButton.href}
                className="hover:text-primary text-white"
              >
                {ctaButton.label}
              </Link>
            </Button>
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
