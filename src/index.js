import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import {AuthRoutes} from "./routers/authRout";

function Main (){
  const [authorized, setAuthorized] = useState(false)

  return(
    <React.StrictMode>
      <BrowserRouter>
        <AuthRoutes.Provider value={{authorized, setAuthorized}}>
          <App />
        </AuthRoutes.Provider>
      </BrowserRouter>
    </React.StrictMode>

  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Main/>
);

