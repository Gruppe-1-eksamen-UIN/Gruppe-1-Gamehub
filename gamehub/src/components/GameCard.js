import React from "react";

function GameCard({ games }) {
  return (
    <div>
      <div className="header">
        <h1>Gameshop</h1>
        <button className="visit-shop-button">Visit Shop</button>
      </div>

      <ul className="game-list">
        {games.map((game) => (
          <li className="game" key={game.id}>
            <div className="grid">
              <h4>{game.name}</h4>
              <img src={game.background_image} alt={game.name} className="game-image" />
              <p>Rating: {game.rating}</p>
              <p>Genres: {game.genres.map((genre) => genre.name).join("/")}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameCard;
