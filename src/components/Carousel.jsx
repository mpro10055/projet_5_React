import { useState } from 'react';

function Carousel({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPicture = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevPicture = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length,
    );
  };

  return (
    <div className="carousel">
      <img className="carousel__img" src={pictures[currentIndex]} alt={title} />

      {pictures.length > 1 && (
        <>
          <button className="carousel__btn" onClick={prevPicture}>
            <span className="carousel__fleche" />
          </button>
          <button className="carousel__btn2" onClick={nextPicture}>
            <span className="carousel__fleche2" />
          </button>
          <span className="carousel__span">
            {currentIndex + 1} / {pictures.length}
          </span>
        </>
      )}
    </div>
  );
}

export default Carousel;
