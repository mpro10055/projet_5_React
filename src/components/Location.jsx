function Location({ location, title }) {
  return (
    <div>
      <h2 className="carousel__title">{title}</h2>
      <p className="location__texte">{location}</p>
    </div>
  );
}

export default Location;
