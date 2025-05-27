import React from 'react';
import { Clock } from 'lucide-react';
import { businessHours } from '../constants/data';

const BusinessHours: React.FC = () => {
  return (
    <section id="horarios" className="py-16 bg-primary-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Horário de Atendimento</h2>
          <p className="max-w-2xl mx-auto">
            Estamos disponíveis para atender você e seu pet nos seguintes horários:
          </p>
        </div>
        
        <div className="max-w-md mx-auto bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-secondary-500 p-4 flex items-center justify-center">
            <Clock size={24} className="text-white mr-2" />
            <h3 className="text-xl font-semibold text-white">Nossos Horários</h3>
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-center py-4 border-b border-gray-200">
              <div className="font-medium">{businessHours.weekdays.days}</div>
              <div className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full font-medium">
                {businessHours.weekdays.hours}
              </div>
            </div>
            
            <div className="flex justify-between items-center py-4">
              <div className="font-medium">{businessHours.saturday.days}</div>
              <div className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full font-medium">
                {businessHours.saturday.hours}
              </div>
            </div>
            
            <div className="mt-6 text-center text-gray-600">
              <p>Fechado aos domingos e feriados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours