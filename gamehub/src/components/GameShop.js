function GameShop({ games }) {
    return (
      <div className="gameshop">
        <h3>GameShop</h3>
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              <div>
                <h4>{game.name}</h4>
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
  
  export default GameShop;
  