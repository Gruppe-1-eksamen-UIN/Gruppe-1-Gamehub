// Component som viser dine favourite spill 
import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import { Link } from "react-router-dom"
import axios from "axios"
export default function Favourites(){
    const [favGames, setFavGames] = useState([])

    useEffect(() => {
        axios.get('https://api.rawg.io/api/games?&page_size=5&key=5d8741db23a14d7f88a2c6ccd843ee6c')
          .then((response) => {
            setFavGames(response.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    return(
        <>
        <div className="favoritt">

         <div className="nav">
          
        <Navbar/>
        </div>

          <h3>Favourites</h3> 
          <div className="game-list">
        {favGames.map((game) => (
          <div key={game.id} className="game">
            <img src={game.background_image} alt={game.name} className="bilde"  />
            <h2>{game.name}</h2>
            <p>Rating: {game.rating}</p>
            <p>Genres: {game.genres.map((genre) => genre.name).join("/")}</p>
          </div>
        ))}
      </div>

        </div>
        </>
    )
}