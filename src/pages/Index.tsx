import { Header } from '@/components/Header';
import { HeroSlider } from '@/components/HeroSlider';
import { ProductCategories } from '@/components/ProductCategories';
import { AboutSection } from '@/components/AboutSection';
import { Advantages } from '@/components/Advantages';
import { Industries } from '@/components/Industries';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <ProductCategories />
        <AboutSection />
        <Advantages />
        <Industries />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
