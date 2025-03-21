'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

export default function AboutSection() {
  return (
    <SectionWrapper className="bg-[#393f4d] py-32">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="text-[#d4d4dc]"
          >
            <p className="text-lg leading-relaxed mb-6">
              Мы - команда профессионалов, специализирующихся на создании современных веб-решений. Наш подход сочетает инновационные технологии с глубоким пониманием потребностей бизнеса.
            </p>
            <p className="text-lg leading-relaxed">
              С 2020 года мы успешно реализовали более 50 проектов различной сложности, от корпоративных сайтов до сложных веб-приложений.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="text-[#d4d4dc]"
          >
            <p className="text-lg leading-relaxed mb-6">
              Наша миссия - помогать бизнесу расти через создание эффективных цифровых решений. Мы верим в силу технологий и их способность трансформировать бизнес-процессы.
            </p>
            <p className="text-lg leading-relaxed">
              В основе нашей работы лежат три принципа: качество, инновации и результат. Мы не просто создаем сайты - мы создаем инструменты для вашего успеха.
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
} 