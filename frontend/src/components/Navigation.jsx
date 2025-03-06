import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-item">
          <Link to="/collection#main" className="navigation-link">Projets / Contact</Link>
        </li>
        <li className="navigation-item">
          <Link to="/moi" className="navigation-link">Moi</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;