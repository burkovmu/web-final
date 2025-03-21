'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const workflowSteps = [
  {
    number: '01',
    title: 'Анализ и планирование',
    description: 'Детально изучаем ваш бизнес, цели и потребности. Разрабатываем стратегию и план реализации проекта.'
  },
  {
    number: '02',
    title: 'Дизайн и прототипирование',
    description: 'Создаем уникальный дизайн и интерактивные прототипы, учитывая современные тенденции и ваши пожелания.'
  },
  {
    number: '03',
    title: 'Разработка',
    description: 'Воплощаем проект в жизнь, используя передовые технологии и следуя лучшим практикам программирования.'
  },
  {
    number: '04',
    title: 'Тестирование и запуск',
    description: 'Проводим тщательное тестирование, оптимизируем производительность и запускаем проект.'
  }
];

export default function WorkflowSection() {
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
            Процесс
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-7xl font-stolzl text-[#d4d4dc] mb-6"
          >
            Как мы работаем
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-[120px] h-[1px] bg-[#feda6a]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 2) }}
              className="relative group"
            >
              <div className="absolute -left-4 top-0 text-[#feda6a]/10 text-8xl font-stolzl select-none group-hover:text-[#feda6a]/20 transition-colors">
                {step.number}
              </div>
              <div className="relative pl-8 pt-8">
                <h3 className="text-2xl font-stolzl text-[#feda6a] mb-4">{step.title}</h3>
                <p className="text-[#d4d4dc]/80 leading-relaxed">{step.description}</p>
                <div className="absolute top-0 left-0 w-[2px] h-16 bg-[#feda6a]/20 group-hover:h-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
} 