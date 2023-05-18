
import {useState} from 'react';
import GameShop from './components/GameShop';
import './css/main.css'
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameCard from './components/GameCard';
import MyGames from './components/MyGames';
import Favourites from './components/Favourites';
import GamePage from './components/GamePage';
import Footer from './components/Footer';

function App() {
  
  

  return (
    <Router>
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/mygames" element={<MyGames />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/gameshop" element={<GameShop />} />
        <Route path="/game/:id" element={<GamePage />} />
      </Routes>
      <Footer />
    </>
  </Router>
  
  );
}

export default App;
