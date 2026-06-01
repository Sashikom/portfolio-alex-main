import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Обо мне
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                👋 Привет! Я <strong className="text-indigo-600 dark:text-indigo-400">Александр</strong> — разработчик сайтов и ботов из Беларуси.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                🚀 Работаю с современными технологиями: <strong>React</strong>, <strong>Vite</strong>, <strong>Tailwind CSS</strong>, <strong>JavaScript</strong> и <strong>Node.js</strong>.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                💡 Создаю быстрые, адаптивные и функциональные веб-приложения, а также автоматизирую бизнес-процессы через телеграм-ботов.
              </p>

              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
                  Мои технологии:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'React', icon: '⚛️' },
                    { name: 'Vite', icon: '⚡' },
                    { name: 'Tailwind CSS', icon: '🎨' },
                    { name: 'JavaScript', icon: '📜' },
                    { name: 'Node.js', icon: '⚙️' },
                    { name: 'Telegram Bot API', icon: '🤖' },
                    { name: 'REST API', icon: '🔌' },
                    { name: 'Git', icon: '📦' }
                  ].map((tech) => (
                    <span
                      key={tech.name}
                      className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-medium flex items-center gap-2 hover:bg-indigo-200 dark:hover:bg-indigo-900 transition-colors"
                    >
                      <span className="text-xl">{tech.icon}</span>
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center text-2xl">
                      🎯
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Цель</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Создавать качественные продукты, которые решают реальные проблемы
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center text-2xl">
                      🚀
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Подход</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Современные технологии + чистый код + внимание к деталям
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-2xl">
                      🤝
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Клиенты</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Индивидуальный подход и прозрачная коммуникация
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Готов к новым проектам!
                    </span>
                    <a
                      href="#contact"
                      className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                      Связаться
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;