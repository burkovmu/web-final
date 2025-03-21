'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const menuItems = [
  { title: 'Главная', href: '/' },
  { title: 'О нас', href: '/about' },
  { title: 'Услуги', href: '/services' },
  { title: 'Проекты', href: '/projects' },
  { title: 'Контакты', href: '/contacts' }
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Вертикальная шапка */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed left-0 top-0 h-screen w-20 bg-[#1d1e22] z-50 flex flex-col items-center justify-between py-8"
      >
        {/* Кнопка меню */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="w-12 h-12 relative group"
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 flex flex-col gap-1.5">
            <div className="w-full h-[2px] bg-[#d4d4dc] group-hover:bg-[#feda6a] transition-colors" />
            <div className="w-2/3 h-[2px] bg-[#d4d4dc] group-hover:bg-[#feda6a] transition-colors" />
            <div className="w-full h-[2px] bg-[#d4d4dc] group-hover:bg-[#feda6a] transition-colors" />
          </div>
        </button>

        {/* Вертикальный текст */}
        <div className="flex-1 flex items-center">
          <motion.div 
            className="rotate-180 text-[#d4d4dc] text-lg tracking-[0.3em] font-stolzl"
            style={{ writingMode: 'vertical-rl' }}
          >
            Mishlen Team
          </motion.div>
        </div>

        {/* Декоративная линия */}
        <div className="w-[2px] h-24 bg-[#feda6a]/20" />
      </motion.div>

      {/* Всплывающее меню */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Затемнение */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Меню */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.4 }}
              className="fixed left-0 top-0 w-full max-w-xl h-screen bg-[#1d1e22] z-50 p-20"
            >
              {/* Кнопка закрытия */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute right-8 top-8 w-12 h-12 flex items-center justify-center group"
              >
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 rotate-45 flex items-center justify-center">
                    <div className="w-full h-[2px] bg-[#d4d4dc] group-hover:bg-[#feda6a] transition-colors" />
                  </div>
                  <div className="absolute inset-0 -rotate-45 flex items-center justify-center">
                    <div className="w-full h-[2px] bg-[#d4d4dc] group-hover:bg-[#feda6a] transition-colors" />
                  </div>
                </div>
              </button>

              {/* Навигация */}
              <nav className="h-full flex flex-col justify-center -mt-20">
                <ul className="space-y-8">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link 
                        href={item.href}
                        className="group flex items-center gap-4 text-[#d4d4dc] hover:text-[#feda6a] transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-4xl font-stolzl">{item.title}</span>
                        <div className="h-[1px] w-0 bg-[#feda6a] group-hover:w-24 transition-all" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Декоративный текст */}
              <div className="absolute right-8 bottom-8 text-[20rem] font-stolzl text-[#393f4d]/10 leading-none select-none pointer-events-none">
                MT
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 