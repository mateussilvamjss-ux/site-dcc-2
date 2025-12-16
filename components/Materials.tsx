import React from 'react';
import { MATERIALS_CONTENT } from '../constants';
import { Download } from 'lucide-react';

export const Materials: React.FC = () => {
  return (
    <section id="materials" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-display text-3xl font-bold text-mapeia-green mb-12 text-center">
          Materiais Educativos
        </h2>

        <div className="space-y-4">
          {MATERIALS_CONTENT.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col md:flex-row items-center justify-between p-6 bg-mapeia-bg rounded-xl border border-transparent hover:border-mapeia-yellow transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4 md:mb-0 w-full md:w-auto">
                  <div className="bg-white p-3 rounded-full shadow-sm text-mapeia-green group-hover:bg-mapeia-green group-hover:text-white transition-colors">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-mapeia-text text-lg">
                      {item.title}
                    </h3>
                    <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                      {item.type}
                    </span>
                  </div>
                </div>

                <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-white text-mapeia-green border border-mapeia-green font-bold py-2 px-6 rounded-lg hover:bg-mapeia-green hover:text-white transition-colors">
                  <Download size={18} />
                  <span>Baixar</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};