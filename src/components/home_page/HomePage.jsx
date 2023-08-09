import "./homePage.css"
import Promotions from "../promotions/Promotions.jsx";
import {useEffect} from "react";

function HomePage(contact) {

  useEffect(()=> {
    const element = document.getElementById(contact.contact);
    return element.scrollIntoView(false);
  },[contact])

  return (
    <main className="homePage__content" id='Главная'>
      <section>
        <Promotions/>
      </section>
    </main>
  );
}

export default HomePage;
