import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Erreur({ title, message }) {
  return (
    <section className="Erreur__Container">
      <div className="Erreur__title">
        <h1 className="Erreur__titre">{title}</h1>
      </div>
      <div className="Erreur__message">
        <h2 className="Erreur__msg">{message}</h2>
      </div>
      <div className="Erreur__spacer">
        <Link to={'/Home'} className="Erreur__link">
          Retour à l'accueil
        </Link>
      </div>
    </section>
  );
}

Erreur.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Erreur;
