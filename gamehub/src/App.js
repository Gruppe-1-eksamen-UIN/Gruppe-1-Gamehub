import axios from 'axios';
import { useState, useEffect } from 'react';
import GameShop from './components/GameShop';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('https://api.rawg.io/api/games?key=5d8741db23a14d7f88a2c6ccd843ee6c')
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <GameShop games={games} />
    </div>
  );
}

export default App;
