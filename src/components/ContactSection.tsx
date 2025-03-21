'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Давайте создадим
              <br />
              что-то amazing
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Расскажите нам о вашем проекте, и мы поможем воплотить его в жизнь.
              Наша команда готова приступить к работе над вашими идеями.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a href="mailto:hello@webstudio.com" className="text-gray-400 hover:text-white transition-colors">
                  hello@webstudio.com
                </a>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                <a href="tel:+79999999999" className="text-gray-400 hover:text-white transition-colors">
                  +7 (999) 999-99-99
                </a>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Ваше имя
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-colors"
                placeholder="Иван Иванов"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-colors"
                placeholder="ivan@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Сообщение
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-colors resize-none"
                placeholder="Расскажите о вашем проекте..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white text-black px-8 py-3 rounded-full font-medium text-lg"
            >
              Отправить сообщение
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
} 