# Budget Tracker

Budget Tracker is a professional and dynamic web application designed to help you manage your finances effectively. Built with React, Vite, and Tailwind CSS, this application allows you to track your expenses, analyze spending patterns, and achieve your financial goals.

## Features

- **Easy Tracking**: Effortlessly track your daily expenses and income with our intuitive interface.
- **Smart Analytics**: Get detailed insights into your spending patterns with visual reports.
- **Goal Setting**: Set and track financial goals with our intelligent goal-tracking system.
- **Secure Data**: Your financial data is protected with bank-grade security measures.

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/budget-tracker.git
   cd budget-tracker
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm start
   ```

## Usage

### Components

#### Header.js

The `Header` component is a responsive navigation bar that includes links to the Home, About, and Dashboard pages. It also features a "Get Started" button. The header changes its style based on the scroll position.

```javascript
// filepath: /c:/git_folder/New folder/budget-tracker/src/components/Header.js
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
```

#### Footer.js

The `Footer` component is a simple footer that stays fixed at the bottom of the page. It includes a copyright notice.

```javascript
// filepath: /c:/git_folder/New folder/budget-tracker/src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #c4d6b0;
  color: #291f1e;
  padding: 1rem 2rem;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2023 Btracker. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
```
