'use client';

import { CalendlyDialog } from '@/components/ui/calendly-dialog';
import NextJsCircleIcon from '@/components/icons/techs/nextjs';
import NodeJsIcon from '@/components/icons/techs/nodejs';
import AwsIcon from '@/components/icons/techs/aws';
import AzureIcon from '@/components/icons/techs/azure';
import FigmaIcon from '@/components/icons/techs/figma';
import PlaywrightIcon from '@/components/icons/techs/playwright';

const ICON_SIZE = 58;

const TechStack = () => {
  const technologies = [
    {
      name: 'Next.js',
      icon: <NextJsCircleIcon width={ICON_SIZE + 5} height={ICON_SIZE + 5} />,
    },
    {
      name: 'Node.js',
      icon: <NodeJsIcon width={ICON_SIZE + 20} height={ICON_SIZE + 20} />,
    },
    {
      name: 'AWS',
      icon: <AwsIcon width={ICON_SIZE + 5} height={ICON_SIZE + 5} />,
    },
    { name: 'Azure', icon: <AzureIcon width={ICON_SIZE} height={ICON_SIZE} /> },
    { name: 'Figma', icon: <FigmaIcon width={ICON_SIZE} height={ICON_SIZE} /> },
    {
      name: 'Playwright',
      icon: <PlaywrightIcon width={ICON_SIZE + 10} height={ICON_SIZE + 10} />,
    },
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
              {tech.icon}
            </div>
          ))}
        </div>
        <CalendlyDialog
          triggerText={
            <p className="cursor-pointer text-base">
              Different stack?{' '}
              <span className="text-primary">Let&apos;s discuss →</span>
            </p>
          }
        />
      </div>
    </section>
  );
};

export default TechStack;
