import EmergencyBar from '../components/EmergencyBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Doctors from '../components/Doctors';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <EmergencyBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Doctors />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
