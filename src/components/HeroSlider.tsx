import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroTools from '@/assets/hero-tools-1.jpg';
import heroTurning from '@/assets/hero-turning.jpg';
import heroDrilling from '@/assets/hero-drilling.jpg';

interface Slide {
  id: number;
  image: string;
  tag: string;
  title: string;
  subtitle?: string;
  cta: string;
  href: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: heroTools,
    tag: 'ON THE EDGE',
    title: 'ИНСТРУМЕНТЫ\nВЫСШЕГО КАЧЕСТВА',
    subtitle: 'Инновации и надёжность для вашего производства',
    cta: 'Узнать больше',
    href: '#about',
  },
  {
    id: 2,
    image: heroTurning,
    tag: 'ТОКАРНАЯ ОБРАБОТКА',
    title: 'СОВЕРШЕНСТВО\nВ КАЖДОМ РЕЗЕ',
    subtitle: 'Повысьте эффективность вашего производства',
    cta: 'Смотреть каталог',
    href: '#catalog',
  },
  {
    id: 3,
    image: heroDrilling,
    tag: 'СВЕРЛЕНИЕ И ФРЕЗЕРОВАНИЕ',
    title: 'ТОЧНОСТЬ\nБЕЗ КОМПРОМИССОВ',
    subtitle: 'Ротационные инструменты для надёжных процессов',
    cta: 'Подробнее',
    href: '#tools',
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden bg-hero">
      {/* Background images */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover"
          />
          <div className="hero-gradient-overlay absolute inset-0" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full section-container flex items-center">
        <div className="max-w-2xl">
          <span 
            key={`tag-${currentSlide}`}
            className="inline-block text-primary text-sm md:text-base font-bold tracking-widest mb-4 animate-fade-up"
          >
            {slide.tag}
          </span>
          
          <h1 
            key={`title-${currentSlide}`}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-hero-foreground leading-tight mb-4 whitespace-pre-line animate-fade-up"
            style={{ animationDelay: '100ms' }}
          >
            {slide.title.split('').map((char, i) => (
              char === 'A' ? <span key={i} className="text-primary">{char}</span> : char
            ))}
          </h1>
          
          {slide.subtitle && (
            <p 
              key={`subtitle-${currentSlide}`}
              className="text-lg md:text-xl text-hero-foreground/80 mb-8 animate-fade-up"
              style={{ animationDelay: '200ms' }}
            >
              {slide.subtitle}
            </p>
          )}
          
          <a 
            href={slide.href}
            key={`cta-${currentSlide}`}
            className="animate-fade-up inline-block"
            style={{ animationDelay: '300ms' }}
          >
            <Button variant="default" size="lg" className="text-base">
              {slide.cta}
            </Button>
          </a>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-background/10 backdrop-blur-sm hover:bg-background/20 transition-colors text-hero-foreground"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-background/10 backdrop-blur-sm hover:bg-background/20 transition-colors text-hero-foreground"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 transition-all ${
              index === currentSlide 
                ? 'bg-primary' 
                : 'bg-hero-foreground/40 hover:bg-hero-foreground/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slogan banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-banner text-banner-foreground py-3">
        <div className="section-container flex justify-end">
          <span className="text-lg md:text-xl font-semibold tracking-wider uppercase">
            ON THE <span className="text-primary">E</span>DGE
          </span>
        </div>
      </div>
    </section>
  );
};
