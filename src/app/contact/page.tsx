import ContactHero from '@/components/contact/Hero';
import ContactForm from '@/components/contact/Form';
import SuccessStories from '@/components/contact/SuccessStories';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <ContactHero />
      <ContactForm />
      <SuccessStories />
    </main>
  );
}
