function Host({ picture, name }) {
  return (
    <div className="host">
      <p className="host__texte">{name}</p>
      <img className="host__img" src={picture} alt={name} />
    </div>
  );
}

export default Host;
