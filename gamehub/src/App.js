import './App.css';
import './css/main.css'
import axios from 'axios'
import Dashboard from './components/Dashboard';
import './css/main.css'
import { useState, useEffect } from 'react';


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
   <div className='nav'>
    <h1>Group 1-Gamehub</h1>
    <Dashboard/>
    
   </div>
   
  );
}

export default App;

