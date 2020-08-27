import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Children from './components/Children/Children'
import Inicio from './components/Inicio/Inicio'
import Adulto from './components/Adultos/Adultos'
import Navbar from './components/Nav/Navbar';
import IndexOfChildren from './components/IndexOfChildren/index';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
        <Route path="/Colorear"> 
        <IndexOfChildren />    
          </Route>
          <Route path="/Niños">
            <IndexOfChildren />    
          </Route>
          <Route path="/Adulto">
            <Adulto/>
          </Route>
          <Route path="/Menu">
            <Navbar/>
          </Route>
          <Route path="/">
            <Inicio/>      
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
