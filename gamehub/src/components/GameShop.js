import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function GameShop({ games }) {
    return (
      <>
        <div className="nav">
          <Link to="/">
          <h1>Gamehub</h1>
          </Link>
        <Navbar/>
        
        </div>
        <div className="">
        <h3>GAMESHOP</h3> 
      </div> 
      </>
    );
  }
  
  export default GameShop;
  