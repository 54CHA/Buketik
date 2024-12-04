import React from 'react';
import { Flower, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Flower className="h-6 w-6 text-rose-400" />
              <span className="text-xl font-semibold">BUKETIK</span>
            </div>
            <p className="text-gray-400">Делаем доставку цветов доступнее и значимее через совместный опыт.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-rose-400 transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Как это работает</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Цены</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Вопросы и ответы</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: hello@tsvetodar.ru</li>
              <li>Телефон: 8 (800) 123-45-67</li>
              <li>Адрес: ул. Цветочная, 123</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-rose-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-rose-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-rose-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Buketik. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}