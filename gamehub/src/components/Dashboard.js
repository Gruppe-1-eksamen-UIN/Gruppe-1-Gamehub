

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import Navbar from './Navbar';
  import GameCard from './GameCard';
  import { Link } from 'react-router-dom';
  
  export default function Dashboard() {
    const [recommendedGames, setRecommendedGames] = useState([]);
    const [games, myGames] = useState([]);
    const [favouriteGames, setFavouriteGames] = useState([]);
  
    useEffect(() => {
      axios.get('https://api.rawg.io/api/games?dates=2023-05-01,2023-05-19&ordering=-released&page_size=3&key=724e4c4d78624d3db0bb4abdce8d57b3')
        .then((response) => {
          setRecommendedGames(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
  
      axios.get('https://api.rawg.io/api/games?genres=sports&page_size=4&key=724e4c4d78624d3db0bb4abdce8d57b3')
        .then((response) => {
          myGames(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    useEffect(() => {
      const storedFavourites = localStorage.getItem('favourites');
      if (storedFavourites) {
        setFavouriteGames(JSON.parse(storedFavourites));
      }
    }, []);
<<<<<<< Updated upstream
    const generateStoreURL = (storeName, gameName) => {
      let url = '';
  
      switch (storeName) {
        case 'Steam':
          url = `https://store.steampowered.com/search/?term=${encodeURIComponent(gameName)}&supportedlang=english&ndl=1`;
          break;
        case 'GOG':
          url = `https://store.epicgames.com/en-US/browse?q=${encodeURIComponent(gameName)}&sortBy=relevancy&sortDir=DESC&count=40`;
          break;
        case 'Epic Games':
          url = `https://store.epicgames.com/en-US/browse?q=${encodeURIComponent(gameName)}&sortBy=relevancy&sortDir=DESC&count=40`;
          break;
        case 'Nintendo Store':
          url = `https://www.nintendo.com/search/?q=${encodeURIComponent(gameName)}&p=1&cat=gme&sort=df`;
          break;
        case 'PlayStation Store':
          url = `https://store.playstation.com/en-no/search/${encodeURIComponent(gameName)}`;
          break;
        default:
          url = '';
      }
  
      return url;
    };
  
  

=======
>>>>>>> Stashed changes

  return (
    <>
      <div className="nav">
        <Navbar />
      </div>

      <div>
        <h3 className='header'>GameShop</h3>
        <Link to="/gameshop">
        <button className='button'>Visit Shop</button>
        </Link>
        
      </div>
<<<<<<< Updated upstream
      
        <div className="game-list">
          {recommendedGames.map((game) => (
            <GameCard key={game.id} games={[game]}>
              <button className="buy-button">
                {game.stores && game.stores.length > 0 ? (
                  <a href={generateStoreURL(game.stores[0].store.name, game.name)}>Buy</a>
                ) : (
                  "Buy"
                )}
              </button>
            </GameCard>
          ))}
        </div>

=======
>>>>>>> Stashed changes
      <div>
      <h3 className='header'>My Games</h3>
        <Link to="/mygames">
        <button className='button'>My-Library</button>
        </Link>
        <GameCard games={games} isLibrary={true} />
      </div>
      <div>
        <h3 className='header'>Favorite Games</h3>
        <div className='game-list'>
          {favouriteGames.slice(0, 3).map((game) => (
            <GameCard key={game.id} games={[game]} />
          ))}
          </div>
        
      </>
    );
  }