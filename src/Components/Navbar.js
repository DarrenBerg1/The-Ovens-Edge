

export default function Navbar(){
  return (
    <>
    <div id='navbar-container'>
      <div id='logo'>
      <h1>The Oven's Edge</h1>
     </div>
     <div className="navbar">
      <ul id='nav-links'>
        <li>
        <a href='#'>Home</a>
        </li>
        <li>
        <a href='#'>Menu</a>
        </li>
        <li>
        <a href='#'>Contact</a>
        </li>
      </ul>
      <button id='nav-btn'>Reservation</button>
      </div>
    </div>
    
    </>
  );
}