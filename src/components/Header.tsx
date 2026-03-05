import { useState } from 'react';
import { Menu, X, ChevronDown, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import arkaLogo from '@/assets/arka-logo.png';

const navItems = [
  {
    label: 'Инструменты',
    href: '#tools',
    submenu: [
      { label: 'Токарные инструменты', href: '#turning' },
      { label: 'Фрезерные инструменты', href: '#milling' },
      { label: 'Сверление', href: '#drilling' },
      { label: 'Резьбонарезание', href: '#threading' },
    ],
  },
  { label: 'Каталог', href: '#catalog' },
  { label: 'Сервис', href: '#service' },
  { label: 'Компания', href: '#company' },
  { label: 'Новости', href: '#news' },
  { label: 'Контакты', href: '#contact' },
];

const TELEGRAM_URL = 'https://t.me/arka_tools';
const MAX_URL = 'https://max.ru/arka_tools';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <header className="w-full bg-background sticky top-0 z-50 border-b border-border">
      {/* Top bar */}
      <div className="bg-foreground text-background">
        <div className="section-container flex justify-between items-center py-1.5 text-xs">
          <span className="opacity-70">+7 (4922) 77-10-20 · info@arka-tools.ru</span>
          <div className="flex items-center gap-3">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 opacity-70 hover:opacity-100 hover:text-primary transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Telegram</span>
            </a>
            <span className="opacity-30">|</span>
            <a
              href={MAX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 opacity-70 hover:opacity-100 hover:text-primary transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">MAX</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="section-container">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src={arkaLogo}
              alt="ARKA Tools"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors uppercase tracking-wide"
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="w-3.5 h-3.5" />}
                </a>

                {item.submenu && activeSubmenu === item.label && (
                  <div className="absolute top-full left-0 bg-background shadow-lg border border-border min-w-[220px] py-2 animate-fade-up">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side - messenger buttons */}
          <div className="hidden md:flex items-center gap-2">
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2">
                <Send className="w-4 h-4" />
                Telegram
              </Button>
            </a>
            <a href={MAX_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="sm" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                MAX
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 animate-fade-up">
            {navItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="block px-4 py-3 text-foreground font-medium uppercase tracking-wide hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
                {item.submenu && (
                  <div className="pl-6 border-l-2 border-primary ml-4">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 pt-4 flex gap-3">
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Telegram
                </Button>
              </a>
              <a href={MAX_URL} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="hero" className="w-full gap-2">
                  <MessageCircle className="w-4 h-4" />
                  MAX
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
