import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Inicio</Link>
      <span className="separator">|</span>
      <Link to="/acerca" className="nav-link">Acerca de mí</Link>
      <span className="separator">|</span>
      <Link to="/contacto" className="nav-link">Contacto</Link>
      <span className="separator">|</span>
      <Link to="/tablas" className="nav-link">Tablas</Link>
      <span className="separator">|</span>
      <Link to="/usuarios" className="nav-link">Usuarios</Link>
    </nav>
  );
}

export default Navbar;
