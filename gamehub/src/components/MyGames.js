import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function MyGames() {
  const [myGames, setMyGames] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.rawg.io/api/games?&page_size=20&key=724e4c4d78624d3db0bb4abdce8d57b3"
      )
      .then((response) => {
        setMyGames(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addToFavourites = (game) => {
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    const alreadyAdded = storedFavourites.some((favourite) => favourite.id === game.id);
    if (!alreadyAdded) {
      const updatedFavourites = [...storedFavourites, game];
      setFavourites(updatedFavourites);
      localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
    }
  };
  
  
  console.log(favourites)

  return (
    <div className="mygames">
      <div className="nav">
        <Navbar />
      </div>

      <h3 className="header">My Games-Library</h3>
      <div className="game-list">
        {myGames.map((game) => (
          <div key={game.id} className="game">
             <Link to={`/game/${game.id}`}>
              <img src={game.background_image} alt={game.name} className="game-image" />
              </Link>
            <h2>{game.name}</h2>
            <p>Rating: {game.rating}</p>
            <p>Genres: {game.genres.map((genre) => genre.name).join("/")}</p>
            <button className="fav-button" onClick={() => addToFavourites(game)}>Add to favourites</button>
          </div>
        ))}
      </div>
    </div>
  );
}
