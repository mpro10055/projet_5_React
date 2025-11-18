import PropTypes from 'prop-types';

function Erreur({ title, message }) {
  return (
    <div className="Erreur">
      <h1>{title}</h1>
      <h2>{message}</h2>
    </div>
  );
}

Erreur.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Erreur;
