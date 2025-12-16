import React from 'react';
import { Hero } from './Hero';
import { Concept } from './Concept';
import { Journal } from './Journal';
import { Materials } from './Materials';

interface HomeProps {
  onNavigateToAbout: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigateToAbout }) => {
  return (
    <div className="animate-in fade-in duration-500">
      <Hero />
      <Concept onLearnMore={onNavigateToAbout} />
      <Journal />
      <Materials />
    </div>
  );
};