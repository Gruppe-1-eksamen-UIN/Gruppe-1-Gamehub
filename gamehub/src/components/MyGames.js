import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import GameCard from "./GameCard";

export default function MyGames() {
  const [myGames, setMyGames] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.rawg.io/api/games?genres=sports&page_size=20&key=724e4c4d78624d3db0bb4abdce8d57b3"
      )
      .then((response) => {
        setMyGames(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });

    const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(storedFavourites);
  }, []);

  const addToFavourites = (game) => {
    const alreadyAdded = favourites.some((favourite) => favourite.id === game.id);
    if (!alreadyAdded) {
      const updatedFavourites = [...favourites, game];
      setFavourites(updatedFavourites);
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    }
  };
  //lagd en funksjon som lagrer et spill i "favorites" når man trykker på add to favorites.
  //lagt til localstorage som passer på at lagret informasjon ikke blir borte mens du navigerer siden.

  const isAddedToFavourites = (game) => {
    return favourites.some((favourite) => favourite.id === game.id);
  };

  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>

      <h3 className="header">My Games-Library - {myGames.length}</h3>
      <div className="game-list">
        {/* Map over myGames and render a GameCard for each game */}
        {myGames.map((game) => (
          <GameCard key={game.id} games={[game]}>
            <button
              className="fav-button"
              onClick={() => addToFavourites(game)}
              disabled={isAddedToFavourites(game)}
            >
              {isAddedToFavourites(game) ? "Added" : "Add to favourites"}
            </button>
          </GameCard>
        ))}
      </div>
    </div>
  );
}