import { ArrowRight } from 'lucide-react';
import categoryTurning from '@/assets/category-turning.jpg';
import categoryMilling from '@/assets/category-milling.jpg';
import categoryDrilling from '@/assets/category-drilling.jpg';
import categoryGrooving from '@/assets/category-grooving.jpg';

interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const categories: Category[] = [
  {
    id: 'turning',
    title: 'Токарные инструменты',
    description: 'Высокоточные решения для токарной обработки',
    image: categoryTurning,
    href: '#turning',
  },
  {
    id: 'milling',
    title: 'Фрезерные инструменты',
    description: 'Эффективные системы фрезерования',
    image: categoryMilling,
    href: '#milling',
  },
  {
    id: 'drilling',
    title: 'Сверление и растачивание',
    description: 'Точные инструменты для обработки отверстий',
    image: categoryDrilling,
    href: '#drilling',
  },
  {
    id: 'grooving',
    title: 'Отрезка и канавки',
    description: 'Инновационные системы для канавочной обработки',
    image: categoryGrooving,
    href: '#grooving',
  },
];

export const ProductCategories = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="catalog">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">A</span>ССОРТИМЕНТ ПРОДУКЦИИ
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Полный спектр режущего инструмента для металлообработки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.href}
              className="group relative overflow-hidden bg-card border border-border hover:border-primary transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-primary">
                  Смотреть каталог
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
