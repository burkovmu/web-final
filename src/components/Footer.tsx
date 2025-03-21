'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const socialLinks = [
  { name: 'Instagram', url: 'https://instagram.com' },
  { name: 'Telegram', url: 'https://t.me' },
  { name: 'WhatsApp', url: 'https://whatsapp.com' }
];

const navLinks = [
  { name: 'Главная', url: '/' },
  { name: 'О нас', url: '/about' },
  { name: 'Услуги', url: '/services' },
  { name: 'Проекты', url: '/projects' },
  { name: 'Контакты', url: '/contacts' }
];

export default function Footer() {
  return (
    <footer className="bg-[#1d1e22] border-t border-[#393f4d]/20">
      <div className="container mx-auto">
        <div className="px-8 lg:px-12 py-16">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            {/* Логотип и описание */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:max-w-xs"
            >
              <h3 className="text-[#feda6a] text-xl font-medium mb-4">Web Studio</h3>
              <p className="text-[#d4d4dc]/70 text-sm leading-relaxed mb-6">
                Создаем современные веб-сайты и приложения, которые помогают бизнесу расти и развиваться в цифровом мире.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#393f4d]/30 flex items-center justify-center hover:bg-[#feda6a] transition-colors group"
                  >
                    <span className="text-[#d4d4dc] text-sm group-hover:text-[#1d1e22] transition-colors">
                      {social.name[0]}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Навигация */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col lg:flex-row gap-12"
            >
              <div>
                <h4 className="text-[#feda6a] text-sm font-medium mb-4">Меню</h4>
                <nav className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.url}
                      className="text-[#d4d4dc]/70 text-sm hover:text-[#feda6a] transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Контакты */}
              <div>
                <h4 className="text-[#feda6a] text-sm font-medium mb-4">Контакты</h4>
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:info@webstudio.ru"
                    className="text-[#d4d4dc]/70 text-sm hover:text-[#feda6a] transition-colors"
                  >
                    info@webstudio.ru
                  </a>
                  <a
                    href="tel:+7999999999"
                    className="text-[#d4d4dc]/70 text-sm hover:text-[#feda6a] transition-colors"
                  >
                    +7 (999) 999-99-99
                  </a>
                  <p className="text-[#d4d4dc]/70 text-sm">
                    Москва, ул. Примерная, 1
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="border-t border-[#393f4d]/20 px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#d4d4dc]/50 text-xs">
              © 2024 Web Studio. Все права защищены.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-[#d4d4dc]/50 text-xs hover:text-[#feda6a] transition-colors"
              >
                Политика конфиденциальности
              </Link>
              <Link
                href="/terms"
                className="text-[#d4d4dc]/50 text-xs hover:text-[#feda6a] transition-colors"
              >
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 