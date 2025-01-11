import React, { useState, useEffect } from 'react';
import { DollarSign, Home, Info, Menu, X, PieChart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white text-gray-800 shadow-lg' : 'bg-transparent text-blue-500'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-full ${scrolled ? 'bg-blue-500' : 'bg-white'}`}>
              <DollarSign className={`h-6 w-6 ${scrolled ? 'text-white' : 'text-blue-500'}`} />
            </div>
            <h1 className="text-xl font-bold tracking-tight">BudgetPro</h1>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <a href="/" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                  <Home className="h-4 w-4" /> Home
                </a>
              </li>
              <li>
                <a href="/about" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                  <Info className="h-4 w-4" /> About
                </a>
              </li>
              <li>
                <a href="/budget-list" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                  <PieChart className="h-4 w-4" /> Dashboard
                </a>
              </li>
              <li>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
                  Get Started
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className={`px-2 pt-2 pb-3 space-y-1 ${scrolled ? 'bg-white' : 'bg-gray-900'}`}>
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500 hover:text-white transition-colors">
              Home
            </a>
            <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500 hover:text-white transition-colors">
              About
            </a>
            <a href="/budget-list" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500 hover:text-white transition-colors">
              Dashboard
            </a>
            <button className="w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;