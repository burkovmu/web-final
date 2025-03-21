'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Мы создаем
              <br />
              цифровое будущее
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Наша команда профессионалов специализируется на создании инновационных цифровых решений, 
              которые помогают бизнесу расти и развиваться в современном мире.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-3 rounded-full font-medium text-lg"
            >
              Узнать больше
            </motion.button>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl transform rotate-3" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl transform -rotate-3" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {[
            { title: 'Проектов', value: '100+' },
            { title: 'Клиентов', value: '50+' },
            { title: 'Лет опыта', value: '5+' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-5xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 