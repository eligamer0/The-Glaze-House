import products from '../data/products';
import Producto from '../components/Producto';

function Home() {
  return (
    <div className='home'>
      <h1>The Glaze House</h1>
      <p>Descubre nuestras irresistibles donas y postres hechos con amor 🍩✨</p>

      <div className='products-grid'>
        {products.map((item) => (
          <Producto
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
