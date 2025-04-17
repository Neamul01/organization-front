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
        "We'll discuss your project requirements, timeline, and budget to determine how we can best help you achieve your goals.",
    },
    {
      question: 'Do you have safe & any particular industry or business type?',
      answer:
        'We work across various industries but specialize in fintech, healthcare, e-commerce, and enterprise software solutions.',
    },
    {
      question: 'Will we work with the same team the entire assignment?',
      answer:
        'Yes, we maintain dedicated teams throughout the project lifecycle to ensure consistency and deep understanding of your product.',
    },
    {
      question: 'How quickly can you start on a new project?',
      answer:
        'We can typically begin new projects within 2-4 weeks, depending on team availability and project scope.',
    },
    {
      question:
        'How does Vinta scale my product when I have already made it scale faster?',
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
        <h2 className="mb-4 text-3xl font-bold text-white">
          Questions?{' '}
          <span className="text-blue-500">We&apos;ve got answers</span>
        </h2>
        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-blue-500/20"
              >
                <AccordionTrigger className="text-left text-lg text-white hover:text-blue-500">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
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
