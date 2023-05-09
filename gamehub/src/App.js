import './App.css';
import './css/main.css'
import axios from 'axios'
import Dashboard from './components/Dashboard';
import './css/main.css'
import { useState, useEffect } from 'react';
import SanityGames from './components/SanityGames';

function App() {
  const [game, setGame] = useState([]);

  useEffect(() => {
    axios.get("https://api.rawg.io/api/games?key=5d8741db23a14d7f88a2c6ccd843ee6c")
    .then((response) => {
      setGame(response.data.results);})
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (

  <>
   
   <div className='nav'>
    <h1>Group 1-Gamehub</h1>
    <Dashboard/>
   </div>
  
  <div className='sanityGames'>
    <SanityGames/>
  </div>
   
</>
  );
}

export default App;
