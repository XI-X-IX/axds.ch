import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Outils',
    items: ['Git', 'Docker', 'VS Code', 'Figma'],
  },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500">
            À propos de moi
          </h2>
          <p className="text-gray-300 text-lg">
            Passionné par le développement web et les nouvelles technologies, je crée des expériences utilisateur innovantes et performantes. Mon approche combine créativité et rigueur technique pour développer des solutions web modernes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-primary-400 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 