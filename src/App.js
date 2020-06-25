import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landing-page/landing-page.component";
import HomePage from "./pages/home-page/home-page.component";
import Navbar from "./components/navbar/navbar.component";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
