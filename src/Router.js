import App from "./App";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import MainMenuPage from "./Pages/MainMenuPage";
import AboutPage from "./Pages/AboutPage";
import {createHashRouter} from 'react-router-dom';


const router =  createHashRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      { 
        path: '/menu',
        element: <MainMenuPage />
      }
    ]
  }
]);

export default router;
