import App from "./App";
import HomePage from './Pages/HomePage';
import ContactPage from "./Pages/ContactPage";
import MainMenuPage from "./Pages/MainMenuPage";
import AboutPage from "./Pages/AboutPage";
import {createHashRouter} from 'react-router-dom';
import MainCoursePage from './Pages/MainCoursePage';
import StarterPage from './Pages/StarterPage';
import DessertPage from './Pages/DessertPage';
import DrinksPage from './Pages/DrinksPage';
import ReservationForm from './Components/ReservationForm';




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
      },
      {
        path: '/mainmenu',
        element: <MainCoursePage />
      },
      {
        path: '/startermenu',
        element: <StarterPage />
      },
      {
        path: '/dessertmenu',
        element: <DessertPage />
      },
      {
        path: '/drinkmenu',
        element: <DrinksPage />
      },
      {
        path: '/reservation',
        element: <ReservationForm />
      }
    ]
  }
]);

export default router;
