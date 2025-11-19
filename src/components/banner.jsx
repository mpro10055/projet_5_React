import PropTypes from 'prop-types';

function Banner({ Image, Text }) {
  return (
    <section>
      <div className="image-container">
        <img className="banner" src={Image} alt="vue sur la mer" />
        <div className="overlay"></div>
        <h1>{Text}</h1>
      </div>
    </section>
  );
}
Banner.propTypes = {
  Image: PropTypes.string.isRequired,
  Text: PropTypes.string.isRequired,
};

export default Banner;
