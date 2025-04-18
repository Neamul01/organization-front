export default function Quote() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-gray-900 p-8 shadow-lg">
          <blockquote className="mb-4">
            <p className="text-lg text-gray-300">
              &ldquo;Vinta exists to find the balance between stakeholders&apos;
              goals and product constraints through swift learning fail-fast
              cycles. Our routine embodies and embraces this adaptive
              ethos.&rdquo;
            </p>
          </blockquote>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-medium text-white">Felipe Farias</div>
              <div className="text-sm text-gray-400">CEO and Founder</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
