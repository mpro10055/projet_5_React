import { useParams } from 'react-router-dom';
import data from '../data/appartements.json';
import Collapse from '../components/Collapse.jsx';
import Tags from '../components/tags.jsx';

function Annonces() {
  const { id } = useParams();
  const annonces = data.find((item) => item.id === id);
  return (
    <section>
      <p>{annonces.title}</p>
      <div>
        <Collapse title="Description" texte={annonces.description} />
        <Collapse title="Equipements" texte={annonces.equipments} />
      </div>
      <div>
        <Tags listes={annonces.tags} />
      </div>
    </section>
  );
}

export default Annonces;
