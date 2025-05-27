import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="inicio" 
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://drive.google.com/file/d/1aYYW2QKATStEZfLU4qZiNOJiwl-CUjlZ/view?usp=sharing")' 
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeIn">
          Petshop e Aviário <br className="md:hidden" />
          <span className="text-secondary-400">Casa do Mestre</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
          "Um aviário familiar, que você conhece e confia."
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#servicos" 
            className="bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 duration-200 shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Nossos Serviços
          </a>
          <a 
            href="#contato" 
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 duration-200 shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Fale Conosco
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero