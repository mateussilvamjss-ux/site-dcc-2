import React from 'react';
import { TIMELINE_CONTENT } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <section className="py-20 bg-sertao-sand">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-sertao-earth mb-12 text-center">
          Nossa Jornada
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-sertao-earth/30"></div>

          <div className="space-y-12">
            {TIMELINE_CONTENT.map((item, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="hidden md:block w-1/2"></div>
                
                {/* Dot / Icon */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 bg-sertao-earth text-white rounded-full shadow-lg z-10 border-4 border-sertao-sand">
                   <span className="font-bold font-sans text-sm">{item.step}</span>
                </div>

                {/* Text Card */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-b-4 border-sertao-sun">
                    <h3 className="font-display text-lg font-bold text-sertao-green mb-1">
                      {item.title}
                    </h3>
                    <p className="font-sans text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 text-sertao-earth font-medium bg-white px-6 py-3 rounded-full shadow-sm">
              <CheckCircle2 size={20} />
              <span>Jornada em construção contínua</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};