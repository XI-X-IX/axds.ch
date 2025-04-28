import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

// Ajout d'un timestamp pour empêcher la mise en cache des images
const cacheBreaker = Date.now();

const projects = [
  {
    title: 'Bot de Trading',
    description: 'Bot automatisé pour le trading de cryptomonnaies, analyser les tendances du marché et exécuter des transactions optimisées.',
    image: `/trading-bot-neon.jpg?v=${cacheBreaker}`, // Ajout d'un paramètre version
    github: 'https://github.com/XI-X-IX/DemoXbot/blob/main/binance_rsi_bot.py',
    demo: 'https://github.com/XI-X-IX/DemoXbot',
    tags: ['Python', 'API', 'Algorithmes', 'Finance'],
    category: 'backend'
  },
  {
    title: 'Site Web',
    description: 'Site web moderne et réactif avec animations fluides, conçu et développé avec Next.js et Tailwind CSS.',
    image: `/portfolio-neon.jpg?v=${cacheBreaker}`, // Ajout d'un paramètre version
    github: 'https://github.com/XI-X-IX/axds.ch',
    demo: 'https://axds.ch',
    tags: ['TypeScript', 'JavaScript', 'CSS', 'Next.js', 'Tailwind'],
    category: 'frontend'
  },
  {
    title: 'Game',
    description: 'Jeu vidéo 2D développé en C pur. Graphismes et logique de jeu entièrement créés à partir de zéro.',
    image: `/game-neon.jpg?v=${cacheBreaker}`, // Ajout d'un paramètre version
    github: 'https://github.com',
    demo: '',
    tags: ['C', 'Makefile', 'Game Development', 'Algorithms'],
    category: 'other'
  },
  {
    title: 'Algorithmes',
    description: 'Programme de tri hautement optimisé qui utilise deux piles pour trier les données avec un nombre minimum d\'opérations.',
    image: `/algo-neon.jpg?v=${cacheBreaker}`, // Ajout d'un paramètre version
    github: 'https://github.com/XI-X-IX/push_swap',
    demo: 'https://github.com/XI-X-IX/push_swap/blob/main/src/push_swap.c',
    tags: ['C', 'Maths', 'Algorithmes', 'Structures de données'],
    category: 'other'
  },
  {
    title: 'Automatisation',
    description: 'Accroître l\'efficacité, la précision et la rapidité d\'exécution, avec un minimum d\'intervention humaine.',
    image: `/auto-bot.jpg?v=${cacheBreaker}`, // Ajout d'un paramètre version
    github: '',
    tags: ['IA', 'Workflow', 'CI/CD', 'Pipelines'],
    category: 'other'
  },
];

// Types de catégories pour le filtre
type Category = 'all' | 'frontend' | 'backend' | 'other';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // État pour le filtrage des projets
  const [filter, setFilter] = useState<Category>('all');
  
  // Projets filtrés en fonction de la catégorie sélectionnée
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Effets de fond cyberpunk */}
      <div className="absolute inset-0 cyber-dots opacity-30"></div>
      
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-40 left-1/4 w-48 h-48 rounded-full bg-neon-pink/5 filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 right-1/5 w-36 h-36 rounded-full bg-neon-blue/5 filter blur-3xl animate-blob"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <h2 className="text-4xl font-bold mb-6 text-white text-glow">
            Mes Projets
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Découvrez mes projets récents et les technologies que j&apos;utilise pour créer des expériences web innovantes.
          </p>
          
          {/* Filtres de projets */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                filter === 'all'
                ? 'bg-dark-800 text-neon-blue border border-neon-blue shadow-neon-blue'
                : 'bg-dark-800/50 text-gray-300 border border-gray-700 hover:border-neon-blue/50 hover:text-neon-blue/80'
              }`}
            >
              Tous les projets
            </button>
            <button
              onClick={() => setFilter('frontend')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                filter === 'frontend'
                ? 'bg-dark-800 text-neon-blue border border-neon-blue shadow-neon-blue'
                : 'bg-dark-800/50 text-gray-300 border border-gray-700 hover:border-neon-blue/50 hover:text-neon-blue/80'
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setFilter('backend')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                filter === 'backend'
                ? 'bg-dark-800 text-neon-blue border border-neon-blue shadow-neon-blue'
                : 'bg-dark-800/50 text-gray-300 border border-gray-700 hover:border-neon-blue/50 hover:text-neon-blue/80'
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setFilter('other')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                filter === 'other'
                ? 'bg-dark-800 text-neon-blue border border-neon-blue shadow-neon-blue'
                : 'bg-dark-800/50 text-gray-300 border border-gray-700 hover:border-neon-blue/50 hover:text-neon-blue/80'
              }`}
            >
              Autres
            </button>
          </div>
        </motion.div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group h-full"
            >
              <div className="neon-card h-full flex flex-col relative group overflow-hidden">
                {/* Effet de bordure néon */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-[-2px] bg-neon-gradient opacity-50 blur-[2px]"></div>
                </div>

                {/* Image du projet */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/20 to-neon-pink/20 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
                  
                  <div className="absolute top-0 left-0 w-full h-full bg-dark-900/50 backdrop-blur-sm opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-20 flex items-center justify-center">
                    <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-dark-800/80 border border-neon-blue p-3 rounded-full text-neon-blue hover:bg-neon-blue hover:text-dark-900 transform transition-all duration-300 hover:scale-110"
                      >
                        <CodeBracketIcon className="w-5 h-5" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-dark-800/80 border border-neon-pink p-3 rounded-full text-neon-pink hover:bg-neon-pink hover:text-dark-900 transform transition-all duration-300 hover:scale-110"
                      >
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-75"
                  />
                  
                  {/* Ligne néon animée qui apparaît au survol */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-gradient group-hover:w-full transition-all duration-500"></div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-glow transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-gray-700/30">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-dark-800/80 border border-neon-blue/20 rounded-md text-xs text-neon-blue/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Message quand aucun projet ne correspond au filtre */}
        {filteredProjects.length === 0 && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-neon-blue mt-8 text-glow-sm"
          >
            Aucun projet ne correspond à ce filtre pour le moment.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Projects;