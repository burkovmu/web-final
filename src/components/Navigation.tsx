'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '#home', label: 'Главная' },
    { href: '#projects', label: 'Проекты' },
    { href: '#services', label: 'Услуги' },
    { href: '#about', label: 'О нас' },
    { href: '#contact', label: 'Контакты' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 h-screen w-[80px] bg-[#1d1e22] border-r border-[#393f4d] z-50">
        <div className="h-full flex flex-col items-center justify-between py-8">
          {/* Logo */}
          <div className="w-full px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="w-full aspect-square bg-[#393f4d] hover:bg-[#feda6a] transition-colors flex flex-col items-center justify-center gap-2"
            >
              <span className="w-6 h-[2px] bg-[#d4d4dc] transition-colors" />
              <span className="w-6 h-[2px] bg-[#d4d4dc] transition-colors" />
              <span className="w-6 h-[2px] bg-[#d4d4dc] transition-colors" />
            </motion.button>
          </div>

          {/* Company Name */}
          <div className="rotate-180 [writing-mode:vertical-rl] text-2xl tracking-widest text-[#feda6a] font-light select-none">
            Web Studio
          </div>

          {/* Decorative Element */}
          <div className="w-2 h-2 bg-[#393f4d]" />
        </div>
      </nav>

      {/* Sidebar Menu */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? '80px' : '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-screen w-[300px] bg-[#393f4d] z-40 p-12"
      >
        <div className="h-full flex flex-col justify-center">
          <ul className="space-y-8">
            {menuItems.map((item) => (
              <motion.li
                key={item.href}
                whileHover={{ x: 10 }}
                className="overflow-hidden"
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-3xl font-light text-[#d4d4dc] hover:text-[#feda6a] transition-colors"
                >
                  {item.label}
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
} 