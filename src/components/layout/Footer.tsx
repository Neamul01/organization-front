'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const navigation = {
    main: [
      { name: 'Clients', href: '/clients' },
      { name: 'Services', href: '/services' },
      { name: 'Blog', href: '/blog' },
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact Us', href: '/contact' },
    ],
    social: [
      { name: 'LinkedIn', icon: Linkedin, href: '#' },
      { name: 'GitHub', icon: Github, href: '#' },
      { name: 'Twitter', icon: Twitter, href: '#' },
      { name: 'Instagram', icon: Instagram, href: '#' },
      { name: 'YouTube', icon: Youtube, href: '#' },
    ],
  };

  return (
    <footer className="dark-footer-bg text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            {/* <h3 className="mb-4 text-xl font-bold">Company Name</h3> */}
            <Logo variant="full" theme="dark" height={42} />
            <p className="mb-4 text-gray-400">
              Building high-quality software that scales. From idea to launch,
              we&apos;re with you every step of the way.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <item.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Navigation</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Intelliduos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
