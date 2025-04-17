'use client';

import Image from 'next/image';

const ClientLogos = () => {
  const clients = [
    { name: 'UN', logo: '/clients/un.svg' },
    { name: 'Unilever', logo: '/clients/unilever.svg' },
    { name: 'Quilted', logo: '/clients/quilted.svg' },
    { name: 'WM McCann', logo: '/clients/wm-mccann.svg' },
    { name: 'Tesorio', logo: '/clients/tesorio.svg' },
    { name: 'Findigs', logo: '/clients/findigs.svg' },
  ];

  return (
    <section className="bg-transparent py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 items-center gap-12 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center">
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={120}
                height={60}
                className="max-h-12 w-auto opacity-70 transition-opacity hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
