import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'Projet 1',
    description: 'Description du projet 1 avec les technologies utilisées et les fonctionnalités principales.',
    image: '/project1.jpg',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Projet 2',
    description: 'Description du projet 2 avec les technologies utilisées et les fonctionnalités principales.',
    image: '/project2.jpg',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Projet 3',
    description: 'Description du projet 3 avec les technologies utilisées et les fonctionnalités principales.',
    image: '/project3.jpg',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tags: ['React', 'Express', 'PostgreSQL'],
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500">
            Mes Projets
          </h2>
          <p className="text-gray-300 text-lg">
            Découvrez mes projets récents et les technologies que j&apos;utilise pour créer des expériences web innovantes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <CodeBracketIcon className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 