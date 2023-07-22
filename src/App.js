import Homepage from './Pages/Homepage';
import Navbar from './Components/Navbar';
import FooterCard from './Components/FooterCard';
import ContactPage from './Pages/ContactPage';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <ContactPage />
      {/* <Homepage /> */}
      <footer>
       <FooterCard />
      </footer>
    </div>
  );
}

export default App;
