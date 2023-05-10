import axios from 'axios';
import { useState, useEffect } from 'react';
import GameShop from './components/GameShop';
import './css/main.css'
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
    <Router>
      <div>
        <Routes>
         <Route path="/" exact>
            <Dashboard/>
          </Route>
          <Route path="/gameshop">
            <GameShop games={games}/>
          </Route>
        </Routes>
          
      </div>
    </Router>
  );
}

export default App;
