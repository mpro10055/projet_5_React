
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../styles/header.scss';

function Header() {
  return (
    <header>
        <img class='Kasa' src={logo} alt="Kasa Logo" />
     <nav class='nav-bar'> 
        <ul class='nav-links'>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Apropos">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;