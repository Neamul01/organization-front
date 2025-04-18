import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Faq() {
  const faqs = [
    {
      question:
        'Why should I work with Vinta instead of hiring for my in-house team?',
      answer:
        'Working with Vinta offers several advantages over building an in-house team. We provide immediate access to experienced professionals, flexible scaling options, and proven processes that accelerate development. Our teams are already trained and ready to go, eliminating the time and cost of recruitment and onboarding.',
    },
    {
      question: 'How flexible is the engagement model?',
      answer:
        'Our engagement model is highly flexible to accommodate your specific needs. We offer various options including fixed-price projects, time and materials, and dedicated teams. We can adjust team size, composition, and working hours to match your requirements and ensure optimal collaboration.',
    },
    {
      question: 'How quickly can you start working on my project?',
      answer:
        'We can typically begin working on your project within 2-4 weeks of finalizing the agreement. This timeline allows us to carefully select the right team members and set up the necessary infrastructure. For urgent needs, we can sometimes accelerate this process.',
    },
    {
      question: 'What are the terms of your standard contract agreement?',
      answer:
        'Our standard contract agreement includes clear terms for project scope, deliverables, timelines, and payment schedules. We maintain transparent communication throughout the project and provide regular updates on progress. The agreement also includes provisions for intellectual property rights and confidentiality.',
    },
  ];

  return (
    <section className="bg-gray-900/50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
          Questions? We&apos;ve got answers
        </h2>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-gray-700 bg-gray-800/50"
              >
                <AccordionTrigger className="px-6 py-4 text-left">
                  <span className="text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-300">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
