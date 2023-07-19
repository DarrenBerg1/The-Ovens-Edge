

export default function Homepage() {
  return (
    <>
    <div>
      <section id='home-info'>
        <h3>Welcome to</h3>
        <h1>The Oven's Edge</h1>
        <p>Alexandria, 32 Washington str, 22303</p>
        <p>Opening Hours: Mon-Fri 11:00-22:00 Sat-Sun 13:00-00:00</p>
        <p>Call: (713)800-0000</p>
      </section>
      <section id='about-info'>
        <div id="about-text">
        <h2>The Oven's <br/>Edge Pizzaria</h2>
        <h4>The perfect place to enjoy a fresh slice of pizza.</h4>
        <p>
        The Oven's Edge Pizzaria is a traditional Italian pizzaria venue, serving the best dishes and drinks from across the range of Italian cuisines. A definitive neighborhood joint in Davis Square, The Oven's Edge offers a laid-back dining experience in a casual setting to guests from all walks of life. Honest food and honest drinks set the foundation of our place's menu!
        </p>
        </div>
        <div id="moscow">
        <img src={require('../assets/moscow.jpg')} alt="Hawaiian Pizza" />
        <img src={require('../assets/salad.jpg')} alt="Hawaiian Pizza" />
        </div>
        <div>
        <img src={require('../assets/aboutinfopizza.jpg')} alt="Hawaiian Pizza" id="hawaiian-pizza"/>
        </div>

      </section>
    </div>
    
    </>
  );
}