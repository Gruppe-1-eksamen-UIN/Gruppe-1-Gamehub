import React from "react";

function GameCard({ games }) {
  return (
    <div>
         <ul>
          {games.map((game) => (
            <li key={game.id}>
              <div>
                <h4 className="navn">{game.name}</h4>
                <img src={game.background_image} alt={game.name} className="bilde"/>
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
