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
      className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-14 md:pt-0"
      style={{
        backgroundImage: "url('https://metrobi.com/wp-content/uploads/2024/05/Craft-an-inviting-flower-shop-layout.webp')"
      }}
    >
      <section className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-rose-50/80 to-white/80 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Разделите радость регулярной доставки цветов
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 px-4 md:px-0">
              Планируйте персональные доставки цветов и разделите стоимость с друзьями и семьей.
              Сделайте чей-то день ярче вместе.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 md:mb-12">
              <button 
                onClick={handleSubscribe} 
                className="w-full sm:w-auto bg-rose-500 text-white px-8 py-3 rounded-full text-lg hover:bg-rose-600 transition-colors"
              >
                Оформить подписку
              </button>
              <button className="w-full sm:w-auto border-2 border-rose-500 text-rose-500 px-8 py-3 rounded-full text-lg hover:bg-rose-50 transition-colors">
                Узнать больше
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-16">
              <div className="bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-md">
                <Calendar className="h-8 w-8 md:h-10 md:w-10 text-rose-500 mx-auto mb-3 md:mb-4" />
                <h3 className="text-base md:text-lg font-semibold mb-2">Гибкое расписание</h3>
                <p className="text-sm md:text-base text-gray-600">Выбирайте частоту и даты доставки</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-md">
                <Users className="h-8 w-8 md:h-10 md:w-10 text-rose-500 mx-auto mb-3 md:mb-4" />
                <h3 className="text-base md:text-lg font-semibold mb-2">Разделение оплаты</h3>
                <p className="text-sm md:text-base text-gray-600">Легко разделите стоимость с другими</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-md">
                <CreditCard className="h-8 w-8 md:h-10 md:w-10 text-rose-500 mx-auto mb-3 md:mb-4" />
                <h3 className="text-base md:text-lg font-semibold mb-2">Простое управление</h3>
                <p className="text-sm md:text-base text-gray-600">Контролируйте всё в одном месте</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}