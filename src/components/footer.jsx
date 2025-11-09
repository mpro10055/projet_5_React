import kasaWhite from '../assets/kasawhite.png';
import '../styles/footer.scss';

function Footer() {
  return (
    <footer>
        <div><img src={kasaWhite} alt="Kasa Logo" /><p>© 2023 Kasa. All rights reserved.</p>
        </div>
    </footer>
  );
}
export default Footer;