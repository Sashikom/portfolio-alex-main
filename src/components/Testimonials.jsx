import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Мария Иванова',
      role: 'Владелец салона красоты',
      date: '25 января 2026',
      text: 'Спасибо за быстрый запуск! Портфолио для моего салона красоты (30+ работ) сделал за 4 дня. Клиенты теперь сами оставляют заявки через бота — за неделю пришло 12 новых клиентов!',
      avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Maria',
      project: 'Портфолио + Telegram-бот для записи',
      stats: '12 новых клиентов за неделю'
    },
    {
      id: 2,
      name: 'Елена Васильева',
      role: 'Дизайнер',
      date: '5 января 2026',
      text: 'Заказывала кастомные кнопки и формы для своего сайта. Александр не только сделал всё быстро, но и добавил анимацию при клике. После запуска конверсия выросла на 25%!',
      avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Elena',
      project: 'UI-компоненты для сайта',
      stats: 'Конверсия выросла на 25%'
    },
    {
      id: 3,
      name: 'Ольга Николаева',
      role: 'Владелец студии дизайна',
      date: '22 января 2026',
      text: 'Заказала сайт-визитку для студии. Александр сделал красивый дизайн, добавил форму записи и интеграцию с ботом. Теперь клиенты сами записываются — за неделю 18 новых клиентов!',
      avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Olga',
      project: 'Сайт для студии дизайна',
      stats: '18 новых клиентов за неделю'
    },
    {
      id: 4,
      name: 'Дмитрий Смирнов',
      role: 'Стартапер в сфере edtech',
      date: '18 января 2026',
      text: 'Заказал лендинг для стартапа «LearnPro» за 5 дней. Александр не только сделал красивый сайт, но и интегрировал форму оплаты. Первая неделя — 85 оплаченных подписок!',
      avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Dmitry',
      project: 'Лендинг + платежная система',
      stats: '85 оплаченных подписок за неделю'
    },
    {
      id: 5,
      name: 'Алексей Козлов',
      role: 'Предприниматель в сфере питания',
      date: '20 января 2026',
      text: 'Нужен был бот для автоматизации заказов в моём кафе. Александр создал отличного бота с квизом и формой заказа. Теперь клиенты сами оформляют заказы — за неделю 45 новых заказов!',
      avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Alexey',
      project: 'Telegram-бот для кафе',
      stats: '45 новых заказов за неделю'
    },
    {
      id: 6,
      name: 'Сергей Петров',
      role: 'Фронтенд-разработчик',
      date: '12 января 2026',
      text: 'Помог с рефакторингом проекта на React. Александр нашел утечки памяти и ускорил загрузку на 40%. Теперь проект работает стабильно даже при 500+ одновременных пользователей.',
      avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Sergey',
      project: 'Оптимизация React-приложения',
      stats: 'Ускорение загрузки на 40%'
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
              Отзывы клиентов
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Реальные отзывы от довольных клиентов
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Сетка отзывов */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
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
              </div>

              {/* Текст отзыва */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic text-base leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Автор с фото */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-600 dark:border-indigo-400">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role} • {testimonial.date}
                  </p>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                    {testimonial.project}
                  </p>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                      {testimonial.stats}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Статистика */}
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
                50+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Проектов
              </div>
            </div>
            
            <div className="hidden md:block w-px h-10 bg-gray-300 dark:bg-gray-700"></div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                30+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Довольных клиентов
              </div>
            </div>
            
            <div className="hidden md:block w-px h-10 bg-gray-300 dark:bg-gray-700"></div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                100%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Рекомендаций
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}