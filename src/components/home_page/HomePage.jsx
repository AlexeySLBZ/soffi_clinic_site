import "./homePage.css"
import CarouselSlider from "../carousel/CarouselSlider";
function HomePage() {

  return (
    <main className="homePage__content">
      <section>
        <CarouselSlider/>
      </section>
    </main>
  );
}

export default HomePage;
