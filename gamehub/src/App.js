
import {useState} from 'react';
import GameShop from './components/GameShop';
import './css/main.css'
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameCard from './components/GameCard';
import MyGames from './components/MyGames';
import Favourites from './components/Favourites';

function App() {
  const [games, setGames] = useState([]);
  const [myGames, setMyGames] = useState([])

  return (
    <Router>
      <>
        <Routes>
         <Route path="/" element={<Dashboard/>}/>
        </Routes>
        
        <Routes>
          <Route path="/" element={<GameCard games={games}/>}/>
        </Routes>

        <Routes>
          <Route path="/mygames" element={<MyGames myGames={myGames}/>}/>
          <Route path="/favourites" element={<Favourites />}/>
          <Route path="/gameshop" element={<GameShop />}/>
        </Routes>
       
      </>
    </Router>
  );
}

export default App;
