
import { useEffect, useState } from "react";
import axios from "axios";

export default function GameShop({numGames}) {
  const [newGames, setNewGames] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.rawg.io/api/games?key=5d8741db23a14d7f88a2c6ccd843ee6c&ordering=-released"
      )
      .then((response) => {
        setNewGames(response.data.results.slice(0, 10));
      });
  }, []);

  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src = './img/150.png';
  }

  return (
    <div className="gameshop">
      <h1>GAMESHOP</h1>
      <div className="game-list">
        {newGames.map((game) => (
          <div key={game.id} className="game">
            <img src={game.background_image} alt={game.name} className="gameimg" onError={handleImageError} />
            <h2>{game.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}