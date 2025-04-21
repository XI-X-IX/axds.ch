import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

// Ajout d'icônes pour les compétences
const skillIcons = {
  'React': '⚛️',
  'Next.js': '▲',
  'TypeScript': '📘',
  'Tailwind CSS': '🌊',
  'Node.js': '🟢',
  'Express': '🚂',
  'MongoDB': '🍃',
  'PostgreSQL': '🐘',
  'Git': '🔄',
  'Docker': '🐳',
  'VS Code': '📝',
  'Figma': '🎨',
};

const skills = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 70 },
    ],
  },
  {
    title: 'Outils',
    items: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 80 },
    ],
  },
];

// Animation pour l'effet de texte machine à écrire
const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 40);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);
  
  return <span>{displayText}<span className="animate-pulse">|</span></span>;
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation des cards qui apparaissent l'une après l'autre
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            À propos de moi
          </motion.h2>
          
          <motion.div 
            className="text-gray-300 text-lg"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {inView && <TypewriterText text="" />}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform"
            >
              <motion.h3 
                className="text-2xl font-semibold mb-6 text-white text-center"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
              >
                {skill.title}
              </motion.h3>
              
              <ul className="space-y-4">
                {skill.items.map((item, itemIndex) => (
                  <motion.li 
                    key={item.name} 
                    className="text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + itemIndex * 0.1 + 0.5, duration: 0.5 }}
                  >
                    <div className="flex items-center mb-1">
                      <span className="mr-2 text-xl">{skillIcons[item.name as keyof typeof skillIcons]}</span>
                      <span>{item.name}</span>
                      <span className="ml-auto text-sm text-gray-400">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div 
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${item.level}%` } : {}}
                        transition={{ delay: index * 0.2 + itemIndex * 0.1 + 0.8, duration: 0.8, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Section expérience professionnelle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-white">Mon parcours</h3>
          <div className="relative pl-8 border-l-2 border-primary-500">
            {[
              { period: "2023 - Présent", role: "Développeur Full Stack", company: "Entreprise Actuelle" },
              { period: "2021 - 2023", role: "Développeur Frontend", company: "Entreprise Précédente" },
              { period: "2019 - 2021", role: "Développeur Junior", company: "Première Entreprise" },
            ].map((exp, index) => (
              <motion.div 
                key={index}
                className="mb-10 relative"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.4 + index * 0.2, duration: 0.5 }}
              >
                <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-primary-500 border-4 border-gray-900"></div>
                <p className="text-sm text-primary-400 mb-1">{exp.period}</p>
                <h4 className="text-lg font-medium text-white">{exp.role}</h4>
                <p className="text-gray-400">{exp.company}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;