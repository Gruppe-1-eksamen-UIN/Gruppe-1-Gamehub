import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function MyGames() {
  const [myGames, setMyGames] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.rawg.io/api/games?&page_size=20&key=5d8741db23a14d7f88a2c6ccd843ee6c"
      )
      .then((response) => {
        setMyGames(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addToFavourites = (game) => {
    const updatedFavourites = [...favourites, game];
    setFavourites(updatedFavourites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavourites));
  };
  console.log(favourites)

  return (
    <div className="mygames">
      <div className="nav">
        <Navbar />
      </div>

      <h3>My Games-Library</h3>
      <div className="game-list">
        {myGames.map((game) => (
          <div key={game.id} className="game">
            <img src={game.background_image} alt={game.name} className="bilde" />
            <h2>{game.name}</h2>
            <p>Rating: {game.rating}</p>
            <p>Genres: {game.genres.map((genre) => genre.name).join("/")}</p>
            <button onClick={() => addToFavourites(game)}>Add to favourites</button>
          </div>
        ))}
      </div>
    </div>
  );
}
