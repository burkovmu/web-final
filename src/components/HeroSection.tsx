'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const features = [
  { number: '01', title: 'Веб-разработка', description: 'Современные технологии' },
  { number: '02', title: 'UI/UX Дизайн', description: 'Уникальные решения' },
  { number: '03', title: 'Оптимизация', description: 'Высокая производительность' },
  { number: '04', title: 'Поддержка', description: 'Постоянное развитие' }
];

export default function HeroSection() {
  return (
    <SectionWrapper className="bg-[#1d1e22] min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -left-4 top-0 text-[#feda6a]/5 text-7xl font-stolzl select-none"
            >
              Студия
            </motion.div>

            <div className="relative pl-8">
              <div className="absolute -left-4 top-0 w-[2px] h-full bg-[#feda6a]/20" />
              
              <div className="space-y-8">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-[#feda6a] uppercase tracking-[0.3em] text-xs font-stolzl"
                >
                  Веб-студия
                </motion.span>

                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-8xl font-stolzl text-[#d4d4dc] leading-tight"
                >
                  Добавим<br />
                  звезд<br />
                  вашему бизнесу
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-[#d4d4dc]/60 text-lg max-w-md"
                >
                  Мы специализируемся на разработке современных веб-решений, 
                  которые помогают бизнесу расти и развиваться в цифровую эпоху.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex gap-4"
                >
                  <button className="relative px-8 py-4 bg-[#feda6a] text-[#1d1e22] font-medium group overflow-hidden">
                    <div className="absolute inset-0 bg-[#1d1e22] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10 group-hover:text-[#feda6a] transition-colors duration-300">
                      Начать проект
                    </span>
                  </button>
                  <button className="relative px-8 py-4 border border-[#d4d4dc]/20 text-[#d4d4dc] group overflow-hidden">
                    <div className="absolute inset-0 bg-[#feda6a]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10">
                      Узнать больше
                    </span>
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative bg-[#393f4d]/10 p-8 overflow-hidden">
                    <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#feda6a]/20 group-hover:h-full transition-all duration-500" />
                    <div className="absolute bottom-0 right-0 w-[2px] h-0 bg-[#feda6a]/20 group-hover:h-full transition-all duration-500" />
                    
                    <div className="relative z-10 space-y-4">
                      <div className="text-[#feda6a]/20 text-4xl font-stolzl group-hover:text-[#feda6a]/30 transition-colors">
                        {feature.number}
                      </div>
                      <div>
                        <div className="text-[#d4d4dc] text-lg font-medium mb-1">
                          {feature.title}
                        </div>
                        <div className="text-[#d4d4dc]/60 text-sm">
                          {feature.description}
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-[#feda6a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -right-4 bottom-4 text-[20rem] font-stolzl text-[#393f4d]/10 leading-none select-none pointer-events-none"
            >
              24
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
} 