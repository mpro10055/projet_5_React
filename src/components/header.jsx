import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <img className="header__Kasa" src={logo} alt="Kasa Logo" />
      <nav className="header__navbar">
        <ul className="header__navlinks">
          <li>
            <NavLink className="header__navlink" to="/Home">
              Acceuil
            </NavLink>
          </li>
          <li>
            <NavLink className="header__navlink" to="/Apropos">
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
