import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Effets de fond cyberpunk */}
      <div className="absolute inset-0 tech-grid-bg opacity-20"></div>
      
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-neon-blue/5 filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/4 w-72 h-72 rounded-full bg-neon-pink/5 filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-white text-glow">
            Travaillons ensemble ?
          </h2>
          <p className="text-gray-300 text-lg">
            N&apos;hésitez pas à me contacter pour discuter de vos projets ou pour toute question.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6 neon-card p-8 flex flex-col items-center"
          >
            {/* Section des contacts principaux - ajout de padding-top */}
            <div className="w-full pt-4 space-y-6">
              <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-10 h-10 rounded-full flex items-center justify-center border border-neon-blue shadow-neon-blue">
                  <EnvelopeIcon className="w-5 h-5 text-neon-blue" />
                </div>
                <span className="text-gray-300 group-hover:text-neon-blue transition-colors duration-300">a.dos.santos@live.fr</span>
              </div>
              
              <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-10 h-10 rounded-full flex items-center justify-center border border-neon-blue shadow-neon-blue">
                  <PhoneIcon className="w-5 h-5 text-neon-blue" />
                </div>
                <span className="text-gray-300 group-hover:text-neon-blue transition-colors duration-300">+41 76 263 17 21</span>
              </div>
              
              <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-10 h-10 rounded-full flex items-center justify-center border border-neon-blue shadow-neon-blue">
                  <MapPinIcon className="w-5 h-5 text-neon-blue" />
                </div>
                <span className="text-gray-300 group-hover:text-neon-blue transition-colors duration-300">Lausanne, Suisse</span>
              </div>
            </div>
            
            {/* Barre de séparation réintroduite */}
            <div className="w-full pt-4 pb-2 border-t border-neon-blue/20">
              <h3 className="text-xl font-semibold mb-4 text-white text-glow text-center">Réseaux sociaux</h3>
              <div className="space-y-6">
                {/* GitHub contact */}
                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center border border-neon-blue shadow-neon-blue">
                    <svg className="w-5 h-5 text-neon-blue" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <a 
                    href="https://github.com/XI-X-IX"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 group-hover:text-neon-blue transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
                
                {/* LinkedIn contact */}
                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center border border-neon-blue shadow-neon-blue">
                    <svg className="w-5 h-5 text-neon-blue" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/alexandra-dos-santos-381a40278"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 group-hover:text-neon-blue transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              
              {/* Ajout d'un padding en bas pour l'espacement */}
              <div className="pb-4"></div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6 neon-card p-8"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neon-blue mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="neon-input w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neon-blue mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="neon-input w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neon-blue mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="neon-input w-full resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-dark-800 border border-neon-pink text-neon-pink shadow-neon-pink hover:bg-neon-pink/10 transition-all duration-300 rounded-md transform hover:scale-[1.02] hover:shadow-neon-lg"
            >
              Envoyer
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;