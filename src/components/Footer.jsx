import './Footer.css';
import './Header.css';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="logo-nav">
                    <h2>The Glaze <span>House</span> </h2>
                </div>
                <div className='redes'>
                    <a href="#"> <i> <FaWhatsapp size={32} color="#25D366"/> </i> </a>
                    <a href="#"><span className='instagram-icon'><FaInstagram size={32}/></span></a>
                    <a href="#"> <i> <MdEmail size={32} color='#D44638'/> </i> </a>
                </div>
            </div>

            <div className="footer-cretit">
                <p>&copy; 2023 The Glaze House. Todos los derechos reservados.</p>
                <p>Hecho con amor por Eliezer</p>
            </div>
        </footer>
    );
}

export default Footer;