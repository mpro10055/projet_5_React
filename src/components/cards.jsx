import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Cards({ id, cover, title }) {
  return (
    <Link to={`/annonces/${id}`}>
      <div className="Cards">
        <img className="pictures" src={cover} alt={title} />
        <h2 className="cardstexte">{title}</h2>
      </div>
    </Link>
  );
}
Cards.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Cards;
