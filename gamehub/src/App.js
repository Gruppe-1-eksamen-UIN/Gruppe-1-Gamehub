import axios from 'axios';
import { useState, useEffect } from 'react';
import GameShop from './components/GameShop';
import './css/main.css'
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameCard from './components/GameCard';

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
      <>
        <Routes>
         <Route path="/" element={<Dashboard/>}/>
        </Routes>
        
        <Routes>
          <Route path="/" element={<GameCard games={games}/>}/>
        </Routes>
       
          
      </>
    </Router>
  );
}

export default App;
