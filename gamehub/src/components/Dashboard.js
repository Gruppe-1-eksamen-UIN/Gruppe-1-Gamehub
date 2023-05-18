

// orginal dashboard work fine
//import React, { useState, useEffect } from 'react';
//import axios from 'axios';
//import { Link } from "react-router-dom";
//import Navbar from "./Navbar";
//import GameCard from './GameCard';

//export default function Dashboard() {
//  const [games, setGames] = useState([]);
//
 // useEffect(() => {
 //   axios
  //    .get('https://api.rawg.io/api/games?dates=2023-05-01,2023-05-19&ordering=-released&page_size=3&key=5d8741db23a14d7f88a2c6ccd843ee6c')
   //   .then((response) => {
   //     setGames(response.data.results);   })
   //   .catch((error) => {
   //     console.log(error);
    //  });
  //}, []);

    

    //return (
    //    <>
    //    <div className="nav">
     //    
     //   <Navbar/>
        
     //   </div>

       // <GameCard games={games} />
      
   // </>
  //); //}

  import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import GameCard from './GameCard';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [recommendedGames, setRecommendedGames] = useState([]);
  const [games, myGames] = useState([])
  const [favouriteGames, setFavouriteGames] = useState([]); 

  useEffect(() => {
    axios
      .get('https://api.rawg.io/api/games?dates=2023-05-01,2023-05-19&ordering=-released&page_size=3&key=724e4c4d78624d3db0bb4abdce8d57b3')
      .then((response) => {
        setRecommendedGames(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get('https://api.rawg.io/api/games?genres=sports&page_size=4&key=724e4c4d78624d3db0bb4abdce8d57b3')
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
  


  return (
    <>
      <div className="nav">
        <Navbar />
      </div>

      <div className="tre-nye">
        <h3 className='header'>GameShop</h3>
        <Link to="/gameshop">
        <button className='button'>Visit Shop</button>
        </Link>
        <GameCard games={recommendedGames} />
      </div>

      <div className="myGames">
      <h3 className='header'>My Games</h3>
        <Link to="/mygames">
        <button className='button'>My-Library</button>
        </Link>
        <GameCard games={games} isLibrary={true} />
      </div>

      <div className="favorite-games">
        <h3 className='header'>Favorite Games</h3>
          {favouriteGames.slice(0, 3).map((game) => (
          <GameCard key={game.id} games={[game]} />
          ))}
      </div> 
    </>
  );
}
