import React from "react";

function GameCard({ games }) {
  return (
    <div>
      <h1>List of Games</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GameCard;
