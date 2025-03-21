'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

export default function HeroSection() {
  return (
    <SectionWrapper className="bg-[#1d1e22] min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#feda6a] uppercase tracking-[0.3em] text-xs font-stolzl"
            >
              Веб-студия
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-8xl font-stolzl text-[#d4d4dc] leading-tight"
            >
              Создаем<br />
              цифровое<br />
              будущее
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[#d4d4dc]/80 text-lg max-w-md"
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
              <button className="px-8 py-4 bg-[#feda6a] text-[#1d1e22] font-medium hover:bg-[#feda6a]/90 transition-colors">
                Начать проект
              </button>
              <button className="px-8 py-4 border border-[#d4d4dc]/20 text-[#d4d4dc] hover:border-[#feda6a] transition-colors">
                Узнать больше
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#feda6a]/20 to-transparent rounded-full blur-3xl" />
            <div className="relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-[20rem] font-stolzl text-[#393f4d] leading-none select-none"
              >
                2024
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
} 