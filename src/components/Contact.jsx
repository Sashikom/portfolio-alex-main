import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Обязательное поле';
    if (!formData.email.trim()) {
      newErrors.email = 'Обязательное поле';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Неверный формат email';
    }
    if (!formData.message.trim()) newErrors.message = 'Обязательное поле';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setStatus('sending');

    // Здесь должна быть интеграция с бэкендом или EmailJS
    // Для примера симулируем отправку
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      
      setTimeout(() => setStatus(null), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Очищаем ошибку при вводе
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Связаться со мной
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Готов обсудить ваш проект или ответить на вопросы
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Форма контактов */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
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
                    placeholder="Ваше сообщение..."
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
                  {status === 'sending' ? 'Отправка...' : 'Отправить сообщение'}
                </motion.button>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-center"
                  >
                    ✅ Сообщение отправлено! Скоро свяжусь с вами.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Контактная информация */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Контакты</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-2xl">
                      ✉️
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a
                        href="mailto:makaalaleksandr@gmail.com"
                        className="text-white/90 hover:text-white transition-colors block"
                      >
                        makaalaleksandr@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-2xl">
                      💬
                    </div>
                    <div>
                      <p className="font-medium mb-1">Telegram</p>
                      <a
                        href="https://t.me/maksahbot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/90 hover:text-white transition-colors flex items-center gap-2"
                      >
                        @maksahbot
                        <span className="text-xl">↗</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-2xl">
                      🌍
                    </div>
                    <div>
                      <p className="font-medium mb-1">Локация</p>
                      <p className="text-white/90">Беларусь 🇧🇾</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-white/80 text-sm">
                    Готов к удаленной работе и сотрудничеству
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Быстрые ссылки
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '🚀', text: 'Сайт-портфолио', link: '#' },
                    { icon: '🤖', text: 'Телеграм-бот', link: 'https://t.me/maksahbot' },
                    { icon: '🎨', text: 'UI Компоненты', link: '#' },
                    { icon: '📊', text: 'CRM-панель', link: '#' }
                  ].map((item) => (
                    <a
                      key={item.text}
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors group"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {item.text}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;