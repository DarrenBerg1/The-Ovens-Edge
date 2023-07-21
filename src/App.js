import Homepage from './Pages/Homepage';
import Navbar from './Components/Navbar';
import FooterCard from './Components/FooterCard';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Homepage />
      <footer>
       <FooterCard />
      </footer>
    </div>
  );
}

export default App;
