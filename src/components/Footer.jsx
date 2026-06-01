import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Александр
            </h3>
            <p className="text-gray-400 mb-4">
              Разработчик сайтов и ботов из Беларуси 🇧🇾
            </p>
            <p className="text-gray-400">
              Создаю качественные продукты с использованием современных технологий
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Ссылки</h4>
            <ul className="space-y-3">
              {[
                { text: 'Главная', href: '#home' },
                { text: 'Обо мне', href: '#about' },
                { text: 'Проекты', href: '#projects' },
                { text: 'Контакты', href: '#contact' }
              ].map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:makaalaleksandr@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span>✉️</span>
                  <span className="group-hover:underline">makaalaleksandr@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/maksahbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span>💬</span>
                  <span className="group-hover:underline">@maksahbot</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-gray-400">
                  <span>📍</span>
                  <span>Беларусь 🇧🇾</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Александр. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;