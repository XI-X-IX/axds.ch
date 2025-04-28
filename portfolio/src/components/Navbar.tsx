import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Accueil', href: '#' },
  { name: 'À propos', href: '#about' },
  { name: 'Projets', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Gérer le scroll pour changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/80 backdrop-blur-md shadow-neon-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo texte AXDS */}
          <motion.a 
            href="#"
            className="text-2xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-clip-text text-transparent text-glow hover:text-glow-lg duration-300">Hi there</span>
          </motion.a>
          
          {/* Navigation desktop */}
          <nav className="hidden md:flex md:space-x-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-neon-blue relative nav-link overflow-hidden py-2 group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
              >
                {item.name}
                {/* Ligne qui apparaît au survol */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </motion.a>
            ))}
          </nav>

          {/* Bouton GitHub avec effet néon */}
          <motion.a
            href="https://github.com/XI-X-IX"
            className="hidden md:block neon-button-pink"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            GitHub
          </motion.a>

          {/* Menu burger pour mobile */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-lg focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-neon-pink" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-neon-blue" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-card mx-4 my-2 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-3 flex flex-col">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block py-2 px-3 text-center text-gray-300 hover:text-neon-blue hover:bg-dark-800/50 rounded-md transition-all"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="https://github.com/XI-X-IX"
                className="block py-2 px-3 text-center text-neon-pink border border-neon-pink/30 hover:bg-neon-pink/10 rounded-md transition-all"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                onClick={() => setIsOpen(false)}
              >
                GitHub
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Ligne de séparation néon subtile sous la navbar au scroll */}
      {scrolled && (
        <div className="h-px w-full bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
      )}
    </header>
  );
};

export default Navbar;