import React from 'react';
import { Link } from 'react-router-dom';

function GameCard({games, children}) {

  return (
    <div>
      <ul className="game-list">
        {games.map((game) => (
          <li className="game" key={game.id}>
            <div className="grid">
              <Link to={`/game/${game.id}`}>
              <img src={game.background_image} alt={game.name} className="game-image" />
              </Link>
              <h4>{game.name}</h4>
              <p>Rating: {game.rating}</p>
              <p>Genres: {game.genres.map((genre) => genre.name).join('/')}</p>
            </div>
            {children}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameCard;
