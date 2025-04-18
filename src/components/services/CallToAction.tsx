import Image from 'next/image';

export default function CallToAction() {
  const teamMembers = [
    { avatar: '/images/team-1.jpg', name: 'Team Member 1' },
    { avatar: '/images/team-2.jpg', name: 'Team Member 2' },
    { avatar: '/images/team-3.jpg', name: 'Team Member 3' },
    { avatar: '/images/team-4.jpg', name: 'Team Member 4' },
    { avatar: '/images/team-5.jpg', name: 'Team Member 5' },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gray-900 p-8 sm:p-12">
          <div className="absolute top-0 right-0 h-full w-1/3 bg-white/5" />

          <div className="relative z-10">
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                Let&apos;s start the convo.
              </h2>
              <p className="text-lg text-gray-300">Just book a call →</p>
            </div>

            <div className="mb-8 flex -space-x-4">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-gray-900"
                >
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center text-lg font-medium text-blue-400 transition hover:text-blue-300"
            >
              Contact us
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
