import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link className="color" to="/">
          <h1>Gamehub</h1>
        </Link>
      </div>
      <ul className="navbar-links">
        <li className="nav-item">
          <Link className="nav-link" to="/mygames">
            My Games
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/favourites">
            My Fav
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/gameshop">
            Game shop
          </Link>
        </li>
      </ul>
    </nav>
  );
}
