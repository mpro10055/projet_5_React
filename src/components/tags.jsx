import PropTypes from 'prop-types';

function Tags({ listes }) {
  return (
    <div className="tags">
      {Array.isArray(listes) &&
        listes.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
    </div>
  );
}

Tags.propTypes = {
  listes: PropTypes.array.isRequired,
};

export default Tags;
