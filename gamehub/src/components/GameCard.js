import React from 'react';
import { Link } from 'react-router-dom';

function GameCard({games, children}) {
  return (
    <div >
      <ul className="game-list">
        {games.map((game) => (
          <li className="game" key={game.id}>
              <Link to={`/game/${game.id}`}>
              <img src={game.background_image} alt={game.name} />
              </Link>
              <h4 >{game.name}</h4>
              <p>{game.rating > 0 ? `Rating: ${game.rating}` : `Release Date: ${game.released}`}</p>
              <p>Genres: {game.genres.map((genre) => genre.name).join('/')}</p>
            {children}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameCard;