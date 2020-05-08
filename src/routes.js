import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skills';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';


export default function Routes(){
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />;
        <Route path="/about" component={About} />;
        <Route path="/skills" component={Skill} />;
        <Route path="/contact" component={Contact} />;
      </Switch>
    </BrowserRouter>
  );
}