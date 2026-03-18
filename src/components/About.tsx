import { motion } from 'framer-motion';
import { Terminal, Lightbulb, Users, Rocket } from 'lucide-react';

export const About = () => {
  const highlights = [
    { icon: Terminal, title: "+7 Anos", desc: "de experiência" },
    { icon: Lightbulb, title: "Liderança", desc: "técnica de times" },
    { icon: Rocket, title: "Arquitetura", desc: "escalável" },
    { icon: Users, title: "Mentoria", desc: "e capacitação" },
  ];

  return (
    <section className="py-24 relative" id="sobre">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-brand-500 uppercase mb-3">Sobre Mim</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Transformando complexidade em soluções elegantes.
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              <p>
                Com mais de 7 anos de experiência no mercado, tenho atuado na intersecção entre tecnologia, educação e transformação digital. Minha paixão é construir produtos que não apenas funcionam excepcionalmente bem, mas que entregam valor real aos usuários e negócios.
              </p>
              <p>
                Como Arquiteto de Software e Engenheiro Full Stack Sênior, especializo-me em desenhar e implementar sistemas distribuídos, microsserviços e aplicações escaláveis. Tenho forte vivência no desenvolvimento de plataformas educacionais (LMS), sistemas financeiros e soluções corporativas complexas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="glass p-4 rounded-xl flex items-center gap-4">
                  <div className="p-2 bg-brand-500/10 rounded-lg text-brand-500">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass p-8 rounded-3xl border border-gray-200 dark:border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 blur-3xl rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full"></div>
              
              <h4 className="text-xl font-bold font-heading mb-6 flex items-center gap-2">
                <Terminal size={20} className="text-brand-500" />
                Resumo de Carreira
              </h4>
              
              <div className="space-y-6 relative z-10">
                <div className="border-l-2 border-brand-500/30 pl-4 pb-6">
                  <div className="text-sm text-brand-500 font-bold mb-1">Engenheiro Sênior & Arquiteto</div>
                  <div className="text-gray-900 dark:text-white font-medium mb-1">Byte Analysis & Consultoria</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Liderança técnica, AWS, C#, React, Mensageria.</p>
                </div>
                
                <div className="border-l-2 border-brand-500/30 pl-4 pb-6">
                  <div className="text-sm text-brand-500 font-bold mb-1">Tech Lead & Designer de Currículo</div>
                  <div className="text-gray-900 dark:text-white font-medium mb-1">Generation Brasil</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Gestão de 700+ alunos, criação de plataformas LMS.</p>
                </div>
                
                <div className="border-l-2 border-transparent pl-4">
                  <div className="text-sm text-brand-500 font-bold mb-1">Formação Acadêmica</div>
                  <div className="text-gray-900 dark:text-white font-medium mb-1">Análise e Desenvolvimento de Sistemas</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">UNINOVE | Múltiplas especializações anteriores.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
