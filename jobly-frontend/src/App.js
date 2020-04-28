import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Routes from './Routes';
import Navigation from './Navigation';

function App() {
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
