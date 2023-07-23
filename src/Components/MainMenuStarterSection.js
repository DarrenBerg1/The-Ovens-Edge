

export default function Starters(){
  return(
    <>
    <div id="starter-container">
      
      <div className="image-side">
        <img src={require('../assets/mainMenuBread.jpg')} alt='Starters' />
      </div>
      <div className="text-side">
        <h1>Starters</h1>
        <p>The start of any meal is so important...<br/>So brace your appetite, while waiting for your main course.<br/> Our diverse and delicious appetizers will help you with that!</p>
        <button id='menu-button'>See Menu</button>
      </div>
    </div>
    </>
  );
}