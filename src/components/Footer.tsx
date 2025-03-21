'use client';

import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'Twitter', url: '#' },
  { name: 'Instagram', url: '#' },
  { name: 'LinkedIn', url: '#' },
  { name: 'GitHub', url: '#' }
];

const navLinks = [
  { name: 'О нас', url: '#about' },
  { name: 'Услуги', url: '#services' },
  { name: 'Проекты', url: '#projects' },
  { name: 'Контакты', url: '#contact' }
];

export default function Footer() {
  return (
    <footer className="bg-[#1d1e22] py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <h3 className="text-[#feda6a] text-xl font-stolzl">Web 2.0</h3>
            <p className="text-[#d4d4dc]/80 leading-relaxed">
              Создаем инновационные веб-решения для развития вашего бизнеса в цифровую эпоху.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-[#d4d4dc]/60 hover:text-[#feda6a] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[#feda6a] text-xl font-stolzl">Навигация</h3>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-[#d4d4dc]/60 hover:text-[#feda6a] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-6">
            <h3 className="text-[#feda6a] text-xl font-stolzl">Подписка</h3>
            <p className="text-[#d4d4dc]/80 leading-relaxed">
              Подпишитесь на нашу рассылку, чтобы быть в курсе последних новостей и обновлений.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Ваш email"
                className="w-full p-4 bg-[#393f4d] text-[#d4d4dc] placeholder-[#d4d4dc]/50 border border-[#d4d4dc]/20 focus:border-[#feda6a] outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#feda6a] text-[#1d1e22] font-medium hover:bg-[#feda6a]/90 transition-colors"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#d4d4dc]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#d4d4dc]/60 text-sm">
              © 2024 Web 2.0. Все права защищены.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-[#d4d4dc]/60 hover:text-[#feda6a] text-sm transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-[#d4d4dc]/60 hover:text-[#feda6a] text-sm transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 