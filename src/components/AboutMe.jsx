// src/components/AboutMe.jsx
import alexPhoto from '../assets/images/IMG_20150805_143835.jpg';

export default function AboutMe() {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white fade-in-up" style={{ animationDelay: '0.3s' }}>
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/3">
          <img
            src={alexPhoto} // Теперь здесь твоё фото
            alt="Фото Александра"
            className="rounded-full w-40 h-40 object-cover border-4 border-purple-500 mx-auto shadow-lg"
          />
        </div>

        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Привет, я Александр 👋</h2>
          <p className="text-lg text-gray-300 mb-4">
            Разработчик сайтов и ботов из <span className="text-blue-400">Беларуси</span>
          </p>
          <p className="text-gray-400 mb-6">
            Работаю с React, Vite, Tailwind CSS, JS, Node.js
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition">
              Мои проекты
            </a>
            <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition">
              Связаться со мной
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}