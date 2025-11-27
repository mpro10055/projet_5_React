import PropTypes from 'prop-types';

function Host({ picture, name }) {
  return (
    <div className="host">
      <p className="host__texte">{name}</p>
      <img className="host__img" src={picture} alt={name} />
    </div>
  );
}

Host.propTypes = {
  name: PropTypes.string.isRequired,
  pictures: PropTypes.string.isRequired,
};

export default Host;
