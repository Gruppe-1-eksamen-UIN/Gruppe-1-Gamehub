import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function GameShop({ games }) {
  const[buyGames, setBuyGames] = useState([])

  useEffect(() => {
    axios.get('https://api.rawg.io/api/games?dates=2023-05-01,2023-05-19&ordering=-released&page_size=10&key=724e4c4d78624d3db0bb4abdce8d57b3')
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
          
        <Navbar/>
        
        </div>

        <h3 className="header">Gameshop</h3>
      <div className="game-list">
      
        {buyGames.map((game) => (
          <div key={game.id} className="game">
            <img src={game.background_image} alt={game.name} className="bilde"  />
            <h2>{game.name}</h2>
            <p>Rating: {game.rating}</p>
            <p>Genres: {game.genres.map((genre) => genre.name).join("/")}</p>
            <Link to="/">
            <button>Buy</button>
            </Link>
            
          </div>
        ))}
      </div>

      </div>
      
    );
  }
  
  export default GameShop;
  