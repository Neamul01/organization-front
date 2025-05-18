import Image from 'next/image';

export default function Team() {
  const roles = [
    {
      title: 'Full-stack Developers',
      image: '/images/team/developers.jpg',
    },
    {
      title: 'Product Designers',
      image: '/images/team/designers.jpg',
    },
    {
      title: 'Product Managers',
      image: '/images/team/managers.jpg',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
          Empowering Market Needs with a{' '}
          <span className="text-blue-600">Diverse and Expert Team</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-900"
            >
              <div className="relative h-[300px]">
                <Image
                  src={role.image}
                  alt={role.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-semibold text-white">
                    {role.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
