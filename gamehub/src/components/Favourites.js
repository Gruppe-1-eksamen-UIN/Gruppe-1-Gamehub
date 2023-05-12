import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="myfavouritegames">
      <div className="nav">
        <Navbar />
      </div>
      <h2>My Favorites</h2>
      {favorites.map((favorite) => (
        <div key={favorite.id} className="game">
          <h3>{favorite.name}</h3>
          <img src={favorite.background_image} alt={favorite.name} />
          <button onClick={() => handleRemoveFavorite(favorite.id)}>Remove from favorites</button>
        </div>
      ))}
    </div>
  );
}
