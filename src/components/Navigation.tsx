import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { services } from '../data/services';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center gap-2">
                <span className="text-[#A0268A] font-bold text-xl">Creative</span>
                <span className="text-[#A1CC3A] font-bold text-xl">Design</span>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#about" className="text-[#676767] hover:text-[#A0268A]">About Us</a>
            <div className="relative group">
              <button 
                className="text-[#676767] hover:text-[#A0268A] inline-flex items-center"
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
              >
                Services
              </button>
              {showServices && (
                <div 
                  className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  onMouseEnter={() => setShowServices(true)}
                  onMouseLeave={() => setShowServices(false)}
                >
                  <div className="py-1">
                    {services.map((service) => (
                      <a
                        key={service.id}
                        href={`#${service.id}`}
                        className="block px-4 py-2 text-sm text-[#676767] hover:bg-gray-50 hover:text-[#A0268A]"
                      >
                        {service.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <a href="#why-choose-us" className="text-[#676767] hover:text-[#A0268A]">Why Choose Us</a>
            <a href="#contact" className="text-[#676767] hover:text-[#A0268A]">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#676767]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#about"
              className="block pl-3 pr-4 py-2 text-base text-[#676767] hover:bg-gray-50 hover:text-[#A0268A]"
            >
              About Us
            </a>
            <button
              onClick={() => setShowServices(!showServices)}
              className="w-full text-left pl-3 pr-4 py-2 text-base text-[#676767] hover:bg-gray-50 hover:text-[#A0268A]"
            >
              Services
            </button>
            {showServices && (
              <div className="pl-6">
                {services.map((service) => (
                  <a
                    key={service.id}
                    href={`#${service.id}`}
                    className="block pl-3 pr-4 py-2 text-sm text-[#676767] hover:bg-gray-50 hover:text-[#A0268A]"
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            )}
            <a
              href="#why-choose-us"
              className="block pl-3 pr-4 py-2 text-base text-[#676767] hover:bg-gray-50 hover:text-[#A0268A]"
            >
              Why Choose Us
            </a>
            <a
              href="#contact"
              className="block pl-3 pr-4 py-2 text-base text-[#676767] hover:bg-gray-50 hover:text-[#A0268A]"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}