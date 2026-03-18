import { motion } from 'framer-motion';
import { getCvData } from '../data/cvData';
import { useLanguage } from '../contexts/LanguageContext';

export const Projects = () => {
  const { language, t } = useLanguage();
  const cvData = getCvData(language);

  return (
    <section className="py-24 relative" id="projetos">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl opacity-50 mix-blend-screen -z-10"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-brand-500 uppercase mb-3">{t.projects.title}</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">{t.projects.heading}</h3>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cvData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group glass rounded-2xl overflow-hidden flex flex-col h-full border border-gray-200 dark:border-white/10 hover:border-brand-500/50 transition-colors"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold font-heading mb-3">{project.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-xs font-semibold text-brand-500 uppercase block mb-2">{t.projects.results}</span>
                  <p className="text-sm font-medium border-l-2 border-brand-500 pl-3 py-1">
                    {project.results}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-white/5 rounded-md font-medium text-gray-600 dark:text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
