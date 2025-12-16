import React from 'react';
import { ABOUT_CONTENT } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Intro Text */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-mapeia-red mb-6 relative inline-block">
            {ABOUT_CONTENT.title}
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-mapeia-yellow rounded-full w-1/2 mx-auto"></span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-gray-600 leading-relaxed">
            {ABOUT_CONTENT.text}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {ABOUT_CONTENT.cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div 
                key={index}
                className="group bg-mapeia-bg p-8 rounded-2xl border border-gray-100 hover:border-mapeia-green/20 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="bg-white p-4 rounded-full shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-mapeia-green" />
                </div>
                <h3 className="font-display text-xl font-bold text-mapeia-green mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};