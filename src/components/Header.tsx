import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, MessageCircle } from 'lucide-react';
import { cvData } from '../data/cvData';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold font-heading tracking-tighter text-gradient">
          LCS.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-brand-500 transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l border-gray-300 dark:border-gray-700 pl-4">
            <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle Theme">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href={`https://wa.me/${cvData.personalInfo.whatsapp}?text=Olá%20Lucas,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-green-100 dark:hover:bg-green-900/30 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500 transition-colors" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
            <a href={cvData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={cvData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </nav>

        {/* Mobile Toggle & Icons */}
        <div className="md:hidden flex items-center gap-3">
          <a href={`https://wa.me/${cvData.personalInfo.whatsapp}?text=Olá%20Lucas,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!`} target="_blank" rel="noopener noreferrer" className="p-2 text-green-600 dark:text-green-500" aria-label="WhatsApp">
            <MessageCircle size={20} />
          </a>
          <button onClick={() => setIsDark(!isDark)} className="p-2" aria-label="Toggle Theme">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2" aria-label="Menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-t border-white/10">
          <ul className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className="block text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
