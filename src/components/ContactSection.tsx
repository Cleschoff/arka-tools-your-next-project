import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary" id="contact">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="text-primary-foreground">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              СВЯЖИТЕСЬ С НАМИ
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl">
              Получите консультацию по выбору инструмента или запросите 
              коммерческое предложение. Наши специалисты готовы помочь.
            </p>
            
            <div className="space-y-4">
              <div>
                <span className="text-primary-foreground/60 text-sm">Телефон</span>
                <div className="text-xl font-semibold">+7 (4922) 77-10-20 </div>
              </div>
              <div>
                <span className="text-primary-foreground/60 text-sm">Email</span>
                <div className="text-xl font-semibold">info@arka-tools.ru</div>
              </div>
              <div>
                <span className="text-primary-foreground/60 text-sm">Адрес</span>
                <div className="text-xl font-semibold">Москва, ул. Промышленная, 1</div>
              </div>
            </div>
          </div>

          <div className="bg-background p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Запросить информацию
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Имя" className="bg-secondary border-0" />
                <Input placeholder="Компания" className="bg-secondary border-0" />
              </div>
              <Input placeholder="Email" type="email" className="bg-secondary border-0" />
              <Input placeholder="Телефон" type="tel" className="bg-secondary border-0" />
              <Textarea
                placeholder="Сообщение"
                rows={4}
                className="bg-secondary border-0 resize-none" />

              <Button type="submit" className="w-full" size="lg">
                Отправить запрос
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>);

};