import React from 'react';
import './style.css';
import About from './About';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';
export default function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <About />
      </Route>
      <Route path="/contact" exact>
        <Contact />
      </Route>
      <Route />
    </Switch>
  );
}
