import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function Favourites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites = localStorage.getItem('favourites');
    if (storedFavourites) {
      setFavourites(JSON.parse(storedFavourites));
    }
  }, []);

  const handleRemoveFavorite = (id) => {
    const updatedFavourites = favourites.filter((favorite) => favorite.id !== id);
    setFavourites(updatedFavourites);
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
  };

  return (
    <div className="myfavouritegames">
      <div className="nav">
        <Navbar />
      </div>
      <h2>My Favourites</h2>
      {favourites.map((favorite) => (
        <div key={favorite.id} className="game">
          <h3>{favorite.name}</h3>
          <img src={favorite.background_image} alt={favorite.name} />
          <button onClick={() => handleRemoveFavorite(favorite.id)}>Remove from favourites</button>
        </div>
      ))}
    </div>
  );
}
