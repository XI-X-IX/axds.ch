import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const CVDownload = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500">
            Télécharger mon CV
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Vous pouvez télécharger mon CV au format PDF pour en savoir plus sur mon parcours professionnel.
          </p>
          <motion.a
            href="/cv.pdf"
            download
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
            Télécharger le CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CVDownload; 