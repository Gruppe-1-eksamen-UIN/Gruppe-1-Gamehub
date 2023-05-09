import './App.css';
import './css/main.css'
import client from './utils/sanity/client';
import imageUrlBuilder from '@sanity/image-url'
import {useState, useEffect} from "react"
import axios from 'axios'
import Dashboard from './components/Dashboard';
import './css/main.css'

function App() {
  const [products, setProducts] = useState([]);
  const builder = imageUrlBuilder(client);
  
  function urlFor(source) {
    return builder.image(source)
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await client.fetch('*[_type == "product"]{name, genre, image}');
      setProducts(result);
    };
    fetchProducts();
  }, []);

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
   

    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <img src={urlFor(product.image) + '?w=200&h=200&fit=crop'} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.genre}</p>
            {console.log(product.image.asset.url)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

