function Products ({name, price, image}) {
    return (
        <div>
            <img src= {image} alt="name" width="200" />
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    );
}

export default Products;