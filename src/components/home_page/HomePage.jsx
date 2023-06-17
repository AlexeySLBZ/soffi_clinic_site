import "./homePage.css"
import Promotions from "../promotions/Promotions";
function HomePage() {

  return (
    <main className="homePage__content">
      <section>
        <Promotions/>
      </section>
    </main>
  );
}

export default HomePage;
