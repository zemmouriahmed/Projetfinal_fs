import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
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

        {/* Vous pouvez ajouter d'autres liens ici selon vos besoins */}
      </ul>
    </nav>
  );
};

export default NavBar;
