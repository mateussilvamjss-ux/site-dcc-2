import React from 'react';
import { SERVICES_CONTENT } from '../constants';

export const WhatWeDo: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-sertao-dark mb-4">
            O Que Fazemos
          </h2>
          <p className="text-gray-600 font-sans max-w-2xl mx-auto text-lg">
            Uma ação de pesquisa e extensão que une saberes acadêmicos e comunitários.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {SERVICES_CONTENT.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group bg-sertao-sand rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:bg-sertao-green/5 border border-transparent hover:border-sertao-green/20"
              >
                <div className="mb-6 inline-block bg-white p-4 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-sertao-earth group-hover:text-sertao-green" />
                </div>
                <h3 className="font-display text-xl font-bold text-sertao-dark mb-3 group-hover:text-sertao-green transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Placeholder image for visual context */}
        <div className="mt-16 w-full h-64 md:h-80 rounded-3xl overflow-hidden shadow-lg relative">
             <img 
              src="https://i.ibb.co/9mqLBJKB/Gemini-Generated-Image-ln0c68ln0c68ln0c.png" 
              alt="Reunião comunitária com agricultores familiares discutindo mapeamento social" 
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-sertao-earth/80 to-transparent flex items-end p-8">
                <p className="text-white font-sans font-medium text-lg">Agricultura familiar em foco</p>
             </div>
        </div>
      </div>
    </section>
  );
};