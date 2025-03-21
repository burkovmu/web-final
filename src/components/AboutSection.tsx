'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const stats = [
  { number: '150+', label: 'Завершенных проектов' },
  { number: '50+', label: 'Довольных клиентов' },
  { number: '15', label: 'Наград и премий' },
  { number: '24/7', label: 'Поддержка клиентов' }
];

const achievements = [
  { year: '2020', title: 'Основание компании', description: 'Начало нашего пути в мире веб-разработки' },
  { year: '2021', title: 'Первые достижения', description: 'Топ-10 веб-студий по версии Рейтинга Рунета' },
  { year: '2022', title: 'Расширение команды', description: 'Открытие нового офиса и рост до 30 специалистов' },
  { year: '2023', title: 'Международные проекты', description: 'Выход на международный рынок' }
];

export default function AboutSection() {
  return (
    <SectionWrapper className="bg-[#393f4d] py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#feda6a] uppercase tracking-[0.3em] text-xs font-stolzl mb-6"
          >
            О нас
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-7xl font-stolzl text-[#d4d4dc] mb-6"
          >
            Кто мы такие
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-[120px] h-[1px] bg-[#feda6a]"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 w-[2px] h-full bg-[#feda6a]/20" />
              <div className="pl-8">
                <p className="text-xl leading-relaxed text-[#d4d4dc] mb-6">
                  Мы - команда профессионалов, объединенных страстью к созданию инновационных цифровых решений. Наш подход основан на глубоком понимании потребностей клиентов и использовании передовых технологий.
                </p>
                <p className="text-lg leading-relaxed text-[#d4d4dc]/80">
                  С момента основания в 2020 году мы успешно реализовали более 150 проектов различной сложности, от корпоративных сайтов до масштабных веб-приложений.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="group"
                >
                  <div className="text-4xl font-stolzl text-[#feda6a] mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-[#d4d4dc]/60 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="relative"
          >
            <div className="absolute left-0 top-0 w-[1px] h-full bg-[#feda6a]/20" />
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="relative pl-8 group"
                >
                  <div className="absolute -left-[5px] top-0 w-[10px] h-[10px] rounded-full bg-[#feda6a]/20 group-hover:bg-[#feda6a] transition-colors" />
                  <div className="text-[#feda6a] text-sm mb-2">{achievement.year}</div>
                  <div className="text-xl font-stolzl text-[#d4d4dc] mb-2">{achievement.title}</div>
                  <div className="text-[#d4d4dc]/60">{achievement.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="relative"
        >
          {/* Основной контент */}
          <div className="relative bg-[#111113] p-16">
            {/* Декоративные элементы */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="absolute -left-4 top-0 text-[#feda6a]/10 text-9xl font-stolzl select-none"
            >
              24
            </motion.div>

            <div className="absolute top-0 left-0 w-[2px] h-full bg-[#111113] group-hover:h-full transition-all duration-300" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                  className="text-sm uppercase tracking-[0.3em] text-[#feda6a] mb-4"
                >
                  Начать проект
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                  className="text-4xl font-stolzl text-[#d4d4dc] mb-6"
                >
                  Воплотим ваши идеи <br />в digital-реальность
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.7 }}
                  className="text-[#d4d4dc]/60 text-lg"
                >
                  От концепции до запуска — создаем проекты, которые превосходят ожидания
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 }}
                className="relative group"
              >
                <div className="relative flex flex-col gap-4">
                  <button className="relative px-8 py-4 bg-[#feda6a] text-[#1d1e22] font-medium group-hover:bg-[#feda6a]/90 transition-all">
                    <div className="absolute left-0 top-0 w-[2px] h-0 bg-[#111113] group-hover:h-full transition-all duration-300" />
                    <div className="absolute right-0 bottom-0 w-[2px] h-0 bg-[#111113] group-hover:h-full transition-all duration-300" />
                    Обсудить проект
                  </button>
                  <span className="text-[#d4d4dc]/40 text-sm text-center">
                    Бесплатная консультация
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
} 