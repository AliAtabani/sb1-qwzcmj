import React from 'react';
import * as Icons from 'lucide-react';
import { Service } from '../types';

type ServiceCardProps = {
  service: Service;
  selected: boolean;
  onClick: () => void;
};

export default function ServiceCard({ service, selected, onClick }: ServiceCardProps) {
  const Icon = Icons[service.icon as keyof typeof Icons];

  return (
    <button
      onClick={onClick}
      className={`w-full p-6 rounded-xl transition-all duration-300 ${
        selected
          ? 'bg-[#A0268A] text-white shadow-lg scale-105'
          : 'bg-white hover:bg-gray-50 border border-gray-100'
      }`}
    >
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-lg ${
          selected ? 'bg-[#8a1f76]' : 'bg-[#A1CC3A] bg-opacity-20'
        }`}>
          <Icon 
            size={24} 
            className={selected ? 'text-white' : 'text-[#A1CC3A]'} 
          />
        </div>
        <div className="text-left">
          <h3 className="font-semibold text-lg">{service.title}</h3>
          <p className={`text-sm mt-1 ${
            selected ? 'text-white opacity-90' : 'text-[#676767]'
          }`}>
            {service.description}
          </p>
        </div>
      </div>
    </button>
  );
}