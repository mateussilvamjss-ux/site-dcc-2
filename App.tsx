import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { AboutPage } from './components/AboutPage';
import { Footer } from './components/Footer';

type Page = 'home' | 'about';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (target: string) => {
    // Scroll to top when changing views
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (target === 'about') {
      setCurrentPage('about');
    } else {
      setCurrentPage('home');
    }
  };

  // Function passed to Header to handle all navigation types
  const handleHeaderNav = (href: string) => {
    if (href === '#about-page') {
      handleNavigate('about');
    } else if (href === '#hero') {
      handleNavigate('home');
    } else {
      // For anchors like #journal, #materials
      if (currentPage !== 'home') {
         setCurrentPage('home');
         // Wait for render then scroll
         setTimeout(() => {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: 'smooth' });
         }, 100);
      } else {
         const element = document.querySelector(href);
         element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden selection:bg-mapeia-green selection:text-white">
      <Header onNavigate={handleHeaderNav} activePage={currentPage} />
      
      {currentPage === 'home' ? (
        <Home onNavigateToAbout={() => handleNavigate('about')} />
      ) : (
        <AboutPage />
      )}
      
      <Footer />
    </main>
  );
}

export default App;