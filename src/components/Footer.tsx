import React from 'react';
import { Cat, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Cat className="text-secondary-400 mr-2" size={24} />
            <h2 className="text-xl font-bold">Casa do Mestre</h2>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#inicio" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Início
            </a>
            <a 
              href="#servicos" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Serviços
            </a>
            <a 
              href="#horarios" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('horarios')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Horários
            </a>
            <a 
              href="#contato" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contato
            </a>
          </div>
        </div>
        
        <hr className="border-gray-700 my-6" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>© {year} Petshop e Aviário Casa do Mestre. Todos os direitos reservados.</p>
          <p className="mt-2 flex items-center justify-center">
            Feito com <Heart size={16} className="text-red-500 mx-1" /> para nossos amigos pets
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer