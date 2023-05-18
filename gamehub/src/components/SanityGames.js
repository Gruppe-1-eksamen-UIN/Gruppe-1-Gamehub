import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import Client from '../utils/sanity/Client';
import Favourites from './Favourites';

function SanityGames() {
  const [products, setProducts] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const builder = imageUrlBuilder(Client);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await Client.fetch(
          `*[_type == "product"]{
            name,
            genre,
            image,
            slug,
            playedTime
          }`
        );
        setProducts(result);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToFavourites = (product) => {
    setFavourites((prevFavourites) => [...prevFavourites, product]);
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <img
              src={urlFor(product.image).width(200).height(200).fit('crop').url()}
              alt={product.name}
            />
            <h2>{product.name}</h2>
            <p>Game Played Time: {product.playedTime}</p>
            <p>Genre: {product.genre}</p>
            {console.log(product.image.asset.url)}
            <button onClick={() => handleAddToFavourites(product)}>Add to Favourites</button>
          </li>
        ))}
      </ul>
      <Favourites favourites={favourites} />
    </div>
  );
}

export default SanityGames;
