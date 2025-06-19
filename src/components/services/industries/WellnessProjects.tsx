import Image from 'next/image';
import React from 'react';

export default function WellnessProjects() {
  const caseStudy = {
    logo: '/images/rewind-logo.svg',
    category: 'Healthtech – Diabetes management',
    title: 'Rewind: breaking down EHR migration barriers',
    description:
      'How Intelliduoshelped Rewind migrate EHR from Healthie to Medplum and their process.',
    image: '/images/doctor-tablet.svg',
  };

  return (
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
        <p className="mb-8 text-lg text-gray-300">{caseStudy.description}</p>
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
  );
}
