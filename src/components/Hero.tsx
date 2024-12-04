import React from 'react';
import { Calendar, CreditCard, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    navigate('/login');
  };

  return (
    <div 
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://metrobi.com/wp-content/uploads/2024/05/Craft-an-inviting-flower-shop-layout.webp')"
      }}
    >
      <section className="pt-[250px] pb-[150px] bg-gradient-to-b from-rose-50/80 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Разделите радость регулярной доставки цветов
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Планируйте персональные доставки цветов и разделите стоимость с друзьями и семьей.
              Сделайте чей-то день ярче вместе.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="bg-rose-500 text-white px-8 py-3 rounded-full text-lg hover:bg-rose-600 transition-colors" onClick={handleSubscribe}>
                Оформить подписку
              </button>
              <button className="border-2 border-rose-500 text-rose-500 px-8 py-3 rounded-full text-lg hover:bg-rose-50 transition-colors">
                Узнать больше
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Calendar className="h-10 w-10 text-rose-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Гибкое расписание</h3>
                <p className="text-gray-600">Выбирайте частоту и даты доставки</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Users className="h-10 w-10 text-rose-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Разделение оплаты</h3>
                <p className="text-gray-600">Легко разделите стоимость с другими</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <CreditCard className="h-10 w-10 text-rose-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Простое управление</h3>
                <p className="text-gray-600">Контролируйте всё в одном месте</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}