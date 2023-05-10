
import {useState} from 'react';
import GameShop from './components/GameShop';
import './css/main.css'
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameCard from './components/GameCard';

function App() {
  const [games, setGames] = useState([]);

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
