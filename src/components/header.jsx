import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <img className="header__Kasa" src={logo} alt="Kasa Logo" />
      <nav className="header__navbar">
        <ul className="header__navlinks">
          <li>
            <Link className="header__navlink" to="/Home">
              Home
            </Link>
          </li>
          <li>
            <Link className="header__navlink" to="/Apropos">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
