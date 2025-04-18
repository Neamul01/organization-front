'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Industries() {
  const [activeTab, setActiveTab] = useState('healthtech');

  const industries = [
    { id: 'healthtech', name: 'Healthtech' },
    { id: 'ai-agents', name: 'AI Agents' },
    { id: 'fintech', name: 'Fintech' },
    { id: 'retail', name: 'Retail' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'edtech', name: 'Edtech' },
  ];

  const caseStudy = {
    logo: '/images/rewind-logo.svg',
    category: 'Healthtech – Diabetes management',
    title: 'Rewind: breaking down EHR migration barriers',
    description:
      'How Vinta helped Rewind migrate EHR from Healthie to Medplum and their process.',
    image: '/images/doctor-tablet.svg',
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
          Explore our expertise across multiple industries
        </h2>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition ${
                activeTab === industry.id
                  ? 'bg-blue-600 text-white'
                  : 'border border-gray-700 text-gray-300 hover:border-blue-500'
              }`}
            >
              {industry.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <Image
                src={caseStudy.logo}
                alt="Rewind Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <div className="mb-4 text-sm font-medium text-blue-400">
              {caseStudy.category}
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">
              {caseStudy.title}
            </h3>
            <p className="mb-8 text-lg text-gray-300">
              {caseStudy.description}
            </p>
            <a
              href="#"
              className="inline-flex items-center text-blue-400 transition hover:text-blue-300"
            >
              Browse case studies
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src={caseStudy.image}
              alt="Doctor using tablet"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
