

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
      <button id='nav-btn'>Reservation</button>
      </div>
    </div>
    
    </>
  );
}