import { Target, Shield, Zap, Award } from 'lucide-react';

const advantages = [
  {
    icon: Target,
    title: 'Точность',
    description: 'Допуски до ±0.001 мм для безупречного качества обработки',
  },
  {
    icon: Shield,
    title: 'Надёжность',
    description: 'Стабильные результаты благодаря высококачественным материалам',
  },
  {
    icon: Zap,
    title: 'Производительность',
    description: 'Увеличение скорости резания до 40% по сравнению с аналогами',
  },
  {
    icon: Award,
    title: 'Качество',
    description: 'Сертификация ISO 9001 и строгий контроль на всех этапах',
  },
];

export const Advantages = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            ПОЧЕМУ <span className="text-primary">A</span>RKA
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Инженерная экспертиза и передовые технологии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-background border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                <advantage.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 pt-16 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-primary mb-2">25+</div>
            <div className="text-sm uppercase tracking-wider text-muted-foreground">Лет опыта</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-primary mb-2">500+</div>
            <div className="text-sm uppercase tracking-wider text-muted-foreground">Клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-primary mb-2">10K+</div>
            <div className="text-sm uppercase tracking-wider text-muted-foreground">Артикулов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-primary mb-2">24/7</div>
            <div className="text-sm uppercase tracking-wider text-muted-foreground">Поддержка</div>
          </div>
        </div>
      </div>
    </section>
  );
};
