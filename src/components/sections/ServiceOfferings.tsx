'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

const offerings = [
  {
    value: 'kickstart',
    title: 'Kickstart Your Product',
    content:
      'Lay the foundation with expert-backed architecture, prototyping, and a clearly defined roadmap. Perfect for startups and new ideas.',
  },
  {
    value: 'launch',
    title: 'Launch Your Product',
    content:
      'Build fast and build right. From frontend to backend and deployment — we create production-ready products that users love.',
  },
  {
    value: 'scale',
    title: 'Scale Your Product',
    content:
      "Already growing? We'll help you optimize performance, reduce tech debt, and take your product to the next level with confidence.",
  },
];

const ServiceOfferings = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [closing, setClosing] = useState<string | null>(null);

  function handleValueChange(val: string) {
    if (val === expanded) {
      setExpanded(null);
      setClosing(expanded);
    } else {
      if (expanded) setClosing(expanded);
      setExpanded(val);
    }
  }

  return (
    <section className="bg-transparent py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Full-Cycle Development for Growth-Driven Teams
            </h2>
            <div className="text-md mt-4 text-gray-300">
              Strategic, technical, and product leadership — all in one place.
              <br />
              We support you through the entire product lifecycle with hands-on
              expertise and top-tier execution. Whether you&apos;re validating
              an idea, launching your first MVP, or scaling your infrastructure,
              we&apos;ve got you covered.
            </div>
            <div className="mt-8">
              <img
                src="/clutch-rating.png"
                alt="Clutch Rating"
                className="h-12"
              />
            </div>
          </div>
          <div>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              value={expanded || undefined}
              onValueChange={handleValueChange}
            >
              {offerings.map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="border-b border-blue-500/20"
                >
                  <AccordionTrigger className="text-xl font-semibold text-white hover:text-blue-500">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent asChild>
                    <AnimatePresence initial={false}>
                      {(expanded === item.value || closing === item.value) && (
                        <motion.div
                          key={item.value}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                          onAnimationComplete={() => {
                            if (closing === item.value) setClosing(null);
                          }}
                        >
                          <div className="text-md py-2 text-gray-400">
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-6 text-base font-medium text-blue-400">
              👉 Need something custom?{' '}
              <a href="/contact" className="underline hover:text-blue-300">
                Let&apos;s talk.
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOfferings;
