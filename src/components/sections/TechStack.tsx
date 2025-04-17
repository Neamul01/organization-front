'use client';

import Image from 'next/image';

const TechStack = () => {
  const technologies = [
    { name: 'Django', icon: '/images/django.webp' },
    { name: 'Next.js', icon: '/images/nextjs.webp' },
    { name: 'Python', icon: '/images/python.webp' },
    { name: 'Node.js', icon: '/images/nodejs.webp' },
    { name: 'React', icon: '/images/reactjs.webp' },
    { name: 'AWS', icon: '/images/aws.webp' },
  ];

  return (
    <section className="bg-transparent py-20">
      <div className="container mx-auto flex flex-col gap-20 px-4">
        <h2 className="mx-auto flex flex-col gap-2 text-center text-4xl font-medium text-white">
          The tech stack behind{' '}
          <span className="text-blue-500">competitive products</span>
        </h2>
        <div className="grid grid-cols-3 gap-8 md:grid-cols-6">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex items-center justify-center">
              <Image
                src={tech.icon}
                alt={`${tech.name} logo`}
                width={48}
                height={48}
                className="h-12 w-auto"
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="#" className="text-base hover:underline">
            Different stack?{' '}
            <span className="text-primary-100">Let&apos;s discuss →</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
