import { useState } from 'react';
import allproducts from '../data/all-products';
import './Productos.css';

function AllProducts() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Obtener las categorías únicas
  const categories = [...new Set(allproducts.map(product => product.category))];

  // Crear lista de filtros (Todos + categorías)
  const filters = ["Todos", ...categories];

  // Definir qué categorías mostrar según el filtro
  const filteredCategories = activeCategory === "Todos" ? categories : [activeCategory];

  return (
    <div className="all-products-page">

      {/* 🔘 Botones de filtro */}
      <div className="filters">
        {filters.map(category => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 🧁 Mostrar productos según la categoría activa */}
      {filteredCategories.map(category => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="all-products-grid all-products-scroll">
            {allproducts
              .filter(product => product.category === category)
              .map(product => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <button>Añadir al carrito</button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllProducts;
