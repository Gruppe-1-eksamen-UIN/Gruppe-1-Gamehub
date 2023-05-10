
import { useEffect, useState } from "react";
import axios from "axios";
// import PlaceholderImage from './components/img/gradient-1-light-180deg.jpg';

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
    event.target.src = "./img/gradient-1-light-180deg.jpg"
    ;
  }
  console.log(handleImageError)

  return (
    <div className="gameshop">
      <h1>GAMESHOP</h1>
      <div className="game-list">
        {newGames.map((game) => (
          <div key={game.id} className="game">
            <h2>{game.name}</h2>
            <img src={game.background_image || './img/150.png'} alt={game.name} className="gameimg" onError={handleImageError} />
            <h4>{game.genres.map(genre => genre.name).join(", ")}</h4>
            <h4>{game.released}</h4>
            <button className="button">Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
}