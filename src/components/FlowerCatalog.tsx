import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const flowers = [
  {
    id: 1,
    name: 'Нежные Пионы',
    price: '3900₽',
    image: 'https://flork.ru/wa-data/public/shop/products/54/00/54/images/4550/4550.970.jpg',
    description: 'Букет из свежих розовых пионов'
  },
  {
    id: 2,
    name: 'Весенние Тюльпаны',
    image: 'https://flowers-sktvkar.ru/assets/cache_image/products/1273/4_355x355_7c2.jpg',
    price: '2900₽',
    description: 'Яркий букет разноцветных тюльпанов'
  },
  {
    id: 3,
    name: 'Классические Розы',
    price: '4900₽',
    image: 'https://sladko62.ru/wp-content/uploads/2023/03/Buket-iz-klubni-68.-Buket-klubnika-s-rozami-324x324.jpg',
    description: 'Элегантный букет красных роз'
  },
  {
    id: 4,
    name: 'Полевые Цветы',
    price: '2500₽',
    image: 'https://static.insalescdn.com/images/products/1/7245/265927757/585-1.jpg',
    description: 'Букет из свежих полевых цветов'
  }
];

export function FlowerCatalog() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50" id="catalog">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Популярные Букеты</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите из нашей коллекции изысканных букетов или создайте свой собственный
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {flowers.map((flower) => (
            <div key={flower.id} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform hover:-translate-y-1">
              <div className="aspect-w-1 aspect-h-1 relative">
                <img
                  src={flower.image}
                  alt={flower.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-rose-50 transition-colors">
                    <Heart className="h-5 w-5 text-rose-500" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{flower.name}</h3>
                <p className="text-gray-600 mb-4">{flower.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-rose-500">{flower.price}</span>
                  <button className="flex items-center space-x-2 bg-rose-500 text-white px-4 py-2 rounded-full hover:bg-rose-600 transition-colors">
                    <ShoppingCart className="h-5 w-5" />
                    <span>В корзину</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}