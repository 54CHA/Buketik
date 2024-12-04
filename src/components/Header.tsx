import React from 'react';
import { Flower, Users, Calendar, CreditCard } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Flower className="h-6 w-6 text-rose-500" />
            <span className="text-xl font-semibold text-gray-800">BUKETIK</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-rose-500 transition-colors">Как это работает</a>
            <a href="#pricing" className="text-gray-600 hover:text-rose-500 transition-colors">Цены</a>
            <a href="#testimonials" className="text-gray-600 hover:text-rose-500 transition-colors">Отзывы</a>
            <button className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition-colors">
              Начать
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}