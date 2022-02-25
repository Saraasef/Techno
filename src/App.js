import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Switch, Redirect } from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/service' component={Service}/>
      <Route exact path='/contact' component={Contact}/>
      <Redirect to='/'/>
    </Switch>
    <br/>
    <Footer />
    </>
    
    
  );
}

export default App;
