import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"
import axios from 'axios'

function App() {
  const [game, setGame] = useState([]);

  const find = () =>{
    axios.get('https://api.rawg.io/api/games?key=5d8741db23a14d7f88a2c6ccd843ee6c')
    .then((response)=> {
    console.log(response)
    setGame(response.data.search)
    })

  }

  useEffect(() =>{
    find()
  }, [])

  return (
   <></>
  );
}

export default App;
