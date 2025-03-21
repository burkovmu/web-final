'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Image from "next/image";

const fadeUpVariants = {
  hidden: { 
    opacity: 0, 
    y: 30
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const staggerChildrenVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const childVariants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const slideInVariants = {
  hidden: { 
    y: 50,
    opacity: 0 
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
      mass: 0.5
    }
  }
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-[#1d1e22] text-[#d4d4dc] relative pl-[80px]">
        {/* Hero Section */}
        <section id="home" className="min-h-screen relative overflow-hidden">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildrenVariants}
            className="w-[95%] mx-auto h-screen grid grid-cols-12 gap-8 relative"
          >
            {/* Background Elements */}
            <div className="absolute inset-0 grid grid-cols-12 gap-8 opacity-10">
              {Array.from({ length: 12 }).map((_, index) => (
                <motion.div
                  key={`bg-${index}`}
                  initial={{ height: 0 }}
                  animate={{ height: '100%' }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  className="h-full bg-[#393f4d]"
                />
              ))}
            </div>

            {/* Main Content */}
            <div className="col-span-7 flex flex-col justify-center relative z-10">
              <motion.div
                variants={childVariants}
                className="space-y-2 mb-12"
              >
                <div className="flex items-center gap-4 text-[#feda6a]">
                  <div className="w-12 h-[2px] bg-current" />
                  <span className="uppercase tracking-widest text-sm font-medium">Web Studio</span>
                </div>
              </motion.div>

              <motion.div variants={childVariants} className="relative">
                <h1 className="text-[140px] leading-[0.85] tracking-[-0.02em] mb-8 font-stolzl">
                  <span className="block text-[#d4d4dc]">Создаем</span>
                  <span className="block text-[#feda6a]">цифровое</span>
                  <span className="block text-[#d4d4dc]">будущее</span>
                </h1>
              </motion.div>

              <motion.div variants={childVariants} className="max-w-xl mb-12">
                <p className="text-2xl text-[#d4d4dc] leading-relaxed tracking-wide font-stolzl">
                  Мы создаем инновационные цифровые решения, которые превосходят ожидания
                </p>
              </motion.div>

              <motion.div variants={childVariants} className="flex items-center gap-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-16 py-4 bg-[#feda6a] text-[#1d1e22] text-xl tracking-wide font-normal relative overflow-hidden group"
                >
                  <span className="relative z-10">Начать проект</span>
                  <motion.div
                    className="absolute inset-0 bg-[#d4d4dc]"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-[#393f4d] flex items-center justify-center group-hover:bg-[#feda6a] transition-colors">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-t-[#feda6a] border-r-[#feda6a] border-b-transparent border-l-transparent rounded-full group-hover:border-t-[#1d1e22] group-hover:border-r-[#1d1e22] transition-colors"
                    />
                  </div>
                  <span className="text-lg group-hover:text-[#feda6a] transition-colors">Смотреть шоурил</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Side Grid */}
            <div className="col-span-5 flex items-center">
              <div className="grid grid-cols-2 gap-4 h-[600px] w-full relative">
                <motion.div
                  variants={childVariants}
                  className="col-span-2 bg-[#393f4d] relative overflow-hidden group"
                >
                  <motion.div
                    initial={{ scale: 1.2, rotate: -5 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-[url('/hero-1.jpg')] bg-cover bg-center"
                  />
                  <div className="absolute inset-0 bg-[#feda6a] mix-blend-soft-light opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
                
                {[1, 2].map((_, index) => (
                  <motion.div
                    key={index}
                    variants={childVariants}
                    className="bg-[#393f4d] relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 90, 180, 270, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 2
                        }}
                        className="w-16 h-16 border-2 border-[#feda6a] relative"
                      >
                        <div className="absolute inset-0 border-2 border-[#feda6a] rotate-45" />
                      </motion.div>
                    </div>
                    <div className="absolute inset-0 bg-[#feda6a] mix-blend-soft-light opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}

                <motion.div
                  variants={childVariants}
                  className="bg-[#feda6a] relative overflow-hidden flex items-center justify-center group"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-[#1d1e22] text-6xl font-light"
                  >
                    2024
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
              <span className="text-sm uppercase tracking-widest text-[#d4d4dc]">Прокрутите вниз</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-[2px] h-12 bg-gradient-to-b from-[#feda6a] to-transparent"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 relative bg-[#393f4d]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildrenVariants}
            className="w-[95%] mx-auto"
          >
            <motion.div variants={fadeUpVariants} className="mb-24">
              <span className="text-[#feda6a] uppercase tracking-[0.2em] text-sm font-bold">Проекты</span>
              <h2 className="text-7xl mt-4 tracking-[-0.01em] font-light">Наши работы</h2>
            </motion.div>

            <div className="grid grid-cols-12 gap-8">
              <motion.div variants={childVariants} className="col-span-8 bg-[#1d1e22] p-12 aspect-video">
                <h3 className="text-4xl mb-4 tracking-wide font-stolzl">Корпоративный портал</h3>
                <p className="text-[#d4d4dc] text-xl tracking-wide font-stolzl">Разработка системы управления внутренними процессами компании</p>
              </motion.div>
              <motion.div variants={childVariants} className="col-span-4 bg-[#1d1e22] p-12">
                <h3 className="text-4xl mb-4 tracking-wide font-stolzl">Веб-приложение</h3>
                <p className="text-[#d4d4dc] text-xl tracking-wide font-stolzl">Создание современного веб-приложения с интерактивным интерфейсом</p>
              </motion.div>
              <motion.div variants={childVariants} className="col-span-6 bg-[#1d1e22] p-12">
                <h3 className="text-4xl mb-4 tracking-wide font-stolzl">Интернет-магазин</h3>
                <p className="text-[#d4d4dc] text-xl tracking-wide font-stolzl">Разработка масштабируемого интернет-магазина с современным дизайном</p>
              </motion.div>
              <motion.div variants={childVariants} className="col-span-6 bg-[#1d1e22] p-12">
                <h3 className="text-3xl mb-4 font-stolzl">Веб-сервис</h3>
                <p className="text-[#d4d4dc] font-stolzl">Создание облачной платформы для обработки данных</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 relative bg-[#1d1e22]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildrenVariants}
            className="w-[95%] mx-auto"
          >
            <motion.div variants={fadeUpVariants} className="mb-24">
              <span className="text-[#feda6a] uppercase tracking-[0.2em] text-sm font-bold">Услуги</span>
              <h2 className="text-7xl mt-4 tracking-[-0.01em] font-light">Наши компетенции</h2>
            </motion.div>

            <div className="grid grid-cols-12 gap-8">
              {[
                {
                  title: "Веб-разработка",
                  description: "Full-stack разработка с использованием современных технологий: React, Next.js, Node.js",
                  bg: "#393f4d"
                },
                {
                  title: "UI/UX Дизайн",
                  description: "Создание уникальных пользовательских интерфейсов и проработка пользовательского опыта",
                  bg: "#feda6a"
                },
                {
                  title: "Мобильная разработка",
                  description: "Разработка нативных и кроссплатформенных мобильных приложений",
                  bg: "#393f4d"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={childVariants}
                  className={`col-span-4 p-12 ${service.bg === "#feda6a" ? "text-[#1d1e22]" : "text-[#d4d4dc]"}`}
                  style={{ backgroundColor: service.bg }}
                >
                  <div className="w-16 h-16 border-2 border-current mb-8" />
                  <h3 className="text-3xl font-stolzl mb-4">{service.title}</h3>
                  <p className="text-lg leading-relaxed font-stolzl">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 relative bg-[#393f4d]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildrenVariants}
            className="w-[95%] mx-auto"
          >
            <div className="grid grid-cols-12 gap-16">
              <motion.div variants={childVariants} className="col-span-6 space-y-8">
                <span className="text-[#feda6a] uppercase tracking-widest text-sm font-stolzl">О нас</span>
                <h2 className="text-6xl font-stolzl">Инновации в каждом пикселе</h2>
                <p className="text-2xl text-[#d4d4dc] leading-relaxed font-stolzl">
                  Мы - команда профессионалов с более чем 5-летним опытом в создании цифровых продуктов. 
                  Наша миссия - превращать сложные идеи в элегантные решения.
                </p>
              </motion.div>
              
              <motion.div variants={childVariants} className="col-span-6 grid grid-cols-2 gap-8">
                <div className="bg-[#1d1e22] p-12">
                  <h3 className="text-5xl font-stolzl mb-4 text-[#feda6a]">50+</h3>
                  <p className="text-xl font-stolzl">Реализованных проектов</p>
                </div>
                <div className="bg-[#1d1e22] p-12">
                  <h3 className="text-5xl font-stolzl mb-4 text-[#feda6a]">15+</h3>
                  <p className="text-xl font-stolzl">Экспертов в команде</p>
                </div>
                <div className="bg-[#1d1e22] p-12">
                  <h3 className="text-5xl font-stolzl mb-4 text-[#feda6a]">98%</h3>
                  <p className="text-xl font-stolzl">Довольных клиентов</p>
                </div>
                <div className="bg-[#1d1e22] p-12">
                  <h3 className="text-5xl font-stolzl mb-4 text-[#feda6a]">24/7</h3>
                  <p className="text-xl font-stolzl">Поддержка проектов</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 relative bg-[#feda6a]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildrenVariants}
            className="w-[95%] mx-auto"
          >
            <div className="grid grid-cols-12 gap-16">
              <motion.div variants={childVariants} className="col-span-5 space-y-8">
                <span className="text-[#1d1e22] uppercase tracking-[0.2em] text-sm font-bold">Контакты</span>
                <h2 className="text-7xl tracking-[-0.01em] text-[#1d1e22] font-light">Начнем проект вместе</h2>
                <p className="text-2xl text-[#393f4d] leading-relaxed font-stolzl">
                  Готовы обсудить ваш проект? Свяжитесь с нами, и мы поможем реализовать ваши идеи.
                </p>
                <div className="space-y-4">
                  <a href="mailto:contact@webstudio.com" className="block text-2xl text-[#1d1e22] hover:text-[#393f4d] transition-colors">
                    contact@webstudio.com
                  </a>
                  <a href="tel:+71234567890" className="block text-2xl text-[#1d1e22] hover:text-[#393f4d] transition-colors">
                    +7 (123) 456-78-90
                  </a>
                </div>
              </motion.div>

              <motion.form variants={childVariants} className="col-span-7 grid grid-cols-2 gap-8 bg-[#1d1e22] p-12">
                <div className="col-span-2 space-y-2">
                  <label className="text-sm text-[#d4d4dc]">Имя</label>
                  <input type="text" className="w-full bg-[#393f4d] p-4 text-[#d4d4dc] border-b-2 border-transparent focus:border-[#feda6a] transition-colors" />
                </div>
                <div className="col-span-2 space-y-2">
                  <label className="text-sm text-[#d4d4dc]">Email</label>
                  <input type="email" className="w-full bg-[#393f4d] p-4 text-[#d4d4dc] border-b-2 border-transparent focus:border-[#feda6a] transition-colors" />
                </div>
                <div className="col-span-2 space-y-2">
                  <label className="text-sm text-[#d4d4dc]">Сообщение</label>
                  <textarea rows={4} className="w-full bg-[#393f4d] p-4 text-[#d4d4dc] border-b-2 border-transparent focus:border-[#feda6a] transition-colors" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="col-span-2 px-8 py-4 bg-[#feda6a] text-[#1d1e22] text-lg font-medium hover:bg-[#d4d4dc] transition-colors"
                >
                  Отправить
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-16 bg-[#393f4d] border-t border-[#1d1e22]">
          <div className="w-[95%] mx-auto">
            <div className="grid grid-cols-12 gap-16">
              <div className="col-span-4 space-y-8">
                <h3 className="text-5xl tracking-[-0.01em] font-stolzl text-[#feda6a]">Web Studio</h3>
                <p className="text-[#d4d4dc] leading-relaxed font-stolzl">
                  Создаем инновационные цифровые решения для развития вашего бизнеса
                </p>
                <div className="flex gap-4">
                  {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((social) => (
                    <motion.a
                      key={social}
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-[#1d1e22] flex items-center justify-center text-[#d4d4dc] hover:text-[#feda6a] hover:bg-[#1d1e22] transition-colors"
                    >
                      {social[0]}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="col-span-2 space-y-8">
                <h4 className="text-lg font-medium text-[#feda6a]">Навигация</h4>
                <ul className="space-y-4">
                  {['Главная', 'Проекты', 'Услуги', 'О нас', 'Контакты'].map((item) => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase()}`} className="text-[#d4d4dc] hover:text-[#feda6a] transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-2 space-y-8">
                <h4 className="text-lg font-medium text-[#feda6a]">Услуги</h4>
                <ul className="space-y-4">
                  {['Веб-разработка', 'UI/UX Дизайн', 'Мобильная разработка', 'Консультации'].map((item) => (
                    <li key={item}>
                      <a href="#services" className="text-[#d4d4dc] hover:text-[#feda6a] transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-4 space-y-8">
                <h4 className="text-lg font-medium text-[#feda6a]">Подписка на новости</h4>
                <p className="text-[#d4d4dc] font-stolzl">Будьте в курсе наших последних проектов и новостей</p>
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Ваш email"
                    className="flex-1 bg-[#1d1e22] px-4 py-3 text-[#d4d4dc] placeholder-[#d4d4dc]/50"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-[#feda6a] text-[#1d1e22] font-medium"
                  >
                    Подписаться
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-[#1d1e22] flex items-center justify-between text-[#d4d4dc]">
              <p>© 2024 Web Studio. Все права защищены.</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-[#feda6a] transition-colors">Политика конфиденциальности</a>
                <a href="#" className="hover:text-[#feda6a] transition-colors">Условия использования</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
