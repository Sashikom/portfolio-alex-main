import Projects from './components/Projects';
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
            <Route path="/" element={<><Hero /><About /><Projects /><Testimonials /><Contact /></>} />
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
        <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className={`text-2xl md:text-3xl font-bold ${darkMode ? 'text-white' : 'text-indigo-600'}`}>Моё Портфолио</motion.h1>
        <div className="flex items-center gap-4">
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Привет, я <span className="text-yellow-300">Александр</span></h1>
          <p className="text-xl md:text-2xl text-indigo-100 mb-8">Разработчик сайтов и ботов из Беларуси 🇧🇾</p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Node.js'].map((tech, i) => (
              <motion.span key={tech} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i * 0.1 }} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-lg font-medium">{tech}</motion.span>
            ))}
          </div>
          <a href="#projects" className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg">Мои проекты →</a>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Обо мне</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">👋 Привет! Я <strong className="text-indigo-600">Александр</strong> — разработчик сайтов и ботов из Беларуси.</p>
            <p className="text-lg text-gray-700 dark:text-gray-300">🚀 Работаю с React, Vite, Tailwind CSS, JavaScript и Node.js.</p>
            <p className="text-lg text-gray-700 dark:text-gray-300">💡 Создаю быстрые веб-приложения и автоматизирую бизнес через телеграм-ботов.</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-1 shadow-2xl">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4"><div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl">🎯</div><div><h3 className="font-bold text-lg mb-1">Цель</h3><p className="text-gray-700 dark:text-gray-300">Создавать качественные продукты</p></div></div>
                <div className="flex items-start gap-4"><div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl">🚀</div><div><h3 className="font-bold text-lg mb-1">Подход</h3><p className="text-gray-700 dark:text-gray-300">Современные технологии + чистый код</p></div></div>
              </div>
            </div>
          </div>
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
  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    setTimeout(() => { setStatus('success'); setFormData({ name: '', email: '', message: '' }); }, 1500);
  };
  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Связаться со мной</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div><label className="block text-gray-700 dark:text-gray-300 mb-2">Имя *</label><input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Ваше имя" /></div>
              <div><label className="block text-gray-700 dark:text-gray-300 mb-2">Email *</label><input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Ваш email" /></div>
              <div><label className="block text-gray-700 dark:text-gray-300 mb-2">Сообщение *</label><textarea name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none" placeholder="Ваше сообщение..."></textarea></div>
              <button type="submit" disabled={status === 'sending'} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 rounded-lg">{status === 'sending' ? 'Отправка...' : 'Отправить сообщение'}</button>
              {status === 'success' && <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg text-center">✅ Сообщение отправлено!</div>}
            </form>
          </div>
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Контакты</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4"><div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl">✉️</div><div><p className="font-medium mb-1">Email</p><a href="mailto:makaalaleksandr@gmail.com" className="text-white/90">makaalaleksandr@gmail.com</a></div></div>
              <div className="flex items-start gap-4"><div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl">💬</div><div><p className="font-medium mb-1">Telegram</p><a href="https://t.me/maksahbot" target="_blank" rel="noopener noreferrer" className="text-white/90">@maksahbot ↗</a></div></div>
            </div>
          </div>
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
          <div><h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Александр</h3><p className="text-gray-400">Разработчик сайтов и ботов из Беларуси 🇧🇾</p></div>
          <div><h4 className="text-xl font-bold mb-4">Ссылки</h4><ul className="space-y-3">{[{ t: 'Главная', h: '#home' }, { t: 'Обо мне', h: '#about' }, { t: 'Проекты', h: '#projects' }, { t: 'Контакты', h: '#contact' }].map(l => (<li key={l.t}><a href={l.h} className="text-gray-400 hover:text-white transition-colors">→ {l.t}</a></li>))}</ul></div>
          <div><h4 className="text-xl font-bold mb-4">Контакты</h4><ul className="space-y-3"><li><a href="mailto:makaalaleksandr@gmail.com" className="text-gray-400 hover:text-white">✉️ makaalaleksandr@gmail.com</a></li><li><a href="https://t.me/maksahbot" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">💬 @maksahbot</a></li></ul></div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">© {new Date().getFullYear()} Александр</div>
      </div>
    </footer>
  );
}

export default App;