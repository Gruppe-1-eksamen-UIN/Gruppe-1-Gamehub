import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="links">
        <ul className="Links">
          <li>
            <Link className="Navbar-gameshop" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/mygames">
              My Games
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favourites">
              Favourites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gameshop">
              Gameshop
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
