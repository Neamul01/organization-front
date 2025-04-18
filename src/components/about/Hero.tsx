import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-20 pt-44">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              For a decade, we have been a trusted partner in building
              successful products
            </h1>
            <p className="text-lg text-gray-600">
              Creating and scaling winning products for fast-growing businesses
              is our expertise.
            </p>
          </div>
          <div className="relative">
            <div className="relative h-[400px]">
              {/* Team member circles */}
              <div className="absolute top-0 right-0 flex flex-wrap justify-end gap-4">
                <div className="relative">
                  <div className="absolute -top-8 -left-8 h-4 w-4 rounded-full bg-blue-400" />
                  <Image
                    src="/images/team/member1.jpg"
                    alt="Team member"
                    width={120}
                    height={120}
                    className="h-24 w-24 rounded-full object-cover ring-4 ring-white"
                  />
                </div>
                <div className="relative mt-12">
                  <div className="absolute -top-6 -right-6 h-3 w-3 rounded-full bg-blue-300" />
                  <Image
                    src="/images/team/member2.jpg"
                    alt="Team member"
                    width={120}
                    height={120}
                    className="h-24 w-24 rounded-full object-cover ring-4 ring-white"
                  />
                </div>
                <div className="relative -mt-8">
                  <div className="absolute top-20 -right-4 h-2 w-2 rounded-full bg-blue-200" />
                  <Image
                    src="/images/team/member3.jpg"
                    alt="Team member"
                    width={120}
                    height={120}
                    className="h-24 w-24 rounded-full object-cover ring-4 ring-white"
                  />
                </div>
                <div className="relative mt-16">
                  <div className="absolute -bottom-6 -left-6 h-3 w-3 rounded-full bg-blue-300" />
                  <Image
                    src="/images/team/member4.jpg"
                    alt="Team member"
                    width={120}
                    height={120}
                    className="h-24 w-24 rounded-full object-cover ring-4 ring-white"
                  />
                </div>
                <div className="relative -mt-4">
                  <div className="absolute -right-8 bottom-8 h-4 w-4 rounded-full bg-blue-400" />
                  <Image
                    src="/images/team/member5.jpg"
                    alt="Team member"
                    width={120}
                    height={120}
                    className="h-24 w-24 rounded-full object-cover ring-4 ring-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
