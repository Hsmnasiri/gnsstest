import React from 'react';
import './App.css';
import NavBar from './Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Map from './pages/Map';
import Contact from './pages/Contact';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Setting from './pages/Setting';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/about" component={About} />
        <Route path="/map" component={Map} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/setting" component={Setting} />
      </Switch>
    </Router>
  );
}

export default App;
