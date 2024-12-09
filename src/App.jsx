import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Specialties from './components/Specialties';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark overflow-hidden">
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Specialties />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
