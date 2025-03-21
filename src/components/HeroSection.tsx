'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { useEffect, useState } from 'react';

const features = [
  { number: '01', title: 'Веб-разработка', description: 'Современные технологии' },
  { number: '02', title: 'UI/UX Дизайн', description: 'Уникальные решения' },
  { number: '03', title: 'Оптимизация', description: 'Высокая производительность' },
  { number: '04', title: 'Поддержка', description: 'Постоянное развитие' }
];

const NightSky = () => {
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: string; animation: string }>>([]);
  const [shootingStars, setShootingStars] = useState<Array<{ x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      const numStars = 100; // Увеличили количество звезд
      
      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const rand = Math.random();
        
        // Определяем размер звезды
        let size = 'star-tiny';
        if (rand > 0.9) size = 'star-large-new';
        else if (rand > 0.7) size = 'star-medium-new';
        else if (rand > 0.4) size = 'star-small-new';
        
        // Определяем анимацию
        let animation = '';
        if (rand > 0.8) animation = 'pulse-fast';
        else if (rand > 0.6) animation = 'pulse';
        else if (rand > 0.4) animation = 'pulse-slow';
        
        newStars.push({ x, y, size, animation });
      }
      
      setStars(newStars);
    };

    const generateShootingStars = () => {
      const newShootingStars = [];
      const numShootingStars = 3;
      
      for (let i = 0; i < numShootingStars; i++) {
        const x = -(Math.random() * 20 + 10); // Начинаем за пределами экрана
        const y = Math.random() * 30; // В верхней трети экрана
        const delay = Math.random() * 10; // Случайная задержка до 10 секунд
        
        newShootingStars.push({ x, y, delay });
      }
      
      setShootingStars(newShootingStars);
    };

    generateStars();
    generateShootingStars();

    // Периодически обновляем падающие звезды
    const interval = setInterval(() => {
      generateShootingStars();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="night-sky">
      {stars.map((star, index) => (
        <div
          key={`star-${index}`}
          className={`star-new ${star.size} ${star.animation}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`
          }}
        />
      ))}
      {shootingStars.map((star, index) => (
        <div
          key={`shooting-star-${index}`}
          className="shooting-star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}
    </div>
  );
};

export default function HeroSection() {
  return (
    <SectionWrapper className="bg-[#111113] min-h-screen flex items-center relative overflow-hidden">
      <NightSky />
      <div className="container mx-auto px-4 relative z-10">
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
                  className="text-7xl font-stolzl text-[#d4d4dc] leading-tight"
                >
                  Создаем сайты,<br />
                  достойные<br />
                  звезд
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
            <div className="grid grid-cols-2 gap-6">
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