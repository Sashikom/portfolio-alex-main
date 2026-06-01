import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Маркетинговая SaaS система",
    description: "AI-платформа для автоматизации маркетинга и продаж. 5 модулей в одном решении.",
    icon: "🚀",
    color: "from-indigo-600 to-purple-600",
    price: "199 BYN/мес",
    category: "saas",
    features: ["Исследование рынка", "Генерация контента", "Поиск лидов", "Воронки продаж", "AI-ассистент"],
    tech: ["React", "Node.js", "AI API"],
    result: "Автоматизация маркетинга без команды"
  },
  {
    id: 2,
    title: "Психолог-бот",
    description: "Чат-бот для психологической поддержки клиентов. Работает 24/7, отвечает мгновенно.",
    icon: "🧠",
    color: "from-emerald-500 to-teal-500",
    price: "89 BYN/мес",
    category: "bot",
    features: ["Консультации 24/7", "Анонимность", "Сбора анамнеза", "Запись на сессии", "Админ-панель"],
    tech: ["Node.js", "Telegram API", "MongoDB"],
    result: "Масштабируйте психологическую помощь без найма"
  },
  {
    id: 3,
    title: "Админ-бот для бизнеса",
    description: "Автоматизация управления заказами, клиентами и платежами. Всё в одном боте.",
    icon: "⚙️",
    color: "from-orange-500 to-red-500",
    price: "149 BYN/мес",
    category: "bot",
    features: ["Приём заказов", "Обработка платежей", "CRM-система", "Уведомления", "Статистика"],
    tech: ["Node.js", "Telegram API", "PostgreSQL"],
    result: "Экономьте 20+ часов в неделю на рутине"
  },
  {
    id: 4,
    title: "Копирайтинг-бот",
    description: "AI генерирует продающие тексты, посты, статьи. Подключен к Telegram-каналу.",
    icon: "✍️",
    color: "from-pink-500 to-rose-500",
    price: "59 BYN/мес",
    category: "bot",
    features: ["Продающие тексты", "Посты для соцсетей", "SEO-статьи", "Email-рассылки", "Интеграция с каналом"],
    tech: ["OpenAI API", "Telegram API", "Node.js"],
    result: "Контент за минуты вместо часов"
  },
  {
    id: 5,
    title: "Комплексный сайт + бот",
    description: "Посадочная страница + Telegram-бот + админ-панель. Полноценная воронка продаж.",
    icon: "🌐",
    color: "from-blue-600 to-cyan-600",
    price: "от 350 BYN",
    category: "site",
    features: ["Лендинг под ключ", "Telegram-бот", "CRM для заказов", "Интеграция платежей", "SEO-настройка"],
    tech: ["React", "Vite", "Tailwind CSS", "Node.js"],
    result: "Готовая система продаж за 3 дня"
  },
  {
    id: 6,
    title: "Отзывы + Переводы",
    description: "Профессиональный копирайтинг для вашего бизнеса. Работаю с текстами любой сложности.",
    icon: "⭐",
    color: "from-yellow-500 to-amber-500",
    price: "от 25 BYN",
    category: "saas",
    features: ["Отзывы для маркетплейсов", "Переводы RU/EN/BY", "Продающие описания", "Рерайт текстов", "SEO-копирайтинг"],
    tech: ["Копирайтинг", "Перевод", "Рерайтинг"],
    result: "Качественные текста за 24 часа"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  // ✅ Фильтрация по категории
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // ✅ Закрытие модального окна по Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 px-4 bg-gray-50 dark:bg-gray-900">
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
              Мои продукты
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Готовые решения для вашего бизнеса. Выберите — подключу за 24 часа.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Фильтры */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['all', 'bot', 'saas', 'site'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === f
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {f === 'all' ? 'Все продукты' : 
               f === 'bot' ? 'Боты' : 
               f === 'saas' ? 'SaaS' : 'Сайты'}
            </button>
          ))}
        </div>

        {/* Сетка проектов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow h-full flex flex-col">
                  
                  {/* Header с ценой */}
                  <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-gray-900 shadow-lg">
                      {project.price}
                    </div>
                    <span className="text-6xl">{project.icon}</span>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                      {project.description}
                    </p>
                    
                    {/* Результат */}
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-3 mb-4">
                      <p className="text-sm text-indigo-700 dark:text-indigo-300 font-medium">
                        💡 {project.result}
                      </p>
                    </div>
                    
                    {/* Теги */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <span className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">
                        Подробнее →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA секция */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Нужен индивидуальный проект?
            </h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Разработаю сайт, бота или автоматизацию под ваши задачи. Обсудим за 15 минут — начну работать сразу.
            </p>
            <a
              href="https://t.me/maksahbot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              💬 Обсудить проект
            </a>
          </div>
        </motion.div>

        {/* Модальное окно */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className={`h-48 bg-gradient-to-br ${selectedProject.color} relative`}>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    aria-label="Закрыть"
                  >
                    ✕
                  </button>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-8xl mb-2">{selectedProject.icon}</span>
                    <div className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full font-bold text-gray-900 text-xl shadow-lg">
                      {selectedProject.price}
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                    {selectedProject.description}
                  </p>

                  {/* Результат */}
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-4 mb-6">
                    <p className="text-indigo-700 dark:text-indigo-300 font-semibold text-lg">
                      💡 {selectedProject.result}
                    </p>
                  </div>

                  {/* Что входит */}
                  <div className="mb-8">
                    <h4 className="font-bold text-lg mb-3 text-indigo-600 dark:text-indigo-400">
                      Что входит:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full font-medium"
                        >
                          ✓ {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Технологии */}
                  <div className="mb-8">
                    <h4 className="font-bold text-lg mb-3 text-indigo-600 dark:text-indigo-400">
                      Технологии:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="space-y-4">
                    <a
                      href="https://t.me/maksahbot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity"
                    >
                      💬 Заказать {selectedProject.title}
                    </a>
                    
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-full py-3 bg-gray-200 dark:bg-gray-700 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      Закрыть
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;