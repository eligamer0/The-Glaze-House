import './Header.css';

function Header() {
    return (
    <header className="header">

        <div className='navegation'>
            <div className="logo-nav">
                <h2>The Glaze <span>House</span> </h2>
            </div>

            <nav className="nav">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </div>

        <div className="hero-text">
            <h1>The Glaze House</h1>
            <p>Bienvenido a nuestra dulce tienda de donas 🍩</p>
        </div>

    </header>
    );
}

export default Header;
