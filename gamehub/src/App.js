import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"

function App() {
  const [game, setGame] = useState([]);

  const find = async() =>{
    const play = await fetch('https://api.rawg.io/api/games?key=5d8741db23a14d7f88a2c6ccd843ee6c')
    console.log(game)
    setGame(game.data.search)

  }

  useEffect(() =>{
    find()
  }, [])

  return (
   <></>
  );
}

export default App;
