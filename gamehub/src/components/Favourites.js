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
      <h2>My Favourites</h2>
      {favourites.map((favourite) => (
        <div key={favourite.id} className="game">
          <h3>{favourite.name}</h3>
          <img src={favourite.background_image} alt={favourite.name} />
          <button onClick={() => handleRemoveFavourite(favourite.id)}>Remove from favourites</button>
        </div>
      ))}
    </div>
  );
}
