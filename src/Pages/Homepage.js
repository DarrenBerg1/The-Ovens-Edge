import ProductCard from '../Components/ProductCard';
import HomeCard from '../Components/HomeCard';
import AboutCard from '../Components/AboutCard';
import FoundedCard from '../Components/FoundedCard';
import ReviewCard from '../Components/ReviewCard';
import {Button} from 'react-bootstrap';

export default function Homepage() {
  return (
    <>
    <div>
      <section>

        <HomeCard />

      </section>
      <section >

        <AboutCard />

      </section>
        
      <section >

        <FoundedCard/>

      </section>

      <section id="menu-container">
          <h2>Menu</h2>  
          <ProductCard />
          <Button >SEE MENU</Button>
      </section>

      <section>
        <ReviewCard />
      </section>
    </div>
    
    </>
  );
}