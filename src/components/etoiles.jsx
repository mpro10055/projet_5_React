import PropTypes from 'prop-types';

function Etoiles({ rating }) {
  const totaletoiles = [1, 2, 3, 4, 5];
  return (
    <div className="etoiles">
      {totaletoiles.map((etoile) => (
        <span key={etoile}>{etoile <= rating ? '★' : '☆'}</span>
      ))}
    </div>
  );
}

Etoiles.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Etoiles;
