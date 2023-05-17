
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import GameCard from "./GameCard";

function GameShop({ games }) {
  const [buyGames, setBuyGames] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.rawg.io/api/games?dates=2023-05-16,2023-05-31&ordering=-released&page_size=10&key=724e4c4d78624d3db0bb4abdce8d57b3"
      )
      .then((response) => {
        setBuyGames(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  

  return (
    <div className="spill">
      <div className="nav">
        <Navbar />
      </div>

        <h3 className="header">Gameshop</h3>
      <div className="game-list">
        {buyGames.map((game) => (
            <GameCard key={game.id} games={[game]}>
              <button className="buy-button">Buy</button>
            </GameCard>
        ))}
      </div>
    </div>
  );
}

export default GameShop;

  