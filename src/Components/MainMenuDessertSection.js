

export default function Desserts(){
  return(
    <>
    <div id="starter-container">
      
      <div className="image-side">
        <img src={require('../assets/mainMenuDessert.jpg')} alt='Desserts' />
      </div>
      <div className="text-side">
        <h1>Desserts</h1>
        <p>That sweet taste of a dessert at the end of the meal...<br/>If you look forward to it too, then you're at the right place!<br/> Our menu has prolific choice of desserts. It can make even <br/>the most picky sweet tooth person happy!</p>
        <button id='menu-button'>See Menu</button>
      </div>
    </div>
    </>
  );
}