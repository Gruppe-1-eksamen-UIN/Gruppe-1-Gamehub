// Component som viser dine favourite spill 
import Navbar from "./Navbar"
import { Link } from "react-router-dom"
export default function Favourites(){
    return(
        <>
        <div className="nav">
          <Link to="/">
          <h1>Gamehub</h1>
          </Link>
        <Navbar/>
        
        </div>
        <div className="favourites">
            <h3>FAVOURITES</h3> 
        </div> 
        </>
    )
}