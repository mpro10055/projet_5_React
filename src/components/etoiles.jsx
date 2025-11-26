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
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Etoiles;
