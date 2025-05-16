import Link from 'next/link';

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  meta: { label: string; readTime: string };
  href: string;
  variant?: 'featured' | 'regular';
}

export default function BlogCard({
  image,
  title,
  excerpt,
  meta,
  href,
  variant = 'regular',
}: BlogCardProps) {
  const isFeatured = variant === 'featured';
  return (
    <article
      className={
        isFeatured
          ? 'flex h-full flex-col overflow-hidden rounded-3xl border-2 border-blue-100 bg-white shadow-lg transition-shadow hover:shadow-2xl'
          : 'flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl'
      }
    >
      <Link
        href={href}
        className="group flex h-full flex-col focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className={
            isFeatured
              ? 'h-64 w-full bg-blue-50 object-cover object-center'
              : 'h-48 w-full bg-blue-50 object-cover object-center'
          }
        />
        <div
          className={
            isFeatured ? 'flex flex-1 flex-col p-7' : 'flex flex-1 flex-col p-5'
          }
        >
          <h3
            className={
              isFeatured
                ? 'mb-3 min-h-[3.5rem] text-2xl font-bold text-blue-900 group-hover:underline'
                : 'mb-2 min-h-[3rem] text-lg font-semibold text-blue-900 group-hover:underline'
            }
          >
            {title}
          </h3>
          <p
            className={
              isFeatured
                ? 'mb-5 flex-1 text-base text-gray-600'
                : 'mb-4 flex-1 text-sm text-gray-500'
            }
          >
            {excerpt}
          </p>
          <div className="mt-auto flex items-center gap-2 text-xs text-blue-600">
            <span className="font-medium">{meta.label}</span>
            <span aria-hidden="true">•</span>
            <span>{meta.readTime}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
