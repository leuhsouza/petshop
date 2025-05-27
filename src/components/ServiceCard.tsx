import React from 'react';
import { Drumstick, Scissors, Bone as DogBone, Pill, DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  const getIcon = (): JSX.Element => {
    const iconProps = { size: 40, className: "text-green-700 mb-4" };
    
    switch (icon) {
      case 'Drumstick':
        return <Drumstick {...iconProps} />;
      case 'Scissors':
        return <Scissors {...iconProps} />;
      case 'DogBone':
        return <DogBone {...iconProps} />;
      case 'Pill':
        return <Pill {...iconProps} />;
      default:
        return <DogBone {...iconProps} />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      {getIcon()}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;