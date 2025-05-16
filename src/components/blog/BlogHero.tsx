export default function BlogHero() {
  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden bg-gradient-to-b from-blue-100 to-white py-16 pt-44 text-center">
      <h1 className="mb-4 text-5xl font-bold text-blue-600 md:text-6xl">
        Our Blog
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-gray-500 md:text-xl">
        Boost your knowledge with the insights from our expert team.
      </p>
      {/* Optionally add abstract geometric SVGs for background if needed */}
    </section>
  );
}
