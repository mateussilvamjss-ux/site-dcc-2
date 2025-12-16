import React from 'react';
import { JOURNAL_CONTENT } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Journal: React.FC = () => {
  return (
    <section id="journal" className="py-20 bg-mapeia-bg">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-display text-3xl font-bold text-mapeia-green mb-2">Jornal Mapeia</h2>
            <p className="text-gray-500">Notícias e atualizações do território</p>
          </div>
          <button className="hidden md:flex items-center text-mapeia-red font-bold hover:text-red-800 transition-colors">
            Ver todas <ArrowUpRight className="ml-1 w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_CONTENT.map((news, index) => {
            const Icon = news.icon;
            return (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                {/* Image Placeholder */}
                <div className="h-48 bg-gray-200 relative group overflow-hidden">
                   <div className="absolute inset-0 bg-mapeia-green/10 flex items-center justify-center">
                      <Icon className="w-12 h-12 text-mapeia-green/50" />
                   </div>
                   <img 
                    src={`https://placehold.co/600x400/FAEBD7/4B6043?text=Noticia+${index + 1}`} 
                    alt={news.title}
                    className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700"
                   />
                   <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-mapeia-green uppercase tracking-wide">
                     {news.tag}
                   </span>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs text-gray-400 font-bold mb-2">{news.date}</div>
                  <h3 className="font-display text-lg font-bold text-mapeia-text mb-3 leading-tight group-hover:text-mapeia-red transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                    {news.summary}
                  </p>
                  <a href="#" className="inline-flex items-center text-mapeia-green font-bold text-sm hover:underline">
                    Ler mais
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <button className="text-mapeia-red font-bold">Ver todas as notícias</button>
        </div>
      </div>
    </section>
  );
};