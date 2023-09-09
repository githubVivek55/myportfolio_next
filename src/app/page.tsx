import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import StarsCanvas from '@/components/canvas/Star';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <main>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Analytics />
      </div>
    </main>
  );
}
