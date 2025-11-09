import {
  createBrowserRouter,
  Form,
} from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Apropos from "../pages/Apropos.jsx";

const router = createBrowserRouter([  
  {
    path: "/",
    element: <App />,
     children: [
       {
         path: "home",
         element: <Home />,
       },
         {
         path: "apropos",
         element: <Apropos />,
       },
     ],
  },
]);



export default router;