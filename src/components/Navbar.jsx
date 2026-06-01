// src/components/Navbar.jsx
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Моё Портфолио</div>

        {/* Меню для десктопа */}
        <ul className="hidden md:flex gap-6">
          <li><a href="/" className="hover:text-blue-400 transition">Главная</a></li>
          <li><a href="/projects" className="hover:text-blue-400 transition">Проекты</a></li>
          <li><a href="/contact" className="hover:text-blue-400 transition">Контакты</a></li>
        </ul>

        {/* Бургер-меню для мобильных */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Выпадающее меню на мобильных */}
      {isMenuOpen && (
        <ul className="md:hidden bg-gray-800 p-4 space-y-3 text-center">
          <li><a href="/" className="block hover:text-blue-400 transition">Главная</a></li>
          <li><a href="/projects" className="block hover:text-blue-400 transition">Проекты</a></li>
          <li><a href="/contact" className="block hover:text-blue-400 transition">Контакты</a></li>
        </ul>
      )}
    </nav>
  );
}