import Hero from '@/components/Hero';
import About from '@/components/About';
import Media from '@/components/Media';
import NextEvent from '@/components/NextEvent';
import Social from '@/components/Social';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Media />
      <NextEvent />
      <Social />
      <Footer />
    </main>
  );
}
