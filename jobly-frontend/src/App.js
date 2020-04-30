import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Routes from './Routes';
import Navigation from './Navigation';

function App() {
  // const [userToken, setUserToken] = useState("");

  // useEffect(() => {
  //   // setUserToken(localStorage.getItem("_token"));
  //   localStorage._token == true ? setUserToken(localStorage.getItem("_token")) : setUserToken("");
  //   console.log(`\n\n\n The value of userToken is `, userToken);
  //   console.log(`\n\n\n The value of localStorage._token is `, localStorage._token);
  // }, [localStorage, setUserToken]);


  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <div>
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
