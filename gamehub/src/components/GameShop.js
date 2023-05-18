import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import GameCard from "./GameCard";

function GameShop({ games }) {
  const [buyGames, setBuyGames] = useState([]);

  useEffect(() => {
    axios.get("https://api.rawg.io/api/games?dates=2023-05-16,2023-05-31&ordering=-released&page_size=10&key=724e4c4d78624d3db0bb4abdce8d57b3")
      .then((response) => {
        setBuyGames(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const generateStoreURL = (storeName, gameName) => {
    let url = '';
    
    switch (storeName) {
      case 'Steam': url = `https://store.steampowered.com/search/?term=${encodeURIComponent(gameName)}&supportedlang=english&ndl=1`;
        break;
      case 'GOG': url = `https://store.epicgames.com/en-US/browse?q=${encodeURIComponent(gameName)}&sortBy=relevancy&sortDir=DESC&count=40`;
        break;
      case 'Epic Games': url = `https://store.epicgames.com/en-US/browse?q=${encodeURIComponent(gameName)}&sortBy=relevancy&sortDir=DESC&count=40`;
        break;
      case 'Nintendo Store': url = `https://www.nintendo.com/search/?q=${encodeURIComponent(gameName)}&p=1&cat=gme&sort=df`;
        break;
      case 'PlayStation Store': url = `https://store.playstation.com/en-no/search/${encodeURIComponent(gameName)}`;
        break;
      default:
        url = '';
    }

    return url;
  };

  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>

      <h3 className="header">Gameshop</h3>
      <div className="game-list">
        {buyGames.map((game) => (
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
    </div>
  );
}

export default GameShop;
