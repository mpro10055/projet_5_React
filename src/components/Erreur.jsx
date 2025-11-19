import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Erreur({ title, message }) {
  return (
    <section className="ErreurContainer">
      <div className="Erreurtitle">
        <h1 className="Erreurtitre">{title}</h1>
      </div>
      <div className="Erreurmessage">
        <h2 className="Erreurmsg">{message}</h2>
      </div>
      <div className="Erreurspacer">
        <Link to={'/Home'} className="Erreurlink">
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
