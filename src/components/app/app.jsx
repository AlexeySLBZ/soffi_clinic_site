import './App.css';
import Header from "../header/Header.jsx";
import Body from "../body/Body.jsx";
import Footer from "../footer/Foter.jsx";
import React, {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import {AuthRoutes} from "../../routers/authRout";

function App() {
    const [authorized, setAuthorized] = useState(false)

    return (
        <React.StrictMode>
            <BrowserRouter>
                <AuthRoutes.Provider value={{authorized, setAuthorized}}>
                    <div className="App">
                        <Header/>
                        <Body/>
                        <Footer/>
                    </div>
                </AuthRoutes.Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}
export default App;
