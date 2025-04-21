import { ReactNode } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import CVDownload from './CVDownload';

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <CVDownload />
        {children}
      </main>
      <footer className="py-8 bg-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Alexandra Dos Santos. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 