import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Loader2, MessageCircle } from 'lucide-react';
import { cvData } from '../data/cvData';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section className="py-24 relative overflow-hidden" id="contato">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-brand-500 uppercase mb-3">Contato</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">Vamos construir algo incrível juntos?</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              Estou sempre aberto a discutir projetos interessantes, oportunidades de consultoria ou simplesmente trocar ideias sobre arquitetura de software e tecnologia.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">E-mail</p>
                  <a href={`mailto:${cvData.personalInfo.email}`} className="font-medium hover:text-brand-500 transition-colors">
                    {cvData.personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Localização</p>
                  <p className="font-medium">{cvData.personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href={`https://wa.me/${cvData.personalInfo.whatsapp}?text=Olá%20Lucas,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!`} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-colors group flex items-center gap-2">
                <MessageCircle size={24} className="group-hover:text-green-500 transition-colors" />
                <span className="font-medium text-sm">WhatsApp</span>
              </a>
              <a href={cvData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-colors group">
                <Linkedin size={24} className="group-hover:text-brand-500 transition-colors" />
              </a>
              <a href={cvData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-colors group">
                <Github size={24} className="group-hover:text-brand-500 transition-colors" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-gray-50 dark:bg-[#0B0F19] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-gray-50 dark:bg-[#0B0F19] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="w-full bg-gray-50 dark:bg-[#0B0F19] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all resize-none"
                  placeholder="Como posso ajudar?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-brand-600 hover:bg-brand-500 text-white font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Enviando...
                  </>
                ) : isSubmitted ? (
                  <>Mensagem Enviada!</>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
