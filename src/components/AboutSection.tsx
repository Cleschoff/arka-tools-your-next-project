import { Button } from '@/components/ui/button';
import arkaLogo from '@/assets/arka-logo.png';

export const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="about">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-bold text-sm tracking-widest mb-4 block">
              О КОМПАНИИ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              ON THE <span className="text-primary">E</span>DGE.
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              ARKA — это инновации в области металлообработки. Мы разрабатываем и поставляем 
              высокопроизводительные режущие инструменты, которые помогают нашим клиентам 
              достигать превосходных результатов.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Сочетание передового опыта, качественных материалов и современных технологий 
              производства позволяет нам создавать инструменты, которые отвечают самым 
              высоким требованиям профессионалов.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                Подробнее о нас
              </Button>
              <Button variant="outline" size="lg">
                Скачать каталог
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-secondary p-12 flex items-center justify-center min-h-[400px]">
              <img 
                src={arkaLogo} 
                alt="ARKA Tools" 
                className="max-w-[300px] w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 max-w-[200px]">
              <div className="text-3xl font-black mb-1">25+</div>
              <div className="text-sm">лет на рынке инструмента</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
