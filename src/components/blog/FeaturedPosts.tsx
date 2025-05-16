import { BlogPost } from '../../data/blogPosts';
import BlogCard from './BlogCard';

export default function FeaturedPosts({ posts }: { posts: BlogPost[] }) {
  const featured = posts.filter((p) => p.featured).slice(0, 3);
  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 pb-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {featured.map((post) => (
          <BlogCard
            key={post.id}
            image={post.image}
            title={post.title}
            excerpt={post.excerpt}
            meta={{ label: 'Article', readTime: post.readTime }}
            href={post.url}
            variant="featured"
          />
        ))}
      </div>
    </section>
  );
}
