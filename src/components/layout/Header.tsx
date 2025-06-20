'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigationItems, ctaButton } from '@/config/navigation';
import Logo from './Logo';
import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu on outside click, but ignore clicks on the menu button
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (
        (menuRef.current && menuRef.current.contains(e.target as Node)) ||
        (buttonRef.current && buttonRef.current.contains(e.target as Node))
      ) {
        return;
      }
      setMenuOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

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

          <div className="flex items-center md:space-x-4">
            <Button className="hidden md:flex">
              <Link
                href={ctaButton.href}
                className="hover:text-primary text-white"
              >
                {ctaButton.label}
              </Link>
            </Button>
            <button
              className="md:hidden"
              aria-label="Open menu"
              ref={buttonRef}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <Menu className="h-6 w-6 text-white" />
            </button>
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  ref={menuRef}
                  className="absolute top-16 right-0 left-0 z-50 flex w-full flex-col items-stretch rounded-none border-t border-white/10 bg-black py-4 shadow-xl md:hidden"
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.22, ease: 'easeInOut' }}
                >
                  {navigationItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-500/10 hover:text-blue-400"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="px-6 pt-2">
                    <Button
                      className="w-full py-3 text-lg"
                      onClick={() => setMenuOpen(false)}
                    >
                      <Link
                        href={ctaButton.href}
                        className="block w-full text-center"
                      >
                        {ctaButton.label}
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
