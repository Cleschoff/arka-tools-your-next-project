import { Mail, Phone, MapPin } from 'lucide-react';
import arkaLogo from '@/assets/arka-logo.png';

const footerLinks = {
  products: [
    { label: 'Токарные инструменты', href: '#turning' },
    { label: 'Фрезерные инструменты', href: '#milling' },
    { label: 'Сверление', href: '#drilling' },
    { label: 'Отрезка и канавки', href: '#grooving' },
    { label: 'Все продукты', href: '#catalog' },
  ],
  company: [
    { label: 'О компании', href: '#about' },
    { label: 'Карьера', href: '#careers' },
    { label: 'Новости', href: '#news' },
    { label: 'Партнёры', href: '#partners' },
  ],
  support: [
    { label: 'Контакты', href: '#contact' },
    { label: 'Загрузки', href: '#downloads' },
    { label: 'Техподдержка', href: '#support' },
    { label: 'FAQ', href: '#faq' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and info */}
          <div className="lg:col-span-2">
            <img 
              src={arkaLogo} 
              alt="ARKA Tools" 
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-footer-foreground/70 mb-6 max-w-sm">
              Инновационные режущие инструменты для профессиональной металлообработки. 
              Качество, точность, надёжность.
            </p>
            <div className="space-y-3">
              <a href="tel:+74951234567" className="flex items-center gap-3 text-footer-foreground/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +7 (495) 123-45-67
              </a>
              <a href="mailto:info@arka-tools.ru" className="flex items-center gap-3 text-footer-foreground/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                info@arka-tools.ru
              </a>
              <div className="flex items-start gap-3 text-footer-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Москва, ул. Промышленная, 1</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-background mb-4 uppercase tracking-wide text-sm">
              Продукция
            </h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-footer-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-background mb-4 uppercase tracking-wide text-sm">
              Компания
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-footer-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-background mb-4 uppercase tracking-wide text-sm">
              Поддержка
            </h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-footer-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-footer-foreground/10">
        <div className="section-container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-footer-foreground/50 text-sm">
            © 2024 ARKA Tools. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#privacy" className="text-footer-foreground/50 hover:text-primary transition-colors text-sm">
              Политика конфиденциальности
            </a>
            <a href="#terms" className="text-footer-foreground/50 hover:text-primary transition-colors text-sm">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
