import Hero from './components/Hero';
import PhotoStrip from './components/PhotoStrip';
import Services from './components/Services';
import About from './components/About';
import Reviews from './components/Reviews';
import AppointmentForm from './components/AppointmentForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Hero />

      {/* Moving photo strip */}
      <PhotoStrip />

      <Services />
      <About />
      <Reviews />
      <AppointmentForm />
      <Contact />
      <Footer />
    </>
  );
}
