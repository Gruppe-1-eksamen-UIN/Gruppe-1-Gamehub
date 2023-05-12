import Favourites from "./Favourites";
import GameCard from "./GameCard";
import GameShop from "./GameShop";
import MyGames from "./MyGames";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

// Component for Dashboard som viser forsiden med mygames, favourites og gameshop
export default function Dashboard(){
    const [games, setGames] = useState([]);
    
    useEffect(() => {
        axios.get('https://api.rawg.io/api/games?dates=2023-05-01,2023-05-19&ordering=-released&page_size=3&key=5d8741db23a14d7f88a2c6ccd843ee6c')
          .then((response) => {
            setGames(response.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
      //fjerne useeffect, legge til punkter under(gameshop ,mygames, favourites)
    

    return (
        <>
        <div className="nav">
          <Link to="/">
          <h1>Gamehub</h1>
          </Link>
        <Navbar/>

        </div>

        <div className="tre-nye">
            <GameCard games={games} />
        </div>
       
        </>
       
        
        

    )
}

