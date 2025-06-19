'use client';

import { Pencil, Rocket, TrendingUp } from 'lucide-react';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const services = [
  {
    title: 'Sketch Your Business Idea',
    icon: Pencil,
    description:
      "Transform your vision into a clear, actionable plan — fast.\n\nWhether you're starting with a rough concept or a market hypothesis, we'll help you validate your idea, identify key features, and prioritize what matters. In just 2–3 weeks, our Product, Design, and Engineering experts will co-create a product roadmap with:",
    bullets: [
      'Feasibility analysis',
      'UX flows & wireframes',
      'Tech stack recommendation',
      'Scalable system architecture',
      'Time & cost estimation',
    ],
    note: 'Ideal for early-stage founders, startups, and product teams looking to move with clarity.',
    cta: "Let's Plan It Together",
    ctaHref: '/contact',
  },
  {
    title: 'Launch Your Product',
    icon: Rocket,
    description:
      'Turn prototypes into production-grade applications — the right way.\n\nYour product deserves clean code, great performance, and zero shortcuts. We specialize in building secure, maintainable, and scalable applications using modern frameworks and robust architecture.',
    bullets: [
      'Responsive, accessible frontends (React, Next.js, Vue)',
      'Secure, API-driven backends (Node.js, Python, Django, C++)',
      'Fully integrated CI/CD pipelines and cloud-native deployments',
      'Rigorous testing to ensure launch-readiness',
    ],
    note: 'Perfect for MVPs, v1 releases, or revamping legacy systems with new tech.',
    cta: 'Build My Product',
    ctaHref: '/contact',
  },
  {
    title: 'Grow Your Product',
    icon: TrendingUp,
    description:
      "Accelerate performance, scale features, and evolve with confidence.\n\nAlready launched? Now it's time to optimize, expand, and serve your users at scale. Our engineering team works with you to:",
    bullets: [
      'Refactor and improve existing codebases',
      'Enhance performance, stability, and reliability',
      'Introduce new features or microservices',
      'Monitor and resolve production issues',
      'Improve developer velocity with better tooling',
    ],
    note: 'Built for growth-stage products and enterprises who need a tech partner they can trust.',
    cta: 'Grow with Us',
    ctaHref: '/contact',
  },
];

export default function ServiceAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Helper to truncate description to ~120 chars, respecting newlines
  function getTruncatedDescription(desc: string) {
    const clean = desc.replace(/\n/g, ' ');
    return clean.length > 120 ? clean.slice(0, 120) + '...' : clean;
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4 flex items-center justify-center gap-2 text-center text-3xl font-bold text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-center text-lg text-gray-300">
            We don&apos;t just build software — we build confidence, clarity,
            and growth.
            <br />
            From napkin sketches to enterprise-scale platforms, our expert team
            guides you through every phase of your product journey. We focus on
            writing clean, high-performance code and crafting solutions that
            truly fit your business.
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service, index) => {
            const expanded = expandedIndex === index;
            return (
              <div
                key={index}
                className="rounded-lg border border-gray-700 bg-gray-800/50 p-6 transition hover:border-blue-500"
              >
                <div className="flex items-center gap-4">
                  <service.icon className="h-6 w-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                <div className="mt-4">
                  <p className="mb-4 whitespace-pre-line text-gray-300">
                    {expanded
                      ? service.description
                      : getTruncatedDescription(service.description)}
                  </p>
                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.div
                        key="expandable"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <ul className="mb-4 list-inside list-disc text-gray-300">
                          {service.bullets &&
                            service.bullets.map((bullet, i) => (
                              <li key={i}>{bullet}</li>
                            ))}
                        </ul>
                        <div className="mb-4 text-sm text-blue-400 italic">
                          {service.note}
                        </div>
                        <a
                          href={service.ctaHref}
                          className="inline-flex items-center rounded bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-500"
                        >
                          {service.cta}
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="mt-2 flex items-center gap-4">
                    <button
                      type="button"
                      className="text-sm text-blue-400 underline focus:outline-none"
                      onClick={() => setExpandedIndex(expanded ? null : index)}
                    >
                      {expanded ? 'Show less' : 'Read more'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
