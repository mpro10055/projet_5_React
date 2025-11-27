import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import data from '../data/appartements.json';
import Collapse from '../components/Collapse.jsx';
import Tags from '../components/Tags.jsx';
import Carousel from '../components/Carousel.jsx';
import Etoiles from '../components/Etoiles.jsx';
import Location from '../components/Location.jsx';
import Host from '../components/Host.jsx';

function Annonces() {
  const { id } = useParams();
  const annonce = data.find((item) => item.id === id);
  if (!annonce) {
    return <Navigate to="/Erreur" replace />;
  }
  return (
    <main className="mainannonce">
      <section>
        <Carousel pictures={annonce.pictures} title={'photos'} />
      </section>
      <div className="locationannonce">
        <Location title={annonce.title} location={annonce.location} />
        <Tags listes={annonce.tags} />
      </div>
      <div className="sectionannonce">
        <Etoiles rating={annonce.rating} />
        <Host
          picture={annonce.host.picture}
          alt={annonce.host.name}
          name={annonce.host.name}
        />
      </div>
      <section className="collapseannonce">
        <Collapse title="Description" texte={annonce.description} />
        <Collapse title="Equipements" texte={annonce.equipments} />
      </section>
    </main>
  );
}

export default Annonces;
