import React from 'react';
import { Link } from 'react-router-dom';

function GameCard({ games, isLibrary }) {
  const libraryLink = isLibrary ? '/MyGames' : '/gameshop' ;

  return (
    <div>
      <div className="header">
        <h1>{isLibrary ? 'My Library' : 'Gameshop'}</h1>
        <Link to={libraryLink}>
          <button className="button">{isLibrary ? 'Library' : 'Visit Shop'}</button>
        </Link>
      </div>

      <ul className="game-list">
        {games.map((game) => (
          <li className="game" key={game.id}>
            <div className="grid">
              <Link to="/gamepage">
              <img src={game.background_image} alt={game.name} className="game-image" />
              </Link>
              <h4>{game.name}</h4>
              <p>Rating: {game.rating}</p>
              <p>Genres: {game.genres.map((genre) => genre.name).join('/')}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameCard;
