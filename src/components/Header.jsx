import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/Header.css';

function Header() {
  const location = useLocation();
  return (
    <header className="site-header">
      <nav className="nav-bar">
        <div className="nav-links">
          {location.pathname !== '/' && <Link to="/">Accueil</Link>}
          {location.pathname !== '/Contact' && <Link to="/Contact">Contact</Link>}
          {location.pathname !== '/Projets' && <Link to="/Projets">Projets</Link>}
          {location.pathname !== '/Info' && <Link to="/Info">À propos de moi</Link>}
        </div>
      </nav>
    </header>
  );
};
export default Header;