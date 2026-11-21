import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import Portfolio from './components/Portfolio.jsx';
import Packages from './components/Packages.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Packages />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
