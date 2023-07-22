


export default function reviews() {
  return(
    <div id="review-container"> 
      
    <div id="review-content">
    <h1>Our Visitors Love <br/>Our Food!</h1>
    <div id='profile-container'>

      <div className='review-profile'>
      <img src={require('../assets/manreview.jpg')} alt='man headshot'/>
      <p>"I really enjoyed the Pepperoni pizza,<br/> and the dessert was amazing as well.</p>
      </div>
      
      <div className='review-profile'>
      <img src={require('../assets/womenreview.jpg')} alt='women headshot'/>
      <p>"The Oven's Edge staff is very polite <br/>and the food was great!"</p>
      
      </div>  
    </div>    
      </div>
  </div>


  );
}