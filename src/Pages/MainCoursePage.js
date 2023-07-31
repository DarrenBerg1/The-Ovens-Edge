export default function MainCoursePage(){
  return(
    <>
    <div id="menupages-container">
      <div className="maincourse-image">
        <div className="menupages-header">
        <p>Main Courses</p>
      </div>
      </div>
      <div className="menupages-menu">
        <div className="menu-left">
         <div className="items">
         <p>Pepperoni Pizza </p><p>$10.00</p>
        </div> 
        <div className="items">
        <p>Margharitta Pizza</p><p>$9.00</p>
        </div> 
        <div className="items">
        <p>Bolonaise Sphaghetti</p><p>$12.00</p>
        </div> 
        <div className="items">
        <p>Chicken Alfredo</p><p>$8.00</p>
        </div>
        </div>
        <div className="menu-right">
        <div className="items">
        <p>Creamy Salmon Pasta</p><p>$14.00</p>
        </div> 
        <div className="items">
        <p>Pepperoni Calzone</p><p>$15.00</p>
        </div> 
        <div className="items">
        <p>Pineapple Pizza</p><p>$9.00</p>
        </div> 
        <div className="items">
        <p>Vegetarian Pizza</p><p>$8.00</p>
        </div> 

        </div>
      </div>
      <button>Back</button>
    </div>
    </>
  );
}