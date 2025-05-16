import { BlogPost } from '../../data/blogPosts';
import Link from 'next/link';

export default function OtherPosts({ posts }: { posts: BlogPost[] }) {
  const others = posts.filter((p) => p.other).slice(0, 3);
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="mb-8 text-center text-2xl font-bold text-blue-900">
        Check out other blog posts
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {others.map((post) => (
          <Link
            key={post.id}
            href={post.url}
            className="block min-h-[160px] rounded-2xl bg-blue-950 p-6 text-white shadow-md transition-shadow hover:shadow-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <h3 className="mb-2 text-lg font-semibold">{post.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
