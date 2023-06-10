import React from 'react';
import { Link } from 'react-router-dom';
import '../Ap.css';

const NavBar = () => {
  return (
    <nav className="sidebar" style={{ backgroundColor: '#272727', width: '200px', height: '100%', position: 'fixed', top: '0', left: '0', padding: '20px' }}>
  <ul className="nav-links">
    <li className="link">
      <Link to="/" style={{ textDecoration: 'none', textAlign: 'center', fontFamily: 'Montserrat, sans-serif', fontSize: '20px', fontWeight: '500', color: '#ffffff' }}>Home</Link>
    </li>
    <li className="link">
      <Link to="/game" style={{ textDecoration: 'none', textAlign: 'center', fontFamily: 'Montserrat, sans-serif', fontSize: '20px', fontWeight: '500', color: '#ffffff' }}>Game</Link>
    </li>
    <li className="link">
      <Link to="/leaderboard" style={{ textDecoration: 'none', textAlign: 'center', fontFamily: 'Montserrat, sans-serif', fontSize: '20px', fontWeight: '500', color: '#ffffff' }}>Leaderboard</Link>
    </li>
  </ul>
</nav>

  );
};

export default NavBar;
