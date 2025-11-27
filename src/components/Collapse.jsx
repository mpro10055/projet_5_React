import { useState } from 'react';
import PropTypes from 'prop-types';

function Collapse({ title, texte }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="collapse">
      <button onClick={toggleOpen} className="collapse__btn">
        {title}
        <span
          className={isOpen ? 'arrow arrow--up' : 'arrow arrow--down'}
        ></span>
      </button>
      {isOpen && (
        <div className="collapse__content">
          {Array.isArray(texte) ? (
            <ul>
              {texte.map((item) => (
                <li className="collapse__texte" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="collapse__texte">{texte}</p>
          )}
        </div>
      )}
    </div>
  );
}

Collapse.prototype = {
  title: PropTypes.string.isRequired,
  texte: PropTypes.any.isRequired,
};

export default Collapse;
