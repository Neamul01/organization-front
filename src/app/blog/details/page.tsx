import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BlogCard from '@/components/blog/BlogCard';
import { blogPosts } from '@/data/blogPosts';
import Head from 'next/head';

export default function BlogDetailsPage() {
  // Use the first post as the example
  const post = blogPosts[0];
  const related = blogPosts.slice(1, 4);

  return (
    <>
      <Head>
        <title>{post.title} | Vinta Software Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <Header />
      <main className="min-h-screen bg-[#f6f8fc] pb-16">
        <article className="mx-auto mt-8 max-w-2xl rounded-2xl bg-white px-4 py-12 shadow-md">
          <h1 className="mb-2 text-2xl font-bold text-blue-900 md:text-3xl">
            {post.title}
          </h1>
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
            <span>By Vinta Team</span>
            <span aria-hidden="true">•</span>
            <span>Mar 6, 2023</span>
          </div>
          <img
            src={post.image}
            alt={post.title}
            className="mb-6 h-48 w-full rounded-xl bg-blue-50 object-cover object-center"
            loading="lazy"
          />
          <div className="prose prose-blue max-w-none">
            <p>
              Creating a HIPAA-compliant, scalable telehealth app is
              challenging—especially when healthcare signal security is a top
              concern. In this article, we&apos;ll show how we built a
              telehealth solution using Telescopes, AWS Chime, and Expo, and why
              we rebuilt our AWS Chime integration for better reliability and
              compliance.
            </p>
            <ul>
              <li>Why Telescope is a strong backend for telehealth</li>
              <li>Why we rebuilt AWS Chime integration</li>
              <li>How we used Expo for mobile</li>
              <li>Patient journey (in testing)</li>
            </ul>
            <h2>Why Telescope is a strong backend for telehealth</h2>
            <p>
              Telescope offers a flexible, scalable backend that empowers teams
              to build modern patient experiences with real-time video and
              secure data flows.
            </p>
            <ul>
              <li>HIPAA-compliant authentication</li>
              <li>Real-time video and chat</li>
              <li>Customizable patient flows</li>
              <li>Easy integration with AWS Chime</li>
            </ul>
            <h2>Why we rebuilt AWS Chime integration</h2>
            <p>
              AWS Chime is a robust video conferencing solution. We rebuilt our
              integration to use <a href="#">Amazon Chime SDK</a> and{' '}
              <a href="#">Expo Modules API</a>. This approach allowed us to:
            </p>
            <ul>
              <li>Automate user and session creation</li>
              <li>Reduce code complexity</li>
              <li>Improve reliability and testability</li>
            </ul>
            <h2>Building the integration using Expo and AWS Chime</h2>
            <p>
              We built a custom React Native module to connect with AWS Chime,
              using Expo Modules API. The patient journey is as follows:
            </p>
            <ol>
              <li>Patient receives a link and joins the call</li>
              <li>Authentication and video start</li>
              <li>Session is recorded and stored securely</li>
            </ol>
            <h3>Patient Journey (in testing)</h3>
            <p>
              The patient and clinician share a single session link for video
              calls. The call is started, authenticated, and recorded.
              We&apos;re currently testing this flow with select partners.
            </p>
            <img
              src="/blog/medplum-bots.png"
              alt="Demo screenshot"
              className="my-6 h-48 w-full rounded-lg bg-blue-50 object-cover object-center"
              loading="lazy"
            />
            <div className="mb-6 flex gap-2">
              <button className="rounded-full bg-blue-100 px-4 py-1 font-semibold text-blue-900">
                Mute
              </button>
              <button className="rounded-full bg-blue-100 px-4 py-1 font-semibold text-blue-900">
                Stop Video
              </button>
              <button className="rounded-full bg-blue-600 px-4 py-1 font-semibold text-white">
                Leave
              </button>
            </div>
            <p className="mb-6 text-xs text-gray-500">
              *This is a demonstration image and interface. Actual telehealth
              sessions are securely encrypted and HIPAA-compliant. For more, see
              our <a href="#">security page</a>.
            </p>
            <h2>
              Why AWS Chime is still a solid video solution for healthtech
            </h2>
            <p>
              Based on our tests of <a href="#">AWS Chime</a> and{' '}
              <a href="#">Telescope</a>, we found the following benefits for
              healthtech teams:
            </p>
            <ul>
              <li>HIPAA-compliant video and chat</li>
              <li>Flexible patient and provider workflows</li>
              <li>Scalable backend powered by Telescope</li>
            </ul>
            <h2>Future improvements and opportunities for healthtech teams</h2>
            <p>
              The healthtech landscape is evolving quickly. In coming months,
              we&apos;ll continue to improve our telehealth solution and share
              more technical details in future posts. Stay tuned!
            </p>
          </div>
        </article>
        {/* Related articles */}
        <section className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="mb-6 text-xl font-bold text-blue-900">
            Related articles
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((rel) => (
              <BlogCard
                key={rel.id}
                image={rel.image}
                title={rel.title}
                excerpt={rel.excerpt}
                meta={{ label: 'Article', readTime: rel.readTime }}
                href={rel.url}
                variant="regular"
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
