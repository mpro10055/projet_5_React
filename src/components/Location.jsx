import PropTypes from 'prop-types';

function Location({ location, title }) {
  return (
    <div>
      <h2 className="carousel__title">{title}</h2>
      <p className="location__texte">{location}</p>
    </div>
  );
}

Location.propTypes = {
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Location;
