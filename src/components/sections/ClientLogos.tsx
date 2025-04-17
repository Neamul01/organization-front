'use client';

import Image from 'next/image';

const ClientLogos = () => {
  const clients = [
    {
      name: 'UN',
      logo: '/images/undp.webp',
      description:
        'United Nations: Social Protection Knowledge, Powered by LLM.',
    },
    {
      name: 'Unilever',
      logo: '/images/uniliver.webp',
      description: 'Unilever: AI-powered insights for consumer insights.',
    },
    {
      name: 'Quilted',
      logo: '/images/quilted.webp',
      description: 'Quilted: AI-powered insights for consumer insights.',
    },
  ];

  return (
    <section className="bg-transparent py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 items-center justify-between gap-12 md:grid-cols-3">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-start justify-center gap-2"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={260}
                height={115}
                className="transition-opacity hover:opacity-100"
              />
              <p className="text-lg text-white">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
