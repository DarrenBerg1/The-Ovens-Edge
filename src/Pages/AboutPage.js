import FoundedCard from '../Components/FoundedCard';
import AboutCard from '../Components/AboutCard';

export default function AboutPage(){
  return(
    <>
    
    <div id="about-container">
      <div>
      <AboutCard />
      </div>
      <div>
        <FoundedCard />
      </div>

      <div id='standards-container'>
        <h1>Our Standards</h1>
      <div className='listOfStandards'>
        <div>
          <h2>Casually Italian</h2>
          <p>With our menu being centered around the casual Italian <br/> pizzaria, we not only serve pizza, but also pasta, calzones <br/>and other italian specialties...</p>
        </div>
        <div>
        <h2>American Comfort</h2>
          <p>Despite being an Italian restaurant, visiting our place <br/> feels just as casual as any traditional American restaurant <br/>would feel...</p>
        </div>
        <div>
        <h2>Event-friendly</h2>
          <p>If you're considering celebrating a personal or a business <br/>occasion at our restaurant, all of our 3 big dining tables <br/>will be ready for you!</p>
        </div>
      </div>
      </div>
    </div>
    
    </>
  );
}