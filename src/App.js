import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App= ()=> {
  return (
    <div className="App">
        <Router>
            <Header />
          <Switch>

          <Route path="/" exact>
                  <Home />
              </Route>
          <Route path="/details" exact>
                  <Details />
              </Route>
             
              
          </Switch>
        </Router> 
         
    </div>
  );
}

export default App;
