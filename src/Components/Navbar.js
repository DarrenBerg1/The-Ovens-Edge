import { useNavigate } from 'react-router-dom';

export default function Navbar(){

const navigate = useNavigate();


  return (
    <>
    <div id='navbar-container'>
      <div id='logo'>
      <h1>The Oven's Edge</h1>
     </div>
     <div className="navbar">
      <ul id='nav-links'>
        <li>
        <a href='/'>Home</a>
        </li>
        <li>
        <a href='#/about'>About</a>
        </li>
        <li>
        <a href='#/menu'>Menu</a>
        </li>
        <li>
        <a href='#/contact'>Contact</a>
        </li>
      </ul>
      <button id='nav-btn' onClick={() => navigate('/reservation')}>Reservation</button>
      </div>
    </div>
    
    </>
  );
}