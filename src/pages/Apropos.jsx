import Image from '../assets/secondplan.jpg';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';

function Apropos() {
  return (
    <main className="collapsemain">
      <Banner Image={Image} alt="vue sur la montagne" />
      <section className="collapsesection">
        <div>
          <Collapse
            title={'Fiabilité'}
            texte={
              'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logeùments,et toutes les informations sont reguliérement vérifiées par nos équipes.'
            }
          />
        </div>
        <div>
          <Collapse
            title={'Respect'}
            texte={
              'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
            }
          />
        </div>
        <div>
          <Collapse
            title={'Service'}
            texte={
              "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            }
          />
        </div>
        <div>
          <Collapse
            title={'Sécurité'}
            texte={
              "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            }
          />
        </div>
      </section>
    </main>
  );
}
export default Apropos;
