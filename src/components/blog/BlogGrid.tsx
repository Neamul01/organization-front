import BlogCard from './BlogCard';
import { BlogPost } from '../../data/blogPosts';

export default function BlogGrid({
  posts,
  selectedCategory = 'Health',
}: {
  posts: BlogPost[];
  selectedCategory?: string;
}) {
  const filtered = posts.filter(
    (p) =>
      !p.featured &&
      !p.other &&
      (selectedCategory === 'All' ? true : p.category === selectedCategory),
  );
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <BlogCard
            key={post.id}
            image={post.image}
            title={post.title}
            excerpt={post.excerpt}
            meta={{ label: 'Article', readTime: post.readTime }}
            href={post.url}
            variant="regular"
          />
        ))}
      </div>
    </section>
  );
}
