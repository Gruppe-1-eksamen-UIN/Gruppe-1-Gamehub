import Favourites from "./Favourites";
import GameCard from "./GameCard";
import GameShop from "./GameShop";
import MyGames from "./MyGames";
import { useState, useEffect } from 'react';
import axios from 'axios';

// Component for Dashboard som viser forsiden med mygames, favourites og gameshop
export default function Dashboard(){
    const [games, setGames] = useState([]);
    
    useEffect(() => {
        axios.get('https://api.rawg.io/api/games?genres=adventure&page_size=20&key=5d8741db23a14d7f88a2c6ccd843ee6c')
          .then((response) => {
            setGames(response.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    return (
        <>
        <div className="nav">
        <h1>Gamehub</h1>
       <button className="button"><MyGames/></button> 
       <button className="button"><Favourites/></button> 
       <button className="button"><GameShop/></button> 
        </div>

        <div className="my-games">
            <GameCard games={games} />
        </div>
       
        </>
       
        
        

    )
}

