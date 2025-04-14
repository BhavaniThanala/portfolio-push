import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', padding: '1rem 2rem',
      background: 'rgba(0,0,0,0.8)', zIndex: 10
    }}>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', color: 'white' }}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
