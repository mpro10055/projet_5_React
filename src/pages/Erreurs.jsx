import Erreur from '../components/Erreur.jsx';

function Erreurs() {
  return (
    <div className="Erreur">
      <Erreur
        title={'404'}
        message={"Oups! La page que vous demandez n'existe pas."}
      />
    </div>
  );
}

export default Erreurs;
