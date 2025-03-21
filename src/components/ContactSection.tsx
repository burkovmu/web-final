'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

export default function ContactSection() {
  return (
    <SectionWrapper className="bg-[#feda6a] py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#1d1e22] uppercase tracking-[0.3em] text-xs font-stolzl mb-6"
          >
            Контакты
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-7xl font-stolzl text-[#1d1e22] mb-6"
          >
            Свяжитесь с нами
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-[120px] h-[1px] bg-[#1d1e22]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-[#1d1e22] text-xl mb-4">Адрес</h3>
              <p className="text-[#393f4d]">ул. Примерная, 123<br />Москва, Россия</p>
            </div>
            <div>
              <h3 className="text-[#1d1e22] text-xl mb-4">Email</h3>
              <p className="text-[#393f4d]">info@web2-0.ru</p>
            </div>
            <div>
              <h3 className="text-[#1d1e22] text-xl mb-4">Телефон</h3>
              <p className="text-[#393f4d]">+7 (999) 123-45-67</p>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-6"
          >
            <div>
              <input 
                type="text" 
                placeholder="Ваше имя" 
                className="w-full p-4 bg-white text-[#1d1e22] placeholder-[#393f4d]/50 border border-[#1d1e22]/10 focus:border-[#1d1e22] outline-none transition-colors"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-4 bg-white text-[#1d1e22] placeholder-[#393f4d]/50 border border-[#1d1e22]/10 focus:border-[#1d1e22] outline-none transition-colors"
              />
            </div>
            <div>
              <textarea 
                placeholder="Ваше сообщение" 
                rows={6}
                className="w-full p-4 bg-white text-[#1d1e22] placeholder-[#393f4d]/50 border border-[#1d1e22]/10 focus:border-[#1d1e22] outline-none transition-colors resize-none"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="px-8 py-4 bg-[#1d1e22] text-white font-medium hover:bg-[#393f4d] transition-colors"
            >
              Отправить
            </button>
          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  );
} 