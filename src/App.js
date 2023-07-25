import Homepage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import FooterCard from './Components/FooterCard';
import ContactPage from './Pages/ContactPage';
import MainMenuPage from './Pages/MainMenuPage';
import './App.css';
import StarterPage from './Pages/StarterPage';
import MainCoursePage from './Pages/MainCoursePage';
import DrinksPage from './Pages/DrinksPage';
import DessertPage from './Pages/DessertPage';
import AboutPage from './Pages/AboutPage';
import router from './Router';
import { RouterProvider, Outlet } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
     
        <Outlet />
     
      {/* <AboutPage /> */}
      {/* <DessertPage /> */}
      {/* <DrinksPage /> */}
      {/* <MainCoursePage /> */}
      {/* <StarterPage /> */}
      {/* <MainMenuPage /> */}
      {/* <ContactPage /> */}
      {/* <Homepage /> */}
      <footer>
       <FooterCard />
      </footer>
    </div>
  );
}

export default App;
