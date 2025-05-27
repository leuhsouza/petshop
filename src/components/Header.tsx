import React, { useState, useEffect } from 'react';
import { Menu, X, Cat } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Cat className="text-secondary-500 mr-2" size={28} />
          <h1 className={`font-bold transition-all duration-300 ${
            isScrolled ? 'text-primary-700 text-xl' : 'text-white text-2xl'
          }`}>
            Casa do Mestre
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            {['inicio', 'servicos', 'horarios', 'contato'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-gray-800 hover:text-primary-700' : 'text-white hover:text-secondary-400'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800" 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="py-4">
            {['inicio', 'servicos', 'horarios', 'contato'].map((item) => (
              <li key={item} className="py-2">
                <button
                  onClick={() => scrollToSection(item)}
                  className="w-full text-left px-4 py-2 text-gray-800 hover:bg-primary-50 hover:text-primary-700"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header