import React from "react";
import { Link } from "react-router-dom";
import SearchBar from './SearchBar'; 

const NavBar = ({ onSearch }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li className="signup-button">
          <Link to="/signup">S'inscrire / Se Connecter</Link>
        </li>
        <li>
        <SearchBar onSearch={onSearch} />  {/* Ajout de la barre de recherche */}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
