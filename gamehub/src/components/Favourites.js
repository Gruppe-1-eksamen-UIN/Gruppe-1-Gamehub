import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import GameCard from "./GameCard";

export default function Favourites() {
  const [favourites, setFavourites] = 
  useState(JSON.parse(localStorage.getItem('favourites')) || []);
  
  useEffect(() => {
    const storedFavourites = localStorage.getItem('favourites');
    if (storedFavourites) {
      setFavourites(JSON.parse(storedFavourites));
    }
  }, []);

  const handleRemoveFavourite = (id) => {
    const updatedFavourites = favourites.filter((favourite) => favourite.id !== id);
    setFavourites(updatedFavourites);
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
  };

  return (
    <div className="myfavouritegames">
      <div className="nav">
        <Navbar />
      </div>

      <h3 className="header">My Favourites</h3> 
      <div className="game-list"> 
      {favourites.map((favourite) => (
          <GameCard key={favourite.id} games={[favourite]}>
            <button className="rem-fav-button" onClick={() => handleRemoveFavourite(favourite.id)}>Remove from favourites</button>
          </GameCard> 
          
      ))}
      </div>
    </div>
  );
}
