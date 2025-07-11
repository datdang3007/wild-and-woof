import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'vi'>('en');

  // Load language preference from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('wildlife-explorer-language') as 'en' | 'vi';
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Save language preference and handle URL changes
  const handleLanguageChange = (lang: 'en' | 'vi') => {
    setCurrentLanguage(lang);
    localStorage.setItem('wildlife-explorer-language', lang);
    
    // Update URL based on language
    const currentPath = window.location.pathname;
    if (lang === 'vi' && !currentPath.startsWith('/vi')) {
      window.location.href = `/vi${currentPath === '/' ? '' : currentPath}`;
    } else if (lang === 'en' && currentPath.startsWith('/vi')) {
      const newPath = currentPath.replace('/vi', '') || '/';
      window.location.href = newPath;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        currentLanguage={currentLanguage} 
        onLanguageChange={handleLanguageChange} 
      />
      <main className="flex-1">
        <Outlet context={{ currentLanguage, onLanguageChange: handleLanguageChange }} />
      </main>
      <Footer currentLanguage={currentLanguage} />
    </div>
  );
};

export default Layout;