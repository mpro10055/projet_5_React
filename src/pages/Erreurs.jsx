import Erreur from '../components/Erreur.jsx';

function Erreurs() {
  return (
    <main className="Erreur">
      <Erreur
        title={'404'}
        message={"Oups! La page que vous demandez n'existe pas."}
        Link
        to={'/Home'}
      />
    </main>
  );
}

export default Erreurs;
