import Favourites from "./Favourites";
import GameShop from "./GameShop";
import MyGames from "./MyGames";
import { useEffect, useState } from "react"
import axios from 'axios'
import Navbar from "./Navbar";

// Component for Dashboard som viser forsiden med mygames, favourites og gameshop
export default function Dashboard(){

    const [newGames, setNewGames] = useState([]);

useEffect(() => {
  axios.get('https://api.rawg.io/api/games?key=5d8741db23a14d7f88a2c6ccd843ee6c&ordering=-released')
  .then((response) => {
    setNewGames(response.data.results.slice(0, 3));
  });
}, []);

const [myGames, setMyGames] = useState([]);

useEffect(() => {
  axios.get('https://api.rawg.io/api/games?key=5d8741db23a14d7f88a2c6ccd843ee6c&genres=action')
  .then((response) => {
    setMyGames(response.data.results.slice(0, 4));
  });
}, []);

 


    return(
        <>
        <h1 className="Title">Not-Steam</h1>
        <div className="dashboard">
            <Navbar/>
        <GameShop newGames={newGames}/>
        <MyGames myGames={myGames} />
        <Favourites/>
        </div>
        </>
    )
}