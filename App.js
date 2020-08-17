import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Components/HomePage.js";
import MenuPage from "./Components/MenuPage";
import ContactPage from "./Components/ContactPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/MenuPage" component={MenuPage} />
          <Route path="/ContactPage" component={ContactPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
