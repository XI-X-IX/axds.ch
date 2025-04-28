import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Fond animé avec des particules */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center justify-center gap-12">
          {/* Logo au milieu en premier */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Cercle décoratif en arrière-plan */}
              <motion.div 
                className="absolute -z-10 w-[110%] h-[110%] rounded-full bg-gradient-to-r from-blue-500/30 to-pink-600/30 blur-md"
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
              <div className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-purple-500/20 relative">
                {/* Effet de brillance qui tourne autour de l'image */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-[200%] h-full"
                  style={{ translateX: '-100%' }}
                  animate={{ translateX: '100%' }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", repeatDelay: 3 }}
                ></motion.div>
                
                {/* Logo au lieu de l'image de profil */}
                <img 
                  src="/logo_AXDS.jpg" 
                  alt="Logo AXDS" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Contenu textuel en dessous */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center w-full"
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-pink"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Software Engineer
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Simplifier le complexe.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex justify-center"
            >
              {/* Container avec effet de bordure animée */}
              <div className="inline-block relative p-[2px] rounded-lg overflow-hidden">
                {/* Effet de bordure qui tourne */}
                <motion.div 
                  className="absolute inset-0 border-flow rounded-lg" 
                  style={{ opacity: 0.7 }}
                />
                
                {/* Bouton avec effet néon */}
                <motion.a
                  href="#about" 
                  className="relative inline-flex items-center px-8 py-4 rounded-lg bg-dark-800 text-white font-medium overflow-hidden group z-10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Effet de lueur au survol */}
                  <span className="absolute inset-0 bg-neon-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  
                  {/* Icône et texte */}
                  <span className="text-glow-pink">Découvrir mon profil</span>
                  <ArrowDownIcon className="ml-2 h-5 w-5 text-neon-pink" />
                </motion.a>
              </div>
            </motion.div>
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