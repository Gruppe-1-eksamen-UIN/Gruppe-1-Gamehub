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
        <div className="favourites">
            <h3>Favourites</h3> 
        </div> 
        </>
    )
}