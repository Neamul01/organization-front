'use client';

import Image from 'next/image';

const TechStack = () => {
  const technologies = [
    { name: 'Django', icon: '/tech/django.svg' },
    { name: 'Next.js', icon: '/tech/nextjs.svg' },
    { name: 'Python', icon: '/tech/python.svg' },
    { name: 'Node.js', icon: '/tech/nodejs.svg' },
    { name: 'React', icon: '/tech/react.svg' },
    { name: 'AWS', icon: '/tech/aws.svg' },
  ];

  return (
    <section className="bg-transparent py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-3xl font-bold text-white">
          The tech stack behind{' '}
          <span className="text-blue-500">competitive products</span>
        </h2>
        <div className="mt-12 grid grid-cols-3 gap-8 md:grid-cols-6">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex items-center justify-center">
              <Image
                src={tech.icon}
                alt={`${tech.name} logo`}
                width={48}
                height={48}
                className="h-12 w-auto opacity-70 transition-opacity hover:opacity-100"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Different stack? Let&apos;s discuss →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
