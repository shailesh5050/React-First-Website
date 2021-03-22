import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Navabr from './Navbar';
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
    <>
     <Navabr />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/service' component={Service} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
    </Switch>
    </>
  );
}

export default App;
