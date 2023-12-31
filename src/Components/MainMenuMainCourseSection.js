import { useNavigate } from 'react-router-dom';


export default function MainCourse(){
const navigate = useNavigate();

  return(
    <>
    <div id="starter-container">
      <div className="text-side">
        <h1>Main Courses</h1>
        <p>The Oven's Edge menu knows no borders. <br/>So whether you'll pick a meat,fish or vegetarian  <br/>main course, we are certain that it will be universally good!</p>
        <button id='menu-button' onClick={() => navigate('/mainmenu')}>See Menu</button>
      </div>
      <div className="image-side">
      <img src={require('../assets/mainMenuPizza.jpg')} alt='Main Course' />
      </div>
    </div>  
    
    </>
  );
}