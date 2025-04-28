import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import SkillsCarousel, { SkillCategory } from './SkillsCarousel';

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
  'Python': '🐍',
  'TensorFlow': '🧠',
  'PyTorch': '🔥',
  'Scikit-Learn': '🔬',
  'C': '🔋',
  'C++': '⚙️',
  'Java': '☕',
  'Rust': '🦀',
  'Trading Algorithms': '📈',
  'Risk Management': '🛡️',
  'Market Analysis': '📊',
  'Financial Modeling': '💹',
};

// Liste des compétences principales
const skills: SkillCategory[] = [
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

// Compétences additionnelles
const additionalSkills: SkillCategory[] = [
  {
    title: 'IA',
    items: [
      { name: 'Python', level: 85 },
      { name: 'TensorFlow', level: 75 },
      { name: 'PyTorch', level: 70 },
      { name: 'Scikit-Learn', level: 80 },
    ],
  },
  {
    title: 'Languages',
    items: [
      { name: 'C', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'Java', level: 70 },
      { name: 'Rust', level: 65 },
    ],
  },
  {
    title: 'Finance',
    items: [
      { name: 'Trading Algorithms', level: 80 },
      { name: 'Risk Management', level: 75 },
      { name: 'Market Analysis', level: 85 },
      { name: 'Financial Modeling', level: 70 },
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

  return (
    <section id="about" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Effets de fond cyberpunk */}
      <div className="absolute inset-0 cyber-dots opacity-30"></div>
      
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-40 left-1/4 w-72 h-72 rounded-full bg-neon-blue/5 filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-neon-pink/5 filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section d'introduction */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold mb-6 text-white text-glow"
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
            {inView && <TypewriterText text="Développeur passionné par la création d'expériences informatiques innovantes et performantes." />}
          </motion.div>
        </motion.div>

        {/* Section Skills avec carrousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-8 text-glow-sm">
            <span className="text-neon-white">Skills</span>
          </h3>
          
          {/* Intégration du carrousel de compétences */}
          <SkillsCarousel 
            skillCategories={skills} 
            additionalSkills={additionalSkills}
            skillIcons={skillIcons} 
            inView={inView} 
          />
        </motion.div>
        
        {/* Section expérience professionnelle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 max-w-4xl mx-auto bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-8 transition-all duration-300 transform hover:bg-gray-800/90 group hover:border-neon-blue/50 hover:shadow-glow-blue relative"
        >
          <div className="absolute inset-0 rounded-lg bg-grid-white/[0.02] -z-10 group-hover:bg-grid-white/[0.03]" />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent to-transparent group-hover:from-transparent group-hover:via-neon-blue/10 group-hover:to-transparent transition-all duration-500"></div>

          <h3 className="text-2xl font-semibold mb-8 text-center text-white text-glow-sm group-hover:text-neon-blue transition-colors duration-300">Objectifs</h3>
          <div className="relative pl-8 border-l-2 border-neon-blue">
            {[
              { period: "En cours", role: "Dev Junior Freelance", company: "AXDS" },
              { period: "Début 2026", role: "Spécialisation en Intelligence Artificielle", company: "42 Lausanne" },
              { period: "2026 - 2027", role: "Création de Startup", company: "🚀" },
            ].map((exp, index) => (
              <motion.div 
                key={index}
                className="mb-10 relative"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.4 + index * 0.2, duration: 0.5 }}
              >
                <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-neon-blue border-4 border-gray-900 group-hover:shadow-glow-blue-sm transition-all duration-300"></div>
                <p className="text-sm text-neon-blue mb-1">{exp.period}</p>
                <h4 className="text-lg font-medium text-white group-hover:text-gray-100 transition-colors duration-300">{exp.role}</h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{exp.company}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;