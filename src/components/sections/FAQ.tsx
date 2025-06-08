'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What would we discuss during the first call with you?',
      answer:
        'We specialize in web products, primarily partnering with US-based tech startups with successfully launched products. These companies typically aim to expand their development teams and tackle new initiatives such as creating product spin-offs, developing complex features, enhancing code maturity, reducing technical debt, and optimizing databases. We also support founders in developing Minimum Viable Products (MVPs).For all our clients, we provide a flexible service that covers product definition, design, and development.',
    },
    {
      question: 'Do you have safe & any particular industry or business type?',
      answer:
        'We specialize in web products, primarily partnering with US-based tech startups with successfully launched products. These companies typically aim to expand their development teams and tackle new initiatives such as creating product spin-offs, developing complex features, enhancing code maturity, reducing technical debt, and optimizing databases. We also support founders in developing Minimum Viable Products (MVPs).For all our clients, we provide a flexible service that covers product definition, design, and development.',
    },
    {
      question: 'Will we work with the same team the entire assignment?',
      answer:
        'We specialize in web products, primarily partnering with US-based tech startups with successfully launched products. These companies typically aim to expand their development teams and tackle new initiatives such as creating product spin-offs, developing complex features, enhancing code maturity, reducing technical debt, and optimizing databases. We also support founders in developing Minimum Viable Products (MVPs).For all our clients, we provide a flexible service that covers product definition, design, and development.',
    },
    {
      question: 'How quickly can you start on a new project?',
      answer:
        'We can typically begin new projects within 2-4 weeks, depending on team availability and project scope.',
    },
    {
      question:
        'How does Intelliduosscale my product when I have already made it scale faster?',
      answer:
        'We analyze your existing infrastructure and implement optimizations to improve performance, scalability, and reliability.',
    },
    {
      question: 'What will be the cost of your software development services?',
      answer:
        "Our pricing is transparent and based on project scope, complexity, and duration. We'll provide a detailed estimate after understanding your requirements.",
    },
  ];

  return (
    <section className="bg-transparent py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-4xl font-medium text-white">
          Questions?{' '}
          <span className="text-blue-500">We&apos;ve got answers</span>
        </h2>
        <div className="mt-12">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-0"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-transparent p-4 transition-all duration-300 ease-in-out data-[state=open]:rounded-lg data-[state=open]:border-blue-500"
              >
                <AccordionTrigger className="py-4 text-left text-lg text-white transition-colors duration-300 hover:text-blue-500 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 transition-all duration-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
