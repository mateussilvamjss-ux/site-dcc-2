import React from 'react';
import { HERO_CONTENT } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-28 pb-20 md:pt-40 md:pb-32 bg-mapeia-bg">
      <div className="container mx-auto px-6 text-center">
        
        {/* Logo Image */}
        <div className="mb-10 transform hover:scale-105 transition-transform duration-500 flex justify-center">
          <img 
            src="https://i.ibb.co/5XYnfwfP/1765905454390.png" 
            alt="Logo Mapeia Ser-Tão" 
            className="max-w-full h-auto drop-shadow-sm rounded-lg max-h-48 md:max-h-64 object-contain"
          />
        </div>

        {/* Slogan */}
        <h1 className="font-display text-2xl md:text-4xl font-light text-mapeia-text mb-8 tracking-wide max-w-3xl mx-auto leading-relaxed">
          {HERO_CONTENT.slogan}
        </h1>

        {/* CTA Button */}
        <a 
          href="#journal"
          className="inline-flex items-center gap-2 bg-mapeia-green hover:bg-green-900 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          {HERO_CONTENT.cta}
          <ArrowRight size={20} />
        </a>

      </div>
    </section>
  );
};