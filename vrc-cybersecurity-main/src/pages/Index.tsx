
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProgramDetails from '@/components/ProgramDetails';
import Timeline from '@/components/Timeline';
import Instructor from '@/components/Instructor';
import ApplicationProcess from '@/components/ApplicationProcess';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="program" className="animate-fade-in">
        <ProgramDetails />
      </div>
      <div id="timeline" className="animate-fade-in">
        <Timeline />
      </div>
      <div className="animate-fade-in">
        <Instructor />
      </div>
      <div id="application-process" className="animate-fade-in">
        <ApplicationProcess />
      </div>
      <div id="faq" className="animate-fade-in">
        <FAQ />
      </div>
      <div id="contact" className="animate-fade-in">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
