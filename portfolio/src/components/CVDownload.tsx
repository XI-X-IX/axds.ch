import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

const CVDownload = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Effets de fond cyberpunk */}
      <div className="absolute inset-0 cyber-dots opacity-20"></div>
      
      {/* Éléments décoratifs en arrière-plan */}
      <motion.div 
        className="absolute left-1/3 top-1/3 w-64 h-64 rounded-full bg-neon-blue/5 filter blur-3xl"
        animate={{ 
          x: [0, 30, 0], 
          y: [0, -30, 0],
          scale: [1, 1.1, 1] 
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-white text-glow">
            Mon GitHub
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Explorez mes projets et contributions open source sur GitHub pour découvrir mon code et mon approche de développement.
          </p>
          
          {/* Container avec effet de bordure animée */}
          <div className="inline-block relative p-[2px] rounded-lg overflow-hidden">
            {/* Effet de bordure qui tourne */}
            <motion.div 
              className="absolute inset-0 border-flow rounded-lg" 
              style={{ opacity: 0.7 }}
            />
            
            {/* Bouton avec effet néon */}
            <motion.a
              href="https://github.com/XI-X-IX"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center px-8 py-4 rounded-lg bg-dark-800 text-white font-medium overflow-hidden group z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Effet de lueur au survol */}
              <span className="absolute inset-0 bg-neon-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              
              {/* Icône et texte */}
              <CodeBracketIcon className="w-5 h-5 mr-3 text-neon-pink" />
              <span className="text-glow-pink">Visiter mon GitHub</span>
            </motion.a>
          </div>
          
          {/* Texte décoratif avec effet de code */}
          <motion.div 
            className="mt-12 text-neon-blue/30 text-xs md:text-sm font-mono tracking-wider"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <pre className="flex flex-wrap justify-center gap-x-8">
              <code>{'class: Developer { '}</code>
              <code>{'skills: [TypeScript, React, Node.js],'}</code>
              <code>{'location: "Lausanne, Switzerland"'}</code>
              <code>{'};'}</code>
            </pre>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CVDownload;