import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Loader2, MessageCircle, Building2 } from 'lucide-react';
import { getCvData } from '../data/cvData';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact = () => {
  const { language, t } = useLanguage();
  const cvData = getCvData(language);

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
            <h2 className="text-sm font-bold tracking-widest text-brand-500 uppercase mb-3">{t.contact.title}</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">{t.contact.heading}</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              {t.contact.description}
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-500 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.contact.email}</p>
                  <a href={`mailto:${cvData.personalInfo.email}`} className="font-medium hover:text-brand-500 transition-colors">
                    {cvData.personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-500 shrink-0 mt-0.5">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.contact.address}</p>
                  <p className="font-medium">{cvData.personalInfo.address}</p>
                </div>
              </div>
            </div>

            {/* Dados Cadastrais / Jurídicos */}
            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 mb-8 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-brand-500 mb-3">
                <Building2 size={16} />
                <span>{t.contact.legalInfo}</span>
              </div>
              
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 block">{t.contact.legalName}</span>
                  <span className="font-medium text-gray-900 dark:text-white break-words">{cvData.personalInfo.legalName}</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-gray-200/60 dark:border-white/5">
                  <div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 block">{t.contact.cnpj}</span>
                    <span className="font-mono font-medium text-gray-900 dark:text-gray-200">{cvData.personalInfo.cnpj}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 block">{t.contact.email}</span>
                    <a href={`mailto:${cvData.personalInfo.email}`} className="font-medium text-brand-500 hover:underline">
                      {cvData.personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href={`https://wa.me/${cvData.personalInfo.whatsapp}?text=Olá%20Lucas,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!`} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-colors group flex items-center gap-2">
                <MessageCircle size={24} className="group-hover:text-green-500 transition-colors" />
                <span className="font-medium text-sm">{t.contact.whatsapp}</span>
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
                <label htmlFor="name" className="block text-sm font-medium mb-2">{t.contact.formName}</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-gray-50 dark:bg-[#0B0F19] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  placeholder={t.contact.formName}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">{t.contact.formEmail}</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-gray-50 dark:bg-[#0B0F19] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  placeholder={t.contact.formEmail}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">{t.contact.formMessage}</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="w-full bg-gray-50 dark:bg-[#0B0F19] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all resize-none"
                  placeholder={t.contact.formPlaceholder}
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
                    {t.contact.formSending}
                  </>
                ) : isSubmitted ? (
                  <>{t.contact.formSent}</>
                ) : (
                  <>
                    <Send size={18} />
                    {t.contact.formSend}
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
