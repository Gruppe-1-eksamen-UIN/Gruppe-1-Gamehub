import React from "react";

function GameCard({ game }) {
    return (
        
    <ul className="games">
       {game.map((games) => (
        <li key={games.id}>
        <h3>{games.name}</h3>
        </li>
       ))}
     </ul>
     );
        
  }

  export default GameCard;
  