import ProductCard from '../Components/ProductCard';
import HomeCard from '../Components/HomeCard';
import AboutCard from '../Components/AboutCard';
import FoundedCard from '../Components/FoundedCard';
import ReviewCard from '../Components/ReviewCard';
import {Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {

const navigate = useNavigate();


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
          <Button onClick={() => navigate('/menu')}>SEE MENU</Button>
      </section>

      <section>
        <ReviewCard />
      </section>
    </div>
    
    </>
  );
}