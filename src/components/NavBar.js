import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav > 
      <ul > 
        <li className='link'style={{ color: '#820411' }}>
          <Link to="/">Home</Link>
        </li>
        <li className='link'style={{ color: '#820411' }}>
          <Link to="/game">Game</Link>
        </li>
        <li className='link'style={{ color: '#820411' }}>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;