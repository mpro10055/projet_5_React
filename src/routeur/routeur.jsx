import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import Home from '../pages/Home.jsx';
import Apropos from '../pages/Apropos.jsx';
import Annonces from '../pages/Annonces.jsx';
import Erreurs from '../pages/Erreurs.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'apropos',
        element: <Apropos />,
      },
      {
        path: 'annonces/:id',
        element: <Annonces />,
      },
      {
        path: '*',
        element: <Erreurs />,
      },
      {
        path: 'Erreur',
        element: <Erreurs />,
      },
    ],
  },
]);

export default router;
