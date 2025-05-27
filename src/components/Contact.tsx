import React from 'react';
import { MapPin, Instagram, MessageCircle } from 'lucide-react';
import { contactInfo } from '../constants/data';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contato</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entre em contato conosco ou venha nos visitar. Estamos sempre prontos para atendê-lo!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-[400px]">
              <iframe 
                src={contactInfo.mapUrl}
                className="w-full h-full border-0" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <MapPin className="text-green-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Endereço</h4>
                  <p className="text-gray-600">{contactInfo.address}</p>
                  <p className="text-gray-500 mt-1 text-sm">Cidade Industrial de Curitiba (CIC)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Instagram className="text-green-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Instagram</h4>
                  <a 
                    href={`https://instagram.com/${contactInfo.instagram.replace('@', '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-700 hover:underline"
                  >
                    {contactInfo.instagram}
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href={`https://wa.me/${contactInfo.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 w-full"
                >
                  <MessageCircle className="mr-2" />
                  Fale conosco pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;