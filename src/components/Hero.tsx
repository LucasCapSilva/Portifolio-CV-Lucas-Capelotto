import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Database, Cloud } from 'lucide-react';
import { cvData } from '../data/cvData';
import perfilImg from '../assets/perfil.jpeg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="inicio">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl opacity-50 mix-blend-screen animate-blob"></div>
      <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-50 mix-blend-screen animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl opacity-50 mix-blend-screen animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            Disponível para novos projetos
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
            Olá, eu sou <br />
            <span className="text-gradient">{cvData.personalInfo.name}</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6">
            {cvData.personalInfo.title}
          </h2>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-xl leading-relaxed">
            Construindo soluções robustas, escaláveis e de alta performance. 
            Especialista em arquitetura de software e desenvolvimento ponta a ponta com +7 anos de experiência.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#projetos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-lg transition-all duration-300 shadow-[0_0_20px_var(--color-brand-glow)] hover:shadow-[0_0_30px_var(--color-brand-glow)] hover:-translate-y-1"
            >
              Ver Projetos
              <ArrowRight size={18} />
            </a>
            
            <a 
              href={`https://wa.me/${cvData.personalInfo.whatsapp}?text=Olá%20Lucas,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 dark:bg-gray-800/50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 font-medium rounded-lg transition-all duration-300 hover:-translate-y-1"
            >
              Falar Comigo
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm text-gray-500 dark:text-gray-400 font-medium">
            <div className="flex items-center gap-2">
              <Terminal className="text-brand-500" size={20} />
              <span>Frontend Moderno</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="text-purple-500" size={20} />
              <span>Backend Escalável</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="text-indigo-500" size={20} />
              <span>Cloud & DevOps</span>
            </div>
          </div>
        </motion.div>

        {/* Image/Visual Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Glowing ring behind image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-500 to-purple-600 blur-2xl opacity-40 animate-pulse"></div>
            
            <div className="relative w-full h-full rounded-full border-2 border-white/20 dark:border-white/10 overflow-hidden shadow-2xl z-10 p-2 glass">
              <img 
                src={perfilImg} 
                alt={cvData.personalInfo.name} 
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 right-0 md:-right-4 glass px-3 py-2 md:px-4 md:py-2 rounded-xl flex items-center gap-2 z-20 shadow-lg scale-75 md:scale-100 origin-right md:origin-center"
            >
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold text-xs md:text-base">R</div>
              <span className="font-medium text-xs md:text-sm">React</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-0 md:-left-8 glass px-3 py-2 md:px-4 md:py-2 rounded-xl flex items-center gap-2 z-20 shadow-lg scale-75 md:scale-100 origin-left md:origin-center"
            >
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold text-xs md:text-base">N</div>
              <span className="font-medium text-xs md:text-sm">Node.js</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-4 right-4 md:right-10 glass px-3 py-2 md:px-4 md:py-2 rounded-xl flex items-center gap-2 z-20 shadow-lg scale-75 md:scale-100 origin-right md:origin-center"
            >
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 font-bold text-xs md:text-base">C#</div>
              <span className="font-medium text-xs md:text-sm">.NET Core</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
