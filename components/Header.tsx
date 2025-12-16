import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  onNavigate?: (href: string) => void;
  activePage?: 'home' | 'about';
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(href);
    } else {
      // Fallback default behavior
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Text/Image Area */}
        <a 
          href="#hero" 
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          onClick={(e) => handleLinkClick(e, '#hero')}
        >
          <img 
            src="https://i.ibb.co/5XYnfwfP/1765905454390.png" 
            alt="Mapeia Ser-Tão" 
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => {
            // Determine if this link is "active" based on page state
            let isActive = false;
            if (activePage === 'home' && link.href === '#hero') isActive = true;
            if (activePage === 'about' && link.href === '#about-page') isActive = true;

            return (
              <a 
                key={link.label} 
                href={link.href}
                className={`font-medium transition-colors ${isActive ? 'text-mapeia-green font-bold' : 'text-mapeia-text hover:text-mapeia-green'}`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-mapeia-green"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 absolute w-full shadow-lg">
          <div className="flex flex-col space-y-4 px-6">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-mapeia-text font-medium hover:text-mapeia-green"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};