

export default function AboutPage(){
  return(
    <>
      <div id="aboutpage-container">
      <div id='aboutpage-info'>
      <div id="pizza">
        <img src={require('../assets/aboutpagepizza.jpg')} alt="fresh pizza" />
       </div>
      <div id="aboutpage-text">
        <h2>The Oven's Edge</h2>
        <h4>The perfect place to enjoy a fresh slice of pizza.</h4>
        <p>
        The Oven's Edge Pizzaria is a traditional Italian pizzaria venue, serving the best dishes and drinks from across the range of Italian cuisines. A definitive neighborhood joint in Davis Square, The Oven's Edge offers a laid-back dining experience in a casual setting to guests from all walks of life. Honest food and honest drinks set the foundation of our place's menu!
        </p>
        </div >
      </div>


      <div id="aboutfounded-container"> 
    
      <div id="aboutfounded-content">
            <h1>Founded in 2023</h1>
            <p>The Oven's Edge, a recently launched pizzeria,<br/>  is thrilled to embark on its inaugural year of serving <br/>the community with mouthwatering pizza creations.</p>
        </div>
        <div className='aboutfounded-image'>
          <img src={require('../assets/aboutpagesteaing.jpg')} alt='seating for restaurant'/>
        </div>
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

      <div id='aboutpage-contact'>
        <div>
        <div id="aboutContact-container"> 
    
        <div id="aboutContact-content">
          <p>"We're hiring new culinary talents all the time! If you want to become a part <br/> of our culinary family and you have at least 6 months of prior experience <br/>of working at a restaurant, then contact us today!"</p>
          <button>Contact</button>
        </div>
      </div>
        </div>
      </div>
    </div>
    
    </>
  );
}