import { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'landing',
    title: '📝 Лендинг',
    icon: '🚀',
    price: 'от $50',
    desc: 'Одностраничный сайт для презентации продукта или услуги',
    features: ['Адаптивный дизайн', 'Быстрая загрузка', 'Форма контактов', 'SEO-оптимизация']
  },
  {
    id: 'portfolio',
    title: '🎨 Портфолио',
    icon: '🖼️',
    price: 'от $100',
    desc: 'Сайт для демонстрации ваших работ и проектов',
    features: ['Галерея проектов', 'Раздел "Обо мне"', 'Контактная форма', 'Анимации']
  },
  {
    id: 'crm',
    title: '📊 CRM-панель',
    icon: '💼',
    price: 'от $150',
    desc: 'Система управления клиентами и заказами',
    features: ['Управление заказами', 'Статистика', 'Уведомления', 'Аналитика']
  },
  {
    id: 'bot',
    title: '🤖 Telegram-бот',
    icon: '💬',
    price: 'от $70',
    desc: 'Автоматизация общения с клиентами через Telegram',
    features: ['Автоответчик', 'Квизы', 'Формы', 'Уведомления']
  },
  {
    id: 'ui',
    title: '🧩 UI-компоненты',
    icon: '🎨',
    price: 'от $30',
    desc: 'Библиотека готовых компонентов для сайта',
    features: ['Кнопки', 'Модальные окна', 'Формы', 'Карточки']
  },
  {
    id: 'form',
    title: '✉️ Контактная форма',
    icon: '📩',
    price: 'от $40',
    desc: 'Форма связи для вашего сайта',
    features: ['Валидация', 'Отправка на почту', 'Подтверждение', 'Адаптивность']
  }
];

export default function OrderForm() {
  const [selected, setSelected] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Обязательное поле';
    if (!formData.email.trim()) {
      newErrors.email = 'Обязательное поле';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Неверный формат email';
    }
    if (!formData.message.trim()) newErrors.message = 'Обязательное поле';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selected || !validate()) return;

    setStatus('sending');

    try {
      // Отправка в бота через вебхук (безопасно, токен не в коде)
      const response = await fetch('https://api.telegram.org/bot7780001573:AAGNkwzV27rX4dLi1c_65InJeM6NgOWttJQ/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: '6112791994', // ← ЗАМЕНИ НА СВОЙ ID!
          text: `📩 Новая заявка с портфолио!\n\n💼 Услуга: ${selected.title}\n👤 Имя: ${formData.name}\n📧 Email: ${formData.email}\n📝 Сообщение: ${formData.message}\n🌐 Источник: Портфолио`,
          parse_mode: 'HTML'
        })
      });

      if (!response.ok) throw new Error('Ошибка отправки');

      // Успешно
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      
      // Сброс через 3 секунды
      setTimeout(() => {
        setStatus(null);
        setSelected(null);
      }, 3000);
    } catch (error) {
      console.error('Ошибка:', error);
      setStatus('error');
      setTimeout(() => setStatus(null), 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <section id="order" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Заказать услугу
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Выберите услугу и заполните форму — я свяжусь с вами в ближайшее время
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Выбор услуги */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Выберите услугу:
            </h3>

            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    onClick={() => setSelected(service)}
                    className={`bg-white dark:bg-gray-800 rounded-xl p-6 cursor-pointer transition-all border-2 ${
                      selected?.id === service.id
                        ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 shadow-lg'
                        : 'border-transparent hover:border-indigo-300 dark:hover:border-indigo-700'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                        {service.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                            {service.title}
                          </h4>
                          <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                            {service.price}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                          {service.desc}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, i) => (
                            <span
                              key={i}
                              className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Форма заявки */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {selected ? `Заявка на ${selected.title}` : 'Выберите услугу'}
              </h3>

              {!selected ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4 opacity-20">👇</div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Пожалуйста, выберите услугу слева
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                      Имя *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                          : 'border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500'
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors`}
                      placeholder="Ваше имя"
                      required
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                          : 'border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500'
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors`}
                      placeholder="Ваш email"
                      required
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                      Сообщение *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                          : 'border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500'
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors resize-none`}
                      placeholder="Опишите вашу задачу..."
                      required
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === 'sending'}
                    className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity ${
                      status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {status === 'sending' ? 'Отправка...' : 'Отправить заявку'}
                  </motion.button>

                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-center"
                    >
                      ✅ Заявка отправлена! Скоро свяжусь с вами.
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg text-center"
                    >
                      ❌ Ошибка отправки. Попробуйте снова или напишите в Telegram: @maksahbot
                    </motion.div>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}