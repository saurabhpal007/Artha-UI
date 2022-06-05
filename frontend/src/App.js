
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './components/Home';
import Home from './components/Home';
import Add from './components/Add';
import Card from './components/Card';
import BrandPage from './components/BrandPage';
import Greeter from './components/Greeter';
import NewHome from './components/NewHome';

const App = () => {
  // Render Methods
  const renderNotConnectedContainer = () => (
    <button className="cta-button connect-wallet-button">
      Connect to Wallet
    </button>    
  );

  // Add components in the component folder

  return (
    <Router>      
      <div> {<NewHome></NewHome>} </div>     
    </Router>  

  );
};

export default App;
