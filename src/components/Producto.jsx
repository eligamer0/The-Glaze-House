import './Producto.css'

function Products ({name, price, image}) {
    return (
        <div className="card">
            <img src= {image} alt="name" width="200" />
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    );
}

export default Products;