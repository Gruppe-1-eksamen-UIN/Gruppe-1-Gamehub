

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

export default function Dashboard() {
  const [recommendedGames, setRecommendedGames] = useState([]);
  const [favoriteGames, setFavoriteGames] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.rawg.io/api/games?dates=2023-05-01,2023-05-19&ordering=-released&page_size=3&key=5d8741db23a14d7f88a2c6ccd843ee6c')
      .then((response) => {
        setRecommendedGames(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get('https://api.rawg.io/api/games?genres=sports&page_size=4&key=5d8741db23a14d7f88a2c6ccd843ee6c')
      .then((response) => {
        setFavoriteGames(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="nav">
        <Navbar />
      </div>

      <div className="tre-nye">
      
        <GameCard games={recommendedGames} />
      </div>

      <div className="favorite-games">
        
        <GameCard games={favoriteGames} isLibrary={true} />
      </div>
    </>
  );
}
