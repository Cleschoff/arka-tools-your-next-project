import { useState } from 'react';
import { Menu, X, ChevronDown, Search, ShoppingCart } from 'lucide-react';
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
  { label: 'Резьбонарезание', href: '#threading' }]

},
{ label: 'Каталог', href: '#catalog' },
{ label: 'Сервис', href: '#service' },
{ label: 'Компания', href: '#company' },
{ label: 'Новости', href: '#news' },
{ label: 'Загрузки', href: '#downloads' }];


export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <header className="w-full bg-background sticky top-0 z-50 border-b border-border">
      {/* Top bar */}
      <div className="bg-foreground text-background">
        <div className="section-container flex justify-between items-center py-1.5 text-xs">
          <div className="flex items-center gap-4">
            <button className="hover:text-primary transition-colors font-medium">​</button>
            <span className="opacity-50">|</span>
            <button className="opacity-70 hover:opacity-100 transition-opacity">​</button>
          </div>
          <a
            href="#shop"
            className="flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity">

            <ShoppingCart className="w-3.5 h-3.5" />
            ARKA.SHOP
          </a>
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
              className="h-10 md:h-12 w-auto" />

          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
              onMouseLeave={() => setActiveSubmenu(null)}>

                <a
                href={item.href}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors uppercase tracking-wide">

                  {item.label}
                  {item.submenu && <ChevronDown className="w-3.5 h-3.5" />}
                </a>
                
                {item.submenu && activeSubmenu === item.label &&
              <div className="absolute top-full left-0 bg-background shadow-lg border border-border min-w-[220px] py-2 animate-fade-up">
                    {item.submenu.map((subItem) =>
                <a
                  key={subItem.label}
                  href={subItem.href}
                  className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors">

                        {subItem.label}
                      </a>
                )}
                  </div>
              }
              </div>
            )}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="w-5 h-5" />
            </Button>
            
            <Button variant="hero" className="hidden md:flex">
              Карьера
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>

              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen &&
        <div className="lg:hidden border-t border-border py-4 animate-fade-up">
            {navItems.map((item) =>
          <div key={item.label}>
                <a
              href={item.href}
              className="block px-4 py-3 text-foreground font-medium uppercase tracking-wide hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}>

                  {item.label}
                </a>
                {item.submenu &&
            <div className="pl-6 border-l-2 border-primary ml-4">
                    {item.submenu.map((subItem) =>
              <a
                key={subItem.label}
                href={subItem.href}
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}>

                        {subItem.label}
                      </a>
              )}
                  </div>
            }
              </div>
          )}
            <div className="px-4 pt-4 flex gap-3">
              <Button variant="outline" className="flex-1">
                <Search className="w-4 h-4 mr-2" />
                Поиск
              </Button>
              <Button variant="hero" className="flex-1">
                Карьера
              </Button>
            </div>
          </div>
        }
      </nav>
    </header>);

};