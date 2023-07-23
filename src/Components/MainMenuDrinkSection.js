





export default function Drinks(){
  return(
    <>
    <div id="starter-container">    
      <div className="text-side">
        <h1>Drinks</h1>
        <p>
        Refresh yourself while enjoying a flavorsome dinner<br/> or a lunch at our place. We at The Oven's Edge <br/>offer different beverages as well as spirits, and liquors!
        </p>
        <button id='menu-button'>See Menu</button>
      </div>
      <div className="image-side">
        <img src={require('../assets/mainMenuDrinks.jpg')} alt='Drinks' />
      </div>
    </div>
    </>
  );
}