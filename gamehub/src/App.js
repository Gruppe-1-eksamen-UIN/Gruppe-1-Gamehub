import './App.css';
import './css/main.css'
import client from './utils/sanity/client';
import imageUrlBuilder from '@sanity/image-url'

import {useState, useEffect} from "react"

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

  return (
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

