//Component som viser spill du har kjøpt
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
export default function MyGames(){
  const [myGames, setMyGames] = useState([])

  useEffect(() => {
    axios.get('https://api.rawg.io/api/games?&page_size=20&key=5d8741db23a14d7f88a2c6ccd843ee6c')
      .then((response) => {
        setMyGames(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
    return(
      <div className="mygames">
        
        <div className="nav">
          <Link to="/">
          <h1>Gamehub</h1>
          </Link>
        <Navbar/>
        
        </div>
       
        
      <h3>My Games-Library</h3>
      <div className="game-list">
        {myGames.map((game) => (
          <div key={game.id} className="game">
            <img src={game.background_image} alt={game.name} className="bilde"  />
            <h2>{game.name}</h2>
            <p>Rating: {game.rating}</p>
            <p>Genres: {game.genres.map((genre) => genre.name).join("/")}</p>
          </div>
        ))}
      </div>
    </div> )
}