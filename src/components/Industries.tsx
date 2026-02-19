import { Cog, Factory, Plane, Car, Ship, Hammer } from 'lucide-react';

const industries = [
{ icon: Factory, title: 'Машиностроение' },
{ icon: Car, title: 'Автомобильная промышленность' },
{ icon: Plane, title: 'Авиакосмическая отрасль' },
{ icon: Ship, title: 'Судостроение' },
{ icon: Cog, title: 'Энергетика' },
{ icon: Hammer, title: 'Инструментальное производство' }];


export const Industries = () => {
  return (
    <section className="py-16 md:py-24 bg-foreground text-background" id="industries">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
              ОТРАСЛИ <span className="text-primary-foreground">П</span>РИМЕНЕНИЯ
            </h2>
            <p className="text-background/70 text-lg mb-8 max-w-xl">
              Наши инструменты используются ведущими производственными предприятиями 
              в самых требовательных отраслях промышленности по всему миру.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center text-primary font-semibold hover:opacity-80 transition-opacity">

              Обсудить ваш проект →
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((industry, index) =>
            <div
              key={index}
              className="p-6 border border-background/20 hover:border-primary hover:bg-background/5 transition-all text-center group">

                <industry.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                <span className="text-sm font-medium">{industry.title}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};