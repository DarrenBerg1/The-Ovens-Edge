import Navbar from './Components/Navbar';
import FooterCard from './Components/FooterCard';
import './App.css';
import { Outlet } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
        <Outlet />
      <footer>
       <FooterCard />
      </footer>
    </div>
  );
}

export default App;
