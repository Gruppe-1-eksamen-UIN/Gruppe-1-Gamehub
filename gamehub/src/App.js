import logo from './logo.svg';
import './css/main.css';
import { useEffect, useState } from "react"
import axios from 'axios'
import GameShop from './components/GameShop';
import MyGames from './components/MyGames';
import Favourites from './components/Favourites';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function App() {
  const [game, setGame] = useState([]);
  const [newGames, setNewGames] = useState([]);
  const [myGames, setMyGames] = useState([]);



  return (
    
    <Router>
      <div >
        <Link to="/">
        <h1 className="Title">Not-Steam</h1>
        </Link>
      
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
