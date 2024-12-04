import React from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Отзывы наших клиентов</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Анна Иванова",
              role: "Постоянный клиент",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
              quote: "Buketik сделал доставку цветов для мамы такой простой. Мы с братьями и сёстрами разделили стоимость, и теперь она каждый месяц получает прекрасные букеты!"
            },
            {
              name: "Михаил Петров",
              role: "Подписчик подарков",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
              quote: "Возможность настраивать график доставки и делить платежи с коллегами для украшения офиса просто фантастическая. Цветы всегда свежие и красивые."
            },
            {
              name: "Елена Смирнова",
              role: "Владелец бизнеса",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
              quote: "Мы используем Buketik для еженедельного оформления нашего ресторана. Качество стабильное, а система планирования идеально подходит для наших нужд."
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}