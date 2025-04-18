import Image from 'next/image';

export default function Hero() {
  return (
    <section className="py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="mb-4 text-4xl font-bold text-blue-600 sm:text-5xl">
          Let&apos;s Talk!
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
          We&apos;re excited to collaborate and will respond promptly. Share
          your vision with us.
        </p>

        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                <Image
                  src="/images/team/member1.jpg"
                  alt="Team member"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border-2 border-white"
                />
                <Image
                  src="/images/team/member2.jpg"
                  alt="Team member"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border-2 border-white"
                />
                <Image
                  src="/images/team/member3.jpg"
                  alt="Team member"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border-2 border-white"
                />
              </div>
              <p className="flex-1 text-left text-gray-600">
                Want to skip a step? Just schedule a call directly with us.
              </p>
              <button className="rounded-full bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700">
                Book a call today!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
