import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Background from './components/Background';
import Experience from './components/Experience';
import AdditionalInfo from './components/AdditionalInfo';
import About from './components/About';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // URL Cleanup: If the user is on a non-existent .pdf route (SPA fallback), redirect to home.
    if (window.location.pathname.includes('.pdf') || window.location.hash.includes('resume.pdf')) {
      window.history.replaceState(null, '', '/');
    }
  }, []);

  return (
    <div className="min-h-screen text-white selection:bg-[var(--color-primary)] selection:text-black overflow-x-hidden">
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <AdditionalInfo />
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-400 text-sm border-t border-white/20 bg-slate-800 relative z-10">
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} Srishti kumari. <span className="text-[var(--color-primary)]">ENGINEERED FOR THE FUTURE.</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
