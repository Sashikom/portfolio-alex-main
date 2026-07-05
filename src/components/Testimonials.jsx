import { motion } from 'framer-motion';

export default function Testimonials() {
  const projects = [
    {
      id: 1,
      name: 'AI Business OS',
      role: 'SaaS-платформа для бизнеса',
      date: 'Запущен в июле 2026',
      text: 'Полноценная AI-платформа для автоматизации маркетинга и продаж. 5 модулей в одном решении: AI Чат, Генерация контента, Исследование рынка, Воронки продаж, Профиль пользователя.',
      avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=AI',
      project: 'Telegram-бот + Backend + PostgreSQL + Redis',
      stats: 'Работает 24/7, 5 AI-модулей',
      links: {
        bot: 'https://t.me/Sashikom_bot',
        landing: 'https://ai-business-os-landing-58af-delta.vercel.app/',
        github: 'https://github.com/Sashikom/ai-business-os'
      }
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto max-w-7xl">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Мои проекты
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Реальные работающие продукты, которые вы можете попробовать прямо сейчас
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Сетка проектов */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700"
            >
              {/* Рейтинг */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
                <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
                  🟢 Работает
                </span>
              </div>

              {/* Текст проекта */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic text-base leading-relaxed">
                "{project.text}"
              </p>

              {/* Автор с фото */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-600 dark:border-indigo-400">
                  <img 
                    src={project.avatar} 
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                    {project.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {project.role} • {project.date}
                  </p>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                    {project.project}
                  </p>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                      {project.stats}
                    </span>
                  </div>
                </div>
              </div>

              {/* Ссылки на проект */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col gap-2">
                <a 
                  href={project.links.bot} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                >
                  🤖 Telegram-бот →
                </a>
                <a 
                  href={project.links.landing} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                >
                  🌐 Лендинг →
                </a>
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                >
                  💻 GitHub →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Блок для будущих отзывов */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center max-w-3xl mx-auto"
        >
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl px-8 py-10 border border-indigo-200 dark:border-indigo-800">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Станьте моим первым клиентом!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Готов предоставить <span className="text-indigo-600 dark:text-indigo-400 font-semibold">бесплатный демо-доступ</span> к любому продукту. 
              Убедитесь в качестве лично — и оставьте честный отзыв, который появится здесь.
            </p>
            <a 
              href="https://t.me/maksahbot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              💬 Написать в Telegram
            </a>
          </div>
        </motion.div>

        {/* Честная статистика */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center items-center gap-6 md:gap-12 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl px-6 md:px-10 py-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                1+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Запущенный проект
              </div>
            </div>
            
            <div className="hidden md:block w-px h-10 bg-gray-300 dark:bg-gray-700"></div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                24/7
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Работа без сбоев
              </div>
            </div>
            
            <div className="hidden md:block w-px h-10 bg-gray-300 dark:bg-gray-700"></div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                100%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Вовлечённость
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}