
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";


export default function GamePage() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.rawg.io/api/games/${id}?key=724e4c4d78624d3db0bb4abdce8d57b3`)
      .then((response) => {
        setGame(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className="gam">
        <h2>{game.name}</h2>
        <img src={game.background_image} alt={game.name} className="gamepageimg" />
        <p>{game.rating > 0 ? `Rating: ${game.rating}` : `Rating: N.A`}</p>
        <p>Genres: {game.genres.map((genre) => genre.name).join(", ")}</p>
        <p>Release Date: {game.released}</p>
        <p className="tags">
          Tags: {game.tags.map((tag) => <span key={tag.id}>{tag.name}</span>)}
        </p>
        <p className="developers">
          Developers: {game.developers.map((developer) => <span key={developer.id}>{developer.name}</span>)}
        </p>
        <p>Publisher: {game.publishers.map((publisher) => publisher.name).join(", ")}</p>
      <p>Description: {game.description_raw}</p>
        {/* <p>Utgivelsesår: {game.released.slice(0, 4)}</p> */}
        <p>Plattforms: {game.platforms.map((platform) => platform.platform.name).join(", ")}</p>
        <p>
          Buy:{" "}
          {game.stores.map((store) => (
            <a key={store.id} href={`https://${store.store.domain}?search=${encodeURIComponent(game.name)}`} target="_blank" rel="noopener noreferrer">
              {store.store.name}
            </a>
          ))}
        </p>
       </div>
       </>
  );
}


