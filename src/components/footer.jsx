import kasaWhite from '../assets/kasawhite.png';

function Footer() {
  return (
    <footer>
      <div className="container">
        <img className="container__logo" src={kasaWhite} alt="Kasa Logo" />
        <p className="container__reserved">
          © 2023 Kasa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
