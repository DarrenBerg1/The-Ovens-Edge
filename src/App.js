import Homepage from './Pages/Homepage';
import Navbar from './Components/Navbar';
import FooterCard from './Components/FooterCard';
import ContactPage from './Pages/ContactPage';
import MainMenuPage from './Pages/MainMenuPage';
import './App.css';
import StarterPage from './Pages/StarterPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <StarterPage />
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
