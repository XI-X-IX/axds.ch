import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Types pour les compétences
export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
}

// Props du composant
interface SkillsCarouselProps {
  skillCategories: SkillCategory[];
  skillIcons: Record<string, string>;
  inView: boolean;
  additionalSkills?: SkillCategory[];
}

// Structure pour les slides du carrousel 
interface CarouselSlide {
  id: string;
  title: string;
  content: React.ReactNode;
}

const SkillsCarousel: React.FC<SkillsCarouselProps> = ({ skillCategories, skillIcons, inView, additionalSkills }) => {
  // État pour suivre l'index de slide actuel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Précharger le contenu des deux slides dès le début
  const [allSlidesLoaded, setAllSlidesLoaded] = useState(false);
  
  useEffect(() => {
    if (inView && !allSlidesLoaded) {
      // Attendre un court délai puis marquer toutes les slides comme préchargées
      const timer = setTimeout(() => {
        setAllSlidesLoaded(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [inView, allSlidesLoaded]);

  // Animation pour les éléments de compétence - optimisée
  const skillItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: Math.min(i * 0.05, 0.3), duration: 0.3 },
    }),
  };

  // Fonction pour créer un composant de catégorie de compétences - optimisée
  const renderSkillCategory = (category: SkillCategory, index: number, isActive: boolean) => (
    <div key={category.title} className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg p-6 transition-all duration-200 hover:bg-gray-800/90 hover:border-neon-blue/50 hover:shadow-glow-blue relative">
      <div className="absolute inset-0 rounded-lg bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent hover:from-transparent hover:via-neon-blue/10 hover:to-transparent transition-all duration-300"></div>
      
      <h4 className="text-xl font-semibold mb-5 text-center text-white transition-colors duration-300 hover:text-neon-blue">
        {category.title}
      </h4>
      
      <ul className="space-y-4">
        {category.items.map((item, itemIndex) => (
          <motion.li 
            key={item.name} 
            className="text-gray-300 transition-colors duration-300"
            variants={skillItemVariants}
            custom={itemIndex}
            initial="hidden"
            animate={(isActive && inView) || allSlidesLoaded ? "visible" : "hidden"}
          >
            <div className="flex items-center mb-1">
              <span className="mr-2 text-xl">{skillIcons[item.name as keyof typeof skillIcons] || '🔧'}</span>
              <span>{item.name}</span>
              <span className="ml-auto text-sm text-gray-400">{item.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <motion.div 
                className="bg-gradient-to-r from-neon-blue to-neon-purple h-2.5 rounded-full hover:shadow-glow-blue"
                initial={{ width: 0 }}
                animate={(isActive && inView) || allSlidesLoaded ? { width: `${item.level}%` } : { width: 0 }}
                transition={{ 
                  delay: Math.min(itemIndex * 0.05, 0.3), 
                  duration: 0.5, 
                  ease: "easeOut" 
                }}
              />
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );

  // Préparation des slides - avec préchargement
  const prepareSlides = () => {
    const result: CarouselSlide[] = [
      {
        id: 'skills',
        title: '',
        content: (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => renderSkillCategory(cat, idx, currentIndex === 0))}
          </div>
        )
      }
    ];

    if (additionalSkills) {
      result.push({
        id: 'additional-skills',
        title: '',
        content: (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalSkills.map((cat, idx) => renderSkillCategory(cat, idx, currentIndex === 1))}
          </div>
        )
      });
    }

    return result;
  };

  const slides = prepareSlides();

  // Gestion de la navigation avec verrouillage pendant l'animation
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
    // Débloquer après animation
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    // Débloquer après animation
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Gestion du swipe mobile - optimisée
  const handleDragEnd = (e: any, info: PanInfo) => {
    if (isAnimating) return;
    
    const threshold = 50;
    
    if (info.offset.x > threshold) {
      prevSlide();
    } else if (info.offset.x < -threshold) {
      nextSlide();
    }
  };

  // Variantes d'animation pour les slides - optimisées
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  // Les dots (indicateurs)
  const renderDots = () => {
    return (
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-neon-blue w-6' 
                : 'bg-gray-600 hover:bg-gray-400'
            }`}
            onClick={() => {
              if (isAnimating) return;
              setDirection(index > currentIndex ? 1 : -1);
              setIsAnimating(true);
              setCurrentIndex(index);
              setTimeout(() => setIsAnimating(false), 500);
            }}
            aria-label={`Aller à la slide ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="relative max-w-5xl mx-auto mt-12 px-4">
      {/* Container du carrousel avec hauteur fixe pour éviter les redimensionnements */}
      <motion.div 
        className="overflow-hidden relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-8 transition-all duration-300 hover:bg-gray-800/90 hover:border-neon-blue/50 hover:shadow-glow-blue"
        style={{ height: 'min(680px, max-content)' }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1} // Réduit pour plus de contrôle
        onDragEnd={handleDragEnd}
      >
        <div className="absolute inset-0 rounded-lg bg-grid-white/[0.02] -z-10" />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent via-transparent to-transparent hover:from-transparent hover:via-neon-blue/10 hover:to-transparent transition-all duration-500"></div>
        
        {/* Titre de la slide actuelle - caché mais gardé pour la structure */}
        <div className="mb-6">
          {slides[currentIndex].title}
        </div>
        
        {/* Slide actuelle avec animation optimisée */}
        <AnimatePresence custom={direction} initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="min-h-[320px]"
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            {slides[currentIndex].content}
          </motion.div>
        </AnimatePresence>
        
        {/* Flèches de navigation */}
        <button 
          onClick={prevSlide}
          disabled={isAnimating}
          className={`absolute left-4 top-1/2 -translate-y-1/2 bg-dark-800/80 p-2 rounded-full border border-neon-blue text-neon-blue hover:bg-neon-blue/10 transform transition-all duration-300 hover:scale-110 z-10 ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}
          aria-label="Précédent"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        
        <button 
          onClick={nextSlide}
          disabled={isAnimating}
          className={`absolute right-4 top-1/2 -translate-y-1/2 bg-dark-800/80 p-2 rounded-full border border-neon-blue text-neon-blue hover:bg-neon-blue/10 transform transition-all duration-300 hover:scale-110 z-10 ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}
          aria-label="Suivant"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </motion.div>
      
      {/* Indicateurs de position (dots) */}
      {renderDots()}
    </div>
  );
};

export default SkillsCarousel;