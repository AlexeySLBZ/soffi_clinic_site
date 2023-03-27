import './App.css';
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Foter";

function App() {
  return (
    <div className="App">
      <Header/>
      <Body style={{"padding-top":"50hv"}}/>
      <Footer/>
    </div>
  );
}
export default App;
