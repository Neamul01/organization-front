'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-secondary/60 fixed top-7 right-0 left-0 z-50 mx-20 rounded-lg text-white backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-bold text-white">
          Logo
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-10">
          <nav className="hidden items-center space-x-8 md:flex">
            {/* <Link href="/clients" className="text-white hover:text-gray-900">
              Clients
            </Link> */}
            <Link href="/services" className="text-white hover:text-gray-900">
              Services
            </Link>
            {/* <Link href="/blog" className="text-white hover:text-gray-900">
              Blog
            </Link> */}
            <Link href="/about-us" className="text-white hover:text-gray-900">
              About Us
            </Link>
            {/* <Link href="/careers" className="text-white hover:text-gray-900">
              Careers
            </Link> */}
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="hidden md:flex">
              <Link href="/contact" className="text-white hover:text-gray-900">
                Let&apos;s talk!
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
};

export default Header;
