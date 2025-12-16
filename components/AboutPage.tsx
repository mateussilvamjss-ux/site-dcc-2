import React from 'react';
import { About } from './About';
import { WhatWeDo } from './WhatWeDo';
import { Timeline } from './Timeline';

export const AboutPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
       {/* Page Header */}
       <section className="pt-32 pb-16 bg-mapeia-green text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-mapeia-yellow/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
             <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Sobre o Mapeia Ser-Tão</h1>
             <p className="font-sans text-xl max-w-2xl mx-auto text-white/90 leading-relaxed">
               Conheça a iniciativa que une ciência, tradição e comunidade para construir um futuro mais resiliente no semiárido.
             </p>
          </div>
       </section>

       {/* Content Sections */}
       <About />
       <WhatWeDo />
       <Timeline />
    </div>
  );
};