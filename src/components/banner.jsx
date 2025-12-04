import PropTypes from 'prop-types';

function Banner({ Image, Text }) {
  return (
    <section>
      <div className="banner">
        <img className="banner__image" src={Image} alt="vue sur la mer" />
        <div className="banner__overlay"></div>
        <h1 className="banner__txt">{Text}</h1>
      </div>
    </section>
  );
}
Banner.propTypes = {
  Image: PropTypes.string.isRequired,
  Text: PropTypes.string.isRequired,
};

export default Banner;
