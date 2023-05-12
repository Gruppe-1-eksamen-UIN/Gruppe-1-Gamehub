//Component som viser spill du har kjøpt
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function MyGames(){
  const [myGames, setMyGames] = useState([])

 
    return(
      <div className="mygames">
        
        
        
        
      <h3>My Games-Library</h3>
      <div className="game-list">
        {myGames.map((game) => (
          <div key={game.id} className="game">
            <img src={game.background_image} alt={game.name} className="gameimg"  />
            <h2>{game.name}</h2>
          </div>
        ))}
      </div>
    </div> )
}