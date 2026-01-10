import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { HeroSection } from '@/components/HeroSection';
import { RepasseSection } from '@/components/RepasseSection';
import { PropertiesSection } from '@/components/PropertiesSection';
import { AboutSection } from '@/components/AboutSection';
import { mockProperties } from '@/data/properties';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <RepasseSection properties={mockProperties} />
        <PropertiesSection properties={mockProperties} />
        <AboutSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
