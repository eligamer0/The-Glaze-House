import products from '../data/products';
import Producto from '../components/Producto';

function Home() {
  return (
    <div className='home'>
      <h1>The Glaze House</h1>
      <p>Descubre nuestras irresistibles donas y postres hechos con amor 🍩✨</p>

      <div className='productos'>
        <h2>Nuestros productos</h2>
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
        <div >
          <a href="#" className="btn-sweep-to-right">Ver más
            <svg class="hvr-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="32" height="32" stroke-width="2">
              <path d="M5 12h.5m3 0h1.5m3 0h6"></path>
              <path d="M13 18l6 -6"></path>
              <path d="M13 6l6 6"></path>
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Home;
