import { useState } from 'react';
import PropTypes from 'prop-types';

function Collapse({ title, texte }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  return (
    <section className="Collapse">
      <button onClick={toggleOpen}>{title}</button>
      {isOpen && (
        <div className="collapse-content">
          {Array.isArray(texte) ? (
            <ul>
              {texte.map((item, element) => (
                <li key={element}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{texte}</p>
          )}
        </div>
      )}
    </section>
  );
}

Collapse.propTypes = {
  texte: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Collapse;
