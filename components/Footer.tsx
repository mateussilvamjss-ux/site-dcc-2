import React from 'react';
import { FOOTER_CONTENT } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-mapeia-green text-white py-16">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border-b border-white/10 pb-12">
            {/* Brand */}
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">Mapeia <span className="text-mapeia-yellow">Ser-Tão</span></h3>
              <p className="text-white/80 max-w-sm">
                Valorizando o patrimônio cultural alimentar e a resiliência climática no semiárido baiano.
              </p>
            </div>

            {/* Partners Grid */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-mapeia-yellow mb-6">Parceiros e Apoio</h4>
              <div className="flex flex-wrap gap-4">
                {FOOTER_CONTENT.partners.map((partner, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors cursor-default">
                    {partner}
                  </div>
                ))}
              </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <p>{FOOTER_CONTENT.copyright}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Instagram</a>
             <a href="#" className="hover:text-white transition-colors">Facebook</a>
             <a href="#" className="hover:text-white transition-colors">Youtube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};