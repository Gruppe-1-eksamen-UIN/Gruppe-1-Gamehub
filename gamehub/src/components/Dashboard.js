import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import GameCard from './GameCard';
import { Link } from 'react-router-dom';
import SanityGamesDashoard from './SanityGamesDashboard';

export default function Dashboard() {
  const [recommendedGames, setRecommendedGames] = useState([]);
  const [favouriteGames, setFavouriteGames] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.rawg.io/api/games?dates=2023-05-01,2023-05-19&ordering=-released&page_size=3&key=724e4c4d78624d3db0bb4abdce8d57b3'
      )
      .then((response) => {
        setRecommendedGames(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });

    const storedFavourites = localStorage.getItem('favourites');
    if (storedFavourites) {
      setFavouriteGames(JSON.parse(storedFavourites));
    }
  }, []);

  return (
    <>
      <div className="nav">
        <Navbar />
      </div>

      <div className="tre-nye">
        <h3 className="header">GameShop</h3>
        <Link to="/gameshop">
          <button className="button">Visit Shop</button>
        </Link>
        <GameCard games={recommendedGames} />
      </div>

      <div>
        <SanityGamesDashoard />
      </div>

      {/* <div className="myGames">
        <h3 className="header">My Games</h3>
        <Link to="/mygames">
          <button className="button">My-Library</button>
        </Link>
        <GameCard games={games} isLibrary={true} />
      </div>
      */}

      <div className="favorite-games">
        <h3 className="header">Favorite Games</h3>
        {favouriteGames.slice(0, 3).map((game) => (
          <GameCard key={game.id} games={[game]} />
        ))}
      </div>
    </>
  );
}
