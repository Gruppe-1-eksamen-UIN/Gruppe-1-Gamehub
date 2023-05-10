import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default function MyGames() {
  const [myGames, setMyGames] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.rawg.io/api/games?key=5d8741db23a14d7f88a2c6ccd843ee6c&genres=action"
      )
      .then((response) => {
        setMyGames(response.data.results.slice(0, 3));
      });
  }, []);

  
  return (
    
    <div className="mygames">
      <h1>My Games-Library</h1>
      <div className="game-list">
        {myGames.map((game) => (
          <div key={game.id} className="game">
            <img src={game.background_image} alt={game.name} className="gameimg"  />
            <h2>{game.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}