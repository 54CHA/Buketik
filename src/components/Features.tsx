import React from 'react';
import { Heart, Gift, Sparkles, Clock } from 'lucide-react';

export function Features() {
  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Как работает BUKETIK</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-rose-100 p-3 rounded-lg">
                <Heart className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Выберите получателей</h3>
                <p className="text-gray-600">Укажите, кому и когда доставлять цветы</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-rose-100 p-3 rounded-lg">
                <Gift className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Настройте букеты</h3>
                <p className="text-gray-600">Выбирайте сезонные букеты или создавайте свои</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-rose-100 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Установите график</h3>
                <p className="text-gray-600">Выберите частоту и конкретные даты доставки</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-rose-100 p-3 rounded-lg">
                <Sparkles className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Поделитесь расходами</h3>
                <p className="text-gray-600">Пригласите других участвовать в подписке</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1594663653925-365bcbf7ef86?auto=format&fit=crop&q=80"
              alt="Букет"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-sm font-semibold text-gray-800">Начиная от</p>
              <p className="text-2xl font-bold text-rose-500">2900₽/месяц</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}