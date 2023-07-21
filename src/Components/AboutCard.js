

export default function aboutCard(){
  return (
    <div id='about-info'>
      <div id="about-text">
        <h2>The Oven's <br/>Edge Pizzaria</h2>
        <h4>The perfect place to enjoy a fresh slice of pizza.</h4>
        <p>
        The Oven's Edge Pizzaria is a traditional Italian pizzaria venue, serving the best dishes and drinks from across the range of Italian cuisines. A definitive neighborhood joint in Davis Square, The Oven's Edge offers a laid-back dining experience in a casual setting to guests from all walks of life. Honest food and honest drinks set the foundation of our place's menu!
        </p>
        </div>
        <div id="img-container">
        <div id="moscow">
        <img src={require('../assets/moscow.jpg')} alt="moscow mule" />
        <img src={require('../assets/salad.jpg')} alt="salad and pizza" />
        </div>
        <div id="hawaiian-pizza">
        <img src={require('../assets/aboutinfopizza.jpg')} alt="Margaritta Pizza" />
        </div>
        </div>
    </div>

  );
}