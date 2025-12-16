import React from 'react';
import { CONCEPT_CONTENT } from '../constants';
import { Heart, Sun, ArrowRight } from 'lucide-react';

interface ConceptProps {
  onLearnMore?: () => void;
}

export const Concept: React.FC<ConceptProps> = ({ onLearnMore }) => {
  return (
    <section id="concept" className="py-20 md:py-28 bg-sertao-sand relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-sertao-sun/10 blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-sertao-earth mb-4">
            {CONCEPT_CONTENT.title} <span className="text-sertao-green font-light italic">"SER-TÃO"</span>
          </h2>
          <p className="text-gray-600 font-sans max-w-2xl mx-auto">
            {CONCEPT_CONTENT.subtitle}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center max-w-5xl mx-auto mb-16">
          
          {/* SER Card */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border-l-8 border-sertao-green transform transition hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="bg-sertao-green/10 p-3 rounded-full mr-4">
                <Heart className="text-sertao-green w-8 h-8" />
              </div>
              <h3 className="font-display text-5xl font-extrabold text-sertao-green">
                {CONCEPT_CONTENT.ser.title}
              </h3>
            </div>
            <p className="font-sans text-gray-700 text-lg leading-relaxed">
              {CONCEPT_CONTENT.ser.description}
            </p>
          </div>

          {/* Connective Element (Visual) */}
          <div className="hidden md:flex items-center justify-center">
            <div className="h-full w-px bg-gray-300 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sertao-sand p-2 rounded-full border border-gray-200">
                <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
              </div>
            </div>
          </div>

          {/* TAO Card */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border-r-8 border-sertao-earth transform transition hover:-translate-y-1">
            <div className="flex items-center justify-end mb-6">
              <h3 className="font-display text-5xl font-extrabold text-sertao-earth text-right">
                {CONCEPT_CONTENT.tao.title}
              </h3>
              <div className="bg-sertao-earth/10 p-3 rounded-full ml-4">
                <Sun className="text-sertao-earth w-8 h-8" />
              </div>
            </div>
            <p className="font-sans text-gray-700 text-lg leading-relaxed text-right">
              {CONCEPT_CONTENT.tao.description}
            </p>
          </div>
        </div>

        {onLearnMore && (
          <div className="text-center">
            <button 
              onClick={onLearnMore}
              className="inline-flex items-center gap-2 text-mapeia-green hover:text-mapeia-red font-bold text-lg transition-colors border-b-2 border-mapeia-green hover:border-mapeia-red pb-1"
            >
              Conheça nossa história completa
              <ArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};