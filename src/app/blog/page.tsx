import Header from '@/components/layout/Header';
import BlogHero from '@/components/blog/BlogHero';
import CategoryFilter from '@/components/blog/CategoryFilter';
import BlogGrid from '../../components/blog/BlogGrid';
import FeaturedPosts from '../../components/blog/FeaturedPosts';
import OtherPosts from '../../components/blog/OtherPosts';
import { blogPosts } from '../../data/blogPosts';
import Head from 'next/head';

export default function BlogPage() {
  // TODO: Wire up category filter state and pass selectedCategory to BlogGrid
  return (
    <>
      <Head>
        <title>Blog - Insights and Engineering Articles | Vinta Software</title>
        <meta
          name="description"
          content="Explore software engineering insights, healthcare integration tutorials, and Vinta's tech expertise in Python, Django, Medplum, React, and more."
        />
        <meta
          property="og:title"
          content="Blog - Insights and Engineering Articles | Vinta Software"
        />
        <meta
          property="og:description"
          content="Explore software engineering insights, healthcare integration tutorials, and Vinta's tech expertise in Python, Django, Medplum, React, and more."
        />
        <meta property="og:url" content="https://www.vintasoftware.com/blog" />
        {/* Add og:image and Twitter Card meta as needed */}
      </Head>
      <Header />
      <main>
        <BlogHero />
        <CategoryFilter />
        <FeaturedPosts posts={blogPosts} />
        <BlogGrid posts={blogPosts} />
        <OtherPosts posts={blogPosts} />
        {/* TODO: Implement NewsletterSignup component */}
      </main>
    </>
  );
}
