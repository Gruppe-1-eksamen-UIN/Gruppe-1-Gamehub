import imageUrlBuilder from '@sanity/image-url';
import {useState, useEffect} from "react";
import Client from '../utils/sanity/Client';

function SanityGames(){
  const [products, setProducts] = useState([]);
  const builder = imageUrlBuilder(Client)

  function urlFor(source) {
    return builder.image(source)
  }

  useEffect(() => {const fetchProducts = async () => {
    const result = await Client.fetch('*[_type == "product"]{name, genre, image}');
      setProducts(result);
    };

  fetchProducts();
  }, []);

  return(
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
    )
}

export default SanityGames;