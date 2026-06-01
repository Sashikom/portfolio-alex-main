import Testimonials from './components/Testimonials';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center z-50">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="text-center">
          <div className="relative">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-24 h-24 border-4 border-white border-t-transparent rounded-full mx-auto mb-6" />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">A</span>
            </motion.div>
          </div>
          <p className="text-white text-lg font-medium mt-4">Загружаю портфолио...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <Router>
      <div className={`min-h-screen bg-gradient-to-br ${darkMode ? 'from-gray-900 to-gray-800' : 'from-white to-gray-50'} transition-colors duration-300`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="pt-32">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Projects />
                <Testimonials /> 
                <Contact />
              </>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

function Header({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-lg') : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className={`text-2xl md:text-3xl font-bold ${darkMode ? 'text-white' : 'text-indigo-600'}`}>
          Моё Портфолио
        </motion.h1>

        <div className="flex items-center gap-4">
          <div className="w-8 h-8"><svg viewBox="0 0 128 128" className="w-full h-full"><path fill="#646CFF" d="M64 4L4 108h120L64 4zm0 16l44 76H20L64 20z"/><path fill="#FFD700" d="M64 20L20 96h88L64 20z"/></svg></div>
          <div className="w-8 h-8"><svg viewBox="0 0 128 128" className="w-full h-full"><circle cx="64" cy="64" r="12" fill="#61DAFB"/><ellipse cx="64" cy="64" rx="52" ry="20" stroke="#61DAFB" strokeWidth="4" fill="none" transform="rotate(0 64 64)"/><ellipse cx="64" cy="64" rx="52" ry="20" stroke="#61DAFB" strokeWidth="4" fill="none" transform="rotate(60 64 64)"/><ellipse cx="64" cy="64" rx="52" ry="20" stroke="#61DAFB" strokeWidth="4" fill="none" transform="rotate(120 64 64)"/></svg></div>
          <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-200 text-gray-700'} transition-colors`}>{darkMode ? '☀️' : '🌙'}</button>
        </div>
      </div>
    </motion.header>
  );
}

function Hero() {
  return (
    <section id="home" className="py-24 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6"><span className="text-2xl">👋</span></div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Привет, я <span className="text-yellow-300">Александр</span></h1>
          <p className="text-xl md:text-2xl text-indigo-100 mb-8">Разработчик сайтов и ботов из Беларуси 🇧🇾</p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Node.js'].map((tech, i) => (
              <motion.span key={tech} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i * 0.1 }} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-lg font-medium hover:bg-white/20 transition-colors cursor-pointer">{tech}</motion.span>
            ))}
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <a href="#projects" className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">Мои проекты →</a>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-16"><div className="w-16 h-1 mx-auto bg-white/30 rounded-full"></div></motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Обо мне</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">👋 Привет! Я <strong className="text-indigo-600 dark:text-indigo-400">Александр</strong> — разработчик сайтов и ботов из Беларуси.</p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">🚀 Работаю с современными технологиями: <strong>React</strong>, <strong>Vite</strong>, <strong>Tailwind CSS</strong>, <strong>JavaScript</strong> и <strong>Node.js</strong>.</p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">💡 Создаю быстрые, адаптивные и функциональные веб-приложения, а также автоматизирую бизнес-процессы через телеграм-ботов.</p>
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">Мои технологии:</h3>
                <div className="flex flex-wrap gap-3">
                  {[{ n: 'React', i: '⚛️' }, { n: 'Vite', i: '' }, { n: 'Tailwind CSS', i: '🎨' }, { n: 'JavaScript', i: '📜' }, { n: 'Node.js', i: '⚙️' }, { n: 'Telegram Bot API', i: '🤖' }, { n: 'REST API', i: '🔌' }, { n: 'Git', i: '📦' }].map(t => (
                    <span key={t.n} className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-medium flex items-center gap-2 hover:bg-indigo-200 dark:hover:bg-indigo-900 transition-colors"><span className="text-xl">{t.i}</span>{t.n}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4"><div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center text-2xl">🎯</div><div><h3 className="font-bold text-lg mb-1">Цель</h3><p className="text-gray-700 dark:text-gray-300">Создавать качественные продукты, которые решают реальные проблемы</p></div></div>
                  <div className="flex items-start gap-4"><div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center text-2xl">🚀</div><div><h3 className="font-bold text-lg mb-1">Подход</h3><p className="text-gray-700 dark:text-gray-300">Современные технологии + чистый код + внимание к деталям</p></div></div>
                  <div className="flex items-start gap-4"><div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-2xl">🤝</div><div><h3 className="font-bold text-lg mb-1">Клиенты</h3><p className="text-gray-700 dark:text-gray-300">Индивидуальный подход и прозрачная коммуникация</p></div></div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between"><span className="font-bold text-gray-700 dark:text-gray-300">Готов к новым проектам!</span><a href="#contact" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">Связаться</a></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    { id: 1, title: "Сайт Vite + React", description: "Быстрый, адаптивный сайт на современном стеке технологий", icon: "", color: "from-blue-500 to-cyan-500", tech: ["React", "Vite", "Tailwind CSS"] },
    { id: 2, title: "Сайт-портфолио", description: "Персональный сайт для демонстрации проектов и навыков", icon: "", color: "from-purple-500 to-pink-500", tech: ["React", "Framer Motion", "Tailwind CSS"] },
    { id: 3, title: "Контактная форма", description: "Функциональная форма связи с валидацией и отправкой писем", icon: "✉️", color: "from-green-500 to-emerald-500", tech: ["React Hook Form", "EmailJS", "Tailwind CSS"] },
    { id: 4, title: "CRM-панель", description: "Управление клиентами и заказами с удобным интерфейсом", icon: "📊", color: "from-orange-500 to-red-500", tech: ["React", "Node.js", "MongoDB"] }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Мои проекты</span></h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">Примеры моих работ и реализованных проектов</p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -10 }} className="group cursor-pointer">
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className={`h-48 bg-gradient-to-br ${p.color} relative overflow-hidden`}><div className="absolute inset-0 bg-black/20 flex items-center justify-center"><span className="text-6xl">{p.icon}</span></div></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{p.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">{p.tech.map(t => (<span key={t} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">{t}</span>))}</div>
                  <a href="https://t.me/maksahbot" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">💬 Написать в бот <span>→</span></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Обязательное поле';
    if (!formData.email.trim()) e.email = 'Обязательное поле';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Неверный формат email';
    if (!formData.message.trim()) e.message = 'Обязательное поле';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    setTimeout(() => { setStatus('success'); setFormData({ name: '', email: '', message: '' }); setErrors({}); setTimeout(() => setStatus(null), 3000); }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Связаться со мной</span></h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">Готов обсудить ваш проект или ответить на вопросы</p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Имя *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white`} placeholder="Ваше имя" />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white`} placeholder="Ваш email" />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Сообщение *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="5" className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none`} placeholder="Ваше сообщение..."></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={status === 'sending'} className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 rounded-lg hover:opacity-90 ${status === 'sending' ? 'opacity-50' : ''}`}>{status === 'sending' ? 'Отправка...' : 'Отправить сообщение'}</motion.button>
                {status === 'success' && <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-center">✅ Сообщение отправлено! Скоро свяжусь с вами.</motion.div>}
              </form>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Контакты</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4"><div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-2xl">✉️</div><div><p className="font-medium mb-1">Email</p><a href="mailto:makaalaleksandr@gmail.com" className="text-white/90 hover:text-white block">makaalaleksandr@gmail.com</a></div></div>
                  <div className="flex items-start gap-4"><div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-2xl">💬</div><div><p className="font-medium mb-1">Telegram</p><a href="https://t.me/maksahbot" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white flex items-center gap-2">@maksahbot <span className="text-xl">↗</span></a></div></div>
                  <div className="flex items-start gap-4"><div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-2xl"></div><div><p className="font-medium mb-1">Локация</p><p className="text-white/90">Беларусь 🇾</p></div></div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/20"><p className="text-white/80 text-sm">Готов к удаленной работе и сотрудничеству</p></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Александр</h3>
            <p className="text-gray-400 mb-4">Разработчик сайтов и ботов из Беларуси 🇾</p>
            <p className="text-gray-400">Создаю качественные продукты с использованием современных технологий</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Ссылки</h4>
            <ul className="space-y-3">{[{ t: 'Главная', h: '#home' }, { t: 'Обо мне', h: '#about' }, { t: 'Проекты', h: '#projects' }, { t: 'Контакты', h: '#contact' }].map(l => (<li key={l.t}><a href={l.h} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"><span className="group-hover:translate-x-1 transition-transform">→</span>{l.t}</a></li>))}</ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li><a href="mailto:makaalaleksandr@gmail.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"><span>✉️</span><span className="group-hover:underline">makaalaleksandr@gmail.com</span></a></li>
              <li><a href="https://t.me/maksahbot" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"><span>💬</span><span className="group-hover:underline">@maksahbot</span></a></li>
              <li><div className="flex items-center gap-2 text-gray-400"><span>📍</span><span>Беларусь 🇧🇾</span></div></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"><p>© {new Date().getFullYear()} Александр. Все права защищены.</p></div>
      </div>
    </footer>
  );
}

export default App;