// src/components/Header/Header.tsx
import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        <div className="container mx-auto flex justify-between items-center p-4">
          <button className="hamburger md:hidden" onClick={toggleMenu}>
            &#9776;
          </button>
          <div className="logo">My React App</div>
          <nav className="menu hidden md:flex">
            <a href="/" className="menu-item">Home</a>
            <a href="/about" className="menu-item">About</a>
            <a href="/contact" className="menu-item">Contact</a>
          </nav>
        </div>
      </header>
      <div className={`sidebar ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button className="close-btn" onClick={toggleMenu}>&times;</button>
        <div className="logo">My React App</div>
        <nav className="menu flex flex-col">
          <a href="/" className="menu-item" onClick={() => setIsOpen(false)}>Home</a>
          <a href="/about" className="menu-item" onClick={() => setIsOpen(false)}>About</a>
          <a href="/contact" className="menu-item" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
      </div>
      <div className={`content ${isOpen ? 'shifted' : ''}`}>
        {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
      </div>
    </>
  );
};

export default Header;
