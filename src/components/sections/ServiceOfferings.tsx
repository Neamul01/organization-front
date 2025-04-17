'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const ServiceOfferings = () => {
  return (
    <section className="bg-transparent py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Full-cycle development{' '}
              <span className="block text-blue-500">
                designed for your
                <br />
                product growth
              </span>
            </h2>
            <div className="mt-8">
              <img
                src="/clutch-rating.png"
                alt="Clutch Rating"
                className="h-12"
              />
            </div>
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="kickstart"
                className="border-b border-blue-500/20"
              >
                <AccordionTrigger className="text-xl font-semibold text-white hover:text-blue-500">
                  Kickstart your Product
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Develop your software faster. 3 months with our flexible UI &
                  Engineering experts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="launch"
                className="border-b border-blue-500/20"
              >
                <AccordionTrigger className="text-xl font-semibold text-white hover:text-blue-500">
                  Launch your Product
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Transform your ideas into reliable products that users love
                  and trust.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="scale"
                className="border-b border-blue-500/20"
              >
                <AccordionTrigger className="text-xl font-semibold text-white hover:text-blue-500">
                  Scale your Product
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Deliver more features and overcome performance hurdles as you
                  grow.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOfferings;
