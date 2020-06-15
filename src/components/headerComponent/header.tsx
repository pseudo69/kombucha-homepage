import React from 'react';
import {
  Link
} from 'react-router-dom'



function Header() {
  return (
    <header>
      <div className="logo">
        LOGO
      </div>
      <nav>
        <ul>
          <li className="first">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li className="last">
          <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;
