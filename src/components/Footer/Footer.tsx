// src/components/Footer/Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto p-4 text-center text-white">
        &copy; {new Date().getFullYear()} My React App
      </div>
    </footer>
  );
};

export default Footer;
