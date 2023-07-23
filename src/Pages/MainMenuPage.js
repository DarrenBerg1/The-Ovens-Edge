import MainMenuStarterSection from '../Components/MainMenuStarterSection';
import MainCourse from '../Components/MainMenuMainCourseSection';
import Desserts from '../Components/MainMenuDessertSection';
import Drinks from '../Components/MainMenuDrinkSection';


export default function MainMenu(){
  return (
    <>
    <section>
      <MainMenuStarterSection />
    </section>
    <section>
      <MainCourse />
    </section>
    <section>
      <Desserts />
    </section>
    <section>
      <Drinks />
    </section>
    </>
  );
}