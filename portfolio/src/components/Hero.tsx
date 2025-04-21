import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Fond animé avec des particules */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Contenu textuel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:w-1/2"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Software Engineer
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Simplifier le complexe : votre infrastructure, optimisée.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a 
                href="#about" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Découvrir mon profil
                <ArrowDownIcon className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Photo de profil */}
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative">
              {/* Cercle décoratif en arrière-plan */}
              <motion.div 
                className="absolute -z-10 w-[110%] h-[110%] rounded-full bg-gradient-to-r from-blue-500/30 to-purple-600/30 blur-md"
                style={{ top: '-5%', left: '-5%' }}
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotate: { repeat: Infinity, duration: 20, ease: "linear" },
                  scale: { repeat: Infinity, duration: 3, ease: "easeInOut" }
                }}
              ></motion.div>
              
              {/* Container de l'image avec bordure */}
              <div className="rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-purple-500/20 relative">
                {/* Effet de brillance qui tourne autour de l'image */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-[200%] h-full"
                  style={{ translateX: '-100%' }}
                  animate={{ translateX: '100%' }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", repeatDelay: 3 }}
                ></motion.div>
                
                {/* Image de profil */}
                <img 
                  src="/aledos-s copie.jpg" 
                  alt="Portrait professionnel" 
                  className="w-full h-auto max-w-[300px] md:max-w-[400px] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Effet de scroll */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDownIcon className="h-8 w-8 text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;