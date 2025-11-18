import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img className="Kasa" src={logo} alt="Kasa Logo" />
      <nav className="nav-bar">
        <ul className="nav-links">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Apropos">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
