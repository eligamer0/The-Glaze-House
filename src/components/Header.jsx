import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Bloquear scroll cuando el menú esté abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  // Alternar el menú
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  // Cerrar menú al hacer clic en un enlace
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className='navegation'>
        <div className="logo-nav">
          <Link to={"/"}>
            <h2>The Glaze <span>House</span></h2>
          </Link>
        </div>

        <nav className="nav">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/pages/Productos">Productos</Link></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>

        <div className='menu'>
          <button
            className={`button-menu ${menuOpen ? 'active' : ''}`}
            id="menuButton"
            onClick={toggleMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>

          <div
            className="overlay"
            id="myNav"
            style={{ width: menuOpen ? '100%' : '0' }}
          >
            <div className="overlay-content">
              <Link to="/" onClick={closeMenu}>Inicio</Link>
              <a href="#" onClick={closeMenu}>Nosotros</a>
              <Link to="/pages/Productos" onClick={closeMenu}>Productos</Link>
              <a href="#" onClick={closeMenu}>Contacto</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
