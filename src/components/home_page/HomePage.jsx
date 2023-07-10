import "./homePage.css"
import Promotions from "../promotions/Promotions";
import {useEffect} from "react";
function HomePage() {

  // useEffect(()=> {
  //   const element = document.getElementById('Главная');
  //   return element.scrollIntoView(false);
  // },[])

  return (
    <main className="homePage__content" id='Главная'>
      <section>
        <Promotions/>
      </section>
    </main>
  );
}

export default HomePage;
