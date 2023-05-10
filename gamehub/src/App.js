import logo from './logo.svg';
import './css/main.css';
import { useEffect, useState } from "react"
import axios from 'axios'
import GameShop from './components/GameShop';
import MyGames from './components/MyGames';
import Favourites from './components/Favourites';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [game, setGame] = useState([]);
  const [newGames, setNewGames] = useState([]);
  const [myGames, setMyGames] = useState([]);

  const find = () => {
    axios
      .get('https://api.rawg.io/api/games?key=5d8741db23a14d7f88a2c6ccd843ee6c&ordering=-added')
      .then((response) => {
        console.log(response);
        setGame(response.data.results.slice(0, 10));
      });
  };

  useEffect(() => {
    axios
      .get(
        "https://api.rawg.io/api/games?key=5d8741db23a14d7f88a2c6ccd843ee6c&ordering=-released"
      )
      .then((response) => {
        setNewGames(response.data.results.slice(0, 10));
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.rawg.io/api/games?key=5d8741db23a14d7f88a2c6ccd843ee6c&genres=action"
      )
      .then((response) => {
        setMyGames(response.data.results.slice(0, 10));
      });
  }, []);

  return (
    
    <Router>
      <div >
      <h1 className="Title">Not-Steam</h1>
        <Navbar/>
        <Routes>
          
          <Route path="/gameshop" element={<GameShop numGames={10}/>}>
            {/* <GameShop newGames={newGames} /> */}
          </Route>
          <Route path="/mygames" element={ <MyGames myGames={myGames}/>}>
            {/* // <MyGames myGames={myGames} /> */}
          </Route>
          <Route path="/favourites" element={<Favourites />}>
            
          </Route>
          <Route path="/" element={<Dashboard games={game} />}>
            {/* <Dashboard games={game} /> */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}


export default App;
