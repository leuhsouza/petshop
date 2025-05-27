import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BusinessHours from './components/BusinessHours';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Petshop e Aviário Casa do Mestre - CIC';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <BusinessHours />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;