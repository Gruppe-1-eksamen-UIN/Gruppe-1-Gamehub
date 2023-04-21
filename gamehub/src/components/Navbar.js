export default function Navbar() {
    return (
        <nav className="navbar">
            <a className="Navbar-gameshop" href="#">Gameshop</a>

            <div>
                <ul className= "Links">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Shop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">My Games</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Favourites</a>
                    </li>
                </ul>

  </div>
        </nav>
    )
}